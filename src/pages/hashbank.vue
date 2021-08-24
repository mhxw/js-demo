<template>
  <div class="vault" style="margin: 20px 250px 50px 250px">
    <el-row :gutter="24">
      <!--   1.面板 -->
      <el-col :span="12" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>面板</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="updatePanel()" >刷新</el-button>
          </div>
          <el-form :inline="true" :model="panel" class="demo-form-inline">
            <span>BFIL价格：</span>
              {{ panel.filPrice }} U
            <el-divider direction="vertical"></el-divider>
            <span>USDT价格：</span>
              {{ panel.usdtPrice }} U
            <el-divider direction="vertical"></el-divider>
            <span>存款余额：</span>
              {{ panel.supplyBalance }}
            <el-divider direction="vertical"></el-divider>
            <span>借款余额：</span>
              {{ panel.borrowBalance }}
            <el-divider direction="vertical"></el-divider>
            <span>当前高度：</span>
              {{ panel.blockNumber }}
          </el-form>
        </el-card>
      </el-col>
      <!--   2.存取 -->
      <el-col :span="24" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>存取</span>
          </div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="资产：">
              BFIL
            </el-form-item>
            <el-form-item label="APY：">

            </el-form-item>
            <el-form-item label="余额：">

            </el-form-item>
            <el-form-item label="数量：">

            </el-form-item>
            <el-form-item>
              是否开启抵押：
              <el-switch
                  v-model="isEnterMarket"
                  active-text="开启"
                  inactive-text="关闭">
              </el-switch>
            </el-form-item>
            <el-button @click="openFilSupply()" type="success">存取</el-button>
          </el-form>
          <el-divider></el-divider>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="资产：">
              USDT
            </el-form-item>
            <el-form-item label="APY：">

            </el-form-item>
            <el-form-item label="余额：">

            </el-form-item>
            <el-form-item label="数量：">

            </el-form-item>
            <el-form-item label="">
            </el-form-item>
            <el-button @click="openUsdtSupply()" type="success">存取</el-button>
          </el-form>
        </el-card>
      </el-col>
      <!--   3.借还 -->
      <el-col :span="24" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>借还</span>
          </div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="资产：">
              USDT
            </el-form-item>
            <el-form-item label="APY：">
            </el-form-item>
            <el-form-item label="余额：">
            </el-form-item>
            <el-form-item label="数量：">
            </el-form-item>
            <el-button @click="openUsdtBorrow()" type="success">借还</el-button>
          </el-form>
        </el-card>
      </el-col>
      <!--   FIL存取 -->
      <el-dialog
          title="FIL"
          :visible.sync="filSupplyDialogVisible"
          width="30%"
          center>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="存款" name="first">
            <el-form label-position="top" label-width="80px" :model="supply">
              <el-form-item label="存款数量">
                <el-input v-model="supply.mintAmount" placeholder="请输入存款数量" clearable >
                  <el-button slot="prepend" @click="getBalance()">最大值</el-button>
                  <el-button slot="append">BFIL</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  {{'借款限额：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'限额已使用：'+supply.supplyAmount+' BFIL'  }}
                </div>
              </el-card>
              <el-card class="box-card">
                <div  class="text item">
                  {{'我的存款：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'钱包余额：'+supply.supplyAmount+' BFIL'  }}
                </div>
                <div  class="text item" >
                  {{'存款APY：'+supply.supplyAmount+' %'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="erc20Approve()">{{ supplyButton }}</el-button>
                <el-button type="success" @click="supplyToken()">存款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="取款" name="second">
            <el-form label-position="top" label-width="80px" :model="supply">
              <el-form-item label="取款数量">
                <el-input v-model="supply.redeemAmount">
                  <el-button slot="prepend" @click="getBalance()">安全最大值（80%）</el-button>
                  <el-button slot="append">BFIL</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  {{'借款限额：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'限额已使用：'+supply.supplyAmount+' BFIL'  }}
                </div>
              </el-card>
              <el-card class="box-card">
                <div  class="text item">
                  {{'我的存款：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'钱包余额：'+supply.supplyAmount+' BFIL'  }}
                </div>
                <div  class="text item" >
                  {{'存款APY：'+supply.supplyAmount+' %'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="redeemToken()">取款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
      <!--   USDT存取 -->
      <el-dialog
          title="USDT"
          :visible.sync="usdtSupplyDialogVisible"
          width="30%"
          center>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="存款" name="first">
            <el-form label-position="top" label-width="80px" :model="supply">
              <el-form-item label="存款数量">
                <el-input v-model="supply.mintAmount" placeholder="请输入存款数量" clearable >
                  <el-button slot="prepend" @click="getBalance()">最大值</el-button>
                  <el-button slot="append">BFIL</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  {{'借款限额：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'限额已使用：'+supply.supplyAmount+' BFIL'  }}
                </div>
              </el-card>
              <el-card class="box-card">
                <div  class="text item">
                  {{'我的存款：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'钱包余额：'+supply.supplyAmount+' BFIL'  }}
                </div>
                <div  class="text item" >
                  {{'存款APY：'+supply.supplyAmount+' %'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="erc20Approve()">{{ supplyButton }}</el-button>
                <el-button type="success" @click="supplyToken()">存款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="取款" name="second">
            <el-form label-position="top" label-width="80px" :model="supply">
              <el-form-item label="取款数量">
                <el-input v-model="supply.redeemAmount">
                  <el-button slot="prepend" @click="getBalance()">安全最大值（80%）</el-button>
                  <el-button slot="append">BFIL</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  {{'借款限额：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'限额已使用：'+supply.supplyAmount+' BFIL'  }}
                </div>
              </el-card>
              <el-card class="box-card">
                <div  class="text item">
                  {{'我的存款：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'钱包余额：'+supply.supplyAmount+' BFIL'  }}
                </div>
                <div  class="text item" >
                  {{'存款APY：'+supply.supplyAmount+' %'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="redeemToken()">取款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
      <!--   USDT借还 -->
      <el-dialog
          title="USDT"
          :visible.sync="usdtBorrowDialogVisible"
          width="30%"
          center>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="借款" name="first">
            <el-form label-position="top" label-width="80px" :model="supply">
              <el-form-item label="借款数量">
                <el-input v-model="supply.mintAmount" placeholder="请输入存款数量" clearable >
                  <el-button slot="prepend" @click="getBalance()">安全最大值（80%）</el-button>
                  <el-button slot="append">USDT</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  {{'借款限额：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'限额已使用：'+supply.supplyAmount+' BFIL'  }}
                </div>
              </el-card>
              <el-card class="box-card">
                <div  class="text item">
                  {{'我的存款：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'钱包余额：'+supply.supplyAmount+' BFIL'  }}
                </div>
                <div  class="text item" >
                  {{'存款APY：'+supply.supplyAmount+' %'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="erc20Approve()">{{ supplyButton }}</el-button>
                <el-button type="success" @click="supplyToken()">借款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="还款" name="second">
            <el-form label-position="top" label-width="80px" :model="supply">
              <el-form-item label="还款数量">
                <el-input v-model="supply.redeemAmount">
                  <el-button slot="prepend" @click="getBalance()">最大值</el-button>
                  <el-button slot="append">USDT</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  {{'借款限额：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'限额已使用：'+supply.supplyAmount+' BFIL'  }}
                </div>
              </el-card>
              <el-card class="box-card">
                <div  class="text item">
                  {{'我的存款：' +supply.supplyToken+' cBFIL' }}
                </div>
                <div  class="text item">
                  {{'钱包余额：'+supply.supplyAmount+' BFIL'  }}
                </div>
                <div  class="text item" >
                  {{'存款APY：'+supply.supplyAmount+' %'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="redeemToken()">还款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
    </el-row>
    <el-dialog
        :title="info.title"
        :visible.sync="dialogResultVisible"
        width="60%"
        center>
      {{ info.result }}
    </el-dialog>
  </div>
</template>

<script>
import {mint, viewPrice, redeem, balanceOf,getBlockNumber} from "../web3/hashbank";
import Decimal from 'decimal.js';
import {address,decimals} from "../configure/hashbank";
import {erc20Approval, erc20BalanceOf} from "../web3";
import {bhp,exp} from "../configure/conf";

export default {
  data() {
    return {
      activeName: 'first',
      filSupplyDialogVisible: false,
      usdtSupplyDialogVisible:false,
      dialogResultVisible: false,
      usdtBorrowDialogVisible:false,
      dialogWidth: 0,
      address: '',
      supplyButton: '授权',
      info:{
        title: '',
        result: '',
      },
      panel:{
        filPrice:0,
        usdtPrice:0,
        supplyBalance:0,
        borrowBalance:0,
        blockNumber:0,
      },
      supply: {
        borrowRate: '',
        mintAmount: 0,
        supplyToken: 0,
        supplyAmount: 0,
        redeemTokens:0,
        redeemAmount:0,

      },
      isEnterMarket: false,
    };
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  filters: {
    toBHP: (amount) => {
      let balance = new Decimal(amount)
      return balance.div(exp).toPrecision(18)
    },
    formatTime: (time) => {
      return new Date(parseInt(time) * 1000).toLocaleString();
    }
  },
  created() {
    if (this.$store.state.wallet.connected) {
    }
  },
  methods: {
    openFilSupply() {
      if (!this.verifyConnect()){
        return
      }
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.BFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.cBFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.cBFIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      this.filSupplyDialogVisible = true
    },
    openUsdtSupply() {
      if (!this.verifyConnect()){
        return
      }
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.BFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.cBFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.cBFIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      this.usdtSupplyDialogVisible = true
    },
    openUsdtBorrow() {
      if (!this.verifyConnect()){
        return
      }
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.BFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.cBFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.cBFIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      this.usdtBorrowDialogVisible = true
    },
    getSuccessInfo(result) {
      this.info.title = "成功提示"
      this.info.result = result
      this.dialogResultVisible = true
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
    verifyConnect()  {
      let wallet = this.$store.state.wallet;
      if (!wallet.connected) {
        alert("请先连接钱包");
        return false
      }
      return true
    },
    supplyToken() {
      if (!this.verifyConnect()){
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验


      //获取到存款数量之后转换为小单位wei
      let mintAmount=new Decimal(this.supply.mintAmount).times(new Decimal(Decimal.pow(10,decimals.BFIL))).toNumber().toString()
      this.verifyConnect()
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.filSupplyDialogVisible = false;
      mint(
          this.$store.state.wallet,
          mintAmount,
          address.bhp.cBFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.getSuccessInfo(res)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    redeemToken() {
      if (!this.verifyConnect()){
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验


      //获取到存款数量之后转换为小单位wei
      let redeemTokens=new Decimal(this.supply.supplyToken).times(Decimal.pow(10,decimals.cBFIL)).toNumber().toString()
      this.verifyConnect()
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.filSupplyDialogVisible = false;
      redeem(
          this.$store.state.wallet,
          redeemTokens,
          address.bhp.cBFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.getSuccessInfo(res)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    getBalance() {
      if (!this.verifyConnect()){
        return
      }
      balanceOf(
          this.$store.state.wallet,
          address.bhp.BFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.filSupplyDialogVisible = true
        this.supply.mintAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    erc20Approve() {
      if (!this.verifyConnect()){
        return
      }
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.filSupplyDialogVisible = false;
      erc20Approval(
          this.$store.state.wallet,
          address.bhp.BFIL,
          address.bhp.cBFIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.getSuccessInfo(res)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    updatePanel(){
      if (!this.verifyConnect()){
        return
      }
      this.viewPrice()
    },
    viewPrice() {
      viewPrice(
          this.$store.state.wallet,
          address.bhp.cBFIL,
       ).then(res => {
            let balance = new Decimal(res)
            this.panel.filPrice= balance.dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(4)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      viewPrice(
          this.$store.state.wallet,
          address.bhp.cUSDT,
      ).then(res => {
        let balance = new Decimal(res)
        this.panel.usdtPrice= balance.dividedBy(Decimal.pow(10,30)).toFixed(4)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      getBlockNumber(
          this.$store.state.wallet,
      ).then(res =>{
            this.panel.blockNumber=res
      }).catch(err=>{
        this.getErrorInfo(err)
      })
    },
  },
};
</script>
<style lang="less">
</style>