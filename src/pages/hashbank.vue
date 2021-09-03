<template>
  <div style="margin:0 2em">
    <el-tabs type="card" tab-position="right">
      <el-row :gutter="24">
        <el-tabs v-model="panel.activeName" type="card" >
          <el-tab-pane label="面板" name="third">
            <!--   1.面板 -->
            <el-col :span="12" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>面板</span>
<!--                  <el-button style="float: right; padding: 3px 0" type="text" @click="updatePanel()" >刷新</el-button>-->
                </div>
                <el-descriptions title="合约" direction="vertical" :column="7" border size="medium">
                  <el-descriptions-item label="当前高度">{{ panel.blockNumber }}</el-descriptions-item>
                  <el-descriptions-item label="FIL价格"> ${{ panel.filPrice }} </el-descriptions-item>
                  <el-descriptions-item label="USDT价格"> ${{ panel.usdtPrice }} </el-descriptions-item>
                  <el-descriptions-item label="eUSDT合约最新触发高度">{{ panel.accrualUsdtBlockNumber }}</el-descriptions-item>
                  <el-descriptions-item label="eFIL合约最新触发高度">{{ panel.accrualFilBlockNumber }}</el-descriptions-item>
                  <el-descriptions-item label="eUSDT合约最新触发的借款总额">{{ panel.totalBorrowsInfo }} USDT</el-descriptions-item>
                  <el-descriptions-item label="eUSDT合约最新触发的储备金">{{ panel.usdtTotalReservesInfo }} USDT</el-descriptions-item>
                </el-descriptions>
                <el-descriptions class="margin-top" title="平台" :column="6" direction="vertical" border size="medium" style="margin-top: 10px;">
                  <el-descriptions-item label="FIL资金池余额"> {{ panel.filTotalCash }} FIL</el-descriptions-item>
                  <el-descriptions-item label="USDT资金池余额"> {{ panel.usdtTotalCash }} USDT</el-descriptions-item>
                  <el-descriptions-item label="FIL使用率"> {{ panel.filUtilizationRate }} % </el-descriptions-item>
                  <el-descriptions-item label="USDT使用率"> {{ panel.usdtUtilizationRate }} % </el-descriptions-item>
                  <el-descriptions-item label="FIL抵押率"> {{ panel.filCollateralFactor }} </el-descriptions-item>
                  <el-descriptions-item label="USDT抵押率"> {{ panel.usdtCollateralFactor }} </el-descriptions-item>
                  <el-descriptions-item label="FIL兑换率"> 1 eFIL ={{ panel.filExchangeRate }} FIL </el-descriptions-item>
                  <el-descriptions-item label="USDT兑换率"> 1 eUSDT ={{ panel.usdtExchangeRate }} USDT </el-descriptions-item>
                  <el-descriptions-item label="FIL借款总数量"> {{ panel.filTotalBorrowsInfo }} FIL</el-descriptions-item>
                  <el-descriptions-item label="USDT借款总数量"> {{ panel.usdtTotalBorrowsInfo }} USDT</el-descriptions-item>
                  <el-descriptions-item label="USDT存款APY"> {{ panel.supplyApy }} %</el-descriptions-item>
                  <el-descriptions-item label="USDT借款APY"> {{ panel.borrowApy }} % </el-descriptions-item>
                </el-descriptions>
                <el-descriptions class="margin-top" title="用户" :column="6" direction="vertical" border size="medium" style="margin-top: 10px;">
                  <el-descriptions-item label="用户钱包FIL余额">{{ panel.filBalance }} FIL</el-descriptions-item>
                  <el-descriptions-item label="用户钱包USDT余额">{{ panel.usdtBalance }} USDT</el-descriptions-item>
                  <el-descriptions-item label="用户eFIL余额">{{ panel.efilBalance }} eFIL</el-descriptions-item>
                  <el-descriptions-item label="用户eUSDT余额">{{ panel.eusdtBalance }} eUSDT</el-descriptions-item>
                  <el-descriptions-item label="用户存款总额(USDT+FIL)"> ${{ supplyFil.balance }}+ ${{ supplyUsdt.balance }}</el-descriptions-item>
                  <el-descriptions-item label="用户借款总额(USDT)"> $ {{ borrowUsdt.balance }}</el-descriptions-item>
                </el-descriptions>
              </el-card>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="借贷" name="first">
            <!--   2.存取 -->
            <el-col :span="24" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>存取</span>
                </div>
                <el-descriptions size="medium" :column="2"  border>
                  <el-descriptions-item label="资产" >USDT</el-descriptions-item>
                  <el-descriptions-item label="钱包USDT数量"> {{ panel.usdtBalance }} USDT </el-descriptions-item>
                  <el-descriptions-item label="USDT存款数量">{{ supplyUsdt.count }} USDT</el-descriptions-item>
                  <el-descriptions-item label="USDT存款金额">$ {{ supplyUsdt.balance }}</el-descriptions-item>
                  <el-descriptions-item label="USDT存款APY"> {{ panel.supplyApy }} % </el-descriptions-item>
                  <el-descriptions-item label="钱包eUSDT数量"> {{ panel.eusdtBalance }} eUSDT </el-descriptions-item>
                  <el-descriptions-item label="操作">
                    <el-button size="small" @click="openSupply(`USDT`)" type="success">存取</el-button>
                  </el-descriptions-item>
                </el-descriptions>
                <el-divider></el-divider>
                <el-descriptions size="medium" :column="2" border>
                  <el-descriptions-item label="资产">FIL</el-descriptions-item>
                  <el-descriptions-item label="钱包FIL数量"> {{ panel.filBalance }} FIL </el-descriptions-item>
                  <el-descriptions-item label="FIL存款数量">{{ supplyFil.count }} FIL </el-descriptions-item>
                  <el-descriptions-item label="FIL存款金额">$ {{ supplyFil.balance }} </el-descriptions-item>
                  <el-descriptions-item label="FIL抵押开关">
                    <el-switch
                        v-model="supplyFil.isEnterMarket"
                        disabled
                    >
                    </el-switch>
                  </el-descriptions-item>
                  <el-descriptions-item label="钱包eFIL数量"> {{ panel.efilBalance }} eFiL </el-descriptions-item>
                  <el-descriptions-item label="操作">
                    <el-button size="small" @click="openSupply(`FIL`)" type="success">存取</el-button>
                    <el-button size="small" @click="switchMarketStatus()" type="success">开启抵押</el-button>
                    <el-button size="small" @click="switchMarketStatus()" type="success">关闭抵押</el-button>
                  </el-descriptions-item>
                </el-descriptions>
              </el-card>
            </el-col>
            <!--   3.借还 -->
            <el-col :span="24" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>借还</span>
                </div>
                <el-descriptions size="medium" :column="2" border>
                  <el-descriptions-item label="资产">USDT</el-descriptions-item>
                  <el-descriptions-item label="USDT借款数量">{{ borrowUsdt.count }} USDT</el-descriptions-item>
                  <el-descriptions-item label="USDT借款金额">$ {{ borrowUsdt.balance }} </el-descriptions-item>
                  <el-descriptions-item label="USDT借款APY">{{ panel.borrowApy }} % </el-descriptions-item>
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
              <el-tabs v-model="dialogActiveName" >
                <el-tab-pane label="存款" name="first">
                  <el-form label-position="top" label-width="80px" :model="supplyFil">
                    <el-form-item label="存款数量">
                      <el-input v-model="supplyFil.mintAmount" placeholder="请输入存款数量" clearable >
                        <el-button slot="prepend" @click="getSupplyBalance(`FIL`)">最大值</el-button>
                        <el-button slot="append">FIL</el-button>
                      </el-input>
                    </el-form-item>
                    <el-card class="box-card">
                      <div  class="text item">
                        {{'存款数量：'+ supplyFil.count+' FIL'  }}
                      </div>
                      <div  class="text item">
                        FIL兑换率：1 eFIL ={{panel.filExchangeRate}} FIL
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
                      <el-button type="success" @click="erc20Approve(`FIL`)">{{ supplyButton }}</el-button>
                      <el-button type="success" @click="supplyToken(`FIL`)">存款</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="取款" name="second">
                  <el-form label-position="top" label-width="80px" :model="supplyFil">
                    <el-form-item label="取款数量">
                      <el-input v-model="supplyFil.redeemAmount" clearable>
                        <el-button slot="prepend" @click="getRedeemBalance(`FIL`)">安全最大值（80%）</el-button>
                        <el-button slot="append">FIL</el-button>
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
                      <el-button type="success" @click="redeemUnderlying(`FIL`)">取款</el-button>
                      <el-button type="success" @click="redeemAllToken(`FIL`)">取款全部</el-button>
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
              <el-tabs v-model="dialogActiveName" @tab-click="handleClick">
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
                        {{'USDT存款数量：'+ supplyUsdt.count+' USDT'  }}
                      </div>
                      <div  class="text item">
                        USDT兑换率：1 eUSDT ={{panel.usdtExchangeRate}} USDT
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
                      <el-input v-model="supplyUsdt.redeemAmount" clearable>
                        <el-button slot="prepend" @click="getRedeemBalance(`USDT`)">最大值</el-button>
                        <el-button slot="append">USDT</el-button>
                      </el-input>
                    </el-form-item>
                    <el-card class="box-card" style="margin-bottom: 20px;">
                      <div  class="text item">
                        {{'USDT存款数量：'+ supplyUsdt.count+' USDT'  }}
                      </div>
                      <div  class="text item">
                        兑换率：1 eUSDT ={{panel.usdtExchangeRate}} USDT
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
                      <el-button type="success" @click="redeemUnderlying(`USDT`)">取款</el-button>
                      <el-button type="success" @click="redeemAllToken(`USDT`)">取款全部</el-button>
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
              <el-tabs v-model="dialogActiveName" >
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
                      <el-button type="success" @click="borrowToken(`USDT`)">借款</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
                <el-tab-pane label="还款" name="second">
                  <el-form label-position="top" label-width="80px" :model="borrowUsdt">
                    <el-form-item label="还款数量">
                      <el-input v-model="borrowUsdt.repayAmount" placeholder="请输入还款数量" clearable>
                        <el-button slot="prepend" @click="getRepayMaxBalance(`USDT`)">最大值</el-button>
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
                      <el-button type="success" @click="erc20Approve(`USDT`)">{{ supplyButton }}</el-button>
                      <el-button type="success" @click="repayToken(`USDT`)">还款</el-button>
                      <el-button type="success" @click="repayAllToken(`USDT`)">还款全部</el-button>
                    </el-form-item>
                  </el-form>
                </el-tab-pane>
              </el-tabs>
            </el-dialog>
          </el-tab-pane>
          <el-tab-pane label="清算" name="second">
            <el-card class="box-card">
              <div style="max-width: 450px;">
