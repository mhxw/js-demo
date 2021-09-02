<template>
  <div class="indexHome" >
    <div class="MessageBoxHome" v-show="loading">
      <div class="MessageBoxIndex">
        <div class="BoxLoading">
          <img class="logoImg" src="../assets/img/logo1.png" alt/>
          <div v-show="flag3" class="box box1">
            <img src="../assets/img/fail.png" alt/>
            <span v-text="$t('message.text1')">交易被拒绝</span>
            <button class="buttonLoading" @click="againTry()" v-text="$t('message.text2')">再试一次</button>
          </div>
          <div v-show="flag2" class="box box2">
            <img src="../assets/img/loading.gif" alt/>
            <a :href="url" target="_blank">
              <button class="buttonLoading" v-text="$t('message.text3')">查看交易</button>
            </a>
          </div>
          <div v-show="flag1" class="box box3">
            <img src="../assets/img/loading.gif" alt/>
            <button class="buttonLoading" v-text="$t('message.text04')">交易确认中...</button>
          </div>
          <img
              style="cursor:pointer"
              @click="closeMengceng()"
              class="deleteImg"
              src="../assets/img/delete.png"
              alt
          />
        </div>
      </div>
    </div>
      <el-row>
        <el-col :span="12" style="margin:50px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div style="text-align:center;margin: 0 auto;">
            <el-button type="success" round @click="centerDialogVisible = true" >{{ addressMsg }}</el-button>
            <el-button type="success" v-show="networkId===-1" round @click="addNetwork(`BHPTest`)" >添加并切换到 BHP Testnet</el-button>
            <el-button type="success" v-show="networkId===-1" round @click="addNetwork(`BSCTest`)" >添加并切换到 BSC Testnet</el-button>
            <el-button type="success" v-show="networkId!==-1" round @click="openAndClose" >退出钱包</el-button>
            <el-button type="success" v-show="networkId!==-1" round @click="$refs.son.updatePanel()" >刷新数据</el-button>
            <el-dropdown split-button round type="success" style="margin-left: 12px;" v-show="networkId!==-1">
              切换网络
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-show="networkId!==3476" ><span @click="addNetwork(`BHPTest`)">BHP 测试网</span></el-dropdown-item>
                <el-dropdown-item v-show="networkId!==97" ><span @click="addNetwork(`BSCTest`)">BSC 测试网</span></el-dropdown-item>
                <el-dropdown-item v-show="networkId!==56" ><span @click="addNetwork(`BSC`)">BSC 主网</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <br/>
            <br/>
            操作地址：{{ OperationAddress }} 当前网络：<el-tag type="success">{{networkId | toDesc}}</el-tag>
          </div>
        </el-col>
        <el-dialog
            title="选择一个钱包"
            :visible.sync="centerDialogVisible"
            width="360px"
            center>
          <span>
            <div style="background-color: #f4f7f8;border-radius: 16px;height: 60px;min-width: 300px">
              <img style="width: 35px;height: 35px;margin-left: 24px;padding-top: 15px;float: left;" src="../assets/img/MetaMask.png" alt/>
              <span style="margin-left: 12px;font-size: 18px;margin-top: 21px;float: left;font-weight: 500;line-height: 22px;">
                MetaMask
              </span>
              <el-button style="margin-right: 16px;margin-top: 12px;float: right;" type="success" @click="linkWallet()"  round plain>连接</el-button>
            </div>
          </span>
        </el-dialog>
      </el-row>
      <div>
        <router-view ref="son"/>
      </div>
    </div>
</template>

