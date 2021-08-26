<template>
  <div class="vault" style="margin: 20px 200px 50px 200px">
    <el-row :gutter="24">
      <!--   1.面板 -->
      <el-col :span="12" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>面板</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="updatePanel()" >刷新</el-button>
          </div>
          <el-tabs type="border-card">
            <el-tab-pane label="平台">
              <el-descriptions  direction="vertical" :column="6" border size="medium">
                <el-descriptions-item label="BFIL资金池余额"> {{ panel.filTotalCash }} FIL</el-descriptions-item>
                <el-descriptions-item label="USDT资金池余额"> {{ panel.usdtTotalCash }} USDT</el-descriptions-item>
                <el-descriptions-item label="BFIL抵押因子"> {{ panel.filCollateralFactor }} </el-descriptions-item>
                <el-descriptions-item label="USDT抵押因子"> {{ panel.usdtCollateralFactor }} </el-descriptions-item>
                <el-descriptions-item label="USDT兑换率">{{ panel.usdtExchangeRate }}</el-descriptions-item>
              </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="节点">
              <el-descriptions  direction="vertical" :column="6" border size="medium">
                <el-descriptions-item label="当前高度">{{ panel.blockNumber }}</el-descriptions-item>
                <el-descriptions-item label="BFIL价格"> ${{ panel.filPrice }} </el-descriptions-item>
                <el-descriptions-item label="USDT价格"> ${{ panel.usdtPrice }} </el-descriptions-item>
              </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="合约">
              <el-descriptions  direction="vertical" :column="6" border size="medium">
                <el-descriptions-item label="USDT上次合约触发高度">{{ panel.accrualUsdtBlockNumber }}</el-descriptions-item>
                <el-descriptions-item label="FIL上次合约触发高度">{{ panel.accrualFilBlockNumber }}</el-descriptions-item>
                <el-descriptions-item label="USDT上次合约触发时的借款总额">{{ panel.totalBorrowsInfo }} USDT</el-descriptions-item>
                <el-descriptions-item label="USDT上次合约触发时的储备金">{{ panel.totalReservesInfo }} USDT</el-descriptions-item>
              </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="用户">
              <el-descriptions  direction="vertical" :column="6" border size="medium">
                <el-descriptions-item label="用户钱包中FIL余额">{{ panel.filBalance }} FIL</el-descriptions-item>
                <el-descriptions-item label="用户钱包中USDT余额">{{ panel.usdtBalance }} USDT</el-descriptions-item>
                <el-descriptions-item label="用户钱包中eFIL余额">{{ panel.efilBalance }} eFIL</el-descriptions-item>
                <el-descriptions-item label="用户钱包中eUSDT余额">{{ panel.eusdtBalance }} eUSDT</el-descriptions-item>
                <el-descriptions-item label="用户存款余额">{{ panel.supplyBalance }}</el-descriptions-item>
                <el-descriptions-item label="用户借款余额">{{ panel.borrowBalance }}</el-descriptions-item>
              </el-descriptions>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <!--   2.存取 -->
      <el-col :span="24" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>存取</span>
          </div>
          <el-descriptions size="medium" :column="2"  border>
            <el-descriptions-item label="资产">USDT</el-descriptions-item>
            <el-descriptions-item label="存款数量">{{ supplyUsdt.count }} USDT</el-descriptions-item>
            <el-descriptions-item label="存款金额">$ {{ supplyUsdt.balance }}</el-descriptions-item>
            <el-descriptions-item label="存款APY"> {{ panel.supplyApy }} % </el-descriptions-item>
            <el-descriptions-item label="操作">
              <el-button size="small" @click="openSupply(`USDT`)" type="success">存取</el-button>
            </el-descriptions-item>
          </el-descriptions>
          <el-divider></el-divider>
          <el-descriptions size="medium" :column="2" border>
            <el-descriptions-item label="资产">FIL</el-descriptions-item>
            <el-descriptions-item label="存款数量">{{ supplyFil.count }} FIL </el-descriptions-item>
            <el-descriptions-item label="存款金额">$ {{ supplyFil.balance }} </el-descriptions-item>
            <el-descriptions-item label="抵押状态">
              <el-switch
                  v-model="supplyFil.isEnterMarket"
                  disabled
              >
              </el-switch>
            </el-descriptions-item>
            <el-descriptions-item label="操作">
              <el-button size="small" @click="openSupply(`FIL`)" type="success">存取</el-button>
              <el-button size="small" @click="switchMarketStatus()" type="success">开启抵押</el-button>
              <el-button size="small" @click="switchMarketStatus()" type="success">关闭抵押</el-button>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
      </el-col>
      <!--   3.借还 -->
      <el-col :span="24" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>借还</span>
          </div>
          <el-descriptions size="medium" :column="2" border>
            <el-descriptions-item label="资产">USDT</el-descriptions-item>
            <el-descriptions-item label="借款数量">{{ borrowUsdt.count }} USDT</el-descriptions-item>
            <el-descriptions-item label="借款金额">$ {{ borrowUsdt.balance }} </el-descriptions-item>
            <el-descriptions-item label="借款APY">{{ panel.borrowApy }} % </el-descriptions-item>
            <el-descriptions-item label="操作">
              <el-button size="small" @click="openUsdtBorrow()" type="success">借还</el-button>
            </el-descriptions-item>
          </el-descriptions>
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
            <el-form label-position="top" label-width="80px" :model="supplyFil">
              <el-form-item label="存款数量">
                <el-input v-model="supplyFil.mintAmount" placeholder="请输入存款数量" clearable >
                  <el-button slot="prepend" @click="getSupplyBalance(`FIL`)">最大值</el-button>
                  <el-button slot="append">BFIL</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card">
                <div  class="text item">
                  {{'存款数量：'+ supplyFil.count+' FIL'  }}
                </div>
                <div  class="text item">
                  兑换率：1FIL ={{panel.filExchangeRate}} eFIL
                </div>
                <div  class="text item">
                  {{'钱包FIL数量：'+panel.filBalance+' FIL'  }}
                </div>
                <div  class="text item" >
                  {{'钱包eFIL数量：'+panel.efilBalance+' eFIL'  }}
                </div>
                <div  class="text item" >
                  {{'FIL资金池余额：'+panel.filTotalCash+' FIL'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="erc20Approve(`FIl`)">{{ supplyButton }}</el-button>
                <el-button type="success" @click="supplyToken(`FIL`)">存款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="取款" name="second">
            <el-form label-position="top" label-width="80px" :model="supply">
              <el-form-item label="取款数量">
                <el-input v-model="supplyFil.redeemAmount">
                  <el-button slot="prepend" @click="getRedeemBalance(`FIL`)">安全最大值（80%）</el-button>
                  <el-button slot="append">BFIL</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card">
                <div  class="text item">
                  {{'存款数量：'+ supplyFil.count+' FIL'  }}
                </div>
                <div  class="text item">
                  借款金额限额：$ {{ borrowUsdt.balance }} -> $ {{ borrowUsdt.borrowAmountLimit }}
                </div>
                <div  class="text item">
                  限额已使用： {{borrowUsdt.alreadyCashPercent+' %'  }} -> {{borrowUsdt.borrowlimitPercent}} %
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="redeemToken(`FIL`)">取款</el-button>
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
            <el-form label-position="top" label-width="80px" :model="supplyUsdt">
              <el-form-item label="存款数量">
                <el-input v-model="supplyUsdt.mintAmount" placeholder="请输入存款数量" clearable >
                  <el-button slot="prepend" @click="getSupplyBalance(`USDT`)">最大值</el-button>
                  <el-button slot="append">USDT</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  {{'存款数量：'+ supplyUsdt.count+' USDT'  }}
                </div>
                <div  class="text item">
                  兑换率：1USDT ={{panel.usdtExchangeRate}} eUSDT
                </div>
                <div  class="text item">
                  {{'钱包USDT数量：'+panel.usdtBalance+' USDT'  }}
                </div>
                <div  class="text item" >
                  {{'钱包eUSDT数量：'+panel.eusdtBalance+' eUSDT'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="erc20Approve(`USDT`)">{{ supplyButton }}</el-button>
                <el-button type="success" @click="supplyToken(`USDT`)">存款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="取款" name="second">
            <el-form label-position="top" label-width="80px" :model="supply">
              <el-form-item label="取款数量">
                <el-input v-model="supplyUsdt.redeemAmount">
                  <el-button slot="prepend" @click="getRedeemBalance(`USDT`)">最大值</el-button>
                  <el-button slot="append">USDT</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  {{'存款数量：'+ supplyUsdt.count+' USDT'  }}
                </div>
                <div  class="text item">
                  兑换率：1eUSDT ={{panel.usdtExchangeRate}} USDT
                </div>
                <div  class="text item">
                  {{'钱包USDT数量：'+panel.usdtBalance+' USDT'  }}
                </div>
                <div  class="text item" >
                  {{'钱包eUSDT数量：'+panel.eusdtBalance+' eUSDT'  }}
                </div>
                <div  class="text item" >
                  {{'USDT资金池余额：'+panel.usdtTotalCash+' USDT'  }}
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="redeemToken(`USDT`)">取款</el-button>
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
            <el-form label-position="top" label-width="80px" :model="supplyUsdt">
              <el-form-item label="借款数量">
                <el-input v-model="borrowUsdt.borrowAmount" placeholder="请输入借款数量" clearable >
                  <el-button slot="prepend" @click="getBorrowBalance(`USDT`)">（80%限制）</el-button>
                  <el-button slot="append">USDT</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  借款限额：$ {{ borrowUsdt.balance }} -> $ {{ borrowUsdt.borrowAmountLimit }}
                </div>
                <div  class="text item">
                  借款限额： {{ borrowUsdt.count }} USDT ->  {{ borrowUsdt.borrowCountLimit }} USDT
                </div>
                <div  class="text item">
                  限额已使用： {{borrowUsdt.alreadyCashPercent+' %'  }} -> {{borrowUsdt.borrowlimitPercent}} %
                </div>
              </el-card>
              <el-card class="box-card">
                <div  class="text item">
                  目前已借：{{borrowUsdt.count}} USDT
                </div>
                <div  class="text item">
                  市场可用余额：{{ panel.usdtTotalCash }} USDT
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="erc20Approve(`USDT`)">{{ supplyButton }}</el-button>
                <el-button type="success" @click="borrowToken(`USDT`)">借款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="还款" name="second">
            <el-form label-position="top" label-width="80px" :model="borrowUsdt">
              <el-form-item label="还款数量">
                <el-input v-model="borrowUsdt.repayAmount" placeholder="请输入还款数量">
                  <el-button slot="prepend" @click="getRepayBalance(`USDT`)">最大值</el-button>
                  <el-button slot="append">USDT</el-button>
                </el-input>
              </el-form-item>
              <el-card class="box-card" style="margin-bottom: 20px;">
                <div  class="text item">
                  借款金额限额：$ {{ borrowUsdt.balance }} -> $ {{ borrowUsdt.borrowAmountLimit }}
                </div>
                <div  class="text item">
                  借款数量限额： {{ borrowUsdt.count }} USDT ->  {{ borrowUsdt.borrowCountLimit }} USDT
                </div>
                <div  class="text item">
                  限额已使用： {{borrowUsdt.alreadyCashPercent+' %'  }} -> {{borrowUsdt.borrowlimitPercent}} %
                </div>
              </el-card>
              <el-card class="box-card">
                <div  class="text item">
                  目前已借：{{borrowUsdt.count}} USDT
                </div>
                <div  class="text item">
                  市场可用余额：{{ panel.usdtTotalCash }} USDT
                </div>
                <div  class="text item">
                  钱包USDT余额：{{ panel.usdtBalance }} USDT
                </div>
              </el-card>
              <el-form-item label="" style="margin-top: 20px;">
                <el-button type="success" @click="repayToken(`USDT`)">还款</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-dialog>
    </el-row>
    <el-dialog
        :visible.sync="dialogResultVisible"
        width="30%"
        center>
      <el-result icon="info" :title="info.title " subTitle=".">
        <template slot="extra">
          <el-link type="success" :href="info.result" target="_blank" >查看交易</el-link>
          <span >{{ info.result }}</span>
        </template>
      </el-result>
    </el-dialog>
  </div>
</template>

<script>
import {
  accrualBlockNumber,
  balanceOf,
  borrow,
  borrowBalanceStored,
  borrowIndex, borrowRatePerBlock,
  checkMembership,
  enterMarkets,
  exitMarket,
  getBlockNumber,
  getBorrowRate,
  getCash,
  markets,
  mint,
  redeem, redeemUnderlying,
  repayBorrow, supplyRatePerBlock,
  totalBorrows,
  totalReserves,
  totalSupply,
  viewPrice,
} from "../web3/hashbank";
import Decimal from 'decimal.js';
import {address, constants, decimals} from "../configure/hashbank";
import {erc20Approval, erc20BalanceOf} from "../web3";
import {bhp, exp} from "../configure/conf";

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
        supplyApy:0,
        borrowApy:0,
        filPrice:0,
        usdtPrice:0,
        filCollateralFactor:0,
        usdtCollateralFactor:0,
        supplyBalance:0,
        borrowBalance:0,
        blockNumber:0,
        usdtTotalCash:0,
        filTotalCash:0,
        filBalance:0,
        usdtBalance:0,
        efilBalance:0,
        eusdtBalance:0,
        accrualUsdtBlockNumber:0,
        accrualFilBlockNumber:0,
        totalBorrowsInfo:0,
        totalReservesInfo:0,
        usdtExchangeRate:0,
        filExchangeRate:0,
      },
      supplyFil: {
        userCanRedeemCount:0,
        borrowRate: '',
        balance:0,
        count:0,
        mintAmount: 0,
        supplyToken: 0,
        supplyAmount: 0,
        redeemTokens:0,
        redeemAmount:0,
        isEnterMarket:false,
      },
      supplyUsdt: {
        borrowRate: '',
        count:0,
        balance:0,
        mintAmount: 0,
        supplyToken: 0,
        supplyAmount: 0,
        redeemTokens:0,
        redeemAmount:0,
      },
      borrowUsdt: {
        //借款最大值
        borrowAmountLimit:0,
        borrowCountLimit:0,
        borrowlimitPercent:0,
        //剩余可借额度
        //还款额度
        repayAmount:0,
        canBorrowCountLimit:0,
        alreadyCashPercent:0,
        borrowRate: '',
        count:0,
        balance:0,
        borrowAmount: 0,
        supplyToken: 0,
        supplyAmount: 0,
        redeemTokens:0,
        redeemAmount:0,
      },
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
    openSupply(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      let assetAddress
      let assetToken
      if (tokenName==="FIL"){

        assetAddress=address.bhp.BFIL
        assetToken=address.bhp.cBFIL
      }else if (tokenName==="USDT"){
        assetAddress=address.bhp.USDT
        assetToken=address.bhp.cUSDT
      }
      erc20BalanceOf(
          this.$store.state.wallet,
          assetAddress,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        if (tokenName==="FIL"){
          this.supplyFil.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(decimals.BFIL)
        }else if (tokenName==="USDT"){
          this.supplyUsdt.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT)
        }
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      erc20BalanceOf(
          this.$store.state.wallet,
          assetToken,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        if (tokenName==="FIL"){
          this.supplyFil.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.cBFIL)).toFixed(decimals.BFIL)
        }else if (tokenName==="USDT"){
          this.supplyUsdt.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.cUSDT)).toFixed(decimals.USDT)
        }
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      if (tokenName==="FIL"){
        this.filSupplyDialogVisible = true
      }else if (tokenName==="USDT"){
        this.usdtSupplyDialogVisible = true
      }
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
        this.supplyUsdt.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.cBFIL,
      ).then(res => {
        this.supplyUsdt.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.cBFIL)).toFixed(18)
      }).catch(err => {
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
    supplyToken(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      this.filSupplyDialogVisible = false;
      this.usdtSupplyDialogVisible = false;
      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let mintAmount
      if (tokenName==="FIL"){
        assetAddress=address.bhp.BFIL
        assetToken=address.bhp.cBFIL
        mintAmount=new Decimal(this.supplyFil.mintAmount).times(Decimal.pow(10,decimals.BFIL)).toFixed(0)
        console.log("mintAmount",mintAmount)
      }else if (tokenName==="USDT"){
        assetToken=address.bhp.cUSDT
        assetAddress=address.bhp.USDT
        mintAmount=new Decimal(this.supplyUsdt.mintAmount).times(Decimal.pow(10,decimals.USDT)).toFixed(0)
        console.log("mintAmount",mintAmount)
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验


      this.verifyConnect()
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;

      mint(
          this.$store.state.wallet,
          mintAmount,
          assetToken,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.getSuccessInfo(this.$parent.url)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    redeemToken(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let redeemAmount
      if (tokenName==="FIL"){
        assetAddress=address.bhp.BFIL
        assetToken=address.bhp.cBFIL
        redeemAmount=new Decimal(this.supplyFil.redeemAmount).mul(Decimal.pow(10,decimals.BFIL)).toFixed(0,Decimal.ROUND_DOWN)
      }else if (tokenName==="USDT"){
        assetAddress=address.bhp.USDT
        assetToken=address.bhp.cUSDT
        redeemAmount=new Decimal(this.supplyUsdt.redeemAmount).mul(Decimal.pow(10,decimals.USDT)).toFixed(0,Decimal.ROUND_DOWN)
      }
      console.log("redeemAmount",redeemAmount)

      //获取到存款数量之后转换为小单位wei
      this.verifyConnect()
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.filSupplyDialogVisible = false;
      this.usdtSupplyDialogVisible = false;
      redeemUnderlying(
          this.$store.state.wallet,
          redeemAmount,
          assetToken,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.getSuccessInfo(this.$parent.url)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    borrowToken(tokenName) {
      //usdt 借款之前先判断是否存入了fil并开启了抵押
      if (!this.verifyConnect()){
        return
      }

      let assetToken
      //获取到存款数量之后转换为小单位wei
      let borrowAmount
      if (tokenName==="FIL"){
        assetToken=address.bhp.cBFIL
        borrowAmount=new Decimal(this.borrowUsdt.borrowAmount).mul(Decimal.pow(10,decimals.BFIL)).toNumber().toString()
      }else if (tokenName==="USDT"){
        assetToken=address.bhp.cUSDT
        borrowAmount=new Decimal(this.borrowUsdt.borrowAmount).mul(Decimal.pow(10,decimals.USDT)).toNumber().toString()
      }
      console.log(borrowAmount)
      this.verifyConnect()
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      borrow(
          this.$store.state.wallet,
          borrowAmount,
          assetToken,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.getSuccessInfo(this.$parent.url)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      this.usdtBorrowDialogVisible = false;
    },
    repayToken(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let repayAmount
      if (tokenName==="FIL"){

      }else if (tokenName==="USDT"){
        assetAddress=address.bhp.USDT
        assetToken=address.bhp.cUSDT
        repayAmount=new Decimal(this.borrowUsdt.repayAmount).mul(Decimal.pow(10,decimals.USDT)).toFixed(0,Decimal.ROUND_DOWN)
      }
      console.log("repayAmount",repayAmount)
      //获取到存款数量之后转换为小单位wei
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.usdtBorrowDialogVisible = false;
      repayBorrow(
          this.$store.state.wallet,
          repayAmount,
          assetToken,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.getSuccessInfo(this.$parent.url)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    getSupplyBalance(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      let assetAddress
      if (tokenName==="FIL"){
        assetAddress=address.bhp.BFIL
      }else if (tokenName==="USDT"){
        assetAddress=address.bhp.USDT
      }
      balanceOf(
          this.$store.state.wallet,
          assetAddress,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        if (tokenName==="FIL"){
          this.supplyFil.mintAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(decimals.BFIL)
        }else if (tokenName==="USDT"){
          this.supplyUsdt.mintAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT)
        }
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    getRedeemBalance(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      let that=this
      if (tokenName==="FIL"){
        //先判断是否有借款金额，没有设置为最大
        if (new Decimal(that.borrowUsdt.alreadyCashPercent).eq(new Decimal(0))===true){
          this.supplyFil.redeemAmount=new Decimal(that.supplyFil.count).toFixed(decimals.BFIL, Decimal.ROUND_DOWN)
        }else{
          this.supplyFil.redeemAmount=new Decimal(that.supplyFil.userCanRedeemCount).toFixed(decimals.BFIL, Decimal.ROUND_DOWN)
        }
      }else if (tokenName==="USDT"){
        this.supplyUsdt.redeemAmount=new Decimal(that.supplyUsdt.count).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
      }
    },
    getBorrowBalance(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      let that=this
      this.borrowUsdt.borrowAmount=new Decimal(that.borrowUsdt.canBorrowCountLimit).toFixed(6, Decimal.ROUND_DOWN)
    },
    getRepayBalance(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      let that=this
      console.log("getRepayBalance",that.borrowUsdt.count)
      this.borrowUsdt.repayAmount=new Decimal(that.borrowUsdt.count).toString()
    },
    erc20Approve(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      let assetAddress
      let assetToken
      if (tokenName==="FIL"){
        assetAddress=address.bhp.BFIL
        assetToken=address.bhp.cBFIL
      }else if (tokenName==="USDT"){
        assetToken=address.bhp.cUSDT
        assetAddress=address.bhp.USDT
      }
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.filSupplyDialogVisible = false;
      this.usdtSupplyDialogVisible = false;
      erc20Approval(
          this.$store.state.wallet,
          assetAddress,
          assetToken,
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
      this.getApy()
      this.viewPrice()
      this.checkMemberShipPage()
      this.getSupplyPage(constants.cUSDT)
      this.getBorrowPage(constants.cUSDT)
      this.getSupplyPage(constants.cBFIL)
    },
    viewPrice() {
      //获取用户USDT余额
      balanceOf(
          this.$store.state.wallet,
          address.bhp.USDT,
      ).then(res => {
          let amount=new Decimal(res)
          this.panel.usdtBalance=amount.dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      //获取用户FIL余额
      balanceOf(
          this.$store.state.wallet,
          address.bhp.BFIL,
      ).then(res => {
        let amount=new Decimal(res)
        this.panel.filBalance=amount.dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(decimals.BFIL)
      }).catch(err => {
        this.getErrorInfo(err)
      })
    },
    async getUserBorrowTokenPage(tokenName){
      let eTokenAddress
      if (tokenName===constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName===constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取用户USDT借贷金额
      await borrowBalanceStored(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result=res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async getUserSupplyTokenPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取用户eUSDT余额
      await balanceOf(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result=res
        let amount=new Decimal(res)
        if (tokenName==constants.cUSDT){
          this.panel.eusdtBalance=amount.dividedBy(Decimal.pow(10,decimals.cUSDT)).toFixed(decimals.cUSDT)
        }else if (tokenName==constants.cBFIL){
          this.panel.efilBalance=amount.dividedBy(Decimal.pow(10,decimals.cBFIL)).toFixed(decimals.cBFIL)
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async accrualBlockNumberPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取USDT池子上次计算高度
      await accrualBlockNumber(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result=res
        if (tokenName==constants.cUSDT){
          this.panel.accrualUsdtBlockNumber=res
        }else if (tokenName==constants.cBFIL){
          this.panel.accrualFilBlockNumber=res
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async getBlockNumberPage(){
      let result=0
      //获取当前高度
      await getBlockNumber(
          this.$store.state.wallet,
      ).then(res =>{
        result=res
        this.panel.blockNumber=res
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
    async totalReservesPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取最后一次合约触发时的总储备金
      totalReserves(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result=res
        let amount=new Decimal(res)
        this.panel.totalReservesInfo=amount.dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async totalBorrowsPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取最后一次合约触发时的借款总额
      await totalBorrows(
          this.$store.state.wallet,
          address.bhp.cUSDT,
      ).then(res => {
        result=res
        let amount=new Decimal(res)
        this.panel.totalBorrowsInfo=amount.dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async borrowIndexPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取最后一次合约触发时的借款总额
      await borrowIndex(
          this.$store.state.wallet,
          address.bhp.cUSDT,
      ).then(res => {
        result=res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async getCashPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取USDT资金池余额
      await getCash(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res =>{
        result=res
        if (tokenName==constants.cUSDT){
          this.panel.usdtTotalCash=new Decimal(res).dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT)
        }else if (tokenName==constants.cBFIL){
          this.panel.filTotalCash=new Decimal(res).dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(decimals.BFIL)
        }
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
    async totalSupplyPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取eUSDT供应量
      await totalSupply(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res =>{
        result=res
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
    async getBorrowRatePage(cash,borrows,reserves){
      let result=0
      //获取USDT资金池余额
      await getBorrowRate(
          this.$store.state.wallet,
          cash,
          borrows,
          reserves
      ).then(res =>{
        result=res
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
    async getPricePage(tokenName){
      let result
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      await viewPrice(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        let balance = new Decimal(res)
        if (tokenName==constants.cUSDT){
          result= balance.dividedBy(Decimal.pow(10,30))
          this.panel.usdtPrice= balance.dividedBy(Decimal.pow(10,30)).toFixed(4)
        }else if (tokenName==constants.cBFIL){
          result= balance.dividedBy(Decimal.pow(10,decimals.BFIL))
          this.panel.filPrice= balance.dividedBy(Decimal.pow(10,decimals.BFIL)).toFixed(4)
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    switchMarketStatus(){
      if (!this.verifyConnect()){
        return
      }
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.filSupplyDialogVisible = false;
      this.usdtSupplyDialogVisible = false;
      let assetToken=address.bhp.cBFIL
      let assetArray=new Array(assetToken)
      //先判断当前是开启抵押还是关闭抵押
      //如果开启，查看用户是否抵押
      //如果抵押计算另一个币种是否满足借款
      //如果满足
      this.checkMemberShipPage().then(result=>{
        if (!result){
          console.log("enterMarkets")
          enterMarkets(
              this.$store.state.wallet,
              assetArray,
              data => {
                this.$parent.url = bhp + data.message;
                this.$parent.flag2 = true;
                this.$parent.flag1 = false;
                this.$parent.flag3 = false;
              }
          ).then(res => {
            this.$parent.loading = false;
            this.supplyFil.isEnterMarket=true;
            this.getSuccessInfo(this.$parent.url)
          }).catch(err => {
            this.$parent.loading = false;
            this.getErrorInfo(err)
          })
        }else{
          console.log("exitMarket")
          exitMarket(
              this.$store.state.wallet,
              assetToken,
              data => {
                this.$parent.url = bhp + data.message;
                this.$parent.flag2 = true;
                this.$parent.flag1 = false;
                this.$parent.flag3 = false;
              }
          ).then(res => {
            this.$parent.loading = false;
            this.supplyFil.isEnterMarket=false;
            this.getSuccessInfo(this.$parent.url)
          }).catch(err => {
            this.$parent.loading = false;
            this.getErrorInfo(err)
          })
        }
      })
    },
    async getCollateralFactor(tokenName){
      let result
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      //获取抵押因子 用于计算抵押存款
      await markets(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        let collateralFactorMantissa=res.collateralFactorMantissa
        if (tokenName===constants.cUSDT){
          result= collateralFactorMantissa
          this.panel.usdtCollateralFactor= collateralFactorMantissa
        }else if (tokenName===constants.cBFIL){
          result= collateralFactorMantissa
          this.panel.filCollateralFactor= collateralFactorMantissa
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async checkMemberShipPage(){
      let isSuccess=false;
      await checkMembership(
          this.$store.state.wallet,
          address.bhp.cBFIL,
      ).then(res => {
        this.supplyFil.isEnterMarket= res
        isSuccess=res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return isSuccess
    },
    async accrueInterestPage(tokenName) {
      let totalCash=await this.getCashPage(tokenName)
      let totalBorrows=await this.totalBorrowsPage(tokenName)
      let totalReserves=await this.totalReservesPage(tokenName)
      let borrowIndex=await this.borrowIndexPage(tokenName)
      let currentBlockNumber=await this.getBlockNumberPage()
      let accrualBlockNumber=await this.accrualBlockNumberPage(tokenName)
      console.log("currentBlockNumber",currentBlockNumber.toString())
      console.log("accrualBlockNumber",accrualBlockNumber.toString())
      let borrowRate=await this.getBorrowRatePage(totalCash,totalBorrows,totalReserves)
      this.borrowUsdt.borrowRate=borrowRate
      console.log("borrowRate",borrowRate.toString())
      // 当前区块和 accrualBlockNumberPrior 之间的区块数
      let blockDelta=new Decimal(currentBlockNumber).sub(new Decimal(accrualBlockNumber))
      console.log("blockDelta",blockDelta.toString())
      //区块区间内的单位利息=借贷利率*区块数
      let simpleInterestFactor=new Decimal(borrowRate).mul(new Decimal(blockDelta))
      //总借款在该区块区间内产生的总利息=区块区间内的单位利息*总借款
      console.log("simpleInterestFactor",simpleInterestFactor.toString())
      let interestAccumulated=simpleInterestFactor.mul(new Decimal(totalBorrows)).div(Decimal.pow(10,18)).truncated()
      console.log("interestAccumulated",interestAccumulated.toString())
      //总利息累加到总借款中=总借款在该区块区间内产生的总利息+总借款
      let totalBorrowsNew=interestAccumulated.add(new Decimal(totalBorrows))
      console.log("totalBorrowsNew",totalBorrowsNew.toString())
      // 原来的链上储备资金 * interestAccumulated +现在获取到的
      // totalReservesNew = reserveFactor * interestAccumulated / 1Ether + totalReserves，根据储备金率将部分利息累加到储备金中
      let totalReservesNew=new Decimal(totalReserves).mul(interestAccumulated).div(Decimal.pow(10,18)).truncated().add(new Decimal(totalReserves))
      // 累加借款指数=区块区间内的单位利息x借款指数/1Ether+借款指数
      let borrowIndexNew=simpleInterestFactor.mul(new Decimal(borrowIndex)).div(Decimal.pow(10,18)).truncated().add(new Decimal(borrowIndex))
      console.log("borrowIndexNew",borrowIndexNew.toString())
      return {borrowIndex,totalBorrowsNew,totalReservesNew,borrowIndexNew,totalCash}
    },
    async exchangeRatePage(tokenName){
      let list=await this.accrueInterestPage(tokenName)
      //现在的资金规模
      let cashPlusBorrowsMinusReserves=new Decimal(list.totalCash).add(new Decimal(list.totalReservesNew))
      // 总供应量
      let totalSupply=await this.totalSupplyPage(tokenName)
      // 兑换率=(资金池余额+借贷总额-总储备金)*1Ether/总供应量
      let exchangeRate
      if (tokenName==constants.cUSDT){
        exchangeRate=cashPlusBorrowsMinusReserves.mul(Decimal.pow(10,18)).div(new Decimal(totalSupply)).truncated()
        this.panel.usdtExchangeRate=exchangeRate.div(Decimal.pow(10,10)).div(Decimal.pow(10,decimals.USDT))
      }else if (tokenName==constants.cBFIL){
        exchangeRate=cashPlusBorrowsMinusReserves.mul(Decimal.pow(10,18)).div(new Decimal(totalSupply)).truncated()
        this.panel.filExchangeRate=exchangeRate.div(Decimal.pow(10,10)).div(Decimal.pow(10,decimals.BFIL))
      }
      return exchangeRate
    },
    async getSupplyPage(tokenName){
      //用户的usdt存款数量
      let supplyToken=await this.getUserSupplyTokenPage(tokenName)
      console.log("supplyToken",supplyToken.toString())
      // 最新兑换率
      let exchangeRateMantissa=await this.exchangeRatePage(tokenName)
      let redeemBalance
      let redeemAmount
      let price=await this.getPricePage(tokenName)
      let collateralFactor=await this.getCollateralFactor(tokenName)
      if (tokenName===constants.cUSDT){
        redeemAmount=new Decimal(exchangeRateMantissa).mul(new Decimal(supplyToken)).div(Decimal.pow(10,18)).div(Decimal.pow(10,decimals.USDT))
        this.supplyUsdt.count=redeemAmount
        redeemBalance=redeemAmount.mul(new Decimal(price))
        this.supplyUsdt.balance=redeemBalance
      }else if (tokenName===constants.cBFIL){
        redeemAmount=new Decimal(exchangeRateMantissa).mul(new Decimal(supplyToken)).div(Decimal.pow(10,18)).div(Decimal.pow(10,decimals.BFIL))
        this.supplyFil.count=redeemAmount
        redeemBalance=redeemAmount.mul(new Decimal(price))
        this.supplyFil.balance=redeemBalance
        // 计算FIL可抵押多少FIL=FIL余额*FIL抵押因子/1Ether
        // 存款数量xfil价格x0.6
        let enterCash=redeemBalance.mul(new Decimal(collateralFactor).div(Decimal.pow(10,18)))
        // 用户最少存多少FIL的数量=当前借贷总额/（FIL抵押因子/1Ether）/fil价格
        let limitPercent=new Decimal(0.8)
        // 借款USDT最大额度金额(80%限额)
        let borrowAmountLimit=enterCash.mul(limitPercent)
        this.borrowUsdt.borrowAmountLimit=borrowAmountLimit.toFixed(decimals.USDT)
        // 借款USDT最大额度数量(80%限额)
        //获取usdt价格
        let usdtPrice=await this.getPricePage(constants.cUSDT)
        //最大金额/价格=最大数量
        let borrowCountLimit=enterCash.mul(limitPercent).div(new Decimal(usdtPrice))
        this.borrowUsdt.borrowCountLimit=borrowCountLimit.toFixed(decimals.USDT)
        // usdt剩余可借额度(判断是否大于0，不是设置为0)
        let canBorrowCountLimit=borrowAmountLimit.sub(this.borrowUsdt.count)
        if (canBorrowCountLimit.lt(new Decimal(0))===true){
          canBorrowCountLimit=0
        }
        this.borrowUsdt.canBorrowCountLimit=canBorrowCountLimit
        // 借款限制百分比
        this.borrowUsdt.borrowlimitPercent=limitPercent.mul(new Decimal(100)).toString()
        // 目前借款
        let alreadyCashPercent=new Decimal(this.borrowUsdt.balance).div(enterCash)
        this.borrowUsdt.alreadyCashPercent=alreadyCashPercent.mul(new Decimal(100)).toFixed(4)
        //剩余FIL可取80%-已使用的百分比
        // 最多可贷-已经贷的=可取的
        let userCanRedeem=enterCash.sub(new Decimal(this.borrowUsdt.balance))
        //用户可取的金额/fil价格=可取的fil数量
        let userCanRedeemCount=userCanRedeem.div(new Decimal(price))
        this.supplyFil.userCanRedeemCount=userCanRedeemCount
      }

      return {redeemAmount,redeemBalance}
    },
    async getBorrowPage(tokenName){
      let list=await this.accrueInterestPage(tokenName)
      let borrowBalance=await this.getUserBorrowTokenPage(tokenName)
      console.log("borrowBalance",borrowBalance.toString())
      // principalTimesIndex=borrower.borrowBalance * market.borrowIndex
      let price=await this.getPricePage(tokenName)
      if (tokenName===constants.cUSDT){
        let recentBorrowBalance=new Decimal(borrowBalance).mul(list.borrowIndexNew).div(list.borrowIndex).div(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        this.borrowUsdt.count=recentBorrowBalance
        this.borrowUsdt.balance=new Decimal(recentBorrowBalance).mul(new Decimal(price))
      }else if (tokenName===constants.cBFIL){

      }
    },
    async getApy(){
      //假定bhp主网 每块13.15s
      let blocksPerDay=6570
      //一年按照365天计算
      let daysPerYear=365
      let supplyRatePerBlock=await this.supplyRatePerBlockPage(constants.cUSDT)
      let borrowRatePerBlock=await this.borrowRatePerBlockPage(constants.cUSDT)
      let one=new Decimal(1)
      let hundred=new Decimal(100)
      let supply=new Decimal(supplyRatePerBlock).div(Decimal.pow(10,18)).mul(blocksPerDay).add(one)
      let borrow=new Decimal(borrowRatePerBlock).div(Decimal.pow(10,18)).mul(blocksPerDay).add(one)
      let supplyApy=Decimal.pow(supply,daysPerYear).sub(one).mul(hundred)
      let borrowApy=Decimal.pow(borrow,daysPerYear).sub(one).mul(hundred)
      this.panel.supplyApy=supplyApy
      this.panel.borrowApy=borrowApy
    },
    async supplyRatePerBlockPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取每一个区块的存款利率
      await supplyRatePerBlock(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res =>{
        result=res
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
    async borrowRatePerBlockPage(tokenName){
      let eTokenAddress
      if (tokenName==constants.cUSDT){
        eTokenAddress=address.bhp.cUSDT
      }else if (tokenName==constants.cBFIL){
        eTokenAddress=address.bhp.cBFIL
      }
      let result=0
      //获取每一个区块的借款利率
      await borrowRatePerBlock(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res =>{
        result=res
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
  },
};
</script>
<style lang="less">
</style>