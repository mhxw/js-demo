import {
    constants, address, abi, decimals, underlyings
} from "@/configure/hashbank";
import {Utils} from "../utils/utils";

/**
 * 存款
 * @param wallet
 * @param mintAmount 存款金额
 * @param asset 存款的cToken合约地址
 * @param callback
 * @returns {Promise<unknown>}
 */
export async function mint(wallet,mintAmount, asset,callback){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    await mintEstimateGas(contract,wallet.web3,wallet.address,mintAmount, asset)
    return Utils.callContract(contract.methods.mint(mintAmount).send({from: wallet.address}), callback)
}

export async function mintEstimateGas(contract,web3,userAddress,mintAmount, asset) {
    let txObject = {
        from: userAddress,
        to: asset,
        data: contract.methods.mint(mintAmount).encodeABI()
    }
    return Utils.callContractEstimateGas(web3,txObject)
}

/**
 * 获取用户地址在cToken里面的余额
 * @param wallet
 * @param token cToken地址
 * @returns {Promise<*>}
 */
export async function balanceOf(wallet, token) {
    const contract = new wallet.web3.eth.Contract(abi.cErc20, token)
    return contract.methods.balanceOf(wallet.address).call({from: wallet.address})
}

/**
 * 赎回资产
 * @param wallet 进行取款的账户。
 * @param redeemTokens 要赎回的cToken数量。
 * @param asset 要操作的cToken合约地址
 * @param callback
 * @returns {Promise<unknown>}
 */
export async function redeem(wallet,redeemTokens, asset,callback){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    await redeemEstimateGas(contract,wallet.web3,wallet.address,redeemTokens, asset)
    return Utils.callContract(contract.methods.redeem(redeemTokens).send({from: wallet.address}), callback)
}

export async function redeemEstimateGas(contract,web3,userAddress,redeemTokens, asset) {
    let txObject = {
        from: userAddress,
        to: asset,
        data: contract.methods.redeem(redeemTokens).encodeABI()
    }
    return Utils.callContractEstimateGas(web3,txObject)
}

/**
 * 取回标的资产
 * @param wallet
 * @param redeemAmount
 * @param asset
 * @param callback
 * @returns {Promise<unknown>}
 */
export async function redeemUnderlying(wallet,redeemAmount, asset,callback){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    await redeemUnderlyingEstimateGas(contract,wallet.web3,wallet.address,redeemAmount, asset)
    return Utils.callContract(contract.methods.redeemUnderlying(redeemAmount).send({from: wallet.address}), callback)
}

export async function redeemUnderlyingEstimateGas(contract,web3,userAddress,redeemAmount, asset) {
    let txObject = {
        from: userAddress,
        to: asset,
        data: contract.methods.redeemUnderlying(redeemAmount).encodeABI()
    }
    return Utils.callContractEstimateGas(web3,txObject)
}

/**
 * 从协议中借取资产
 * @param wallet 借款账户
 * @param borrowAmount 资产数量
 * @param asset cToken合约
 * @param callback
 * @returns {Promise<unknown>}
 */
export async function borrow(wallet,borrowAmount, asset,callback){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    await borrowEstimateGas(contract,wallet.web3,wallet.address,borrowAmount, asset)
    return Utils.callContract(contract.methods.borrow(borrowAmount).send({from: wallet.address}), callback)
}

export async function borrowEstimateGas(contract,web3,userAddress,borrowAmount, asset) {
    let txObject = {
        from: userAddress,
        to: asset,
        data: contract.methods.borrow(borrowAmount).encodeABI()
    }
    return Utils.callContractEstimateGas(web3,txObject)
}

/**
 * 还款
 * @param wallet 还款账户
 * @param repayAmount 偿还的标的资产数量，2^{256}-1 表示偿还全部
 * @param asset cToken合约地址
 * @param callback
 * @returns {Promise<unknown>}
 */
export async function repayBorrow(wallet,repayAmount, asset,callback){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    await repayBorrowEstimateGas(contract,wallet.web3,wallet.address,repayAmount, asset)
    return Utils.callContract(contract.methods.repayBorrow(repayAmount).send({from: wallet.address}), callback)
}

export async function repayBorrowEstimateGas(contract,web3,userAddress,repayAmount, asset) {
    let txObject = {
        from: userAddress,
        to: asset,
        data: contract.methods.repayBorrow(repayAmount).encodeABI()
    }
    return Utils.callContractEstimateGas(web3,txObject)
}