<script>
import {mapMutations} from "vuex";
import {connectWallet, disconnectWallet} from "@/web3/index";
import {connectNetwork} from "../web3/wallet";
export default {
  data() {
    return {
      centerDialogVisible: false,
      flag1: false,
      flag2: false,
      flag3: false,
      loading: false,
      url: "",
      OperationAddress: "",
      networkId: -1,
      activeIndex: "/",
      screenWidth: "",
      addressMsg: "连接钱包",
      hide: false,
      show: false,
      show1: false,
      msg: "Google Chrome is recommended",
      msg1: "Please connect your wallet first",
      msg2: "Please enter the amount",
      msg3: "Insufficient balance",
      options: [],
      selectValue: ""
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      }
    }
  },
  created() {
    this.selectValue = "cn";
    this.activeIndex = location.pathname; //下标刷新不变,history模式下
    switch (localStorage.getItem("lang")) {
      case "cn":
        this.msg = "推荐使用Google Chrome浏览器";
        this.msg1 = "请先连接钱包";
        this.msg2 = "请输入金额";
        this.msg3 = "余额不足";
        this.addressMsg = "连接钱包";
        break;
      default:
        this.msg = "推荐使用Google Chrome浏览器";
        this.msg1 = "请先连接钱包";
        this.msg2 = "请输入金额";
        this.msg3 = "余额不足";
        this.addressMsg = "连接钱包";
        break;
    }
  },
  methods: {
    ...mapMutations(["updateWallet", "updateAddress", "clearWallet", "updateNetworkId"]),
    openAndClose() {
      disconnectWallet(
          this.$store.state.wallet.web3,
          data => {
          }
      ).then(async () => {
        this.addressMsg = "连接钱包";
        this.OperationAddress = '';
        this.networkId = -1;
        this.options = []
        this.clearWallet();
        this.show1 = false;
        this.hide1 = true;
      });
    },
    closeMengceng() {
      this.loading = false;
    },
    getErrorInfo(err) {
      console.log(err.toString())
      if (err.code === 4001) {
        this.info.result = "操作已取消"
      } else if (
          err.toString().indexOf("Error: Internal JSON-RPC error.") !== -1
      ) {
        let result = JSON.parse(
            err.toString().replace("Error: Internal JSON-RPC error.", "")
        );
        if (result.code === 3) {
          if (
              result.message.toString().indexOf("execution reverted: Status error") !== -1
          ) {
            this.info.result = "状态错误，请到首页刷新重试";
          } else if (
              result.message.toString().indexOf("execution reverted: ERC20: transfer amount exceeds balance") !== -1
          ) {
            this.info.result = "余额不足";
          } else if (
              result.message.toString().indexOf("execution reverted: ERC20: transfer amount exceeds allowance") !== -1
          ) {
            this.info.result = "授权额度不足或未授权";
          } else {
            this.info.result = result;
          }
        }else {
          this.info.result = result;
        }
      } else {
        this.info.result = err.toString();
      }
      this.info.title = "错误提示"
      this.dialogResultVisible = true
    },
    againTry() {
      this.loading = false;
    },
    // 连接钱包
    async linkWallet() {
      if (this.$store.state.wallet.connected) {
        disconnectWallet(this.$store.state.wallet.web3,(data => {})).then(async () => {
          this.show1 = false;
          this.clearWallet();
          await connectWallet(this);
        });
      } else {
        this.show1 = false;
        await connectWallet(this);
      }
      this.centerDialogVisible=false
    },
    addNetwork(networkName){
      console.log(networkName)
      connectNetwork(networkName)
    },
    // 改变更新数据
    changeUpdate() {
      if (this.$store.state.wallet.connected) {
        console.log('启动' + this.$store.state.wallet.networkId)
        if (!(this.$store.state.wallet.networkId === 3476 || this.$store.state.wallet.networkId === 6779 || this.$store.state.wallet.networkId === 56 || this.$store.state.wallet.networkId === 97)) {
          this.$notify.error({
            title: '错误',
            message: '错误的网络：请使用BHP主网或测试网'
          });
          return
        }

        this.OperationAddress = this.$store.state.wallet.address
        this.networkId = this.$store.state.wallet.networkId
        this.addressMsg = this.$store.state.wallet.address.substr(0, 5)+"***"+this.$store.state.wallet.address.substr(39, 3)
        this.options = this.$store.state.wallet.addressList
      }
    }
  },
  filters:{
    toDesc(networkId){
      if (networkId===3476){
        return "BHP Testnet"
      }else if (networkId===97){
        return "BSC Testnet"
      }else if (networkId===56){
        return "BSC Mainnet"
      }else if (networkId===-1){
        return "-1"
      }else{
        return "切换网络"
      }
    },
    formatTime:(time)=>{
      return new Date(parseInt(time) * 1000).toLocaleString();
    }
  },
  updated() {
    if (this.$store.state.wallet.connected) {
      //this.changeUpdate();
    }
  },
};
</script>

<style lang="less">

.MessageBoxHome {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1002;
}
.MessageBoxIndex {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.BoxLoading {
  width: 458px;
  height: 621px;
  box-sizing: border-box;
  background: url("../assets/img/traLoading.png") no-repeat;
  padding-left: 32px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 375px;
  height: 310px;

}
.box img {
  width: 88px;
  height: 88px;
  margin: 60px 0 20px;
}

.box span {
  height: 44px;
  font-size: 24px;
  font-weight: 400;
  color: #ff3d3d;
  line-height: 44px;
}

.box3 button {
  background: #ff9900;
  opacity: 0.39;
}

.box2,.box3 img {
  width: 100px;
  height: 100px;
}

.logoImg {
  width: 265px;
  height: 65px;
  padding-top: 92px;
  padding-bottom: 40px;
}

.buttonLoading {
  width: 375px;
  height: 50px;
  margin-top: 44px;
  background: #ff9900;
  border-radius: 31px;
  font-size: 24px;

  font-weight: 400;
  color: #ffffff;
  border: none;
  padding: 0;
  outline: none;
}

.deleteImg {
  width: 23px;
  height: 23px;
  position: absolute;
  bottom: 23px;
  right: 203px;
}

.selectWalletDiv span {
  padding: 52px 0 20px 0;
  height: 28px;
  font-size: 20px;

  font-weight: 400;
  color: #1a1a1a;
  line-height: 28px;
}

.imgDiv img {
  width: 40px;
}
</style>