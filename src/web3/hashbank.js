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
 * 获取当前高度
 * @param wallet
 * @returns {Promise<*>}
 */
export async function getBlockNumber (wallet) {
    return new wallet.web3.eth.getBlockNumber()
}