import {erc20} from "@/utils/configure/abi";
import BigNumber from "bignumber.js";

export async function erc20Approval(wallet,tokenAddress,contractAddress, callback) {
    return new Promise((resolve, reject) => {
        const contract = new wallet.web3.eth.Contract(erc20.abi, tokenAddress)
        contract.methods.approve(contractAddress, wallet.web3.utils.toWei("79228162514", "ether")).send({from: wallet.address}).on(
            'transactionHash', function (hash) {
                callback({
                    message: hash,
                    options: {
                        key: new Date().getTime() + Math.random(),
                        variant: 'success'
                    }
                })
            }
        ).on("receipt", function (receipt) {
            resolve(new BigNumber(79228162514).toNumber())
        }).on("error", function (error) {
            reject(error)
        }).catch((error) => {
            reject(error)
        })
    })
}

/**
 *
 * @param wallet 用户地址
 * @param tokenAddress cToken合约
 * @param contractAddress Token合约
 * @returns {Promise<number>}
 */
export async function erc20Allowance(wallet, tokenAddress, contractAddress) {
    const contract = new wallet.web3.eth.Contract(erc20.abi, tokenAddress)
    const balance = await contract.methods.allowance(wallet.address, contractAddress).call({from: wallet.address})
    const allowance = wallet.web3.utils.fromWei(balance, "ether")
    return new BigNumber(allowance).toNumber()
}

export async function erc20BalanceOf(wallet, tokenAddress) {
    if (!tokenAddress) {
        return await wallet.web3.eth.getBalance(wallet.address)
    }
    const contract = new wallet.web3.eth.Contract(erc20.abi, tokenAddress)
    const balance = await contract.methods.balanceOf(wallet.address).call({from: wallet.address})
    return new BigNumber(balance).toNumber()
}

export async function erc20poolTotalSupply(wallet, tokenAddress) {
    const contract = new wallet.web3.eth.Contract(erc20.abi, tokenAddress)
    const total = await contract.methods.totalSupply().call({from: wallet.address})
    return new BigNumber(total).toNumber()
}
