<template>
  <div class="indexHome" >
    <el-dialog
        :visible.sync="loading"
        width="35em"
        center>
      <el-result  title="交易详情" v-show="flag2">
        <template slot="icon">
          <el-image :src="require('../assets/img/loading.gif')" style="width: 4.5rem;height: 4.5rem;"></el-image>
        </template>
        <template slot="extra">
          <el-link type="success" :href="url"  target="_blank" >查看交易</el-link>
        </template>
      </el-result>
      <el-result title="交易详情" v-show="flag1">
        <template slot="icon">
          <el-image :src="require('../assets/img/loading.gif')" style="width: 4.5rem;height: 4.5rem;"></el-image>
        </template>
        <template slot="extra">
          <span >交易确认中...</span>
        </template>
      </el-result>
      <el-result icon="error" title="交易详情" v-show="flag3">
        <template slot="extra">
          <span >交易被拒绝</span>
          <button class="buttonLoading" @click="againTry()">再试一次</button>
        </template>
      </el-result>
    </el-dialog>
    <el-row>
        <el-col :span="12" style="margin:1.5em auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
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
import {connectWallet, disconnectWallet} from "@/utils/web3/index";
import {connectNetwork} from "../utils/web3/wallet";
import {address} from "../utils/configure/hashbank";
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
        await this.clearWallet();
        this.show1 = false;
        this.hide1 = true;
        this.$refs.son.addressInfo.current= {};
        return
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
          await this.clearWallet();
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
    async changeUpdate() {
      if (this.$store.state.wallet.connected) {
        console.log('启动' + this.$store.state.wallet.networkId)
        if (!(this.$store.state.wallet.networkId === 3476 || this.$store.state.wallet.networkId === 6779 || this.$store.state.wallet.networkId === 56 || this.$store.state.wallet.networkId === 97
            ||this.$store.state.wallet.networkId === 128||this.$store.state.wallet.networkId === 1||this.$store.state.wallet.networkId === 2)) {
          this.$notify.error({
            title: '错误',
            message: '错误的网络请使用正确网络'
          });
          this.openAndClose()
          return
        }
        this.$refs.son.switchNetwork();
        this.OperationAddress = this.$store.state.wallet.address
        this.networkId = this.$store.state.wallet.networkId
        this.addressMsg = this.$store.state.wallet.address.substr(0, 5)+"***"+this.$store.state.wallet.address.substr(39, 3)
        this.options = this.$store.state.wallet.addressList
      }else{
        console.log("未连接")
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
      }else if (networkId===128){
        return "Heco Mainnet"
      }else if (networkId===1){
        return "ETH Mainnet"
      }else if (networkId===2){
        return "Repsten Testnet"
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
</style>