<!--                <el-input placeholder="请输入借款人地址查询是否满足清算条件" v-model="account" >
                  <el-button slot="append" @click="searchLiquidity()" >查询</el-button>
                </el-input>-->
              </div>
              <el-descriptions title="计算过程"  :column="4" border style="margin-top: 20px;">
                <el-descriptions-item label="清算地址" label-class-name="my-label" >
                  {{ account }}
                </el-descriptions-item>
                <el-descriptions-item label="FIL价格">$ {{panel.filPrice}}</el-descriptions-item>
                <el-descriptions-item label="USDT价格">$ {{panel.usdtPrice}}</el-descriptions-item>
                <el-descriptions-item label="FIL抵押率">{{panel.filCollateralFactor }}</el-descriptions-item>
                <el-descriptions-item label="抵押品最新存款总额(FIL)">$ {{ supplyFil.balance }}</el-descriptions-item>
                <el-descriptions-item label="A=抵押品最新存款总额x抵押率(FIL)">$ {{ liquidity.sumCollateral }}</el-descriptions-item>
                <el-descriptions-item label="B=最新借款总额+利息(USDT)">$ {{ liquidity.sumBorrowPlusEffects }}</el-descriptions-item>
                <el-descriptions-item label="差值 A-B">如果A`<`B,差值为负数执行清算 </el-descriptions-item>
              </el-descriptions>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="合约" name="fourth">
            <el-card class="box-card">
              <el-tabs v-model="contract.activeName"  tab-position="left">
                <el-tab-pane label="BHP测试网" name="first">
                  <el-descriptions title="BHP测试网"  :column="1" border>
                  <el-descriptions-item label="eFIL">0x267a0234a8432889e5D0a8680509Ed7CEE70744B</el-descriptions-item>
                  <el-descriptions-item label="eUSDT">0x31Aaa86fA867C586944Ec391b750BD90B0BC85E4</el-descriptions-item>
                  <el-descriptions-item label="FIL">0x6F038322c71831840Fb63c58cC2F2A94d01C9b07</el-descriptions-item>
                  <el-descriptions-item label="USDT">0xEB6ee31d2365Fb585Ac7Fdb9E94Baad8909Cf205</el-descriptions-item>
                  <el-descriptions-item label="Comptroller">0x195090E2C98be4E0f5C9E952879ef640203A2413</el-descriptions-item>
                  <el-descriptions-item label="Oracle">0x451D8BB2d81D76A14b21d61A3B97Df158da860CF</el-descriptions-item>
                  <el-descriptions-item label="UsdtJumpRateModel">0x4D1C9992De26394D01081cD7C9290072E0088335</el-descriptions-item>
                </el-descriptions>
                </el-tab-pane>
                <el-tab-pane label="BSC测试网" name="second">
                  <el-descriptions title="BSC测试网"  :column="1" border >
                    <el-descriptions-item label="eFIL">0xF673099cae8EC04FF524d38924cb3BB5040503a0 </el-descriptions-item>
                    <el-descriptions-item label="eUSDT">0xA3f1eC9d338b304a4c6ea1e0218364b35B83a1d4 </el-descriptions-item>
                    <el-descriptions-item label="FIL">0x8F66E03daC3316dFe38d50C66980702E7b4dFA38 </el-descriptions-item>
                    <el-descriptions-item label="USDT">0xFaAA3D83d778836A2ECe0fEB597eA74e2Bcbb169</el-descriptions-item>
                    <el-descriptions-item label="Comptroller">0x25b297Dfb5c91A76181027c0eFbA86B7aaCB40f5 </el-descriptions-item>
                    <el-descriptions-item label="Oracle">0x394078A417D16a0a0A611B38fc80084b8562cB28 </el-descriptions-item>
                    <el-descriptions-item label="UsdtJumpRateModel">0x00182c24a9D279B0E6f5c2815956E5f4816371BF </el-descriptions-item>
                    <el-descriptions-item label="FIL chianlink">0x6307f94f2c998cba6c0d47a1f74e3a8ec8babcc0</el-descriptions-item>
                    <el-descriptions-item label="USDT chainlink">0xe8af72ef575800101f8e46cf8f399260544e0fc6</el-descriptions-item>
                  </el-descriptions>
                </el-tab-pane>
                <el-tab-pane label="BSC主网" name="third">
                  <el-descriptions title="BSC主网"  :column="1" border >

                  </el-descriptions>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </el-tabs>
    <el-dialog
        :visible.sync="dialogResultVisible"
        width="30%"
        center>
      <el-result icon="success" :title="info.title " v-if="info.title==='成功提示'" :subTitle="info.subTitle">
        <template slot="extra">
          <el-link type="success" :href="info.result" target="_blank" >查看交易</el-link>
        </template>
      </el-result>
      <el-result icon="error" :title="info.title" v-if="info.title==='错误提示'" :subTitle="info.subTitle">
        <template slot="extra">
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
  utilizationRate,
  getCash,
  markets,
  mint,
  redeem,
  redeemUnderlying,
  repayBorrow,
  reserveFactorMantissa,
  exchangeRateStored,
  supplyRatePerBlock,
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
      account:"",
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
        subTitle:'',
      },
      dialogActiveName: 'first',
      contract:{
        activeName: 'first',
      },
      liquidity:{
        sumCollateral:0,
        sumBorrowPlusEffects:0,
      },
      panel:{
        activeName: 'first',
        filUtilizationRate:0,
        usdtUtilizationRate:0,
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
        usdtTotalReservesInfo:0,
        filTotalReservesInfo:0,
        usdtTotalBorrowsInfo:0,
        filTotalBorrowsInfo:0,
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
      if (tokenName===constants.FIL){
        assetAddress=address.bhp.FIL
        assetToken=address.bhp.eFIL
      }else if (tokenName===constants.USDT){
        assetAddress=address.bhp.USDT
        assetToken=address.bhp.eUSDT
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
        if (tokenName===constants.FIL){
          this.supplyFil.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.FIL)).toFixed(decimals.FIL,Decimal.ROUND_DOWN)
        }else if (tokenName===constants.USDT){
          this.supplyUsdt.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
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
        if (tokenName===constants.FIL){
          this.supplyFil.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.eFIL)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        }else if (tokenName===constants.USDT){
          this.supplyUsdt.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.eUSDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        }
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      if (tokenName===constants.FIL){
        this.filSupplyDialogVisible = true
      }else if (tokenName===constants.USDT){
        this.usdtSupplyDialogVisible = true
      }
    },
    openUsdtBorrow() {
      if (!this.verifyConnect()){
        return
      }
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.FIL,
          data => {
            this.$parent.url = bhp + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.supplyUsdt.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.FIL)).toFixed(18)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      erc20BalanceOf(
          this.$store.state.wallet,
          address.bhp.eFIL,
      ).then(res => {
        this.supplyUsdt.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10,decimals.eFIL)).toFixed(18)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      this.usdtBorrowDialogVisible = true
    },
    getSuccessInfo(result) {
      this.info.title = "成功提示"
      this.info.result = result
      this.dialogResultVisible = true
      this.updatePanel()
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
          )
          {
            this.info.result = "授权额度不足或未授权";
          }else if (
              result.message.toString().indexOf("execution reverted: REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED") !== -1
          )
          {
            this.info.result = "还款余额计算错误，超出实际还款值";
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
        this.$notify.error({
          title: '错误',
          message: '错误的网络：请使用BHP主网或测试网'
        });
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
      if (tokenName===constants.FIL){
        assetAddress=address.bhp.FIL
        assetToken=address.bhp.eFIL
        mintAmount=new Decimal(this.supplyFil.mintAmount).times(Decimal.pow(10,decimals.FIL)).toFixed(0,Decimal.ROUND_DOWN)
      }else if (tokenName===constants.USDT){
        assetToken=address.bhp.eUSDT
        assetAddress=address.bhp.USDT
        mintAmount=new Decimal(this.supplyUsdt.mintAmount).times(Decimal.pow(10,decimals.USDT)).toFixed(0,Decimal.ROUND_DOWN)
      }
      console.log("mintAmount",mintAmount)
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
        this.info.subTitle=JSON.stringify(res)
        console.log(JSON.stringify(res))
        this.getSuccessInfo(this.$parent.url)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    redeemUnderlying(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let redeemAmount
      if (tokenName===constants.FIL){
        assetAddress=address.bhp.FIL
        assetToken=address.bhp.eFIL
        redeemAmount=new Decimal(this.supplyFil.redeemAmount).mul(Decimal.pow(10,decimals.FIL)).toFixed(0,Decimal.ROUND_DOWN)
      }else if (tokenName===constants.USDT){
        assetAddress=address.bhp.USDT
        assetToken=address.bhp.eUSDT
        redeemAmount=new Decimal(this.supplyUsdt.redeemAmount).mul(Decimal.pow(10,decimals.USDT)).toFixed(0,Decimal.ROUND_DOWN)
      }
      console.log("redeemAmount",redeemAmount)

      //获取到存款数量之后转换为小单位wei
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
        this.verifyContractResult(res,this.$parent.url)
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    redeemAllToken(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let redeemToken
      if (tokenName===constants.FIL){
        assetAddress=address.bhp.FIL
        assetToken=address.bhp.eFIL
        redeemToken=new Decimal(this.panel.efilBalance).mul(Decimal.pow(10,decimals.eFIL)).toFixed(0,Decimal.ROUND_DOWN)
      }else if (tokenName===constants.USDT){
        assetAddress=address.bhp.USDT
        assetToken=address.bhp.eUSDT
        redeemToken=new Decimal(this.panel.eusdtBalance).mul(Decimal.pow(10,decimals.eUSDT)).toFixed(0,Decimal.ROUND_DOWN)
      }
      console.log("redeemToken",redeemToken)

      //获取到存款数量之后转换为小单位wei
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.filSupplyDialogVisible = false;
      this.usdtSupplyDialogVisible = false;
      redeem(
          this.$store.state.wallet,
          redeemToken,
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
    getResultInfo(result,info) {
      this.info.title = "错误提示"
      this.info.result = info
      this.dialogResultVisible = true
      //this.updatePanel()
    },
    verifyContractResult(res,url){
      console.log(JSON.stringify(res.events))
      if (!(typeof(res.events.Failure)==="undefined")){
        let returnValues=res.events.Failure.returnValues
        let result
        let info
        switch (returnValues.error){
          case "14":
            result="资金池余额不足"
            break;
          case "15":
            result="转账转出失败"
            break;
        }
        switch (returnValues.info){
          case "9":
            info="资金池可用余额不足，借款不允许"
            break;
          case "15":
            info="转账转出失败"
          case "47":
            info="取款金额错误，超出实际金额"
            break;
        }
        console.log("result,info",result,info)
        this.getResultInfo(result,info)
      }else {
        this.getSuccessInfo(url)
      }
    },
    borrowToken(tokenName) {
      //usdt 借款之前先判断是否存入了fil并开启了抵押
      if (!this.verifyConnect()){
        return
      }

      let assetToken
      //获取到存款数量之后转换为小单位wei
      let borrowAmount
      if (tokenName===constants.FIL){
        assetToken=address.bhp.eFIL
        borrowAmount=new Decimal(this.borrowUsdt.borrowAmount).mul(Decimal.pow(10,decimals.FIL)).toNumber().toString()
      }else if (tokenName===constants.USDT){
        assetToken=address.bhp.eUSDT
        borrowAmount=new Decimal(this.borrowUsdt.borrowAmount).mul(Decimal.pow(10,decimals.USDT)).toNumber().toString()
      }
      console.log("borrowAmount",borrowAmount)
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
        this.verifyContractResult(res,this.$parent.url)

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
      if (tokenName===constants.FIL){

      }else if (tokenName===constants.USDT){
        assetAddress=address.bhp.USDT
        assetToken=address.bhp.eUSDT
        repayAmount=new Decimal(this.borrowUsdt.repayAmount).mul(Decimal.pow(10,decimals.USDT)).toFixed(0,Decimal.ROUND_DOWN)
      }
      console.log("repayAmount",repayAmount.toString())
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
        this.verifyContractResult(res,this.$parent.url)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    repayAllToken(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      //2的256次方-1
      let repayAmount=(BigInt(Math.pow(2,256))-1n).toString()
      console.log("repayAmount：",repayAmount)
      //let repayAmount="115792089237316195423570985008687907853269984665640564039457584007913129639935"
      if (tokenName===constants.FIL){

      }else if (tokenName===constants.USDT){
        assetAddress=address.bhp.USDT
        assetToken=address.bhp.eUSDT
      }
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
      if (tokenName===constants.FIL){
        assetAddress=address.bhp.FIL
      }else if (tokenName===constants.USDT){
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
        if (tokenName===constants.FIL){
          this.supplyFil.mintAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.FIL)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        }else if (tokenName===constants.USDT){
          this.supplyUsdt.mintAmount = new Decimal(res).dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
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
      if (tokenName===constants.FIL){
        //先判断是否有借款金额，没有设置为最大
        if (new Decimal(that.borrowUsdt.alreadyCashPercent).eq(new Decimal(0))===true){
          this.supplyFil.redeemAmount=new Decimal(that.supplyFil.count).toFixed(decimals.FIL, Decimal.ROUND_DOWN)
        }else{
          this.supplyFil.redeemAmount=new Decimal(that.supplyFil.userCanRedeemCount).toFixed(decimals.FIL, Decimal.ROUND_DOWN)
        }
      }else if (tokenName===constants.USDT){
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
    getRepayMaxBalance(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      let that=this
      console.log("getRepayMaxBalance",that.borrowUsdt.count)
      this.borrowUsdt.repayAmount=new Decimal(that.borrowUsdt.count).toString()
    },
    erc20Approve(tokenName) {
      if (!this.verifyConnect()){
        return
      }
      let assetAddress
      let assetToken
      if (tokenName===constants.FIL){
        assetToken=address.bhp.eFIL
        assetAddress=address.bhp.FIL
      }else if (tokenName===constants.USDT){
        assetToken=address.bhp.eUSDT
        assetAddress=address.bhp.USDT
      }
      console.log("tokenName",tokenName,assetAddress)
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
        this.getSuccessInfo(this.$parent.url)
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
      this.getSupplyPage(constants.eUSDT)
      this.getBorrowPage(constants.eUSDT)
      this.getSupplyPage(constants.eFIL)
    },
    viewPrice() {
      //获取用户USDT余额
      balanceOf(
          this.$store.state.wallet,
          address.bhp.USDT,
      ).then(res => {
          let amount=new Decimal(res)
          this.panel.usdtBalance=amount.dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      //获取用户FIL余额
      balanceOf(
          this.$store.state.wallet,
          address.bhp.FIL,
      ).then(res => {
        let amount=new Decimal(res)
        this.panel.filBalance=amount.dividedBy(Decimal.pow(10,decimals.FIL)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
      }).catch(err => {
        this.getErrorInfo(err)
      })
    },
    async getUserBorrowTokenPage(account,tokenName){
      let eTokenAddress
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取用户USDT借贷金额
      await borrowBalanceStored(
          this.$store.state.wallet,
          account,
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
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取用户eUSDT余额
      await balanceOf(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result=res
        let amount=new Decimal(res)
        if (tokenName===constants.eUSDT){
          this.panel.eusdtBalance=amount.dividedBy(Decimal.pow(10,decimals.eUSDT)).toFixed(decimals.eUSDT,Decimal.ROUND_DOWN)
        }else if (tokenName===constants.eFIL){
          this.panel.efilBalance=amount.dividedBy(Decimal.pow(10,decimals.eFIL)).toFixed(decimals.eFIL,Decimal.ROUND_DOWN)
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async accrualBlockNumberPage(tokenName){
      let eTokenAddress
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取USDT池子最新计算高度
      await accrualBlockNumber(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result=res
        if (tokenName===constants.eUSDT){
          this.panel.accrualUsdtBlockNumber=res
        }else if (tokenName===constants.eFIL){
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
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取最后一次合约触发时的总储备金
      await totalReserves(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result=res
        if (tokenName===constants.eUSDT){
          this.panel.usdtTotalReservesInfo=new Decimal(res).div(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        }else if (tokenName===constants.eFIL){
          this.panel.filTotalReservesInfo=new Decimal(res).div(Decimal.pow(10,decimals.FIL)).toFixed(decimals.FIL,Decimal.ROUND_DOWN)
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async totalBorrowsPage(tokenName){
      let eTokenAddress
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取最后一次合约触发时的借款总额
      await totalBorrows(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result=res
        let amount=new Decimal(res)
        if (tokenName===constants.eUSDT){
          this.panel.usdtTotalBorrowsInfo=amount.dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        }else if (tokenName===constants.eFIL){
          this.panel.filTotalBorrowsInfo=amount.dividedBy(Decimal.pow(10,decimals.FIL)).toFixed(decimals.FIL,Decimal.ROUND_DOWN)
        }

      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async borrowIndexPage(tokenName){
      let eTokenAddress
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取最后一次合约触发时的借款总额
      await borrowIndex(
          this.$store.state.wallet,
          address.bhp.eUSDT,
      ).then(res => {
        result=res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async getCashPage(tokenName){
      let eTokenAddress
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取USDT资金池余额
      await getCash(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res =>{
        result=res
        if (tokenName===constants.eUSDT){
          this.panel.usdtTotalCash=new Decimal(res).dividedBy(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        }else if (tokenName===constants.eFIL){
          this.panel.filTotalCash=new Decimal(res).dividedBy(Decimal.pow(10,decimals.FIL)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        }
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
    async exchangeRateStoredPage(tokenName){
      let eTokenAddress
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取USDT资金池余额
      await exchangeRateStored(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res =>{
        result=res
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
    async getReserveFactorMantissaPage(tokenName){
      let eTokenAddress
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      let result=0
      //获取USDT资金池余额
      await reserveFactorMantissa(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res =>{
        result=res
      }).catch(err=>{
        this.getErrorInfo(err)
      })
      return result
    },
    async totalSupplyPage(tokenName){
      let eTokenAddress
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
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
    async utilizationRatePage(cash,borrows,reserves){
      let result=0
      //获取USDT资金池余额
      await utilizationRate(
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
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      await viewPrice(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        let balance = new Decimal(res)
        if (tokenName===constants.eUSDT){
          result= balance.dividedBy(Decimal.pow(10,30))
          this.panel.usdtPrice= balance.dividedBy(Decimal.pow(10,30)).toFixed(4)
        }else if (tokenName===constants.eFIL){
          result= balance.dividedBy(Decimal.pow(10,decimals.FIL))
          this.panel.filPrice= balance.dividedBy(Decimal.pow(10,decimals.FIL)).toFixed(4)
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
      let assetToken=address.bhp.eFIL
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
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
      }
      //获取抵押因子 用于计算抵押存款
      await markets(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        let collateralFactorMantissa=res.collateralFactorMantissa
        if (tokenName===constants.eUSDT){
          result= collateralFactorMantissa
          this.panel.usdtCollateralFactor= new Decimal(collateralFactorMantissa).div(Decimal.pow(10,18))
        }else if (tokenName===constants.eFIL){
          result= collateralFactorMantissa
          this.panel.filCollateralFactor= new Decimal(collateralFactorMantissa).div(Decimal.pow(10,18))
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
          address.bhp.eFIL,
      ).then(res => {
        this.supplyFil.isEnterMarket= res
        isSuccess=res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return isSuccess
    },
    async accrueInterestPage(tokenName) {
      let currentBlockNumber=await this.getBlockNumberPage()
      let accrualBlockNumber=await this.accrualBlockNumberPage(tokenName)
      let totalCash=await this.getCashPage(tokenName)
      let totalBorrows=await this.totalBorrowsPage(tokenName)
      let totalReserves=await this.totalReservesPage(tokenName)
      let borrowIndex=await this.borrowIndexPage(tokenName)
      if (tokenName===constants.eUSDT){
        let utilizationRate=await this.utilizationRatePage(totalCash,totalBorrows,totalReserves)
        this.panel.usdtUtilizationRate=new Decimal(utilizationRate).div(Decimal.pow(10,16)).toFixed(16,Decimal.ROUND_DOWN)
      }else if (tokenName===constants.eFIL){
        let utilizationRate=await this.utilizationRatePage(totalCash,totalBorrows,totalReserves)
        this.panel.filUtilizationRate=new Decimal(utilizationRate).div(Decimal.pow(10,16)).toFixed(16,Decimal.ROUND_DOWN)
      }
      let borrowRate=await this.getBorrowRatePage(totalCash,totalBorrows,totalReserves)
      let reserveFactorMantissa=await this.getReserveFactorMantissaPage(tokenName)
      this.borrowUsdt.borrowRate=borrowRate
      // 当前区块和 accrualBlockNumberPrior 之间的区块数
      let blockDelta=new Decimal(currentBlockNumber).sub(new Decimal(accrualBlockNumber))
      // 区块区间内的单位利息=借贷利率*区块数
      let simpleInterestFactor=new Decimal(borrowRate).mul(new Decimal(blockDelta))
      // 总借款在该区块区间内产生的总利息=区块区间内的单位利息*总借款/1Ether(最后取整数值)
      let interestAccumulated=simpleInterestFactor.mul(new Decimal(totalBorrows)).div(Decimal.pow(10,18)).toFixed(0,Decimal.ROUND_DOWN)
      // 新的借款总额：总利息累加到总借款中=总借款在该区块区间内产生的总利息+总借款
      let totalBorrowsNew=new Decimal(interestAccumulated).add(new Decimal(totalBorrows))
      // 原来的链上储备资金 * interestAccumulated +现在获取到的
      // totalReservesNew = reserveFactorMantissa * interestAccumulated / 1Ether (取整数值) + totalReserves，根据储备金率将部分利息累加到储备金中
      let totalReservesNew=new Decimal(new Decimal(reserveFactorMantissa).mul(interestAccumulated).div(Decimal.pow(10,18)).toFixed(0,Decimal.ROUND_DOWN)).add(new Decimal(totalReserves))
      // 累加借款指数=区块区间内的单位利息x借款指数/1Ether+借款指数
      let borrowIndexNew=new Decimal(simpleInterestFactor.mul(new Decimal(borrowIndex)).div(Decimal.pow(10,18)).toFixed(0,Decimal.ROUND_DOWN)).add(new Decimal(borrowIndex))
      //console.log("totalBorrowsNew",totalBorrowsNew.toString(),totalReservesNew.toString(),borrowIndexNew.toString(),totalCash.toString())
      return {borrowIndex,totalBorrowsNew,totalReservesNew,borrowIndexNew,totalCash}
    },
    async exchangeRatePage(tokenName){
      let list=await this.accrueInterestPage(tokenName)
      //exchangeRate = (totalCash + totalBorrows - totalReserves) / totalSupply
      let cashPlusBorrowsMinusReserves=new Decimal(list.totalCash).add(new Decimal(list.totalBorrowsNew)).sub(new Decimal(list.totalReservesNew))
      // 兑换率=(资金池余额+借贷总额-总储备金)*1Ether/总供应量
      let exchangeRate
      // 总供应量
      let totalSupply=await this.totalSupplyPage(tokenName)
      if (new Decimal(totalSupply).cmp(new Decimal(0))===0){
        exchangeRate=await this.exchangeRateStoredPage(tokenName)
        return exchangeRate
      }
      // cToken和标的资产的小数点换算 18+标的资产小数位-cToken资产小数位
      // oneCTokenInUnderlying = exchangeRateCurrent / (1 * 10 ^ (18 + underlyingDecimals - cTokenDecimals))
      const cTokenDecimals = 8;
      let mantissa
      if (tokenName===constants.eUSDT){
        mantissa=18+decimals.USDT-cTokenDecimals
        exchangeRate=cashPlusBorrowsMinusReserves.mul(Decimal.pow(10,18)).div(new Decimal(totalSupply)).toFixed(0,Decimal.ROUND_DOWN)
        this.panel.usdtExchangeRate=new Decimal(exchangeRate).div(Decimal.pow(10,mantissa))
      }else if (tokenName===constants.eFIL){
        mantissa=18+decimals.FIL-cTokenDecimals
        exchangeRate=cashPlusBorrowsMinusReserves.mul(Decimal.pow(10,18)).div(new Decimal(totalSupply)).toFixed(0,Decimal.ROUND_DOWN)
        this.panel.filExchangeRate=new Decimal(exchangeRate).div(Decimal.pow(10,mantissa))
      }
      //console.log("exchangeRate",exchangeRate.toString(),new Decimal(exchangeRate).div(Decimal.pow(10,mantissa)).toString())
      return exchangeRate
    },
    async getSupplyPage(tokenName){
      //用户的eToken存款数量
      let redeemTokensIn=await this.getUserSupplyTokenPage(tokenName)
      // 最新兑换率
      let exchangeRateMantissa=await this.exchangeRatePage(tokenName)
      let redeemBalance
      let redeemAmount
      let price=await this.getPricePage(tokenName)
      let collateralFactor=await this.getCollateralFactor(tokenName)
      if (tokenName===constants.eUSDT){
        //存款金额=兑换率*存款数量/1Ether （取整数值）
        redeemAmount=new Decimal(new Decimal(exchangeRateMantissa).mul(new Decimal(redeemTokensIn)).div(Decimal.pow(10,18)).toFixed(0,Decimal.ROUND_DOWN)).div(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        this.supplyUsdt.count=redeemAmount.toString()
        redeemBalance=new Decimal(redeemAmount).mul(new Decimal(price))
        //金额保留8位
        this.supplyUsdt.balance=redeemBalance.toDecimalPlaces(8,Decimal.ROUND_DOWN)
      }else if (tokenName===constants.eFIL){
        //存款金额=兑换率*存款数量/1Ether （取整数值）
        redeemAmount=new Decimal(new Decimal(exchangeRateMantissa).mul(new Decimal(redeemTokensIn)).div(Decimal.pow(10,18)).toFixed(0,Decimal.ROUND_DOWN)).div(Decimal.pow(10,decimals.FIL)).toFixed(decimals.FIL,Decimal.ROUND_DOWN)
        this.supplyFil.count=redeemAmount.toString()
        redeemBalance=new Decimal(redeemAmount).mul(new Decimal(price))
        this.supplyFil.balance=redeemBalance.toDecimalPlaces(8,Decimal.ROUND_DOWN)
        // 计算FIL可抵押多少FIL=FIL余额*FIL抵押因子/1Ether
        // 存款数量xfil价格x0.6
        let enterCash=redeemBalance.mul(new Decimal(collateralFactor).div(Decimal.pow(10,18)))
        // 用户最少存多少FIL的数量=当前借贷总额/（FIL抵押因子/1Ether）/fil价格
        let limitPercent=new Decimal(0.8)
        // 借款USDT最大额度金额(80%限额)
        let borrowAmountLimit=enterCash.mul(limitPercent)
        this.borrowUsdt.borrowAmountLimit=borrowAmountLimit.toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        // 借款USDT最大额度数量(80%限额)
        //获取usdt价格
        let usdtPrice=await this.getPricePage(constants.eUSDT)
        //最大金额/价格=最大数量
        let borrowCountLimit=enterCash.mul(limitPercent).div(new Decimal(usdtPrice))
        this.borrowUsdt.borrowCountLimit=borrowCountLimit.toFixed(decimals.USDT,Decimal.ROUND_DOWN)
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
      await this.searchLiquidity()
      return {redeemAmount,redeemBalance}
    },
    async getBorrowPage(tokenName){
      let list=await this.accrueInterestPage(tokenName)
      let borrowBalance=await this.getUserBorrowTokenPage(this.$store.state.wallet.address,tokenName)
      // principalTimesIndex=borrower.borrowBalance * market.borrowIndex
      let price=await this.getPricePage(tokenName)
      if (tokenName===constants.eUSDT){
        let recentBorrowBalance=new Decimal(borrowBalance).mul(list.borrowIndexNew).div(list.borrowIndex).div(Decimal.pow(10,decimals.USDT)).toFixed(decimals.USDT,Decimal.ROUND_DOWN)
        this.borrowUsdt.count=recentBorrowBalance
        this.borrowUsdt.balance=new Decimal(recentBorrowBalance).mul(new Decimal(price)).toFixed(8,Decimal.ROUND_DOWN)
      }else if (tokenName===constants.eFIL){

      }
    },
    async getApy(){
      //假定bhp主网 每块13.15s
      let blocksPerDay=6570
      //一年按照365天计算
      let daysPerYear=365
      let supplyRatePerBlock=await this.supplyRatePerBlockPage(constants.eUSDT)
      let borrowRatePerBlock=await this.borrowRatePerBlockPage(constants.eUSDT)
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
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
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
      if (tokenName===constants.eUSDT){
        eTokenAddress=address.bhp.eUSDT
      }else if (tokenName===constants.eFIL){
        eTokenAddress=address.bhp.eFIL
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
    async searchLiquidity(){
      let that=this
      this.account=that.$store.state.wallet.address
      this.liquidity.sumCollateral=new Decimal(that.supplyFil.balance).mul(new Decimal(that.panel.filCollateralFactor))
      this.liquidity.sumBorrowPlusEffects=that.borrowUsdt.balance
    }
  },
};
</script>
<style>
.my-label {
  background: #E1F3D8;
}

.my-content {
  background: #FDE2E2;
}
</style>