/**
 * 查看某个用户地址是否开启对应cToken的抵押
 * @param wallet 用户地址
 * @param asset cToken合约
 * @returns {Promise<*>}
 */
export async function checkMembership(wallet,asset){
    const contract = new wallet.web3.eth.Contract(abi.Comptroller, address.bhp.Comptroller)
    return contract.methods.checkMembership(wallet.address,asset).call({from: wallet.address})
}

/**
 * 开启cToken市场抵押
 * @param wallet 调用地址
 * @param assetArray 资产数组
 * @param callback
 * @returns {Promise<unknown>}
 */
export async function enterMarkets(wallet,assetArray,callback){
    const contract = new wallet.web3.eth.Contract(abi.Comptroller, address.bhp.Comptroller)
    await enterMarketsEstimateGas(contract,wallet.web3,wallet.address,assetArray,address.bhp.Comptroller)
    return Utils.callContract(contract.methods.enterMarkets(assetArray).send({from: wallet.address}), callback)
}

export async function enterMarketsEstimateGas(contract,web3,userAddress,assetArray,compAddr) {
    let txObject = {
        from: userAddress,
        to: compAddr,
        data: contract.methods.enterMarkets(assetArray).encodeABI()
    }
    return Utils.callContractEstimateGas(web3,txObject)
}

/**
 * 关闭抵押
 * @param wallet
 * @param asset
 * @param callback
 * @returns {Promise<unknown>}
 */
export async function exitMarket(wallet,asset,callback){
    const contract = new wallet.web3.eth.Contract(abi.Comptroller, address.bhp.Comptroller)
    await exitMarketsEstimateGas(contract,wallet.web3,wallet.address,asset,address.bhp.Comptroller)
    return Utils.callContract(contract.methods.exitMarket(asset).send({from: wallet.address}), callback)
}

export async function exitMarketsEstimateGas(contract,web3,userAddress,asset,compAddr) {
    let txObject = {
        from: userAddress,
        to: compAddr,
        data: contract.methods.exitMarket(asset).encodeABI()
    }
    return Utils.callContractEstimateGas(web3,txObject)
}

/**
 * 查看当前预言机中币价
 * @param wallet 调用地址
 * @param asset 资产合约地址
 * @returns {Promise<*>}
 */
export async function viewPrice(wallet,asset){
    const contract = new wallet.web3.eth.Contract(abi.Oracle, address.bhp.Oracle)
    return contract.methods.getUnderlyingPrice(asset).call({from: wallet.address})
}

/**
 * 获取抵押因子
 * @param wallet 钱包地址
 * @param asset cToken合约
 * @param comptrollerAddr comptroller代理合约地址
 * @returns {Promise<*>}
 */
export async function markets(wallet,asset,comptrollerAddr){
    const contract = new wallet.web3.eth.Contract(abi.Comptroller, comptrollerAddr)
    return contract.methods.markets(asset).call({from: wallet.address})
}

/**
 * 获取清算系数
 * @param wallet 钱包地址
 * @param comptrollerAddr comptroller代理合约地址
 * @returns {Promise<*>}
 */
export async function closeFactorMantissa(wallet,comptrollerAddr){
    const contract = new wallet.web3.eth.Contract(abi.Comptroller, comptrollerAddr)
    return contract.methods.closeFactorMantissa().call({from: wallet.address})
}

/**
 * 获取借款金额
 * @param wallet
 * @param account 借款人地址
 * @param asset
 * @returns {Promise<*>}
 */
export async function borrowBalanceStored(wallet,account,asset){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.borrowBalanceStored(account).call({from: wallet.address})
}

/**
 * 查看总供应量
 * @param wallet
 * @param asset
 * @returns {Promise<*>}
 */
export async function totalSupply(wallet,asset){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.totalSupply().call({from: wallet.address})
}

/**
 * 获取资金池余额
 * @param wallet
 * @param asset
 * @returns {Promise<*>}
 */
export async function getCash(wallet,asset){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.getCash().call({from: wallet.address})
}

/**
 * 借贷指数
 * @param wallet
 * @param asset
 * @returns {Promise<*>}
 */
export async function borrowIndex(wallet,asset){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.borrowIndex().call({from: wallet.address})
}

