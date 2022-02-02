<template>
  <div style="margin:0 2em">
    <el-tabs type="card" tab-position="right">
      <el-row :gutter="24">
        <el-tabs v-model="panel.activeName" type="card">
          <el-tab-pane label="面板" name="third">
            <!--   1.面板 -->
            <el-col :span="12" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>市场概况</span>
                </div>
                <el-col :span="24" style="margin-bottom: 20px;">
                  <el-collapse v-model="collapseActiveNames" @change="handleChange">
                    <el-collapse-item title="利率模型" name="1">
                      <div>
                        <el-descriptions size="mini" title="USDT" direction="vertical" :column="6" border  style="margin-bottom: 15px;">
                          <el-descriptions-item label="每年的区块数blocksPerYear">{{ panel.common.blocksPerYear }}</el-descriptions-item>
                          <el-descriptions-item label="基准区块利率baseRatePerBlock">{{ panel.USDT.baseRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="区块斜率multiplierPerBlock">{{ panel.USDT.multiplierPerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="拐点后区块斜率jumpMultiplierPerBlock">{{ panel.USDT.jumpMultiplierPerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="拐点kink">{{ panel.USDT.kink }} %</el-descriptions-item>
                          <el-descriptions-item label="储备金率">{{ panel.USDT.reserveFactorMantissa }} %</el-descriptions-item>
                          <el-descriptions-item label="基准年利率baseRatePerYear">{{ panel.USDT.baseRatePerYear }}</el-descriptions-item>
                          <el-descriptions-item label="年斜率(区块斜率*每年的区块数*拐点利用率)">{{ panel.USDT.multiplierPerYear }}</el-descriptions-item>
                          <el-descriptions-item label="拐点后年斜率jumpMultiplierPerYear">{{ panel.USDT.jumpMultiplierPerYear}}</el-descriptions-item>
                          <el-descriptions-item label="R0">{{ panel.USDT.r0}} %</el-descriptions-item>
                          <el-descriptions-item label="R1">{{ panel.USDT.r1 }} %</el-descriptions-item>
                          <el-descriptions-item label="R2">{{ panel.USDT.r2 }} %</el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions title="BTC/ETH" direction="vertical" :column="6" border size="mini" >
                          <el-descriptions-item label="每年的区块数blocksPerYear">{{ panel.common.blocksPerYear }}</el-descriptions-item>
                          <el-descriptions-item label="基准区块利率baseRatePerBlock">{{ panel.WETH.baseRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="区块斜率multiplierPerBlock">{{ panel.WETH.multiplierPerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="拐点后区块斜率jumpMultiplierPerBlock">{{ panel.WETH.multiplierPerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="拐点kink">{{ panel.WETH.kink }} %</el-descriptions-item>
                          <el-descriptions-item label="储备金率">{{ panel.WETH.reserveFactorMantissa }} %</el-descriptions-item>
                          <el-descriptions-item label="基准年利率baseRatePerYear">{{ panel.WETH.baseRatePerYear }}</el-descriptions-item>
                          <el-descriptions-item label="年斜率(区块斜率*每年的区块数*拐点利用率)">{{ panel.WETH.multiplierPerYear }}</el-descriptions-item>
                          <el-descriptions-item label="拐点后年斜率jumpMultiplierPerYear">{{ panel.WETH.jumpMultiplierPerYear}}</el-descriptions-item>
                          <el-descriptions-item label="R0">{{ panel.WETH.r0}} %</el-descriptions-item>
                          <el-descriptions-item label="R1">{{ panel.WETH.r1}} %</el-descriptions-item>
                          <el-descriptions-item label="R2">{{ panel.WETH.r2}} %</el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions title="BNB" direction="vertical" :column="6" border size="mini" >
                          <el-descriptions-item label="每年的区块数blocksPerYear">{{ panel.common.blocksPerYear }}</el-descriptions-item>
                          <el-descriptions-item label="基准区块利率baseRatePerBlock">{{ panel.WBNB.baseRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="区块斜率multiplierPerBlock">{{ panel.WBNB.multiplierPerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="拐点后区块斜率jumpMultiplierPerBlock">{{ panel.WBNB.jumpMultiplierPerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="拐点kink">{{ panel.WBNB.kink }} %</el-descriptions-item>
                          <el-descriptions-item label="储备金率">{{ panel.WBNB.reserveFactorMantissa }} %</el-descriptions-item>
                          <el-descriptions-item label="基准年利率baseRatePerYear">{{ panel.WBNB.baseRatePerYear }}</el-descriptions-item>
                          <el-descriptions-item label="年斜率(区块斜率*每年的区块数*拐点利用率)">{{ panel.WBNB.multiplierPerYear }}</el-descriptions-item>
                          <el-descriptions-item label="拐点后年斜率jumpMultiplierPerYear">{{ panel.WBNB.jumpMultiplierPerYear}}</el-descriptions-item>
                          <el-descriptions-item label="R0">{{ panel.WBNB.r0}} %</el-descriptions-item>
                          <el-descriptions-item label="R1">{{ panel.WBNB.r1}} %</el-descriptions-item>
                          <el-descriptions-item label="R2">{{ panel.WBNB.r2}} %</el-descriptions-item>
                        </el-descriptions>
                      </div>
                    </el-collapse-item>
                    <el-collapse-item title="平台" name="2">
                      <div>
                        <el-descriptions direction="vertical" :column="2" border size="mini" style="margin-bottom: 15px;">
                          <el-descriptions-item label="当前高度">{{ panel.blockNumber }}</el-descriptions-item>
                          <el-descriptions-item label="Unitroller清算系数">{{ panel.closeFactorMantissa }} %</el-descriptions-item>

                          <el-descriptions-item label="cToken合约最新触发高度">{{ panel.USDT.accrualBlockNumber}}</el-descriptions-item>
                          <el-descriptions-item label="cToken合约最新触发的借款总额">{{ panel.USDT.totalBorrowsInfo }} USDT</el-descriptions-item>

                          <el-descriptions-item label="cToken合约最新触发高度">{{ panel.WETH.accrualBlockNumber }}</el-descriptions-item>
                          <el-descriptions-item label="cToken合约最新触发的借款总额">{{ panel.WETH.totalBorrowsInfo }} ETH</el-descriptions-item>

                          <el-descriptions-item label="cToken合约最新触发高度">{{ panel.WBNB.accrualBlockNumber }}</el-descriptions-item>
                          <el-descriptions-item label="cToken合约最新触发的借款总额">{{ panel.WBNB.totalBorrowsInfo }} BNB</el-descriptions-item>
                        </el-descriptions>
                      </div>
                    </el-collapse-item>
                    <el-collapse-item title="参数" name="4">
                      <el-col :span="8">
                        <el-descriptions title="USDT" direction="horizontal" :column="1" border size="mini" >
                          <el-descriptions-item label="USDT价格"> $ {{ panel.USDT.price }}</el-descriptions-item>
                          <el-descriptions-item label="USDT资金池余额"> {{ panel.USDT.totalCash }} USDT</el-descriptions-item>
                          <el-descriptions-item label="USDT借款总数量"> {{ panel.USDT.totalBorrowsInfo }} USDT</el-descriptions-item>
                          <el-descriptions-item label="USDT储备金"> {{ panel.USDT.totalReservesInfo }} USDT</el-descriptions-item>
                          <el-descriptions-item label="USDT利用率"> {{ panel.USDT.utilizationRate }} %</el-descriptions-item>
                          <el-descriptions-item label="USDT每个区块借款利率">{{ panel.USDT.borrowRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="USDT每个区块存款利率">{{ panel.USDT.supplyRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="USDT借款年APY">{{ panel.USDT.borrowApy }} %</el-descriptions-item>
                          <el-descriptions-item label="USDT存款年APY">{{ panel.USDT.supplyApy }} %</el-descriptions-item>
                          <el-descriptions-item label="USDT兑换率"> 1 USDT ={{ panel.USDT.exchangeRate }} eUSDT</el-descriptions-item>
                          <el-descriptions-item label="USDT最大抵押系数"> {{ panel.USDT.collateralFactor }} %</el-descriptions-item>
                        </el-descriptions>
                      </el-col>
                      <el-col :span="8">
                        <el-descriptions title="wETH" direction="horizontal" :column="1" border size="mini" >
                          <el-descriptions-item label="wETH价格"> $ {{ panel.WETH.price }}</el-descriptions-item>
                          <el-descriptions-item label="wETH资金池余额"> {{ panel.WETH.totalCash }} wETH</el-descriptions-item>
                          <el-descriptions-item label="wETH借款总数量"> {{ panel.WETH.totalBorrowsInfo }} wETH</el-descriptions-item>
                          <el-descriptions-item label="wETH储备金"> {{ panel.WETH.totalReservesInfo }} wETH</el-descriptions-item>
                          <el-descriptions-item label="wETH利用率"> {{ panel.WETH.utilizationRate }} %</el-descriptions-item>
                          <el-descriptions-item label="wETH每个区块借款利率">{{ panel.WETH.borrowRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="wETH每个区块存款利率">{{ panel.WETH.supplyRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="wETH借款年APY">{{ panel.WETH.borrowApy }} %</el-descriptions-item>
                          <el-descriptions-item label="wETH存款年APY">{{ panel.WETH.supplyApy }} %</el-descriptions-item>
                          <el-descriptions-item label="wETH兑换率"> 1 wETH ={{ panel.WETH.exchangeRate }} eETH</el-descriptions-item>
                          <el-descriptions-item label="wETH最大抵押系数"> {{ panel.WETH.collateralFactor }} %</el-descriptions-item>
                        </el-descriptions>
                      </el-col>
                      <el-col :span="8">
                        <el-descriptions title="wBNB" direction="horizontal" :column="1" border size="mini" >
                          <el-descriptions-item label="wBNB价格"> $ {{ panel.WBNB.price }}</el-descriptions-item>
                          <el-descriptions-item label="wBNB资金池余额"> {{ panel.WBNB.totalCash }} wBNB</el-descriptions-item>
                          <el-descriptions-item label="wBNB借款总数量"> {{ panel.WBNB.totalBorrowsInfo }} wBNB</el-descriptions-item>
                          <el-descriptions-item label="wBNB储备金"> {{ panel.WBNB.totalReservesInfo }} wBNB</el-descriptions-item>
                          <el-descriptions-item label="wBNB利用率"> {{ panel.WBNB.utilizationRate }} %</el-descriptions-item>
                          <el-descriptions-item label="wBNB每个区块借款利率">{{ panel.WBNB.borrowRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="wBNB每个区块存款利率">{{ panel.WBNB.supplyRatePerBlock }}</el-descriptions-item>
                          <el-descriptions-item label="wBNB借款年APY">{{ panel.WBNB.borrowApy }} %</el-descriptions-item>
                          <el-descriptions-item label="wBNB存款年APY">{{ panel.WBNB.supplyApy }} %</el-descriptions-item>
                          <el-descriptions-item label="wBNB兑换率"> 1 wBNB ={{ panel.WBNB.exchangeRate }} eBNB</el-descriptions-item>
                          <el-descriptions-item label="wBNB最大抵押系数"> {{ panel.WBNB.collateralFactor }} %</el-descriptions-item>
                        </el-descriptions>
                      </el-col>
                    </el-collapse-item>
                  </el-collapse>
                </el-col>

              </el-card>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="借贷" name="first">
            <!--   2.存取 -->
            <el-col :span="24">
              <el-descriptions class="margin-top" title="用户" :column="6" direction="vertical" border size="mini" style="margin-top: 10px;">
                <el-descriptions-item label="钱包USDT数量">{{ panel.USDT.balance }} USDT</el-descriptions-item>
                <el-descriptions-item label="凭证eUSDT数量">{{ panel.USDT.eBalance }} eUSDT</el-descriptions-item>
                <el-descriptions-item label="钱包WETH数量">{{ panel.WETH.balance }} WETH</el-descriptions-item>
                <el-descriptions-item label="凭证eETH数量">{{ panel.WETH.eBalance }} eETH</el-descriptions-item>
                <el-descriptions-item label="钱包WBNB数量">{{ panel.WBNB.balance }} WBNB</el-descriptions-item>
                <el-descriptions-item label="凭证eBNB数量">{{ panel.WBNB.eBalance }} eBNB</el-descriptions-item>
                <el-descriptions-item label="用户存款总额(USDT+ETH+BNB)"> ${{ market.WETH.supply.balance }}+ ${{ market.USDT.supply.balance}}</el-descriptions-item>
                <el-descriptions-item label="用户借款总额(USDT)"> $ {{ market.USDT.borrow.balance }}</el-descriptions-item>
              </el-descriptions>
            </el-col>
            <el-col :span="24" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>存款市场</span>
                </div>
                <el-descriptions size="mini" :column="3" border>
                  <el-descriptions-item label="资产">USDT</el-descriptions-item>
                  <el-descriptions-item label="存款数量">{{ market.USDT.supply.count }} USDT</el-descriptions-item>
                  <el-descriptions-item label="存款APY"> {{ panel.USDT.supplyApy }} %</el-descriptions-item>
                  <el-descriptions-item label="存款金额">$ {{ market.USDT.supply.balance }}</el-descriptions-item>
                  <el-descriptions-item label="抵押开关">
                    <el-switch
                        v-model="market.USDT.supply.isEnterMarket"
                        disabled
                    >
                    </el-switch>
                  </el-descriptions-item>
                  <el-descriptions-item label="操作">
                    <el-button size="small" @click="openSupply(`USDT`)" type="success">存取</el-button>
                    <el-button size="small" v-show="!market.USDT.supply.isEnterMarket" @click="switchMarketStatus('USDT')"
                               type="success">开启抵押
                    </el-button>
                    <el-button size="small" v-show="market.USDT.supply.isEnterMarket" @click="switchMarketStatus('USDT')"
                               type="success">关闭抵押
                    </el-button>
                  </el-descriptions-item>
                </el-descriptions>
                <el-divider></el-divider>
                <el-descriptions size="mini" :column="3" border>
                  <el-descriptions-item label="资产">WETH</el-descriptions-item>
                  <el-descriptions-item label="存款数量">{{ market.WETH.supply.count }} WETH</el-descriptions-item>
                  <el-descriptions-item label="存款APY"> {{ panel.WETH.supplyApy }} %</el-descriptions-item>
                  <el-descriptions-item label="存款金额">$ {{ market.WETH.supply.balance }}</el-descriptions-item>
                  <el-descriptions-item label="抵押开关">
                    <el-switch
                        v-model="market.WETH.supply.isEnterMarket"
                        disabled
                    >
                    </el-switch>
                  </el-descriptions-item>
                  <el-descriptions-item label="操作">
                    <el-button size="small" @click="openSupply('ETH')" type="success">存取</el-button>
                    <el-button size="small" v-show="!market.WETH.supply.isEnterMarket" @click="switchMarketStatus('ETH')"
                               type="success">开启抵押
                    </el-button>
                    <el-button size="small" v-show="market.WETH.supply.isEnterMarket" @click="switchMarketStatus('ETH')"
                               type="success">关闭抵押
                    </el-button>
                  </el-descriptions-item>
                </el-descriptions>
                <el-divider></el-divider>
                <el-descriptions size="mini" :column="3" border>
                  <el-descriptions-item label="资产">WBNB</el-descriptions-item>
                  <el-descriptions-item label="存款数量">{{ market.WBNB.supply.count }} WBNB</el-descriptions-item>
                  <el-descriptions-item label="存款APY"> {{ panel.WBNB.supplyApy }} %</el-descriptions-item>
                  <el-descriptions-item label="存款金额">$ {{ market.WBNB.supply.balance }}</el-descriptions-item>
                  <el-descriptions-item label="抵押开关">
                    <el-switch
                        v-model="market.WBNB.supply.isEnterMarket"
                        disabled
                    >
                    </el-switch>
                  </el-descriptions-item>
                  <el-descriptions-item label="操作">
                    <el-button size="small" @click="openSupply('BNB')" type="success">存取</el-button>
                    <el-button size="small" v-show="!market.WBNB.supply.isEnterMarket" @click="switchMarketStatus('BNB')"
                               type="success">开启抵押
                    </el-button>
                    <el-button size="small" v-show="market.WBNB.supply.isEnterMarket" @click="switchMarketStatus('BNB')"
                               type="success">关闭抵押
                    </el-button>
                  </el-descriptions-item>
                </el-descriptions>
              </el-card>
            </el-col>
            <!--   3.借还 -->
            <el-col :span="24" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>借款市场</span>
                </div>
                <el-descriptions size="mini" :column="3" border>
                  <el-descriptions-item label="资产">USDT</el-descriptions-item>
                  <el-descriptions-item label="借款数量">{{ market.USDT.borrow.count }} USDT</el-descriptions-item>
                  <el-descriptions-item label="借款APY">{{ panel.USDT.borrowApy }} %</el-descriptions-item>
                  <el-descriptions-item label="借款金额">$ {{ market.USDT.borrow.balance }}</el-descriptions-item>
                  <el-descriptions-item label="操作">
                    <el-button size="small" @click="openBorrow('USDT')" type="success">借还</el-button>
                  </el-descriptions-item>
                </el-descriptions>
                <el-divider></el-divider>
                <el-descriptions size="mini" :column="3" border>
                  <el-descriptions-item label="资产">WETH</el-descriptions-item>
                  <el-descriptions-item label="借款数量">{{ market.WETH.borrow.count }} WETH</el-descriptions-item>
                  <el-descriptions-item label="借款APY">{{ panel.WETH.borrowApy }} %</el-descriptions-item>
                  <el-descriptions-item label="借款金额">$ {{ market.WETH.borrow.balance }}</el-descriptions-item>
                  <el-descriptions-item label="操作">
                    <el-button size="small" @click="openBorrow('ETH')" type="success">借还</el-button>
                  </el-descriptions-item>
                </el-descriptions>
                <el-divider></el-divider>
                <el-descriptions size="mini" :column="3" border>
                  <el-descriptions-item label="资产">WBNB</el-descriptions-item>
                  <el-descriptions-item label="借款数量">{{ market.WBNB.borrow.count }} WBNB</el-descriptions-item>
                  <el-descriptions-item label="借款APY">{{ panel.WBNB.borrowApy }} %</el-descriptions-item>
                  <el-descriptions-item label="借款金额">$ {{ market.WBNB.borrow.balance }}</el-descriptions-item>
                  <el-descriptions-item label="操作">
                    <el-button size="small" @click="openBorrow('BNB')" type="success">借还</el-button>
                  </el-descriptions-item>
                </el-descriptions>
              </el-card>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="清算" name="second">
            <el-col :span="12" style="margin:10px auto auto;" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-tabs v-model="liquidity.activeName" tab-position="left">
                <el-tab-pane label="我的账户" name="first">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>我的账户</span>
                    </div>
                    <el-descriptions title="借款限额" :column="6" direction="vertical" border style="margin-top: 20px;">
                      <el-descriptions-item label="币种" label-class-name="my-label"> WETH</el-descriptions-item>
                      <el-descriptions-item label="数量">  {{ market.WETH.supply.count }}</el-descriptions-item>
                      <el-descriptions-item label="币价">$ {{ panel.WETH.price }}</el-descriptions-item>
                      <el-descriptions-item label="抵押率">{{ panel.WETH.collateralFactor }}</el-descriptions-item>
                      <el-descriptions-item label="抵押品价值(WETH抵押品+存款利息)">$ {{ market.WETH.supply.balance }}</el-descriptions-item>
                      <el-descriptions-item label="A(借款限额)=抵押品价值x抵押率(WETH)">$ {{
                          liquidity.sumCollateral
                        }}
                      </el-descriptions-item>
                    </el-descriptions>

                    <el-descriptions title="债务" :column="6" direction="vertical" border style="margin-top: 20px;">
                      <el-descriptions-item label="币种" label-class-name="my-label"> USDT </el-descriptions-item>
                      <el-descriptions-item label="数量"> {{ market.USDT.borrow.count }}</el-descriptions-item>
                      <el-descriptions-item label="币价">$ {{ panel.USDT.price }}</el-descriptions-item>
                      <el-descriptions-item label="B(当前借款总额)=最新借款总额+利息(USDT)">$ {{
                          liquidity.sumBorrowPlusEffects
                        }}
                      </el-descriptions-item>
                      <el-descriptions-item label="差值 A-B">如果A`<`B,差值为负数执行清算</el-descriptions-item>
                    </el-descriptions>

                    <el-descriptions title="清算" :column="6" direction="vertical" border style="margin-top: 20px;margin-bottom: 20px;">
                      <el-descriptions-item label="清算系数" label-class-name="my-label"> 50% </el-descriptions-item>
                      <el-descriptions-item label="清算奖励"> 8% </el-descriptions-item>
                      <el-descriptions-item label="偿还usdt数量" label-class-name="my-label"> 0 </el-descriptions-item>
                      <el-descriptions-item label="得到的WETH数量"> 0 </el-descriptions-item>
                    </el-descriptions>

                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                      <el-form-item label="借款人">
                        <el-input v-model="formInline.user" placeholder="借款人"></el-input>
                      </el-form-item>
                      <el-form-item label="还款金额">
                        <el-input v-model="formInline.region" placeholder="还款金额"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="success" @click="onSubmit">清算</el-button>
                      </el-form-item>
                    </el-form>
                  </el-card>
                </el-tab-pane>
                <el-tab-pane label="清算列表" name="second">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>清算池</span>
                      <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
                    </div>
                    <el-table
                        :data="liquidity.tableData"
                        border
                        style="width: 100%;align-content: center;">
                      <el-table-column
                          prop="id"
                          label="#"
                          width="180">
                        <template slot-scope="scope">
                          # {{ scope.row.id }}
                        </template>
                      </el-table-column>
                      <el-table-column
                          prop="pool"
                          label="清算池"
                          width="180">
                        <template slot-scope="scope">
                          {{ scope.row.pool }}
                        </template>
                      </el-table-column>
                      <el-table-column
                          prop="assetsValue"
                          label="资产价值">
                        <template slot-scope="scope">
                          $ {{ scope.row.assetsValue }}
                        </template>
                      </el-table-column>
                      <el-table-column
                          prop="borrowValue"
                          label="借款价值">
                        <template slot-scope="scope">
                          $ {{ scope.row.borrowValue }}
                        </template>
                      </el-table-column>
                      <el-table-column
                          prop="borrowCount"
                          :render-header="borrowCount"
                          label="借款">
                        <template slot-scope="scope">
                          {{ scope.row.borrowCount }} USDT
                        </template>
                      </el-table-column>
                      <el-table-column
                          prop="riskValue"
                          :render-header="riskValue"
                          label="风险值">
                        <template slot-scope="scope">
                          {{ scope.row.riskValue }}%
                        </template>
                      </el-table-column>
                      <el-table-column
                          label="操作">
                        <template slot-scope="scope">
                          <el-button size="small" type="success" @click="handleLiquid(scope.$index, scope.row)"
                                     disabled>清算
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-card>
                </el-tab-pane>
                <el-tab-pane label="FAQ" name="third">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>FAQ</span>
                      <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
                    </div>
                    <el-collapse>
                      <el-collapse-item title="什么是清算？" name="1">
                        <div>当借款人的未偿债务超过其质押物价值一定比例时，其质押物将被智能合约扣押，进入清算流程。此时，允许套利者调用清算合约，按照一定的折价比例进行清算。</div>
                      </el-collapse-item>
                      <el-collapse-item title="如何参与清算？" name="2">
                        <div>任何人都可以参与清算。平台提供清算接口给专业清算套利者使用，同时也提供清算界面方便一般用户参与，以获得清算奖励。</div>
                      </el-collapse-item>
                      <el-collapse-item title="参与清算的收益及风险？" name="3">
                        <div>清算人将被允许以一定折扣兑换被清算代币，再以市场价格出让的方式获利。但是，由于数字资产价格波动较大，以及潜在的流动性风险，清算人需在充分了解风险后参与清算。</div>
                      </el-collapse-item>
                    </el-collapse>
                  </el-card>
                </el-tab-pane>
              </el-tabs>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="合约" name="fourth">
            <el-card class="box-card">
              <el-tabs v-model="contract.activeName" tab-position="left">
                <el-tab-pane label="当前运行版" name="four">
                  <el-descriptions :title="this.addressInfo.current.name" :column="1" border>
                    <el-descriptions-item label="eBNB">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.eBNB]" target="_blank">{{
                          this.addressInfo.current.eBNB
                        }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="eETH">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.eETH]" target="_blank">{{
                          this.addressInfo.current.eETH
                        }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="eUSDT">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.eUSDT]" target="_blank">{{
                          this.addressInfo.current.eUSDT
                        }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="WETH">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.ETH]" target="_blank">{{
                          this.addressInfo.current.ETH
                        }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="USDT">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.USDT]" target="_blank">{{
                          this.addressInfo.current.USDT
                        }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="Unitroller">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.Unitroller]" target="_blank">
                        {{ this.addressInfo.current.Unitroller }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="Oracle">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.Oracle]" target="_blank">
                        {{ this.addressInfo.current.Oracle }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="UsdtJumpRateModel">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.UsdtJumpRateModel]" target="_blank">
                        {{ this.addressInfo.current.UsdtJumpRateModel }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="ETHJumpRateModel">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.ETHJumpRateModel]" target="_blank">
                        {{ this.addressInfo.current.ETHJumpRateModel }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="BaseJumpRateModel">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.BaseJumpRateModel]" target="_blank">
                        {{ this.addressInfo.current.BaseJumpRateModel }}
                      </el-link>
                    </el-descriptions-item>
                    <el-descriptions-item label="Comptroller">
                      <el-link :href="[this.addressInfo.current.url+this.addressInfo.current.Comptroller]" target="_blank">
                        {{ this.addressInfo.current.Comptroller }}
                      </el-link>
                    </el-descriptions-item>
                  </el-descriptions>
                </el-tab-pane>
                <el-tab-pane label="BHP测试网" name="first">
                  <el-descriptions title="BHP测试网" :column="1" border>
                    <el-descriptions-item label="eETH">0x5eb657300870019F4B3786E0Eb16DA0141e478fA</el-descriptions-item>
                    <el-descriptions-item label="eUSDT">0xb2c1aEF1a8C982A100199d9710AB8f1543bde44D</el-descriptions-item>
                    <el-descriptions-item label="WETH">0x8F66E03daC3316dFe38d50C66980702E7b4dFA38</el-descriptions-item>
                    <el-descriptions-item label="USDT">0x0cb4DcbB6271E694FA44A6A09d3b768E42A6a162</el-descriptions-item>
                    <el-descriptions-item label="Comptroller">0x7B4e6f7CBA9E441eC87742afFC2bfbfe8F1771eb</el-descriptions-item>
                    <el-descriptions-item label="Oracle">0x4c784E745CA045AfcCFd40053376fb2ad4A7Dec0</el-descriptions-item>
                    <el-descriptions-item label="UsdtJumpRateModel">0xC66CC25B43580e0f4B589ed4b0F331B8BB56235C</el-descriptions-item>
                    <el-descriptions-item label="WETHJumpRateModel">0x79A0d60FfE46519a63123A005055ed59a55c1C7c</el-descriptions-item>
                  </el-descriptions>
                </el-tab-pane>
                <el-tab-pane label="BSC测试网" name="second">
                  <el-descriptions title="BSC测试网" :column="1" border>
                    <el-descriptions-item label="eETH">0xF673099cae8EC04FF524d38924cb3BB5040503a0</el-descriptions-item>
                    <el-descriptions-item label="eUSDT">0xA3f1eC9d338b304a4c6ea1e0218364b35B83a1d4
                    </el-descriptions-item>
                    <el-descriptions-item label="WETH">0x8F66E03daC3316dFe38d50C66980702E7b4dFA38</el-descriptions-item>
                    <el-descriptions-item label="USDT">0xFaAA3D83d778836A2ECe0fEB597eA74e2Bcbb169</el-descriptions-item>
                    <el-descriptions-item label="Comptroller">0x25b297Dfb5c91A76181027c0eFbA86B7aaCB40f5</el-descriptions-item>
                    <el-descriptions-item label="Oracle">0x394078A417D16a0a0A611B38fc80084b8562cB28</el-descriptions-item>
                    <el-descriptions-item label="UsdtJumpRateModel">0x00182c24a9D279B0E6f5c2815956E5f4816371BF</el-descriptions-item>
                    <el-descriptions-item label="WETH chainlink">0x6307f94f2c998cba6c0d47a1f74e3a8ec8babcc0</el-descriptions-item>
                    <el-descriptions-item label="USDT chainlink">0xe8af72ef575800101f8e46cf8f399260544e0fc6</el-descriptions-item>
                  </el-descriptions>
                </el-tab-pane>
                <el-tab-pane label="BSC主网" name="third">
                  <el-descriptions title="BSC主网" :column="1" border>

                  </el-descriptions>
                </el-tab-pane>
              </el-tabs>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </el-tabs>
    <!--   WBNB存取 -->
    <el-dialog
        title="WBNB"
        :visible.sync="WBNBSupplyDialogVisible"
        width="36em"
        center>
      <el-tabs v-model="dialogActiveName">
        <el-tab-pane label="存款" name="first">
          <el-form label-position="top" label-width="80px" :model="market.WBNB.supply">
            <el-form-item label="存款数量">
              <el-input v-model="market.WBNB.supply.mintAmount" placeholder="请输入存款数量" clearable>
                <el-button slot="prepend" @click="getSupplyBalance('BNB')">最大值</el-button>
                <el-button slot="append">WBNB</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="存款数量" :contentStyle="{'text-align': 'right'}">{{ market.WBNB.supply.count }}
                WBNB
              </el-descriptions-item>
              <el-descriptions-item label="兑换率" :contentStyle="{'text-align': 'right'}">1 WBNB
                ={{ panel.WBNB.exchangeRate }} eBNB
              </el-descriptions-item>
              <el-descriptions-item label="钱包WBNB数量" :contentStyle="{'text-align': 'right'}">
                {{ panel.WBNB.balance }} WBNB
              </el-descriptions-item>
              <el-descriptions-item label="钱包eBNB数量" :contentStyle="{'text-align': 'right'}">
                {{ panel.WBNB.eBalance }} eBNB
              </el-descriptions-item>
              <el-descriptions-item label="市场剩余可取" :contentStyle="{'text-align': 'right'}">
                {{ panel.WBNB.totalCash }} WBNB
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="supplyToken('BNB')">存款</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="取款" name="second">
          <el-form label-position="top" label-width="80px" :model="market.WBNB.supply">
            <el-form-item label="取款数量">
              <el-input v-model="market.WBNB.supply.redeemAmount" clearable>
                <el-button slot="prepend" @click="getRedeemBalance('BNB')">安全最大值（80%）</el-button>
                <el-button slot="append">WBNB</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="存款数量" :contentStyle="{'text-align': 'right'}">{{ market.WBNB.supply.count }}
                WBNB
              </el-descriptions-item>
              <el-descriptions-item label="借款限额" :contentStyle="{'text-align': 'right'}">$ {{
                  market.WBNB.borrow.balance
                }} -> $ {{ market.WBNB.borrow.borrowAmountLimit }}
              </el-descriptions-item>
              <el-descriptions-item label="限额已使用" :contentStyle="{'text-align': 'right'}">
                {{ market.WBNB.borrow.alreadyCashPercent + ' %' }} -> {{ market.WBNB.borrow.borrowlimitPercent }} %
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="redeemUnderlying('BNB')">取款</el-button>
              <el-button type="success" @click="redeemAllToken('BNB')">取款全部</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <!--   WETH存取 -->
    <el-dialog
        title="WETH"
        :visible.sync="WETHSupplyDialogVisible"
        width="36em"
        center>
      <el-tabs v-model="dialogActiveName">
        <el-tab-pane label="存款" name="first">
          <el-form label-position="top" label-width="80px" :model="market.WETH.supply">
            <el-form-item label="存款数量">
              <el-input v-model="market.WETH.supply.mintAmount" placeholder="请输入存款数量" clearable>
                <el-button slot="prepend" @click="getSupplyBalance('ETH')">最大值</el-button>
                <el-button slot="append">WETH</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="存款数量" :contentStyle="{'text-align': 'right'}">{{ market.WETH.supply.count }}
                WETH
              </el-descriptions-item>
              <el-descriptions-item label="兑换率" :contentStyle="{'text-align': 'right'}">1 WETH
                ={{ panel.WETH.exchangeRate }} eETH
              </el-descriptions-item>
              <el-descriptions-item label="钱包WETH数量" :contentStyle="{'text-align': 'right'}">
                {{ panel.WETH.balance }} WETH
              </el-descriptions-item>
              <el-descriptions-item label="钱包eETH数量" :contentStyle="{'text-align': 'right'}">
                {{ panel.WETH.eBalance }} eETH
              </el-descriptions-item>
              <el-descriptions-item label="市场剩余可取" :contentStyle="{'text-align': 'right'}">
                {{ panel.WETH.totalCash }} WETH
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="erc20Approve('ETH')">{{ supplyButton }}</el-button>
              <el-button type="success" @click="supplyToken('ETH')">存款</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="取款" name="second">
          <el-form label-position="top" label-width="80px" :model="market.WETH.supply">
            <el-form-item label="取款数量">
              <el-input v-model="market.WETH.supply.redeemAmount" clearable>
                <el-button slot="prepend" @click="getRedeemBalance('ETH')">安全最大值（80%）</el-button>
                <el-button slot="append">WETH</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="存款数量" :contentStyle="{'text-align': 'right'}">{{ market.WETH.supply.count }}
                WETH
              </el-descriptions-item>
              <el-descriptions-item label="借款限额" :contentStyle="{'text-align': 'right'}">$ {{
                  market.USDT.borrow.balance
                }} -> $ {{ market.USDT.borrow.borrowAmountLimit }}
              </el-descriptions-item>
              <el-descriptions-item label="限额已使用" :contentStyle="{'text-align': 'right'}">
                {{ market.USDT.borrow.alreadyCashPercent + ' %' }} -> {{ market.USDT.borrow.borrowlimitPercent }} %
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="redeemUnderlying('ETH')">取款</el-button>
              <el-button type="success" @click="redeemAllToken('ETH')">取款全部</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <!--   USDT存取 -->
    <el-dialog
        title="USDT"
        :visible.sync="USDTSupplyDialogVisible"
        width="36em"
        center>
      <el-tabs v-model="dialogActiveName" @tab-click="handleClick">
        <el-tab-pane label="存款" name="first">
          <el-form label-position="top" label-width="80px" :model="market.USDT.supply">
            <el-form-item label="存款数量">
              <el-input v-model="market.USDT.supply.mintAmount " placeholder="请输入存款数量" clearable>
                <el-button slot="prepend" @click="getSupplyBalance(`USDT`)">最大值</el-button>
                <el-button slot="append">USDT</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="存款数量" :contentStyle="{'text-align': 'right'}">{{ market.USDT.supply.count }}
                USDT
              </el-descriptions-item>
              <el-descriptions-item label="兑换率" :contentStyle="{'text-align': 'right'}">1 USDT
                ={{ panel.USDT.exchangeRate }} eUSDT
              </el-descriptions-item>
              <el-descriptions-item label="钱包USDT数量" :contentStyle="{'text-align': 'right'}">
                {{ panel.USDT.balance }} USDT
              </el-descriptions-item>
              <el-descriptions-item label="钱包eUSDT数量" :contentStyle="{'text-align': 'right'}">
                {{ panel.USDT.eBalance }} eUSDT
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="erc20Approve(`USDT`)">{{ supplyButton }}</el-button>
              <el-button type="success" @click="supplyToken(`USDT`)">存款</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="取款" name="second">
          <el-form label-position="top" label-width="80px" :model="supply">
            <el-form-item label="取款数量">
              <el-input v-model="market.USDT.supply.redeemAmount" clearable>
                <el-button slot="prepend" @click="getRedeemBalance(`USDT`)">最大值</el-button>
                <el-button slot="append">USDT</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="存款数量" :contentStyle="{'text-align': 'right'}">{{ market.USDT.supply.count }}
                USDT
              </el-descriptions-item>
              <el-descriptions-item label="兑换率" :contentStyle="{'text-align': 'right'}">1 USDT
                ={{ panel.USDT.exchangeRate }} eUSDT
              </el-descriptions-item>
              <el-descriptions-item label="钱包USDT数量" :contentStyle="{'text-align': 'right'}">
                {{ panel.USDT.balance }} USDT
              </el-descriptions-item>
              <el-descriptions-item label="钱包eUSDT数量" :contentStyle="{'text-align': 'right'}">
                {{ panel.USDT.eBalance }} eUSDT
              </el-descriptions-item>
              <el-descriptions-item label="市场剩余可取" :contentStyle="{'text-align': 'right'}">
                {{ panel.USDT.totalCash }} USDT
              </el-descriptions-item>
            </el-descriptions>
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
        :visible.sync="market.USDT.borrowDialogVisible"
        width="36em"
        center>
      <el-tabs v-model="dialogActiveName">
        <el-tab-pane label="借款" name="first">
          <el-form label-position="top" label-width="80px" :model="market.USDT.supply">
            <el-form-item label="借款数量">
              <el-input v-model="market.USDT.borrow.borrowAmount" placeholder="请输入借款数量" clearable>
                <el-button slot="prepend" @click="getBorrowBalance(`USDT`)">（80%限制）</el-button>
                <el-button slot="append">USDT</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border>
              <el-descriptions-item label="借款金额限额" :contentStyle="{'text-align': 'right'}">$
                {{ market.USDT.borrow.balance }} -> $ {{ market.USDT.borrow.borrowAmountLimit }}
              </el-descriptions-item>
              <el-descriptions-item label="借款数量限额" :contentStyle="{'text-align': 'right'}">{{
                  market.USDT.borrow.count
                }} USDT -> {{ market.USDT.borrow.borrowCountLimit }} USDT
              </el-descriptions-item>
              <el-descriptions-item label="限额已使用" :contentStyle="{'text-align': 'right'}">
                {{ market.USDT.borrow.alreadyCashPercent + ' %' }} -> {{ market.USDT.borrow.borrowlimitPercent }} %
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="目前已借" :contentStyle="{'text-align': 'right'}">{{ market.USDT.borrow.count }}
                USDT
              </el-descriptions-item>
              <el-descriptions-item label="市场可用余额" :contentStyle="{'text-align': 'right'}">
                {{ panel.USDT.totalCash }} USDT
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="borrowToken(`USDT`)">借款</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="还款" name="second">
          <el-form label-position="top" label-width="80px" :model="market.USDT.borrow">
            <el-form-item label="还款数量">
              <el-input v-model="market.USDT.borrow.repayAmount" placeholder="请输入还款数量" clearable>
                <el-button slot="prepend" @click="getRepayMaxBalance(`USDT`)">最大值</el-button>
                <el-button slot="append">USDT</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border>
              <el-descriptions-item label="借款金额限额" :contentStyle="{'text-align': 'right'}">$
                {{ market.USDT.borrow.balance }} -> $ {{ market.USDT.borrow.borrowAmountLimit }}
              </el-descriptions-item>
              <el-descriptions-item label="借款数量限额" :contentStyle="{'text-align': 'right'}">{{
                  market.USDT.borrow.count
                }} USDT -> {{ market.USDT.borrow.borrowCountLimit }} USDT
              </el-descriptions-item>
              <el-descriptions-item label="限额已使用" :contentStyle="{'text-align': 'right'}">
                {{ market.USDT.borrow.alreadyCashPercent + ' %' }} -> {{ market.USDT.borrow.borrowlimitPercent }} %
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="目前已借" :contentStyle="{'text-align': 'right'}">{{ market.USDT.borrow.count }}
                USDT
              </el-descriptions-item>
              <el-descriptions-item label="市场可用余额" :contentStyle="{'text-align': 'right'}">
                {{ panel.USDT.totalCash }} USDT
              </el-descriptions-item>
              <el-descriptions-item label="钱包余额" :contentStyle="{'text-align': 'right'}">{{ panel.USDT.balance }}
                USDT
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="erc20Approve(`USDT`)">{{ supplyButton }}</el-button>
              <el-button type="success" @click="repayToken(`USDT`)">还款</el-button>
              <el-button type="success" @click="repayAllToken(`USDT`)">还款全部</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <!--   WETH借还 -->
    <el-dialog
        title="WETH"
        :visible.sync="market.WETH.borrowDialogVisible"
        width="36em"
        center>
      <el-tabs v-model="dialogActiveName">
        <el-tab-pane label="借款" name="first">
          <el-form label-position="top" label-width="80px" :model="market.WETH.supply">
            <el-form-item label="借款数量">
              <el-input v-model="market.WETH.borrow.borrowAmount" placeholder="请输入借款数量" clearable>
                <el-button slot="prepend" @click="getBorrowBalance(`ETH`)">（80%限制）</el-button>
                <el-button slot="append">WETH</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border>
              <el-descriptions-item label="借款金额限额" :contentStyle="{'text-align': 'right'}">$
                {{ market.WETH.borrow.balance }} -> $ {{ market.WETH.borrow.borrowAmountLimit }}
              </el-descriptions-item>
              <el-descriptions-item label="借款数量限额" :contentStyle="{'text-align': 'right'}">{{
                  market.WETH.borrow.count
                }} WETH -> {{ market.WETH.borrow.borrowCountLimit }} WETH
              </el-descriptions-item>
              <el-descriptions-item label="限额已使用" :contentStyle="{'text-align': 'right'}">
                {{ market.WETH.borrow.alreadyCashPercent + ' %' }} -> {{ market.WETH.borrow.borrowlimitPercent }} %
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="目前已借" :contentStyle="{'text-align': 'right'}">{{ market.WETH.borrow.count }}
                WETH
              </el-descriptions-item>
              <el-descriptions-item label="市场可用余额" :contentStyle="{'text-align': 'right'}">
                {{ panel.WETH.totalCash }} WETH
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="borrowToken(`ETH`)">借款</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="还款" name="second">
          <el-form label-position="top" label-width="80px" :model="market.WETH.borrow">
            <el-form-item label="还款数量">
              <el-input v-model="market.WETH.borrow.repayAmount" placeholder="请输入还款数量" clearable>
                <el-button slot="prepend" @click="getRepayMaxBalance(`ETH`)">最大值</el-button>
                <el-button slot="append">WETH</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border>
              <el-descriptions-item label="借款金额限额" :contentStyle="{'text-align': 'right'}">$
                {{ market.WETH.borrow.balance }} -> $ {{ market.WETH.borrow.borrowAmountLimit }}
              </el-descriptions-item>
              <el-descriptions-item label="借款数量限额" :contentStyle="{'text-align': 'right'}">{{
                  market.WETH.borrow.count
                }} WETH -> {{ market.WETH.borrow.borrowCountLimit }} WETH
              </el-descriptions-item>
              <el-descriptions-item label="限额已使用" :contentStyle="{'text-align': 'right'}">
                {{ market.WETH.borrow.alreadyCashPercent + ' %' }} -> {{ market.WETH.borrow.borrowlimitPercent }} %
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="目前已借" :contentStyle="{'text-align': 'right'}">{{ market.WETH.borrow.count }}
                WETH
              </el-descriptions-item>
              <el-descriptions-item label="市场可用余额" :contentStyle="{'text-align': 'right'}">
                {{ panel.WETH.totalCash }} WETH
              </el-descriptions-item>
              <el-descriptions-item label="钱包余额" :contentStyle="{'text-align': 'right'}">{{ panel.WETH.balance }}
                WETH
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="erc20Approve(`ETH`)">{{ supplyButton }}</el-button>
              <el-button type="success" @click="repayToken(`ETH`)">还款</el-button>
              <el-button type="success" @click="repayAllToken(`ETH`)">还款全部</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <!--   WBNB借还 -->
    <el-dialog
        title="WBNB"
        :visible.sync="market.WBNB.borrowDialogVisible"
        width="36em"
        center>
      <el-tabs v-model="dialogActiveName">
        <el-tab-pane label="借款" name="first">
          <el-form label-position="top" label-width="80px" :model="market.WBNB.supply">
            <el-form-item label="借款数量">
              <el-input v-model="market.WBNB.borrow.borrowAmount" placeholder="请输入借款数量" clearable>
                <el-button slot="prepend" @click="getBorrowBalance(`BNB`)">（80%限制）</el-button>
                <el-button slot="append">WBNB</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border>
              <el-descriptions-item label="借款金额限额" :contentStyle="{'text-align': 'right'}">$
                {{ market.WBNB.borrow.balance }} -> $ {{ market.WBNB.borrow.borrowAmountLimit }}
              </el-descriptions-item>
              <el-descriptions-item label="借款数量限额" :contentStyle="{'text-align': 'right'}">{{
                  market.WBNB.borrow.count
                }} WBNB -> {{ market.WBNB.borrow.borrowCountLimit }} WBNB
              </el-descriptions-item>
              <el-descriptions-item label="限额已使用" :contentStyle="{'text-align': 'right'}">
                {{ market.WBNB.borrow.alreadyCashPercent + ' %' }} -> {{ market.WBNB.borrow.borrowlimitPercent }} %
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="目前已借" :contentStyle="{'text-align': 'right'}">{{ market.WBNB.borrow.count }}
                WBNB
              </el-descriptions-item>
              <el-descriptions-item label="市场可用余额" :contentStyle="{'text-align': 'right'}">
                {{ panel.WBNB.totalCash }} WBNB
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="borrowToken(`BNB`)">借款</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="还款" name="second">
          <el-form label-position="top" label-width="80px" :model="market.WBNB.borrow">
            <el-form-item label="还款数量">
              <el-input v-model="market.WBNB.borrow.repayAmount" placeholder="请输入还款数量" clearable>
                <el-button slot="prepend" @click="getRepayMaxBalance(`BNB`)">最大值</el-button>
                <el-button slot="append">WBNB</el-button>
              </el-input>
            </el-form-item>
            <el-descriptions :column="1" size="mini" border>
              <el-descriptions-item label="借款金额限额" :contentStyle="{'text-align': 'right'}">$
                {{ market.WBNB.borrow.balance }} -> $ {{ market.WBNB.borrow.borrowAmountLimit }}
              </el-descriptions-item>
              <el-descriptions-item label="借款数量限额" :contentStyle="{'text-align': 'right'}">{{
                  market.WBNB.borrow.count
                }} WBNB -> {{ market.WBNB.borrow.borrowCountLimit }} WBNB
              </el-descriptions-item>
              <el-descriptions-item label="限额已使用" :contentStyle="{'text-align': 'right'}">
                {{ market.WBNB.borrow.alreadyCashPercent + ' %' }} -> {{ market.WBNB.borrow.borrowlimitPercent }} %
              </el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="1" size="mini" border style="margin-top: 1em;">
              <el-descriptions-item label="目前已借" :contentStyle="{'text-align': 'right'}">{{ market.WBNB.borrow.count }}
                WBNB
              </el-descriptions-item>
              <el-descriptions-item label="市场可用余额" :contentStyle="{'text-align': 'right'}">
                {{ panel.WBNB.totalCash }} WBNB
              </el-descriptions-item>
              <el-descriptions-item label="钱包余额" :contentStyle="{'text-align': 'right'}">{{ panel.WBNB.balance }}
                WBNB
              </el-descriptions-item>
            </el-descriptions>
            <el-form-item label="" style="margin-top: 20px;">
              <el-button type="success" @click="erc20Approve(`BNB`)">{{ supplyButton }}</el-button>
              <el-button type="success" @click="repayToken(`BNB`)">还款</el-button>
              <el-button type="success" @click="repayAllToken(`BNB`)">还款全部</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <!--   返回结果 -->
    <el-dialog
        :visible.sync="dialogResultVisible"
        width="35em"
        center>
      <el-result icon="success" :title="info.title " v-if="info.title==='成功提示'" :subTitle="info.subTitle">
        <template slot="extra">
          <el-link type="success" :href="info.result" target="_blank">查看交易</el-link>
        </template>
      </el-result>
      <el-result icon="error" :title="info.title" v-if="info.title==='错误提示'" :subTitle="info.subTitle">
        <template slot="extra">
          <span>{{ info.result }}</span>
        </template>
      </el-result>
    </el-dialog>
  </div>
</template>

<script>
import {
  accrualBlockNumber,
  balanceOf, baseMint, baseRatePerBlock, blocksPerYear,
  borrow,
  borrowBalanceStored,
  borrowIndex,
  borrowRatePerBlock,
  checkMembership, closeFactorMantissa,
  enterMarkets,
  exchangeRateStored,
  exitMarket,
  getBlockNumber,
  getBorrowRate,
  getCash,
  getSupplyRate, jumpMultiplierPerBlock, kink,
  markets,
  mint, multiplierPerBlock,
  redeem,
  redeemUnderlying,
  repayBorrow,
  baseRepayBorrow,
  reserveFactorMantissa,
  supplyRatePerBlock,
  totalBorrows,
  totalReserves,
  totalSupply,
  utilizationRate,
  viewPrice,
} from "@/utils/web3/hashbank";
import Decimal from 'decimal.js';
import {exp,address, constants, decimals} from "@/utils/configure/hashbank";
import {erc20Approval, erc20BalanceOf} from "../utils/web3/index";

export default {
  data() {
    return {
      collapseActiveNames: ['1'],
      formInline: {
        user: '',
        region: ''
      },
      account: "",
      WETHSupplyDialogVisible: false,
      USDTSupplyDialogVisible: false,
      WBNBSupplyDialogVisible: false,
      dialogResultVisible: false,
      dialogWidth: 0,
      address: '',
      supplyButton: '授权',
      info: {
        title: '',
        result: '',
        subTitle: '',
      },
      dialogActiveName: 'first',
      contract: {
        activeName: 'four',
      },
      liquidity: {
        activeName: 'first',
        sumCollateral: 0,
        sumBorrowPlusEffects: 0,
        tableData: [
          {
            id: 51487,
            pool: "USDT",
            assetsValue: "5000",
            borrowValue: "4500",
            borrowCount: "4500.000000",
            riskValue: "90"
          },
          {
            id: 52683,
            pool: "USDT",
            assetsValue: "5000",
            borrowValue: "4000",
            borrowCount: "4000.000000",
            riskValue: "80"
          }
        ],
      },
      panel: {
        common:{
          blocksPerYear:0,
        },
        WBNB:{
          r0:0,
          r1:0,
          r2:0,
          kink:0,
          baseRatePerBlock:0,
          baseRatePerYear:0,
          multiplierPerBlock:0,
          multiplierPerYear:0,
          jumpMultiplierPerBlock:0,
          jumpMultiplierPerYear:0,
          reserveFactorMantissa:0,
          borrowRatePerBlock:0,
          supplyRatePerBlock:0,
          supplyApy:0,
          borrowApy:0,
          accrualBlockNumber:0,
          totalReservesInfo:0,
          totalCash:0,
          totalBorrowsInfo:0,
          utilizationRate:0,
          exchangeRate:0,
          collateralFactor:0,
          price:0,
          balance:0,
          eBalance:0,
        },
        WETH:{
          r0:0,
          r1:0,
          r2:0,
          kink:0,
          baseRatePerBlock:0,
          baseRatePerYear:0,
          multiplierPerBlock:0,
          multiplierPerYear:0,
          jumpMultiplierPerBlock:0,
          jumpMultiplierPerYear:0,
          reserveFactorMantissa:0,
          borrowRatePerBlock:0,
          supplyRatePerBlock:0,
          supplyApy:0,
          borrowApy:0,
          accrualBlockNumber:0,
          totalReservesInfo:0,
          totalCash:0,
          totalBorrowsInfo:0,
          utilizationRate:0,
          exchangeRate:0,
          collateralFactor:0,
          price:0,
          balance:0,
          eBalance:0,
        },
        USDT:{
          r0:0,
          r1:0,
          r2:0,
          kink:0,
          baseRatePerBlock:0,
          baseRatePerYear:0,
          multiplierPerBlock:0,
          multiplierPerYear:0,
          jumpMultiplierPerBlock:0,
          jumpMultiplierPerYear:0,
          reserveFactorMantissa:0,
          borrowRatePerBlock:0,
          supplyRatePerBlock:0,
          supplyApy:0,
          borrowApy:0,
          accrualBlockNumber:0,
          totalReservesInfo:0,
          totalCash:0,
          totalBorrowsInfo:0,
          utilizationRate:0,
          exchangeRate:0,
          collateralFactor:0,
          price:0,
          balance:0,
          eBalance:0,
          supply: {
            userCanRedeemCount: 0,
            borrowRate: '',
            balance: 0,
            count: 0,
            mintAmount: 0,
            supplyToken: 0,
            supplyAmount: 0,
            redeemAmount: 0,
            isEnterMarket: false,
          },
          borrow: {
            //借款最大值
            borrowAmountLimit: 0,
            borrowCountLimit: 0,
            borrowlimitPercent: 0,
            //还款额度
            repayAmount: 0,
            //剩余可借额度
            canBorrowCountLimit: 0,
            alreadyCashPercent: 0,
            borrowRate: '',
            count: 0,
            balance: 0,
            borrowAmount: 0,
            supplyToken: 0,
            supplyAmount: 0,
            redeemTokens: 0,
            redeemAmount: 0,
          },
        },
        closeFactorMantissa:0,
        supplyBalance: 0,
        borrowBalance: 0,
        blockNumber: 0,
        activeName: 'first',
      },
      market:{
        USDT:{
          dialogActiveName: 'first',
          borrowDialogVisible: false,
          supply:{
            userCanRedeemCount: 0,
            borrowRate: '',
            balance: 0,
            count: 0,
            mintAmount: 0,
            supplyToken: 0,
            supplyAmount: 0,
            redeemAmount: 0,
            isEnterMarket: false,
          },
          borrow:{
            //借款最大值
            borrowAmountLimit: 0,
            borrowCountLimit: 0,
            borrowlimitPercent: 0,
            //还款额度
            repayAmount: 0,
            //剩余可借额度
            canBorrowCountLimit: 0,
            alreadyCashPercent: 0,
            borrowRate: '',
            count: 0,
            balance: 0,
            borrowAmount: 0,
            supplyToken: 0,
            supplyAmount: 0,
            redeemTokens: 0,
            redeemAmount: 0,
          }
        },
        WETH:{
          dialogActiveName: 'first',
          borrowDialogVisible: false,
          supply:{
            userCanRedeemCount: 0,
            borrowRate: '',
            balance: 0,
            count: 0,
            mintAmount: 0,
            supplyToken: 0,
            supplyAmount: 0,
            redeemAmount: 0,
            isEnterMarket: false,
          },
          borrow:{
            //借款最大值
            borrowAmountLimit: 0,
            borrowCountLimit: 0,
            borrowlimitPercent: 0,
            //还款额度
            repayAmount: 0,
            //剩余可借额度
            canBorrowCountLimit: 0,
            alreadyCashPercent: 0,
            borrowRate: '',
            count: 0,
            balance: 0,
            borrowAmount: 0,
            supplyToken: 0,
            supplyAmount: 0,
            redeemTokens: 0,
            redeemAmount: 0,
          }
        },
        WBNB:{
          dialogActiveName: 'first',
          borrowDialogVisible: false,
          supply:{
            userCanRedeemCount: 0,
            borrowRate: '',
            balance: 0,
            count: 0,
            mintAmount: 0,
            supplyToken: 0,
            supplyAmount: 0,
            redeemAmount: 0,
            isEnterMarket: false,
          },
          borrow:{
            //借款最大值
            borrowAmountLimit: 0,
            borrowCountLimit: 0,
            borrowlimitPercent: 0,
            //还款额度
            repayAmount: 0,
            //剩余可借额度
            canBorrowCountLimit: 0,
            alreadyCashPercent: 0,
            borrowRate: '',
            count: 0,
            balance: 0,
            borrowAmount: 0,
            supplyToken: 0,
            supplyAmount: 0,
            redeemTokens: 0,
            redeemAmount: 0,
          }
        }
      },
      borrowUsdt: {
        //借款最大值
        borrowAmountLimit: 0,
        borrowCountLimit: 0,
        borrowlimitPercent: 0,
        //还款额度
        repayAmount: 0,
        //剩余可借额度
        canBorrowCountLimit: 0,
        alreadyCashPercent: 0,
        borrowRate: '',
        count: 0,
        balance: 0,
        borrowAmount: 0,
        supplyToken: 0,
        supplyAmount: 0,
        redeemTokens: 0,
        redeemAmount: 0,
      },
      addressInfo: {
        "current": {
          "type":"",
          "name":"无标题",
          "url":"",
          "Comptroller": '',
          "Unitroller": '',
          "UsdtJumpRateModel": '',
          "ETHJumpRateModel": '',
          "BaseJumpRateModel": '',
          "Oracle": '',
          "USDT": '',
          "eUSDT": '',
          "ETH": '',
          "eETH": '',
          "BNB": '',
          "eBNB": '',
          "WETHChainlink":''
        },
      }
    };
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  WETHters: {
    toEther: (amount) => {
      let balance = new Decimal(amount)
      return balance.div(exp).toPrecision(18)
    },
    formatTime: (time) => {
      return new Date(parseInt(time) * 1000).toLocaleString();
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    switchNetwork(){
      // 判断网络id
      if (this.$store.state.wallet.networkId === 3476){
        // bhp测试网
        this.addressInfo.current = address.bhp_t
      }else if (this.$store.state.wallet.networkId === 97){
        //bsc测试网
        this.addressInfo.current = address.mhxw
      }else if (this.$store.state.wallet.networkId === 56){
        //bsc主网
        this.addressInfo.current = address.bsc_pig
      }else if (this.$store.state.wallet.networkId === 128){
        //heco主网
        this.addressInfo.current = address.ht_pig
      }else if (this.$store.state.wallet.networkId === 128){
        //eth主网
        this.addressInfo.current = address.eth_comp
      }else{
        console.log("没有存在的信息")
        this.$notify.error({
          title: '错误',
          message: '没有符合匹配的合约信息'
        });
      }
    },
    openSupply(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      let assetAddress
      let assetToken
      if (tokenName === constants.ETH) {
        assetAddress = this.addressInfo.current.ETH
        assetToken = this.addressInfo.current.eETH
      } else if (tokenName === constants.USDT) {
        assetAddress = this.addressInfo.current.USDT
        assetToken = this.addressInfo.current.eUSDT
      }else if (tokenName === constants.BNB) {
        assetAddress = ""
        assetToken = this.addressInfo.current.eBNB
      }

      erc20BalanceOf(
          this.$store.state.wallet,
          assetAddress,
          data => {
            this.$parent.url = this.addressInfo.current.tx_url + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        if (tokenName === constants.ETH) {
          this.market.WETH.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.USDT) {
          this.market.USDT.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        }else if (tokenName === constants.BNB) {
          this.market.WBNB.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10, decimals.BNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        }

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      erc20BalanceOf(
          this.$store.state.wallet,
          assetToken,
          data => {
            this.$parent.url = this.addressInfo.current.tx_url + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        if (tokenName === constants.ETH) {
          this.market.WETH.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10, decimals.eETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.USDT) {
          this.market.USDT.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10, decimals.eUSDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.BNB) {
          this.market.WBNB.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10, decimals.eBNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        }
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      if (tokenName === constants.ETH) {
        this.WETHSupplyDialogVisible = true
      } else if (tokenName === constants.USDT) {
        this.USDTSupplyDialogVisible = true
      }else if (tokenName === constants.BNB) {
        this.WBNBSupplyDialogVisible = true
      }
    },
    openBorrow(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      let assetAddress
      let assetToken
      if (tokenName === constants.ETH) {
        assetAddress = this.addressInfo.current.ETH
        assetToken = this.addressInfo.current.eETH
      } else if (tokenName === constants.USDT) {
        assetAddress = this.addressInfo.current.USDT
        assetToken = this.addressInfo.current.eUSDT
      }else if (tokenName === constants.BNB) {
        assetAddress = ""
        assetToken = this.addressInfo.current.eBNB
      }
      erc20BalanceOf(
          this.$store.state.wallet,
          assetAddress,
          data => {
            this.$parent.url = this.addressInfo.current.tx_url + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        if (tokenName === constants.ETH) {
          this.market.WETH.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.USDT) {
          this.market.USDT.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        }else if (tokenName === constants.BNB) {
          this.market.WBNB.supply.supplyAmount = new Decimal(res).dividedBy(Decimal.pow(10, decimals.BNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        }
      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      erc20BalanceOf(
          this.$store.state.wallet,
          assetToken,
      ).then(res => {
        if (tokenName === constants.ETH) {
          this.market.WETH.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10, decimals.eETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.USDT) {
          this.market.USDT.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10, decimals.eUSDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.BNB) {
          this.market.WBNB.supply.supplyToken = new Decimal(res).dividedBy(Decimal.pow(10, decimals.eBNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      if (tokenName === constants.ETH) {
        this.market.WETH.borrowDialogVisible = true
      } else if (tokenName === constants.USDT) {
        this.market.USDT.borrowDialogVisible = true
      }else if (tokenName === constants.BNB) {
        this.market.WBNB.borrowDialogVisible = true
      }
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
              result.message.toString().indexOf("execution reverted: ERC20: transfer amount exceeds balance") !== -1||
              result.message.toString().indexOf("execution reverted: BEP20: transfer amount exceeds balance") !== -1
          ) {
            this.info.result = "余额不足";
          } else if (
              result.message.toString().indexOf("execution reverted: ERC20: transfer amount exceeds allowance") !== -1||
              result.message.toString().indexOf("execution reverted: BEP20: transfer amount exceeds allowance") !== -1
          ) {
            this.info.result = "授权额度不足或未授权";
          } else if (
              result.message.toString().indexOf("execution reverted: REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED") !== -1
          ) {
            this.info.result = "还款余额计算错误，超出实际还款值";
          } else if (
              result.message.toString().indexOf("execution reverted: TransparentUpgradeableProxy: admin cannot fallback to proxy target") !== -1
          ) {
            this.info.result = "管理员无法调用代理合约";
          }else {
            this.info.result = result;
          }
        } else {
          this.info.result = result;
        }
      } else {
        this.info.result = err.toString();
      }
      this.info.title = "错误提示"
      this.dialogResultVisible = true
      return
    },
    verifyConnect() {
      let wallet = this.$store.state.wallet;
      if (!wallet.connected) {
        this.$notify.error({
          title: '错误',
          message: '错误的网络：请使用正确网络'
        });
        return false
      }
      return true
    },
    supplyToken(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      this.WETHSupplyDialogVisible = false;
      this.USDTSupplyDialogVisible = false;
      this.WBNBSupplyDialogVisible = false;
      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let mintAmount
      if (tokenName === constants.ETH) {
        assetAddress = this.addressInfo.current.ETH
        assetToken = this.addressInfo.current.eETH
        mintAmount = new Decimal(this.market.WETH.supply.mintAmount).mul(Decimal.pow(10, decimals.ETH)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.USDT) {
        assetAddress = this.addressInfo.current.USDT
        assetToken = this.addressInfo.current.eUSDT
        mintAmount = new Decimal(this.market.USDT.supply.mintAmount ).mul(Decimal.pow(10, decimals.USDT)).toFixed(0, Decimal.ROUND_DOWN)
      }

      this.verifyConnect()
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      if (tokenName === constants.BNB) {
        assetAddress = this.addressInfo.current.WBNB
        assetToken = this.addressInfo.current.eBNB
        mintAmount = new Decimal(this.market.WBNB.supply.mintAmount ).mul(Decimal.pow(10, decimals.BNB)).toFixed(0, Decimal.ROUND_DOWN)
        baseMint(
            this.$store.state.wallet,
            mintAmount,
            assetToken,
            data => {
              this.$parent.url = this.addressInfo.current.tx_url + data.message;
              this.$parent.flag2 = true;
              this.$parent.flag1 = false;
              this.$parent.flag3 = false;
            }
        ).then(res => {
          this.$parent.loading = false;
          this.getSuccessInfo(this.$parent.url)

        }).catch(err => {
          console.log("baseMint error")
          this.$parent.loading = false;
          this.getErrorInfo(err)
        })
      } else{
        mint(
            this.$store.state.wallet,
            mintAmount,
            assetToken,
            data => {
              this.$parent.url = this.addressInfo.current.tx_url + data.message;
              this.$parent.flag2 = true;
              this.$parent.flag1 = false;
              this.$parent.flag3 = false;
            }
        ).then(res => {
          this.$parent.loading = false;
          this.getSuccessInfo(this.$parent.url)

        }).catch(err => {
          console.log("mint error")
          this.$parent.loading = false;
          this.getErrorInfo(err)
        })
      }
      console.log("mintAmount", mintAmount)
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

    },
    redeemUnderlying(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let redeemAmount
      if (tokenName === constants.ETH) {
        assetAddress = this.addressInfo.current.ETH
        assetToken = this.addressInfo.current.eETH
        redeemAmount = new Decimal(this.market.WETH.supply.redeemAmount).mul(Decimal.pow(10, decimals.ETH)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.USDT) {
        assetAddress = this.addressInfo.current.USDT
        assetToken = this.addressInfo.current.eUSDT
        redeemAmount = new Decimal(this.market.USDT.supply.redeemAmount).mul(Decimal.pow(10, decimals.USDT)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.BNB) {
        assetAddress = this.addressInfo.current.BNB
        assetToken = this.addressInfo.current.eBNB
        redeemAmount = new Decimal(this.market.WBNB.supply.redeemAmount).mul(Decimal.pow(10, decimals.BNB)).toFixed(0, Decimal.ROUND_DOWN)
      }

      //获取到存款数量之后转换为小单位wei
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.WETHSupplyDialogVisible = false;
      this.USDTSupplyDialogVisible = false;
      this.WBNBSupplyDialogVisible = false;
      redeemUnderlying(
          this.$store.state.wallet,
          redeemAmount,
          assetToken,
          data => {
            this.$parent.url = this.addressInfo.current.tx_url + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.verifyContractResult(res, this.$parent.url)
      }).catch(err => {
        console.log("redeemUnderlying error")
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    redeemAllToken(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let redeemToken
      if (tokenName === constants.ETH) {
        assetAddress = this.addressInfo.current.ETH
        assetToken = this.addressInfo.current.eETH
        redeemToken = new Decimal(this.panel.WETH.eBalance).mul(Decimal.pow(10, decimals.eETH)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.USDT) {
        assetAddress = this.addressInfo.current.USDT
        assetToken = this.addressInfo.current.eUSDT
        redeemToken = new Decimal(this.panel.USDT.eBalance).mul(Decimal.pow(10, decimals.eUSDT)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.BNB) {
        assetAddress = this.addressInfo.current.BNB
        assetToken = this.addressInfo.current.eBNB
        redeemToken = new Decimal(this.panel.WBNB.eBalance).mul(Decimal.pow(10, decimals.BNB)).toFixed(0, Decimal.ROUND_DOWN)
      }
      console.log("redeemToken", redeemToken)

      //获取到存款数量之后转换为小单位wei
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.WETHSupplyDialogVisible = false;
      this.USDTSupplyDialogVisible = false;
      this.WBNBSupplyDialogVisible = false;
      redeem(
          this.$store.state.wallet,
          redeemToken,
          assetToken,
          data => {
            this.$parent.url = this.addressInfo.current.tx_url + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.verifyContractResult(res, this.$parent.url)
      }).catch(err => {
        console.log("redeem error")
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    getResultInfo(result, info,detail) {
      this.info.title = "错误提示"
      this.info.result = result+"，"+info+"，"+detail
      this.dialogResultVisible = true
      //this.updatePanel()
    },
    verifyContractResult(res, url) {
      if (!(typeof (res.events.Failure) === "undefined")) {
        let returnValues = res.events.Failure.returnValues
        console.log(JSON.stringify(returnValues))
        let result
        let info
        let detail
        switch (returnValues.error) {
          case "3":
            result = "审计不通过"
            break;
          case "14":
            result = "资金池余额不足"
            break;
          case "15":
            result = "转账转出失败"
            break;
        }
        switch (returnValues.info) {
          case "9":
            info = "资金池可用余额不足，借款不允许"
            break;
          case "14":
            info = "借款被审计合约拒绝"
            break;
          case "15":
            info = "转账转出失败"
            break;
          case "40":
            info = "赎回被审计合约拒绝"
            break;
          case "47":
            info = "取款金额错误，超出实际金额"
            break;
        }
        switch (returnValues.detail) {
          case "4":
            detail = "差额不足"
            break;
          case "13":
            detail = "查询价格合约为0"
            break;
        }
        console.log("result,info,detail", result, info, detail)
        this.getResultInfo(result, info,detail)
      } else {
        this.getSuccessInfo(url)
      }
    },
    borrowToken(tokenName) {
      //usdt 借款之前先判断是否存入了WETH并开启了抵押
      if (!this.verifyConnect()) {
        return
      }

      let assetToken
      //获取到存款数量之后转换为小单位wei
      let borrowAmount
      if (tokenName === constants.ETH) {
        assetToken = this.addressInfo.current.eETH
        borrowAmount = new Decimal(this.market.WETH.borrow.borrowAmount).mul(Decimal.pow(10, decimals.ETH)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.USDT) {
        assetToken = this.addressInfo.current.eUSDT
        borrowAmount = new Decimal(this.market.USDT.borrow.borrowAmount).mul(Decimal.pow(10, decimals.USDT)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.BNB) {
        assetToken = this.addressInfo.current.eBNB
        borrowAmount = new Decimal(this.market.WBNB.borrow.borrowAmount).mul(Decimal.pow(10, decimals.BNB)).toFixed(0, Decimal.ROUND_DOWN)
      }
      console.log("borrowAmount", borrowAmount)
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
            this.$parent.url = this.addressInfo.current.tx_url + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        this.verifyContractResult(res, this.$parent.url)

      }).catch(err => {
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
      if (tokenName === constants.ETH) {
        this.market.WETH.borrowDialogVisible = false
      } else if (tokenName === constants.USDT) {
        this.market.USDT.borrowDialogVisible = false
      }else if (tokenName === constants.BNB) {
        this.market.WBNB.borrowDialogVisible = false
      }
    },
    repayToken(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      let repayAmount
      if (tokenName === constants.ETH) {
        assetAddress = this.addressInfo.current.ETH
        assetToken = this.addressInfo.current.eETH
        repayAmount = new Decimal(this.market.WETH.borrow.repayAmount).mul(Decimal.pow(10, decimals.ETH)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.USDT) {
        assetAddress = this.addressInfo.current.USDT
        assetToken = this.addressInfo.current.eUSDT
        repayAmount = new Decimal(this.market.USDT.borrow.repayAmount).mul(Decimal.pow(10, decimals.USDT)).toFixed(0, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.BNB) {
        assetAddress = this.addressInfo.current.BNB
        assetToken = this.addressInfo.current.eBNB
        repayAmount = new Decimal(this.market.WBNB.borrow.repayAmount).mul(Decimal.pow(10, decimals.BNB)).toFixed(0, Decimal.ROUND_DOWN)
      }
      console.log("repayAmount", repayAmount.toString())
      //获取到存款数量之后转换为小单位wei
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      if (tokenName === constants.ETH) {
        this.market.WETH.borrowDialogVisible = false
      } else if (tokenName === constants.USDT) {
        this.market.USDT.borrowDialogVisible = false
      }else if (tokenName === constants.BNB) {
        this.market.WBNB.borrowDialogVisible = false
      }

      if (tokenName === constants.BNB) {
        baseRepayBorrow(
            this.$store.state.wallet,
            repayAmount,
            assetToken,
            data => {
              this.$parent.url = this.addressInfo.current.tx_url + data.message;
              this.$parent.flag2 = true;
              this.$parent.flag1 = false;
              this.$parent.flag3 = false;
            }
        ).then(res => {
          this.$parent.loading = false;
          this.verifyContractResult(res, this.$parent.url)

        }).catch(err => {
          console.log("repayToken error")
          this.$parent.loading = false;
          this.getErrorInfo(err)
        })
      }else{
        repayBorrow(
            this.$store.state.wallet,
            repayAmount,
            assetToken,
            data => {
              this.$parent.url = this.addressInfo.current.tx_url + data.message;
              this.$parent.flag2 = true;
              this.$parent.flag1 = false;
              this.$parent.flag3 = false;
            }
        ).then(res => {
          this.$parent.loading = false;
          this.verifyContractResult(res, this.$parent.url)

        }).catch(err => {
          console.log("repayToken error")
          this.$parent.loading = false;
          this.getErrorInfo(err)
        })
      }
    },
    repayAllToken(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      //先判断是否满足逻辑
      //比如用户输入的存款数量是否小于其钱包余额，等等其他校验

      let assetAddress
      let assetToken
      //获取到存款数量之后转换为小单位wei
      //2的256次方-1
      let repayAmount = (BigInt(Math.pow(2, 256)) - 1n).toString()
      console.log("repayAmount：",tokenName,repayAmount)
      //let repayAmount="115792089237316195423570985008687907853269984665640564039457584007913129639935"
      if (tokenName === constants.ETH) {
        assetAddress = this.addressInfo.current.ETH
        assetToken = this.addressInfo.current.eETH
      } else if (tokenName === constants.USDT) {
        assetAddress = this.addressInfo.current.USDT
        assetToken = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.BNB) {
        assetAddress = this.addressInfo.current.BNB
        assetToken = this.addressInfo.current.eBNB
      }
      //获取到存款数量之后转换为小单位wei
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      if (tokenName === constants.ETH) {
        this.market.WETH.borrowDialogVisible = false
      } else if (tokenName === constants.USDT) {
        this.market.USDT.borrowDialogVisible = false
      }else if (tokenName === constants.BNB) {
        this.market.WBNB.borrowDialogVisible = false
      }
      if (tokenName === constants.BNB) {
        baseRepayBorrow(
            this.$store.state.wallet,
            repayAmount,
            assetToken,
            data => {
              this.$parent.url = this.addressInfo.current.tx_url + data.message;
              this.$parent.flag2 = true;
              this.$parent.flag1 = false;
              this.$parent.flag3 = false;
            }
        ).then(res => {
          this.$parent.loading = false;
          this.verifyContractResult(res, this.$parent.url)

        }).catch(err => {
          console.log("repayToken error")
          this.$parent.loading = false;
          this.getErrorInfo(err)
        })
      }else {
        repayBorrow(
            this.$store.state.wallet,
            repayAmount,
            assetToken,
            data => {
              this.$parent.url = this.addressInfo.current.tx_url + data.message;
              this.$parent.flag2 = true;
              this.$parent.flag1 = false;
              this.$parent.flag3 = false;
            }
        ).then(res => {
          this.$parent.loading = false;
          this.verifyContractResult(res, this.$parent.url)

        }).catch(err => {
          console.log("repayAllToken error")
          this.$parent.loading = false;
          this.getErrorInfo(err)
        })
      }
    },
    getSupplyBalance(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      let assetAddress
      if (tokenName === constants.ETH) {
        assetAddress = this.addressInfo.current.ETH
      } else if (tokenName === constants.USDT) {
        assetAddress = this.addressInfo.current.USDT
      }
      erc20BalanceOf(
          this.$store.state.wallet,
          assetAddress,
          data => {
            this.$parent.url = this.addressInfo.current.tx_url + data.message;
            this.$parent.flag2 = true;
            this.$parent.flag1 = false;
            this.$parent.flag3 = false;
          }
      ).then(res => {
        this.$parent.loading = false;
        if (tokenName === constants.ETH) {
          this.market.WETH.supply.mintAmount = new Decimal(res).dividedBy(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.USDT) {
          this.market.USDT.supply.mintAmount  = new Decimal(res).dividedBy(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.BNB) {
          this.market.WBNB.supply.mintAmount  = new Decimal(res).dividedBy(Decimal.pow(10, decimals.BNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        }
      }).catch(err => {
        console.log('balanceOf err')
        this.$parent.loading = false;
        this.getErrorInfo(err)
      })
    },
    getRedeemBalance(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      let that = this
      if (tokenName === constants.ETH) {
        //先判断是否有借款金额，没有设置为最大
        if (new Decimal(that.market.USDT.borrow.alreadyCashPercent).eq(new Decimal(0)) === true) {
          this.market.WETH.supply.redeemAmount = new Decimal(that.market.WETH.supply.count).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        } else {
          this.market.WETH.supply.redeemAmount = new Decimal(that.market.USDT.supply.userCanRedeemCount).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        }
      } else if (tokenName === constants.USDT) {
        this.market.USDT.supply.redeemAmount = new Decimal(that.market.USDT.supply.count).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.BNB) {
        this.market.WBNB.supply.redeemAmount = new Decimal(that.market.WBNB.supply.count).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
      }
    },
    getBorrowBalance(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      let that = this
      if (tokenName === constants.ETH) {
        this.market.WETH.borrow.borrowAmount = new Decimal(that.market.WETH.borrow.canBorrowCountLimit).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.USDT) {
        this.market.USDT.borrow.borrowAmount = new Decimal(that.market.USDT.borrow.canBorrowCountLimit).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
      }else if (tokenName === constants.BNB) {
        this.market.WBNB.borrow.borrowAmount = new Decimal(that.market.WBNB.borrow.canBorrowCountLimit).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
      }
    },
    getRepayMaxBalance(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      let that = this
      console.log("getRepayMaxBalance", that.market.USDT.borrow.count)
      if (tokenName === constants.ETH) {
        this.market.WETH.borrow.repayAmount = new Decimal(that.market.WETH.borrow.count).toString()
      } else if (tokenName === constants.USDT) {
        this.market.USDT.borrow.repayAmount = new Decimal(that.market.USDT.borrow.count).toString()
      }else if (tokenName === constants.BNB) {
        this.market.WBNB.borrow.repayAmount = new Decimal(that.market.WBNB.borrow.count).toString()
      }
    },
    erc20Approve(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      let assetAddress
      let assetToken
      if (tokenName === constants.ETH) {
        assetToken = this.addressInfo.current.eETH
        assetAddress = this.addressInfo.current.ETH
      } else if (tokenName === constants.USDT) {
        assetToken = this.addressInfo.current.eUSDT
        assetAddress = this.addressInfo.current.USDT
      } else if (tokenName === constants.BNB) {
        assetToken = this.addressInfo.current.eBNB
        assetAddress = this.addressInfo.current.BNB
      }
      console.log("tokenName", tokenName, assetAddress)
      // 查看是否授权
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.WETHSupplyDialogVisible = false;
      this.USDTSupplyDialogVisible = false;
      erc20Approval(
          this.$store.state.wallet,
          assetAddress,
          assetToken,
          data => {
            this.$parent.url = this.addressInfo.current.tx_url + data.message;
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
    updatePanel() {
      if (!this.verifyConnect()) {
        return
      }
      this.getApy(constants.eUSDT)
      this.getApy(constants.eETH)
      this.getApy(constants.eBNB)
      //this.getBSCApy()
      this.viewPrice()
      //检查本地址抵押状态
      this.checkMemberShipPage(constants.USDT)
      this.checkMemberShipPage(constants.ETH)
      this.checkMemberShipPage(constants.BNB)
      //清算系数
      this.closeFactorMantissaPage()

      this.getApr()

      this.getSupplyPage(constants.eUSDT)
      this.getSupplyPage(constants.eETH)
      this.getSupplyPage(constants.eBNB)
      this.getBorrowPage(constants.eUSDT)
      this.getBorrowPage(constants.eETH)
      this.getBorrowPage(constants.eBNB)
    },
    viewPrice() {
      //获取用户USDT余额
      erc20BalanceOf(
          this.$store.state.wallet,
          this.addressInfo.current.USDT,
      ).then(res => {
        let amount = new Decimal(res)
        this.panel.USDT.balance = amount.dividedBy(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      //获取用户ETH余额
      erc20BalanceOf(
          this.$store.state.wallet,
          this.addressInfo.current.ETH,
      ).then(res => {
        let amount = new Decimal(res)
        this.panel.WETH.balance = amount.dividedBy(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
      }).catch(err => {
        this.getErrorInfo(err)
      })
      //获取用户BNB余额
      erc20BalanceOf(
          this.$store.state.wallet,
          "",
      ).then(res => {
        let amount = new Decimal(res)
        this.panel.WBNB.balance = amount.dividedBy(Decimal.pow(10, decimals.BNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
      }).catch(err => {
        this.getErrorInfo(err)
      })
    },
    async getUserBorrowTokenPage(account, tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取用户USDT借贷金额
      await borrowBalanceStored(
          this.$store.state.wallet,
          account,
          eTokenAddress,
      ).then(res => {
        result = res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async getUserSupplyTokenPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取用户eUSDT数量
      await balanceOf(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res
        let amount = new Decimal(res)
        console.log("获取eToken数量",res)
        if (tokenName === constants.eUSDT) {
          this.panel.USDT.eBalance = amount.div(Decimal.pow(10, decimals.eUSDT)).toFixed(decimals.eUSDT, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eETH) {
          this.panel.WETH.eBalance = amount.div(Decimal.pow(10, decimals.eETH)).toFixed(decimals.eETH, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eBNB) {
          this.panel.WBNB.eBalance = amount.div(Decimal.pow(10, decimals.eBNB)).toFixed(decimals.eBNB, Decimal.ROUND_DOWN)
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async accrualBlockNumberPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取USDT池子最新计算高度
      await accrualBlockNumber(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res
        if (tokenName === constants.eUSDT) {
          this.panel.USDT.accrualBlockNumber = res
        } else if (tokenName === constants.eETH) {
          this.panel.WETH.accrualBlockNumber = res
        } else if (tokenName === constants.eBNB) {
          this.panel.WBNB.accrualBlockNumber = res
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async getBlockNumberPage() {
      let result = 0
      //获取当前高度
      await getBlockNumber(
          this.$store.state.wallet,
      ).then(res => {
        result = res
        this.panel.blockNumber = res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async totalReservesPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取最后一次合约触发时的总储备金
      await totalReserves(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res

        if (tokenName === constants.eUSDT) {
          this.panel.USDT.totalReservesInfo = new Decimal(res).div(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eETH) {
          this.panel.WETH.totalReservesInfo = new Decimal(res).div(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eBNB) {
          this.panel.WBNB.totalReservesInfo = new Decimal(res).div(Decimal.pow(10, decimals.BNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        }

      }).catch(err => {
        console.log("err totalReserve")
        this.getErrorInfo(err)
      })
      return result
    },
    async totalBorrowsPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取最后一次合约触发时的借款总额
      await totalBorrows(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res

        let amount = new Decimal(res)
        if (tokenName === constants.eUSDT) {
          this.panel.USDT.totalBorrowsInfo = amount.dividedBy(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eETH) {
          this.panel.WETH.totalBorrowsInfo = amount.dividedBy(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        }else if (tokenName === constants.eBNB) {
          this.panel.WBNB.totalBorrowsInfo = amount.dividedBy(Decimal.pow(10, decimals.BNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        }

      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async borrowIndexPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取最后一次合约触发时的借款总额
      await borrowIndex(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async getCashPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取USDT资金池余额
      await getCash(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res

        if (tokenName === constants.eUSDT) {
          this.panel.USDT.totalCash = new Decimal(res).div(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eETH) {
          this.panel.WETH.totalCash = new Decimal(res).div(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        }else if (tokenName === constants.eBNB) {
          this.panel.WBNB.totalCash = new Decimal(res).div(Decimal.pow(10, decimals.BNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        }

      }).catch(err => {
        console.log('getcash err')
        this.getErrorInfo(err)
      })
      return result
    },
    async exchangeRateStoredPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取USDT资金池余额
      await exchangeRateStored(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res
      }).catch(err => {
        console.log('exchangeRate err')
        this.getErrorInfo(err)
      })
      return result
    },
    async getReserveFactorMantissaPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取USDT资金池余额
      await reserveFactorMantissa(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res
      }).catch(err => {
        console.log('reserveFactorMantissa err')
        this.getErrorInfo(err)
      })
      return result
    },
    async totalSupplyPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      } else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取eUSDT供应量
      await totalSupply(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res
      }).catch(err => {
        console.log('totalSupplyPage err')
        this.getErrorInfo(err)
      })
      return result
    },
    async getBorrowRatePage(tokenName, cash, borrows, reserves) {
      let interestModelAddr
      if (tokenName === constants.eUSDT) {
        interestModelAddr = this.addressInfo.current.UsdtJumpRateModel
      }else if (tokenName === constants.eETH){
        interestModelAddr = this.addressInfo.current.ETHJumpRateModel
      }else if (tokenName === constants.eBNB){
        interestModelAddr = this.addressInfo.current.BaseJumpRateModel
      }
      let result = 0
      //获取USDT资金池余额
      await getBorrowRate(
          this.$store.state.wallet,
          interestModelAddr,
          cash,
          borrows,
          reserves
      ).then(res => {
        result = res
      }).catch(err => {
        console.log("error getBorrowRatePage")
        this.getErrorInfo(err)
      })
      return result
    },
    async getSupplyRatePage(tokenName, cash, borrows, reserves, reserveFactor) {
      let interestModelAddr
      if (tokenName === constants.eUSDT) {
        interestModelAddr = this.addressInfo.current.UsdtJumpRateModel
      }else if (tokenName === constants.eETH){
        interestModelAddr = this.addressInfo.current.ETHJumpRateModel
      }else if (tokenName === constants.eBNB){
        interestModelAddr = this.addressInfo.current.BaseJumpRateModel
      }

      let result = 0
      //获取USDT资金池余额
      await getSupplyRate(
          this.$store.state.wallet,
          interestModelAddr,
          cash,
          borrows,
          reserves,
          reserveFactor
      ).then(res => {
        result = res
      }).catch(err => {
        console.log("error getSupplyRate")
        this.getErrorInfo(err)
      })
      return result
    },
    async utilizationRatePage(tokenName,cash, borrows, reserves) {
      let interestModelAddr
      if (tokenName === constants.eUSDT) {
        interestModelAddr = this.addressInfo.current.UsdtJumpRateModel
      }else if (tokenName === constants.eETH){
        interestModelAddr = this.addressInfo.current.ETHJumpRateModel
      }else if (tokenName === constants.eBNB){
        interestModelAddr = this.addressInfo.current.BaseJumpRateModel
      }
      let result = 0
      //获取USDT资金池余额
      await utilizationRate(
          interestModelAddr,
          this.$store.state.wallet,
          cash,
          borrows,
          reserves
      ).then(res => {
        result = res
      }).catch(err => {
        console.log("error utilizationRatePage")
        this.getErrorInfo(err)
      })
      return result
    },
    async getPricePage(tokenName) {
      let result
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      await viewPrice(
          this.$store.state.wallet,
          eTokenAddress,
          this.addressInfo.current.Oracle
      ).then(res => {
        console.log("price",res)

        let balance = new Decimal(res)
        let mantissa
        if (tokenName === constants.eUSDT) {
          mantissa = 36 - decimals.USDT
          result = balance.div(Decimal.pow(10, mantissa))
          this.panel.USDT.price = balance.div(Decimal.pow(10, mantissa)).toFixed(4,Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eETH) {
          mantissa = 36 - decimals.ETH
          result = balance.div(Decimal.pow(10, mantissa))
          this.panel.WETH.price = balance.div(Decimal.pow(10, mantissa)).toFixed(4,Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eBNB) {
          mantissa = 36 - decimals.BNB
          result = balance.div(Decimal.pow(10, mantissa))
          this.panel.WBNB.price = balance.div(Decimal.pow(10, mantissa)).toFixed(4,Decimal.ROUND_DOWN)
        }

      }).catch(err => {
        console.log("error viewPrice")
        this.getErrorInfo(err)
      })
      return result
    },
    switchMarketStatus(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      this.$parent.loading = true;
      this.$parent.flag1 = true;
      this.$parent.flag2 = false;
      this.$parent.flag3 = false;
      this.WETHSupplyDialogVisible = false;
      this.USDTSupplyDialogVisible = false;
      this.WBNBSupplyDialogVisible = false;
      //先判断当前是开启抵押还是关闭抵押
      //如果开启，查看用户是否抵押
      //如果抵押计算另一个币种是否满足借款
      let assetToken
      if (tokenName === constants.USDT) {
        assetToken = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.ETH) {
        assetToken = this.addressInfo.current.eETH
      }else if (tokenName === constants.BNB) {
        assetToken = this.addressInfo.current.eBNB
      }
      let assetArray = new Array(assetToken)
      //如果满足
      this.checkMemberShipPage(tokenName).then(result => {
        if (!result) {
          console.log("enterMarkets")
          enterMarkets(
              this.$store.state.wallet,
              assetArray,
              this.addressInfo.current.Unitroller,
              data => {
                this.$parent.url = this.addressInfo.current.tx_url + data.message;
                this.$parent.flag2 = true;
                this.$parent.flag1 = false;
                this.$parent.flag3 = false;
              }
          ).then(res => {
            this.$parent.loading = false;
            if (tokenName === constants.USDT) {
              this.market.USDT.supply.isEnterMarket = true;
            } else if (tokenName === constants.ETH) {
              this.market.WETH.supply.isEnterMarket = true;
            }else if (tokenName === constants.BNB) {
              this.market.WBNB.supply.isEnterMarket = true;
            }
            this.getSuccessInfo(this.$parent.url)
          }).catch(err => {
            console.log("enterMarket err")
            this.$parent.loading = false;
            this.getErrorInfo(err)
          })
        } else {
          console.log("exitMarket")
          exitMarket(
              this.$store.state.wallet,
              assetToken,
              this.addressInfo.current.Unitroller,
              data => {
                this.$parent.url = this.addressInfo.current.tx_url + data.message;
                this.$parent.flag2 = true;
                this.$parent.flag1 = false;
                this.$parent.flag3 = false;
              }
          ).then(res => {
            this.$parent.loading = false;
            if (tokenName === constants.USDT) {
              this.market.USDT.supply.isEnterMarket = false;
            } else if (tokenName === constants.ETH) {
              this.market.WETH.supply.isEnterMarket = false;
            }else if (tokenName === constants.BNB) {
              this.market.WBNB.supply.isEnterMarket = false;
            }
            this.getSuccessInfo(this.$parent.url)
          }).catch(err => {
            this.$parent.loading = false;
            console.log("exitMarket err")
            this.getErrorInfo(err)
          })
        }
      })
    },
    async getCollateralFactor(tokenName) {
      let result
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      //获取抵押因子 用于计算抵押存款
      await markets(
          this.$store.state.wallet,
          eTokenAddress,
          this.addressInfo.current.Unitroller
      ).then(res => {
        let collateralFactorMantissa = res.collateralFactorMantissa
        result = collateralFactorMantissa
        console.log('collateralFactorMantissa',tokenName)
        if (tokenName === constants.eUSDT) {
          this.panel.USDT.collateralFactor = new Decimal(collateralFactorMantissa).div(Decimal.pow(10, 16))
        } else if (tokenName === constants.eETH) {

          this.panel.WETH.collateralFactor = new Decimal(collateralFactorMantissa).div(Decimal.pow(10, 16))
        }else if (tokenName === constants.eBNB) {
          console.log('collateralFactorMantissa',collateralFactorMantissa)
          this.panel.WBNB.collateralFactor = new Decimal(collateralFactorMantissa).div(Decimal.pow(10, 16))
        }
      }).catch(err => {
        console.log('err getCollateralFactor')
        this.getErrorInfo(err)
      })
      return result
    },
    async checkMemberShipPage(tokenName) {
      let isSuccess = false;
      let assetToken
      if (tokenName === constants.USDT) {
        assetToken = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.ETH) {
        assetToken = this.addressInfo.current.eETH
      }else if (tokenName === constants.BNB) {
        assetToken = this.addressInfo.current.eBNB
      }
      let assetArray = new Array(assetToken)
      await checkMembership(
          this.$store.state.wallet,
          assetToken,
          this.addressInfo.current.Unitroller
      ).then(res => {
        isSuccess = res
        if (tokenName === constants.USDT) {
          this.market.USDT.supply.isEnterMarket = res;
        } else if (tokenName === constants.ETH) {
          this.market.WETH.supply.isEnterMarket = res;
        }else if (tokenName === constants.BNB) {
          this.market.WBNB.supply.isEnterMarket = res;
        }
      }).catch(err => {
        console.log('checkMemberShipPage err')
        this.getErrorInfo(err)
      })
      return isSuccess
    },
    async closeFactorMantissaPage() {
      let result
      await closeFactorMantissa(
          this.$store.state.wallet,
          this.addressInfo.current.Unitroller,
      ).then(res => {
        result=res
        this.panel.closeFactorMantissa = new Decimal(res).div(Decimal.pow(10,16)).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      }).catch(err => {
        console.log("err closeFactorMantissaPage")
        this.getErrorInfo(err)
      })
      return result
    },
    async kinkPage(tokenName) {
      let result
      let interestModelAddr
      if (tokenName === constants.eUSDT) {
        interestModelAddr = this.addressInfo.current.UsdtJumpRateModel
      }else if (tokenName === constants.eETH){
        interestModelAddr = this.addressInfo.current.ETHJumpRateModel
      }else if (tokenName === constants.eBNB){
        interestModelAddr = this.addressInfo.current.BaseJumpRateModel
      }
      await kink(
          this.$store.state.wallet,
          interestModelAddr,
      ).then(res => {
        result=res
        let kink=new Decimal(res).div(Decimal.pow(10,16)).toDecimalPlaces(18,Decimal.ROUND_DOWN)
        if (tokenName === constants.eUSDT) {
          this.panel.USDT.kink = kink
        }else if (tokenName === constants.eETH){
          this.panel.WETH.kink = kink
        }else if (tokenName === constants.eBNB){
          this.panel.WBNB.kink = kink
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async blocksPerYearPage(tokenName) {
      let result
      let interestModelAddr
      if (tokenName === constants.eUSDT) {
        interestModelAddr = this.addressInfo.current.UsdtJumpRateModel
      }else if (tokenName === constants.eETH){
        interestModelAddr = this.addressInfo.current.ETHJumpRateModel
      }else if (tokenName === constants.eBNB){
        interestModelAddr = this.addressInfo.current.BaseJumpRateModel
      }
      await blocksPerYear(
          this.$store.state.wallet,
          interestModelAddr,
      ).then(res => {
        result=res
        this.panel.common.blocksPerYear = res
        // if (tokenName === constants.eUSDT) {
        //   this.panel.common.blocksPerYear = res
        // }else if (tokenName === constants.eETH){
        //   this.panel.common.blocksPerYear = res
        // }else if (tokenName === constants.eBNB){
        //   this.panel.common.blocksPerYear = res
        // }
      }).catch(err => {
        console.log("err blocksPerYearPage")
        this.getErrorInfo(err)
      })
      return result
    },
    async jumpMultiplierPerBlockPage(tokenName) {
      let result
      let interestModelAddr
      if (tokenName === constants.eUSDT) {
        interestModelAddr = this.addressInfo.current.UsdtJumpRateModel
      }else if (tokenName === constants.eETH){
        interestModelAddr = this.addressInfo.current.ETHJumpRateModel
      }else if (tokenName === constants.eBNB){
        interestModelAddr = this.addressInfo.current.BaseJumpRateModel
      }
      await jumpMultiplierPerBlock(
          this.$store.state.wallet,
          interestModelAddr
      ).then(res => {
        result=res
        if (tokenName === constants.eUSDT) {
          this.panel.USDT.jusdtJumpMultiplierPerBlock = res
        }else if (tokenName === constants.eETH){
          this.panel.WETH.jumpMultiplierPerBlock = res
        }else if (tokenName === constants.eBNB){
          this.panel.WBNB.jumpMultiplierPerBlock = res
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async multiplierPerBlockPage(tokenName) {
      let result
      let interestModelAddr
      if (tokenName === constants.eUSDT) {
        interestModelAddr = this.addressInfo.current.UsdtJumpRateModel
      }else if (tokenName === constants.eETH){
        interestModelAddr = this.addressInfo.current.ETHJumpRateModel
      }else if (tokenName === constants.eBNB){
        interestModelAddr = this.addressInfo.current.BaseJumpRateModel
      }
      await multiplierPerBlock(
          this.$store.state.wallet,
          interestModelAddr
      ).then(res => {
        result=res
        if (tokenName === constants.eUSDT) {
          this.panel.USDT.multiplierPerBlock = res
        }else if (tokenName === constants.eETH){
          this.panel.WETH.multiplierPerBlock = res
        }else if (tokenName === constants.eBNB){
          this.panel.WBNB.multiplierPerBlock = res
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async baseRatePerBlockPage(tokenName) {
      let result
      let interestModelAddr
      if (tokenName === constants.eUSDT) {
        interestModelAddr = this.addressInfo.current.UsdtJumpRateModel
      }else if (tokenName === constants.eETH){
        interestModelAddr = this.addressInfo.current.ETHJumpRateModel
      }else if (tokenName === constants.eBNB){
        interestModelAddr = this.addressInfo.current.BaseJumpRateModel
      }
      await baseRatePerBlock(
          this.$store.state.wallet,
          interestModelAddr
      ).then(res => {
        result=res
        if (tokenName === constants.eUSDT) {
          this.panel.USDT.baseRatePerBlock = res
        }else if (tokenName === constants.eETH){
          this.panel.WETH.baseRatePerBlock = res
        }else if (tokenName === constants.eETH){
          this.panel.WBNB.baseRatePerBlock = res
        }
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async accrueInterestPage(tokenName) {
      let currentBlockNumber = await this.getBlockNumberPage()
      let accrualBlockNumber = await this.accrualBlockNumberPage(tokenName)
      let totalCash = await this.getCashPage(tokenName)
      let totalBorrows = await this.totalBorrowsPage(tokenName)
      let totalReserves = await this.totalReservesPage(tokenName)
      let borrowIndex = await this.borrowIndexPage(tokenName)
      let utilizationRate= await this.utilizationRatePage(tokenName,totalCash, totalBorrows, totalReserves)
      if (tokenName === constants.eUSDT) {
        this.panel.USDT.utilizationRate = new Decimal(utilizationRate).div(Decimal.pow(10, 16)).toFixed(16, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.eETH) {
        this.panel.WETH.utilizationRate = new Decimal(utilizationRate).div(Decimal.pow(10, 16)).toFixed(16, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.eBNB) {
        console.log('wBNB utilizationRate',utilizationRate)
        this.panel.WBNB.utilizationRate = new Decimal(utilizationRate).div(Decimal.pow(10, 16)).toFixed(16, Decimal.ROUND_DOWN)
      }
      let borrowRate = await this.getBorrowRatePage(tokenName, totalCash, totalBorrows, totalReserves)
      let reserveFactorMantissa = await this.getReserveFactorMantissaPage(tokenName)
      this.market.USDT.borrow.borrowRate = borrowRate
      // 当前区块和 accrualBlockNumberPrior 之间的区块数
      let blockDelta = new Decimal(currentBlockNumber).sub(new Decimal(accrualBlockNumber)).add(new Decimal(1))
      // 区块区间内的单位利息=借贷利率*区块数
      let simpleInterestFactor = new Decimal(borrowRate).mul(new Decimal(blockDelta))
      // 总借款在该区块区间内产生的总利息=区块区间内的单位利息*总借款/1Ether(最后取整数值)
      let interestAccumulated = simpleInterestFactor.mul(new Decimal(totalBorrows)).div(Decimal.pow(10, 18)).toFixed(0, Decimal.ROUND_DOWN)
      // 新的借款总额：总利息累加到总借款中=总借款在该区块区间内产生的总利息+总借款
      let totalBorrowsNew = new Decimal(interestAccumulated).add(new Decimal(totalBorrows))
      // 原来的链上储备资金 * interestAccumulated +现在获取到的
      // totalReservesNew = reserveFactorMantissa * interestAccumulated / 1Ether (取整数值) + totalReserves，根据储备金率将部分利息累加到储备金中
      let totalReservesNew = new Decimal(new Decimal(reserveFactorMantissa).mul(interestAccumulated).div(Decimal.pow(10, 18)).toFixed(0, Decimal.ROUND_DOWN)).add(new Decimal(totalReserves))
      // 累加借款指数=区块区间内的单位利息x借款指数/1Ether+借款指数
      let borrowIndexNew = new Decimal(simpleInterestFactor.mul(new Decimal(borrowIndex)).div(Decimal.pow(10, 18)).toFixed(0, Decimal.ROUND_DOWN)).add(new Decimal(borrowIndex))
      //console.log("totalBorrowsNew",totalBorrowsNew.toString(),totalReservesNew.toString(),borrowIndexNew.toString(),totalCash.toString())
      return {borrowIndex, totalBorrowsNew, totalReservesNew, borrowIndexNew, totalCash}
    },
    async exchangeRatePage(tokenName) {
      let list = await this.accrueInterestPage(tokenName)
      //exchangeRate = (totalCash + totalBorrows - totalReserves) / totalSupply
      let cashPlusBorrowsMinusReserves = new Decimal(list.totalCash).add(new Decimal(list.totalBorrowsNew)).sub(new Decimal(list.totalReservesNew))
      // 兑换率=(资金池余额+借贷总额-总储备金)*1Ether/总供应量
      let exchangeRate
      let cTokenDecimals = 8;
      let mantissa
      // 总供应量
      let totalSupply = await this.totalSupplyPage(tokenName)
      if (new Decimal(totalSupply).cmp(new Decimal(0)) === 0) {
        exchangeRate = await this.exchangeRateStoredPage(tokenName)
        if (tokenName === constants.eUSDT) {
          mantissa = 18 + decimals.USDT - cTokenDecimals
          this.panel.USDT.exchangeRate = new Decimal(1).div(new Decimal(exchangeRate).div(Decimal.pow(10, mantissa))).toFixed(18, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eETH) {
          mantissa = 18 + decimals.ETH - cTokenDecimals
          this.panel.WETH.exchangeRate = new Decimal(1).div(new Decimal(exchangeRate).div(Decimal.pow(10, mantissa))).toFixed(18, Decimal.ROUND_DOWN)
        } else if (tokenName === constants.eBNB) {
          mantissa = 18 + decimals.BNB - cTokenDecimals
          this.panel.WBNB.exchangeRate = new Decimal(1).div(new Decimal(exchangeRate).div(Decimal.pow(10, mantissa))).toFixed(18, Decimal.ROUND_DOWN)
        }
        return exchangeRate
      }

      // cToken和标的资产的初始兑换率小数点换算=18+标的资产小数位-cToken资产小数位
      // oneCTokenInUnderlying = exchangeRateCurrent / (1 * 10 ^ (18 + underlyingDecimals - cTokenDecimals))

      if (tokenName === constants.eUSDT) {
        //18+18-8=28 eETH 6
        mantissa = 18 + decimals.USDT - cTokenDecimals
        exchangeRate = cashPlusBorrowsMinusReserves.mul(Decimal.pow(10, 18)).div(new Decimal(totalSupply)).toFixed(0, Decimal.ROUND_DOWN)
        this.panel.USDT.exchangeRate = new Decimal(1).div(new Decimal(exchangeRate).div(Decimal.pow(10, mantissa))).toFixed(18, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.eETH) {
        //18+18-8=28 eETH 18
        mantissa = 18 + decimals.ETH - cTokenDecimals
        exchangeRate = cashPlusBorrowsMinusReserves.mul(Decimal.pow(10, 18)).div(new Decimal(totalSupply)).toFixed(0, Decimal.ROUND_DOWN)
        this.panel.WETH.exchangeRate = new Decimal(1).div(new Decimal(exchangeRate).div(Decimal.pow(10, mantissa))).toFixed(18, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.eBNB) {
        //18+18-8=28 eETH 18
        mantissa = 18 + decimals.BNB - cTokenDecimals
        exchangeRate = cashPlusBorrowsMinusReserves.mul(Decimal.pow(10, 18)).div(new Decimal(totalSupply)).toFixed(0, Decimal.ROUND_DOWN)
        this.panel.WBNB.exchangeRate = new Decimal(1).div(new Decimal(exchangeRate).div(Decimal.pow(10, mantissa))).toFixed(18, Decimal.ROUND_DOWN)
      }

      return exchangeRate
    },
    async getSupplyPage(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      //用户的eToken存款数量
      let redeemTokensIn = await this.getUserSupplyTokenPage(tokenName)
      // 最新兑换率
      let exchangeRateMantissa = await this.exchangeRatePage(tokenName)
      let redeemBalance
      let redeemAmount
      let price = await this.getPricePage(tokenName)
      let collateralFactor = await this.getCollateralFactor(tokenName)
      if (tokenName === constants.eUSDT) {
        //存款金额=兑换率*存款数量/1Ether （取整数值）
        redeemAmount = new Decimal(new Decimal(exchangeRateMantissa).mul(new Decimal(redeemTokensIn)).div(Decimal.pow(10, 18)).toFixed(0, Decimal.ROUND_DOWN)).div(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        this.market.USDT.supply.count = redeemAmount.toString()

        redeemBalance = new Decimal(redeemAmount).mul(new Decimal(price))
        //金额保留8位
        this.market.USDT.supply.balance = redeemBalance.toFixed(8, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.eBNB) {
        redeemAmount = new Decimal(new Decimal(exchangeRateMantissa).mul(new Decimal(redeemTokensIn)).div(Decimal.pow(10, 18)).toFixed(0, Decimal.ROUND_DOWN)).div(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        this.market.WBNB.supply.count = redeemAmount.toString()
        redeemBalance = new Decimal(redeemAmount).mul(new Decimal(price))
        this.market.WBNB.supply.balance = redeemBalance.toFixed(8, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.eETH) {
        //WETH存款数量
        console.log("WETH exchangeRateMantissa",exchangeRateMantissa)
        console.log("WETH redeemTokensIn",redeemTokensIn)
        redeemAmount = new Decimal(new Decimal(exchangeRateMantissa).mul(new Decimal(redeemTokensIn)).div(Decimal.pow(10, 18)).toFixed(0, Decimal.ROUND_DOWN)).div(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        console.log("WETH redeemAmount",redeemAmount)
        this.market.WETH.supply.count = redeemAmount.toString()
        //存款金额
        redeemBalance = new Decimal(redeemAmount).mul(new Decimal(price))
        this.market.WETH.supply.balance = redeemBalance.toFixed(8, Decimal.ROUND_DOWN)
        // 可抵押价值=存款数量xWETH价格x抵押率
        // 借款限额（数量）
        let enterCash = redeemBalance.mul(new Decimal(collateralFactor).div(Decimal.pow(10, 18)))
        // 用户最少存多少WETH的数量=当前借贷总额/（WETH抵押因子/1Ether）/WETH价格
        let limitPercent = new Decimal(0.8)
        // 借款USDT最大额度金额(80%限额)
        let borrowAmountLimit = enterCash.mul(limitPercent)
        this.market.USDT.borrow.borrowAmountLimit = borrowAmountLimit.toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        // 借款USDT最大额度数量(80%限额)
        //获取usdt价格
        let usdtPrice = await this.getPricePage(constants.eUSDT)
        //最大金额/价格=最大数量
        let borrowCountLimit = enterCash.mul(limitPercent).div(new Decimal(usdtPrice))
        this.market.USDT.borrow.borrowCountLimit = borrowCountLimit.toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        // usdt剩余可借额度(判断是否大于0，不是设置为0)
        let canBorrowCountLimit = borrowAmountLimit.sub(this.market.USDT.borrow.count)
        if (canBorrowCountLimit.lt(new Decimal(0)) === true) {
          canBorrowCountLimit = 0
        }
        this.market.USDT.borrow.canBorrowCountLimit = canBorrowCountLimit
        // 借款限制百分比
        this.market.USDT.borrow.borrowlimitPercent = limitPercent.mul(new Decimal(100)).toString()
        // 限额已使用百分比
        let alreadyCashPercent
        if (enterCash.cmp(new Decimal(0))===0){
          alreadyCashPercent = new Decimal(0)
        }else{
          alreadyCashPercent = new Decimal(this.market.USDT.borrow.balance).div(enterCash)
        }
        this.market.USDT.borrow.alreadyCashPercent = alreadyCashPercent.mul(new Decimal(100)).toFixed(4)

        console.log("alreadyCashPercent",alreadyCashPercent.toNumber().toString())
        console.log("alreadyCashPercent",alreadyCashPercent.cmp(new Decimal(0.8)))
        //借款限额大于等于80%时候，可取数量设为0
        // Decimal cmp=0 2个数相等 cmp=1 前面大于后面 cmp=-1 后面大于前面
        if (alreadyCashPercent.cmp(new Decimal(0.8))> -1){
          this.market.USDT.supply.userCanRedeemCount = 0
        }else{
          //剩余WETH可取80%-已使用的百分比
          // 最多可贷-已经贷的=可取的
          let userCanRedeem = enterCash.sub(new Decimal(this.market.USDT.borrow.balance))
          //用户可取的金额/WETH价格=可取的WETH数量
          let userCanRedeemCount = userCanRedeem.div(new Decimal(price))
          this.market.USDT.supply.userCanRedeemCount = userCanRedeemCount
        }

      }
      await this.searchLiquidity()
      return {redeemAmount, redeemBalance}
    },
    async getBorrowPage(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      let list = await this.accrueInterestPage(tokenName)
      let borrowBalance = await this.getUserBorrowTokenPage(this.$store.state.wallet.address, tokenName)
      // principalTimesIndex=borrower.borrowBalance * market.borrowIndex
      let price = await this.getPricePage(tokenName)
      if (tokenName === constants.eUSDT) {
        let recentBorrowBalance = new Decimal(borrowBalance).mul(list.borrowIndexNew).div(list.borrowIndex).div(Decimal.pow(10, decimals.USDT)).toFixed(decimals.USDT, Decimal.ROUND_DOWN)
        this.market.USDT.borrow.count = recentBorrowBalance
        this.market.USDT.borrow.balance = new Decimal(recentBorrowBalance).mul(new Decimal(price)).toFixed(8, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.eETH) {
        let recentBorrowBalance = new Decimal(borrowBalance).mul(list.borrowIndexNew).div(list.borrowIndex).div(Decimal.pow(10, decimals.ETH)).toFixed(decimals.ETH, Decimal.ROUND_DOWN)
        this.market.WETH.borrow.count = recentBorrowBalance
        this.market.WETH.borrow.balance = new Decimal(recentBorrowBalance).mul(new Decimal(price)).toFixed(8, Decimal.ROUND_DOWN)
      } else if (tokenName === constants.eBNB) {
        let recentBorrowBalance = new Decimal(borrowBalance).mul(list.borrowIndexNew).div(list.borrowIndex).div(Decimal.pow(10, decimals.BNB)).toFixed(decimals.BNB, Decimal.ROUND_DOWN)
        this.market.WBNB.borrow.count = recentBorrowBalance
        this.market.WBNB.borrow.balance = new Decimal(recentBorrowBalance).mul(new Decimal(price)).toFixed(8, Decimal.ROUND_DOWN)
      }
    },
    async getApy(tokenName) {
      if (!this.verifyConnect()) {
        return
      }
      if (this.$store.state.wallet.networkId === 97||this.$store.state.wallet.networkId === 56||this.$store.state.wallet.networkId === 128) {
        //bsc heco 主网测试 每3s一个区块
        let blocksPerDay = 28800
        //一年按照365天计算
        let daysPerYear = 365

        //储备金率：抽取借款利息的百分比
        //eETHhom为0 方便扩展可取合约
        //let reserveFactorMantissa=0
        let reserveFactorMantissa = await this.getReserveFactorMantissaPage(tokenName)

        //实时
        let list = await this.accrueInterestPage(tokenName)

        //合约最后一次触发
        //let supplyRatePerBlock=await this.supplyRatePerBlockPage(tokenName)
        //let borrowRatePerBlock=await this.borrowRatePerBlockPage(tokenName)
        //实时
        let borrowRatePerBlock = await this.getBorrowRatePage(tokenName, list.totalCash, list.totalBorrowsNew.toFixed(0, Decimal.ROUND_DOWN), list.totalReservesNew.toFixed(0, Decimal.ROUND_DOWN))
        let supplyRatePerBlock = await this.getSupplyRatePage(tokenName, list.totalCash, list.totalBorrowsNew.toFixed(0, Decimal.ROUND_DOWN), list.totalReservesNew.toFixed(0, Decimal.ROUND_DOWN), reserveFactorMantissa)
        console.log("borrowRatePerBlock",borrowRatePerBlock)
        console.log("supplyRatePerBlock",supplyRatePerBlock)
        let one = new Decimal(1)
        let hundred = new Decimal(100)
        let supply = new Decimal(supplyRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
        let borrow = new Decimal(borrowRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
        let supplyApy = Decimal.pow(supply, daysPerYear).sub(one).mul(hundred)
        let borrowApy = Decimal.pow(borrow, daysPerYear).sub(one).mul(hundred)
        if (tokenName===constants.eUSDT){
          this.panel.USDT.reserveFactorMantissa=new Decimal(reserveFactorMantissa).div(Decimal.pow(10, 16)).toDecimalPlaces(18,Decimal.ROUND_DOWN)
          this.panel.USDT.borrowRatePerBlock=borrowRatePerBlock
          this.panel.USDT.supplyRatePerBlock=supplyRatePerBlock
          this.panel.USDT.supplyApy = supplyApy
          this.panel.USDT.borrowApy = borrowApy
        }else if (tokenName===constants.eETH){
          this.panel.WETH.reserveFactorMantissa=new Decimal(reserveFactorMantissa).div(Decimal.pow(10, 16)).toDecimalPlaces(18,Decimal.ROUND_DOWN)
          this.panel.WETH.borrowRatePerBlock=borrowRatePerBlock
          this.panel.WETH.supplyRatePerBlock=supplyRatePerBlock
          this.panel.WETH.supplyApy = supplyApy
          this.panel.WETH.borrowApy = borrowApy
        }else if (tokenName===constants.eBNB){
          console.log('reserveFactorMantissa',reserveFactorMantissa)
          this.panel.WBNB.reserveFactorMantissa=new Decimal(reserveFactorMantissa).div(Decimal.pow(10, 16)).toDecimalPlaces(18,Decimal.ROUND_DOWN)
          this.panel.WBNB.borrowRatePerBlock=borrowRatePerBlock
          this.panel.WBNB.supplyRatePerBlock=supplyRatePerBlock
          this.panel.WBNB.supplyApy = supplyApy
          this.panel.WBNB.borrowApy = borrowApy
        }
      } else if (this.$store.state.wallet.networkId === 3476) {
        //bhp主网和测试网为 每块15s
        let blocksPerDay = 5760
        //一年按照365天计算
        let daysPerYear = 365

        //合约最后一次触发
        //let supplyRatePerBlock=await this.supplyRatePerBlockPage(constants.eUSDT)
        //let borrowRatePerBlock=await this.borrowRatePerBlockPage(constants.eUSDT)
        //实时
        let list = await this.accrueInterestPage(tokenName)
        let borrowRatePerBlock = await this.getBorrowRatePage(tokenName, list.totalCash, list.totalBorrowsNew.toNumber(), list.totalReservesNew.toNumber())
        let supplyRatePerBlock = await this.getSupplyRatePage(tokenName, list.totalCash, list.totalBorrowsNew.toNumber(), list.totalReservesNew.toNumber(), "0")
        let one = new Decimal(1)
        let hundred = new Decimal(100)
        let supply = new Decimal(supplyRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
        let borrow = new Decimal(borrowRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
        let supplyApy = Decimal.pow(supply, daysPerYear).sub(one).mul(hundred)
        let borrowApy = Decimal.pow(borrow, daysPerYear).sub(one).mul(hundred)
        if (tokenName===constants.eUSDT){
          this.panel.USDT.borrowRatePerBlock=borrowRatePerBlock
          this.panel.USDT.supplyRatePerBlock=supplyRatePerBlock
          this.panel.USDT.supplyApy = supplyApy
          this.panel.USDT.borrowApy = borrowApy
        }else if (tokenName===constants.eETH){
          this.panel.borrowWETHRatePerBlock=borrowRatePerBlock
          this.panel.supplyWETHRatePerBlock=supplyRatePerBlock
          this.panel.supplyWETHApy = supplyApy
          this.panel.borrowWETHApy = borrowApy
        }
      } else if (this.$store.state.wallet.networkId === 1||this.$store.state.wallet.networkId === 2) {
        //eth主网 每13.15一个区块
        let blocksPerDay = 6570
        //一年按照365天计算
        let daysPerYear = 365

        //储备金率：抽取借款利息的百分比
        //eETHhom为0 方便扩展可取合约
        //let reserveFactorMantissa=0
        let reserveFactorMantissa = await this.getReserveFactorMantissaPage(tokenName)

        //实时
        let list = await this.accrueInterestPage(tokenName)

        //合约最后一次触发
        //let supplyRatePerBlock=await this.supplyRatePerBlockPage(tokenName)
        //let borrowRatePerBlock=await this.borrowRatePerBlockPage(tokenName)
        let borrowRatePerBlock = await this.getBorrowRatePage(tokenName, list.totalCash, list.totalBorrowsNew.toFixed(0, Decimal.ROUND_DOWN), list.totalReservesNew.toFixed(0, Decimal.ROUND_DOWN))
        let supplyRatePerBlock = await this.getSupplyRatePage(tokenName, list.totalCash, list.totalBorrowsNew.toFixed(0, Decimal.ROUND_DOWN), list.totalReservesNew.toFixed(0, Decimal.ROUND_DOWN), reserveFactorMantissa)
        let one = new Decimal(1)
        let hundred = new Decimal(100)
        let supply = new Decimal(supplyRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
        let borrow = new Decimal(borrowRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDay).add(one)
        let supplyApy = Decimal.pow(supply, daysPerYear).sub(one).mul(hundred)
        let borrowApy = Decimal.pow(borrow, daysPerYear).sub(one).mul(hundred)
        if (tokenName===constants.eUSDT){
          this.panel.USDT.reserveFactorMantissa=new Decimal(reserveFactorMantissa).div(Decimal.pow(10, 16)).toDecimalPlaces(18,Decimal.ROUND_DOWN)
          this.panel.USDT.borrowRatePerBlock=borrowRatePerBlock
          this.panel.USDT.supplyRatePerBlock=supplyRatePerBlock
          this.panel.USDT.supplyApy = supplyApy
          this.panel.USDT.borrowApy = borrowApy
        }else if (tokenName===constants.eETH){
          this.panel.WETH.reserveFactorMantissa=new Decimal(reserveFactorMantissa).div(Decimal.pow(10, 16)).toDecimalPlaces(18,Decimal.ROUND_DOWN)
          this.panel.borrowWETHRatePerBlock=borrowRatePerBlock
          this.panel.supplyWETHRatePerBlock=supplyRatePerBlock
          this.panel.supplyWETHApy = supplyApy
          this.panel.borrowWETHApy = borrowApy
        }
      }
    },
    async getBSCApy() {
      //测试
      if (!this.verifyConnect()) {
        return
      }
      console.log("")
      //bsc supply test
      let blocksPerDayBsc = 28800
      let daysPerYearBsc = 365
      let one = new Decimal(1)
      let hundred = new Decimal(100)
      let baseRatePerBlock = new Decimal(1902587519)
      let multiplierPerBlock = 33295281582
      let jumpMultiplierPerBlock = new Decimal(570776255707)
      //储备金系数=25%
      let reserveFactor = new Decimal(0.25)
      //当 U ≤ Ukink :
      // 当U=0
      console.log("利用率为0%时")
      let u = new Decimal(0)
      let borrowRatePerBlock = u.mul(multiplierPerBlock).add(baseRatePerBlock).toFixed(0, Decimal.ROUND_DOWN)
      let supplyRatePerBlock = new Decimal(borrowRatePerBlock).mul(u).mul(one.sub(reserveFactor))
      let borrowInfo = new Decimal(borrowRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDayBsc).add(one)
      let supplyInfo = new Decimal(supplyRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDayBsc).add(one)
      let borrowApy = Decimal.pow(borrowInfo, daysPerYearBsc).sub(one).mul(hundred)
      let supplyApy = Decimal.pow(supplyInfo, daysPerYearBsc).sub(one).mul(hundred)
      console.log("borrowRatePerBlock", borrowRatePerBlock.toString())
      console.log("supplyRatePerBlock", supplyRatePerBlock.toString())
      console.log("borrowApy", borrowApy.toString())
      console.log("supplyApy", supplyApy.toString())

      //当u=80%
      console.log("利用率为80%时")
      u = new Decimal(0.8)
      borrowRatePerBlock = u.mul(multiplierPerBlock).add(baseRatePerBlock).toFixed(0, Decimal.ROUND_DOWN)
      supplyRatePerBlock = new Decimal(borrowRatePerBlock).mul(u).mul(one.sub(reserveFactor))
      borrowInfo = new Decimal(borrowRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDayBsc).add(one)
      supplyInfo = new Decimal(supplyRatePerBlock).div(Decimal.pow(10, 18)).mul(blocksPerDayBsc).add(one)
      borrowApy = Decimal.pow(borrowInfo, daysPerYearBsc).sub(one).mul(hundred)
      supplyApy = Decimal.pow(supplyInfo, daysPerYearBsc).sub(one).mul(hundred)
      console.log("borrowRatePerBlock", borrowRatePerBlock.toString())
      console.log("supplyRatePerBlock", supplyRatePerBlock.toString())
      console.log("borrowApy", borrowApy.toString())
      console.log("supplyApy", supplyApy.toString())

      //当u=100%
      console.log("利用率为100%时")
      u = new Decimal(1)
      let normalRate = borrowRatePerBlock
      let borrowRatePerBlock100 = new Decimal(0.2).mul(jumpMultiplierPerBlock).add(new Decimal(normalRate))
      let supplyRatePerBlock100 = new Decimal(borrowRatePerBlock100).mul(u).mul(one.sub(reserveFactor))
      borrowInfo = new Decimal(borrowRatePerBlock100).div(Decimal.pow(10, 18)).mul(blocksPerDayBsc).add(one)
      supplyInfo = new Decimal(supplyRatePerBlock100).div(Decimal.pow(10, 18)).mul(blocksPerDayBsc).add(one)
      borrowApy = Decimal.pow(borrowInfo, daysPerYearBsc).sub(one).mul(hundred)
      supplyApy = Decimal.pow(supplyInfo, daysPerYearBsc).sub(one).mul(hundred)
      console.log("borrowRatePerBlock", borrowRatePerBlock100.toString())
      console.log("supplyRatePerBlock", supplyRatePerBlock100.toString())
      console.log("borrowApy", borrowApy.toString())
      console.log("supplyApy", supplyApy.toString())
      console.log("")
    },
    async supplyRatePerBlockPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取每一个区块的存款利率
      await supplyRatePerBlock(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async borrowRatePerBlockPage(tokenName) {
      let eTokenAddress
      if (tokenName === constants.eUSDT) {
        eTokenAddress = this.addressInfo.current.eUSDT
      } else if (tokenName === constants.eETH) {
        eTokenAddress = this.addressInfo.current.eETH
      }else if (tokenName === constants.eBNB) {
        eTokenAddress = this.addressInfo.current.eBNB
      }
      let result = 0
      //获取每一个区块的借款利率
      await borrowRatePerBlock(
          this.$store.state.wallet,
          eTokenAddress,
      ).then(res => {
        result = res
      }).catch(err => {
        this.getErrorInfo(err)
      })
      return result
    },
    async searchLiquidity() {
      let that = this
      this.account = that.$store.state.wallet.address
      this.liquidity.sumCollateral = new Decimal(that.market.WETH.supply.balance).mul(new Decimal(that.panel.WETH.collateralFactor).div(new Decimal(100))).toFixed(18,Decimal.ROUND_DOWN)
      this.liquidity.sumBorrowPlusEffects = that.market.USDT.borrow.balance
    },
    handleLiquid(index, row) {
      console.log(index, row);
    },
    riskValue(h, {column}) {
      return h(
          'div', [
            h('span', column.label),
            h('el-tooltip', {
              props: {
                effect: 'dark',
                content: ' 风险值超过100%将会被进行清算，请尽量控制风险值在85%以内 ',
                placement: 'top'
              },
            }, [
              h('i', {
                class: 'el-icon-question',
                style: 'margin-left:5px;'
              })
            ])
          ]
      );
    },
    borrowCount(h, {column}) {
      return h(
          'div', [
            h('span', column.label),
            h('el-tooltip', {
              props: {
                effect: 'dark',
                content: '借款代币数量',
                placement: 'top'
              },
            }, [
              h('i', {
                class: 'el-icon-question',
                style: 'margin-left:5px;'
              })
            ])
          ]
      );
    },
    async getApr() {
      let blocksPerYear = await this.blocksPerYearPage(constants.eUSDT)
      let baseRatePerBlock = await this.baseRatePerBlockPage(constants.eUSDT)
      let multiplierPerBlock =await this.multiplierPerBlockPage(constants.eUSDT)
      let jumpMultiplierPerBlock =await this.jumpMultiplierPerBlockPage(constants.eUSDT)
      let kink =await this.kinkPage(constants.eUSDT)
      let r0 = new Decimal(baseRatePerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      let r1 = new Decimal(multiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(new Decimal(kink)).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      let r2 = new Decimal(jumpMultiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(Decimal.pow(10, 18).sub(new Decimal(kink))).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.USDT.baseRatePerYear=new Decimal(baseRatePerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.USDT.multiplierPerYear=new Decimal(multiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(new Decimal(kink)).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.USDT.jumpMultiplierPerYear=new Decimal(jumpMultiplierPerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.USDT.r0=r0
      this.panel.USDT.r1=r1
      this.panel.USDT.r2=r2

      //blocksPerYear =await this.blocksPerYearPage(constants.eETH)
      baseRatePerBlock =await this.baseRatePerBlockPage(constants.eETH)
      multiplierPerBlock =await this.multiplierPerBlockPage(constants.eETH)
      jumpMultiplierPerBlock =await this.jumpMultiplierPerBlockPage(constants.eETH)
      kink =await this.kinkPage(constants.eETH)
      r0 = new Decimal(baseRatePerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      r1 = new Decimal(multiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(new Decimal(kink)).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      r2 = new Decimal(jumpMultiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(Decimal.pow(10, 18).sub(new Decimal(kink))).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.WETH.baseRatePerYear=new Decimal(baseRatePerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.WETH.multiplierPerYear=new Decimal(multiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(new Decimal(kink)).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.WETH.jumpMultiplierPerYear=new Decimal(jumpMultiplierPerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.WETH.r0=r0
      this.panel.WETH.r1=r1
      this.panel.WETH.r2=r2

      //blocksPerYear =await this.blocksPerYearPage(constants.eBNB)
      baseRatePerBlock =await this.baseRatePerBlockPage(constants.eBNB)
      multiplierPerBlock =await this.multiplierPerBlockPage(constants.eBNB)
      jumpMultiplierPerBlock =await this.jumpMultiplierPerBlockPage(constants.eBNB)
      kink =await this.kinkPage(constants.eBNB)
      r0 = new Decimal(baseRatePerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      r1 = new Decimal(multiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(new Decimal(kink)).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      r2 = new Decimal(jumpMultiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(Decimal.pow(10, 18).sub(new Decimal(kink))).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.WBNB.baseRatePerYear=new Decimal(baseRatePerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.WBNB.multiplierPerYear=new Decimal(multiplierPerBlock).mul(new Decimal(blocksPerYear)).mul(new Decimal(kink)).div(new Decimal(Decimal.pow(10, 18+16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.WBNB.jumpMultiplierPerYear=new Decimal(jumpMultiplierPerBlock).mul(new Decimal(blocksPerYear)).div(new Decimal(Decimal.pow(10, 16))).toDecimalPlaces(18,Decimal.ROUND_DOWN)
      this.panel.WBNB.r0=r0
      this.panel.WBNB.r1=r1
      this.panel.WBNB.r2=r2
    }
  },
};
</script>
<style>
</style>
