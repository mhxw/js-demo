
- MetaMask 文档

https://docs.metamask.io/

```ansible
export function addNetwork(){
    window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
            chainId: '0xd94',
            chainName: 'BHP Testnet',
            nativeCurrency: {
                name: 'BHP Testnet',
                symbol: 'BHP',
                decimals: 18
            },
            rpcUrls: ['https://testnet-rpc.bhpnet.io'],
            blockExplorerUrls: ['https://testnet.bhpnet.io']
        }],
    }).catch((error) => {
        console.log(error)
    })
    let networkName=network.BHPTest
    let params
    if (networkName===network.BHPTest){
        params=[{
            chainId: '0xd94',
            chainName: 'BHP Testnet',
            nativeCurrency: {
                name: 'BHP Testnet',
                symbol: 'BHP',
                decimals: 18
            },
            rpcUrls: ['https://testnet-rpc.bhpnet.io'],
            blockExplorerUrls: ['https://testnet.bhpnet.io']
        }]
    }else if (networkName===network.BSCTest){
        params=[{
            chainId: '0x61',
            chainName: 'BSC Testnet',
            nativeCurrency: {
                name: 'Binance Coin',
                symbol: 'BNB',
                decimals: 18
            },
            rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
            blockExplorerUrls: ['https://testnet.bscscan.com']
        }]
    }else if (networkName===network.BSC){
        params=[{
            chainId: '0x38',
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
                name: 'Binance Coin',
                symbol: 'BNB',
                decimals: 18
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com']
        }]
    }

}
```