/**
 * 获取上次计算高度
 * @param wallet
 * @param asset cToken合约
 * @returns {Promise<*>}
 */
export async function accrualBlockNumber (wallet,asset) {
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.accrualBlockNumber().call({from: wallet.address})
}

/**
 * 获取最后一次合约触发时的借款总额
 * @param wallet
 * @param asset
 * @returns {Promise<*>}
 */
export async function totalBorrows (wallet,asset) {
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.totalBorrows().call({from: wallet.address})
}

/**
 * 获取最后一次合约触发时的总储备金
 * @param wallet
 * @param asset
 * @returns {Promise<*>}
 */
export async function totalReserves (wallet,asset) {
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.totalReserves().call({from: wallet.address})
}

/**
 * 抵押系数
 * @param wallet
 * @param asset
 * @returns {Promise<*>}
 */
export async function reserveFactorMantissa(wallet,asset){
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.reserveFactorMantissa().call({from: wallet.address})
}

/**
 * 获取当前高度
 * @param wallet
 * @returns {Promise<*>}
 */
export async function getBlockNumber (wallet) {
    return new wallet.web3.eth.getBlockNumber()
}

/**
 * 获取每一个区块的存款利率
 * @param wallet
 * @param asset
 * @returns {Promise<*>}
 */
export async function supplyRatePerBlock (wallet,asset) {
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.supplyRatePerBlock().call({from: wallet.address})
}

/**
 * 获取每一个区块的借款利率
 * @param wallet
 * @param asset
 * @returns {Promise<*>}
 */
export async function borrowRatePerBlock (wallet,asset) {
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.borrowRatePerBlock().call({from: wallet.address})
}

/**
 * 获取最新的资金使用率
 * @param wallet
 * @param cash
 * @param borrows
 * @param reserves
 * @returns {Promise<*>}
 */
export async function utilizationRate (wallet,cash,borrows,reserves) {
    const contract = new wallet.web3.eth.Contract(abi.JumpRateModel, address.bhp.UsdtJumpRateModel)
    return contract.methods.utilizationRate(cash,borrows,reserves).call({from: wallet.address})
}

export async function baseRatePerBlock (wallet) {
    const contract = new wallet.web3.eth.Contract(abi.JumpRateModel, address.bhp.UsdtJumpRateModel)
    return contract.methods.baseRatePerBlock().call({from: wallet.address})
}

export async function multiplierPerBlock (wallet) {
    const contract = new wallet.web3.eth.Contract(abi.JumpRateModel, address.bhp.UsdtJumpRateModel)
    return contract.methods.multiplierPerBlock().call({from: wallet.address})
}

export async function jumpMultiplierPerBlock (wallet) {
    const contract = new wallet.web3.eth.Contract(abi.JumpRateModel, address.bhp.UsdtJumpRateModel)
    return contract.methods.jumpMultiplierPerBlock().call({from: wallet.address})
}

export async function kink (wallet) {
    const contract = new wallet.web3.eth.Contract(abi.JumpRateModel, address.bhp.UsdtJumpRateModel)
    return contract.methods.kink().call({from: wallet.address})
}

export async function blocksPerYear (wallet) {
    const contract = new wallet.web3.eth.Contract(abi.JumpRateModel, address.bhp.UsdtJumpRateModel)
    return contract.methods.blocksPerYear().call({from: wallet.address})
}

export async function exchangeRateStored (wallet,asset) {
    const contract = new wallet.web3.eth.Contract(abi.cErc20, asset)
    return contract.methods.exchangeRateStored().call({from: wallet.address})
}

/**
 * 获取借贷利率
 * @param wallet
 * @param cash
 * @param borrows
 * @param reserves
 * @returns {Promise<*>}
 */
export async function getBorrowRate (wallet,contractAddress,cash,borrows,reserves) {
    const contract = new wallet.web3.eth.Contract(abi.JumpRateModel, contractAddress)
    return contract.methods.getBorrowRate(cash,borrows,reserves).call({from: wallet.address})
}

export async function getSupplyRate (wallet,contractAddress,cash, borrows, reserves, reserveFactor) {
    const contract = new wallet.web3.eth.Contract(abi.JumpRateModel, contractAddress)
    return contract.methods.getSupplyRate(cash,borrows,reserves,reserveFactor).call({from: wallet.address})
}