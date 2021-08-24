export class Utils {
    static isEmpty(obj) {
        switch (typeof obj) {
            case "undefined": {
                return true
            }
            case "string": {
                return obj.length === 0
            }
            case "number": {
                return obj === 0
            }
            case "object": {
                if (obj == null) {
                    return true
                } else if (Array.isArray(obj)) {
                    return obj.length === 0
                } else {
                    return Object.keys(obj).length === 0
                }
            }
        }
    }
    static callContract(method,callback){
        return new Promise((resolve, reject) => {
            method.on('transactionHash', function (hash) {
                callback({
                    message: hash,
                    options: {
                        key: new Date().getTime() + Math.random(),
                        variant: 'success'
                    },
                        hash
                    });
                }
            ).on("receipt", function (receipt) {
                resolve(receipt)
            }).on("error", function (error) {
                reject(error)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    static callContractEstimateGas(web3,txObject){
        return new Promise(async (resolve, reject) => {
            web3.eth.estimateGas(txObject).then(res => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}