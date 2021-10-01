
export const network = {
    'BHPTest': 'BHPTest',
    'BSC': 'BSC',
    'BSCTest': 'BSCTest',
}

export const constants = {
    'Comptroller': 'Comptroller',
    'eUSDT': 'eUSDT',
    'eFIL': 'eFIL',
    'FIL': 'FIL',
    'USDT': 'USDT',
}

export const address = {
    //bsc-t
    "bhp1": {
        //bsc 测试网 在线版
        "eFIL": "0xF673099cae8EC04FF524d38924cb3BB5040503a0",
        "eUSDT": "0xA3f1eC9d338b304a4c6ea1e0218364b35B83a1d4",
        "FIL": "0x8F66E03daC3316dFe38d50C66980702E7b4dFA38",
        "USDT": "0xFaAA3D83d778836A2ECe0fEB597eA74e2Bcbb169",
        "Comptroller": "0x25b297Dfb5c91A76181027c0eFbA86B7aaCB40f5",
        "Oracle": "0x394078A417D16a0a0A611B38fc80084b8562cB28",
        "UsdtJumpRateModel":"0x00182c24a9D279B0E6f5c2815956E5f4816371BF",
    },
    "bhp3":{
        // bsc test mhxw deploy
        "url":"https://testnet.bscscan.com/address/",
        "Comptroller": '0x263BcC4AeC350985176E6d9DC0737Ad9DB1fFD9E',
        "Unitroller": '0xd23eB91801FEabC15ECADb7679cBFAa5bC204Aa9',
        "Oracle": '0xdcFc0137c4661dCc81a282A1373e90e08E1b09C8',
        "USDT": '0x0eAeBb6BB5d9B401C4ad0c2cc3F74179408832F4',
        "eUSDT": '0xbfAe1E775a4c5EB9a9fd861AC504af058b20a013',
        "FIL": '0x0C1e9A87129EA0e29412bE74bC3745bdDb651073',
        "eFIL": '0x7cA45E7328B9F61a98cA996B32E8DC4201184003',
        "FilChainlink":'0x17308A18d4a50377A4E1C37baaD424360025C74D',
        "UsdtJumpRateModel": '0x1e9fF074BBAA178Bb812fd4138ADcF16e0D4622B',
        "FilJumpRateModel": '0x3210286320f08Aa1AB8BccF637ab80c7140e17a1',
    },
    "ht-filda":{
        // heco miannet filda
        "url":"https://hecoinfo.com/address/",
        "Comptroller": '0xb74633f2022452f377403b638167b0a135db096d',
        "Unitroller": '0xb74633f2022452f377403b638167b0a135db096d',
        "Oracle": '0x0DDD1956278d80165051805f3B688EF3C4C288A3',
        "USDT": '0xa71edc38d189767582c38a3145b5873052c3e47a',
        "eUSDT": '0xAab0C9561D5703e84867670Ac78f6b5b4b40A7c1',
        "FIL": '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810',
        "eFIL": '0x043aFB65e93500CE5BCbf5Bbb41FC1fDcE2B7518',
        "UsdtJumpRateModel": '0xc43940f47f04b3935d7c1d51c90199924acbc944',
        "FilJumpRateModel": '0x8222b744d89cb1568b5e3b5978ce9c1c01e2a467',
        "FilChainlink":'0x4d8869eCF1F8C78C0bd2439c4BcAE50AC8420bC4',
    },
    "ht-pig":{
        // heco miannet pig
        "url":"https://hecoinfo.com/address/",
        "Comptroller": '0x3401d01e31bb6defcfc7410c312c0181e19b9dd5',
        "Unitroller": '0x3401d01e31bb6defcfc7410c312c0181e19b9dd5',
        "Oracle": '0x4c78015679fabe22f6e02ce8102afbf7d93794ea',
        "USDT": '0xa71edc38d189767582c38a3145b5873052c3e47a',
        "eUSDT": '0x12D803497D1e58dD4D4A4F455D754f1d0F937C8b',
        "FIL": '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810',
        "eFIL": '0x0C8c1ab017c3C0c8A48dD9F1DB2F59022D190f0b',
        "UsdtJumpRateModel": '0xd1121ade04ee215524aefbf7f8d45029214d668d',
        "FilJumpRateModel": '0x8e1e582879cb8bac6283368e8ede458b63f499a5',
        "FilChainlink":'0x4d8869eCF1F8C78C0bd2439c4BcAE50AC8420bC4',
    },
    "bsc-pig":{
        // bsc miannet pig
        "url":"https://bscscan.com/address/",
        "Comptroller": '0x8c925623708a94c7de98a8e83e8200259ff716e0',
        "Unitroller": '0x8c925623708a94c7de98a8e83e8200259ff716e0',
        "UsdtJumpRateModel": '0xc1b02e52e9512519edf99671931772e452fb4399',
        "FilJumpRateModel": '0x621ce6596e0b9ccf635316bfe7fdbc80c3029bec',
        "Oracle": '0x4c78015679fabe22f6e02ce8102afbf7d93794ea',
        "USDT": '0x55d398326f99059fF775485246999027B3197955',
        "eUSDT": '0x2a8Cd78bFb91ACF53f589961D213d87c956e0d7f',
        "FIL": '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
        "eFIL": '0xDF21D42a0fC6746718F2CFe2798F91C9d7277F32',
        "FilChainlink":'0xE5dbFD9003bFf9dF5feB2f4F445Ca00fb121fb83'
    },
    "bhp": {
        //eth mainnet compound
        //https://compound.finance/markets
        "url":"https://etherscan.io/address/",
        "eFIL": "0xface851a4921ce59e912d19329929ce6da6eb0c7",
        "eUSDT": "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
        "FIL": "0x514910771af9ca656af840dff83e8264ecf986ca",
        "USDT": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "Comptroller": "0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b",
        "Unitroller": '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b',
        "Oracle": "0x6d2299c48a8dd07a872fdd0f8233924872ad1071",
        "UsdtJumpRateModel":"0xfb564da37b41b2f6b6edcc3e56fbf523bd9f2012",
        "FilJumpRateModel":"0xd956188795ca6f4a74092ddca33e0ea4ca3a1395",
        "FilChainlink":'0xE5dbFD9003bFf9dF5feB2f4F445Ca00fb121fb83'
    },
    "bhp5": {
        //bhp 测试网
        "url":"https://bscscan.com/address/",
        "eFIL": "0x5eb657300870019F4B3786E0Eb16DA0141e478fA",
        "eUSDT": "0xb2c1aEF1a8C982A100199d9710AB8f1543bde44D",
        "FIL": "0x8F66E03daC3316dFe38d50C66980702E7b4dFA38",
        "USDT": "0x0cb4DcbB6271E694FA44A6A09d3b768E42A6a162",
        "Comptroller": "0x7B4e6f7CBA9E441eC87742afFC2bfbfe8F1771eb",
        "Unitroller": '0x7B4e6f7CBA9E441eC87742afFC2bfbfe8F1771eb',
        "Oracle": "0x4c784E745CA045AfcCFd40053376fb2ad4A7Dec0",
        "UsdtJumpRateModel":"0xC66CC25B43580e0f4B589ed4b0F331B8BB56235C",
        "FilJumpRateModel":"0xC66CC25B43580e0f4B589ed4b0F331B8BB56235C",
        "FilChainlink":'0xE5dbFD9003bFf9dF5feB2f4F445Ca00fb121fb83'
    }
}

export const abi = {
    Erc20: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}],
    cErc20:  [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "underlying_",
                    "type": "address"
                },
                {
                    "internalType": "contract ComptrollerInterface",
                    "name": "comptroller_",
                    "type": "address"
                },
                {
                    "internalType": "contract InterestRateModel",
                    "name": "interestRateModel_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "initialExchangeRateMantissa_",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name_",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "symbol_",
                    "type": "string"
                },
                {
                    "internalType": "uint8",
                    "name": "decimals_",
                    "type": "uint8"
                },
                {
                    "internalType": "address payable",
                    "name": "admin_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "implementation_",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "becomeImplementationData",
                    "type": "bytes"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "cashPrior",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "interestAccumulated",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "borrowIndex",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalBorrows",
                    "type": "uint256"
                }
            ],
            "name": "AccrueInterest",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "borrower",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "borrowAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "accountBorrows",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalBorrows",
                    "type": "uint256"
                }
            ],
            "name": "Borrow",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "error",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "info",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "detail",
                    "type": "uint256"
                }
            ],
            "name": "Failure",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "liquidator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "borrower",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "repayAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "cTokenCollateral",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "seizeTokens",
                    "type": "uint256"
                }
            ],
            "name": "LiquidateBorrow",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "minter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "mintAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "mintTokens",
                    "type": "uint256"
                }
            ],
            "name": "Mint",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "oldAdmin",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newAdmin",
                    "type": "address"
                }
            ],
            "name": "NewAdmin",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "contract ComptrollerInterface",
                    "name": "oldComptroller",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "contract ComptrollerInterface",
                    "name": "newComptroller",
                    "type": "address"
                }
            ],
            "name": "NewComptroller",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "oldImplementation",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newImplementation",
                    "type": "address"
                }
            ],
            "name": "NewImplementation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "contract InterestRateModel",
                    "name": "oldInterestRateModel",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "contract InterestRateModel",
                    "name": "newInterestRateModel",
                    "type": "address"
                }
            ],
            "name": "NewMarketInterestRateModel",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "oldPendingAdmin",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "newPendingAdmin",
                    "type": "address"
                }
            ],
            "name": "NewPendingAdmin",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "oldReserveFactorMantissa",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newReserveFactorMantissa",
                    "type": "uint256"
                }
            ],
            "name": "NewReserveFactor",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "redeemer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "redeemAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "redeemTokens",
                    "type": "uint256"
                }
            ],
            "name": "Redeem",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "payer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "borrower",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "repayAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "accountBorrows",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "totalBorrows",
                    "type": "uint256"
                }
            ],
            "name": "RepayBorrow",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "benefactor",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "addAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newTotalReserves",
                    "type": "uint256"
                }
            ],
            "name": "ReservesAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "admin",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "reduceAmount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "newTotalReserves",
                    "type": "uint256"
                }
            ],
            "name": "ReservesReduced",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "_acceptAdmin",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "addAmount",
                    "type": "uint256"
                }
            ],
            "name": "_addReserves",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "reduceAmount",
                    "type": "uint256"
                }
            ],
            "name": "_reduceReserves",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "contract ComptrollerInterface",
                    "name": "newComptroller",
                    "type": "address"
                }
            ],
            "name": "_setComptroller",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "implementation_",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "allowResign",
                    "type": "bool"
                },
                {
                    "internalType": "bytes",
                    "name": "becomeImplementationData",
                    "type": "bytes"
                }
            ],
            "name": "_setImplementation",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "contract InterestRateModel",
                    "name": "newInterestRateModel",
                    "type": "address"
                }
            ],
            "name": "_setInterestRateModel",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "newPendingAdmin",
                    "type": "address"
                }
            ],
            "name": "_setPendingAdmin",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "newReserveFactorMantissa",
                    "type": "uint256"
                }
            ],
            "name": "_setReserveFactor",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "accrualBlockNumber",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "accrueInterest",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOfUnderlying",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "borrowAmount",
                    "type": "uint256"
                }
            ],
            "name": "borrow",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "borrowBalanceCurrent",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "borrowBalanceStored",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "borrowIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "borrowRatePerBlock",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "comptroller",
            "outputs": [
                {
                    "internalType": "contract ComptrollerInterface",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "delegateToImplementation",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "delegateToViewImplementation",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "exchangeRateCurrent",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "exchangeRateStored",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "getAccountSnapshot",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getCash",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "implementation",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "interestRateModel",
            "outputs": [
                {
                    "internalType": "contract InterestRateModel",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isCToken",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "borrower",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "repayAmount",
                    "type": "uint256"
                },
                {
                    "internalType": "contract CTokenInterface",
                    "name": "cTokenCollateral",
                    "type": "address"
                }
            ],
            "name": "liquidateBorrow",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "mintAmount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "pendingAdmin",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "redeemTokens",
                    "type": "uint256"
                }
            ],
            "name": "redeem",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "redeemAmount",
                    "type": "uint256"
                }
            ],
            "name": "redeemUnderlying",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "repayAmount",
                    "type": "uint256"
                }
            ],
            "name": "repayBorrow",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "borrower",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "repayAmount",
                    "type": "uint256"
                }
            ],
            "name": "repayBorrowBehalf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "reserveFactorMantissa",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "liquidator",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "borrower",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "seizeTokens",
                    "type": "uint256"
                }
            ],
            "name": "seize",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "supplyRatePerBlock",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalBorrows",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "totalBorrowsCurrent",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalReserves",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "dst",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "src",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "dst",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "underlying",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    Comptroller: [{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x26782247"},{"constant":false,"inputs":[{"name":"newPendingAdmin","type":"address"}],"name":"_setPendingAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb71d1a0c"},{"constant":true,"inputs":[],"name":"comptrollerImplementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbb82aa5e"},{"constant":false,"inputs":[],"name":"_acceptImplementation","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc1e80334"},{"constant":true,"inputs":[],"name":"pendingComptrollerImplementation","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdcfbc0c7"},{"constant":false,"inputs":[{"name":"newPendingImplementation","type":"address"}],"name":"_setPendingImplementation","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe992a041"},{"constant":false,"inputs":[],"name":"_acceptAdmin","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe9c714f2"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf851a440"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingImplementation","type":"address"},{"indexed":false,"name":"newPendingImplementation","type":"address"}],"name":"NewPendingImplementation","type":"event","signature":"0xe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d815"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldImplementation","type":"address"},{"indexed":false,"name":"newImplementation","type":"address"}],"name":"NewImplementation","type":"event","signature":"0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldPendingAdmin","type":"address"},{"indexed":false,"name":"newPendingAdmin","type":"address"}],"name":"NewPendingAdmin","type":"event","signature":"0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldAdmin","type":"address"},{"indexed":false,"name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event","signature":"0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc"},{"anonymous":false,"inputs":[{"indexed":false,"name":"error","type":"uint256"},{"indexed":false,"name":"info","type":"uint256"},{"indexed":false,"name":"detail","type":"uint256"}],"name":"Failure","type":"event","signature":"0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"action","type":"string"},{"indexed":false,"internalType":"bool","name":"pauseState","type":"bool"}],"name":"ActionPaused","type":"event","signature":"0xef159d9a32b2472e32b098f954f3ce62d232939f1c207070b584df1814de2de0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"string","name":"action","type":"string"},{"indexed":false,"internalType":"bool","name":"pauseState","type":"bool"}],"name":"ActionPaused","type":"event","signature":"0x71aec636243f9709bb0007ae15e9afb8150ab01716d75fd7573be5cc096e03b0"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"newSpeed","type":"uint256"}],"name":"CompSpeedUpdated","type":"event","signature":"0x2ab93f65628379309f36cb125e90d7c902454a545c4f8b8cb0794af75c24b807"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":true,"internalType":"address","name":"borrower","type":"address"},{"indexed":false,"internalType":"uint256","name":"compDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"compBorrowIndex","type":"uint256"}],"name":"DistributedBorrowerComp","type":"event","signature":"0x1fc3ecc087d8d2d15e23d0032af5a47059c3892d003d8e139fdcb6bb327c99a6"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":true,"internalType":"address","name":"supplier","type":"address"},{"indexed":false,"internalType":"uint256","name":"compDelta","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"compSupplyIndex","type":"uint256"}],"name":"DistributedSupplierComp","type":"event","signature":"0x2caecd17d02f56fa897705dcc740da2d237c373f70686f4e0d9bd3bf0400ea7a"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"error","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"info","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"detail","type":"uint256"}],"name":"Failure","type":"event","signature":"0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"bool","name":"isComped","type":"bool"}],"name":"MarketComped","type":"event","signature":"0x93c1f3e36ed71139f466a4ce8c9751790e2e33f5afb2df0dcfb3aeabe55d5aa2"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"MarketEntered","type":"event","signature":"0x3ab23ab0d51cccc0c3085aec51f99228625aa1a922b3a8ca89a26b0f2027a1a5"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"MarketExited","type":"event","signature":"0xe699a64c18b07ac5b7301aa273f36a2287239eb9501d81950672794afba29a0d"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"}],"name":"MarketListed","type":"event","signature":"0xcf583bb0c569eb967f806b11601c4cb93c10310485c67add5f8362c2f212321f"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"newBorrowCap","type":"uint256"}],"name":"NewBorrowCap","type":"event","signature":"0x6f1951b2aad10f3fc81b86d91105b413a5b3f847a34bbc5ce1904201b14438f6"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldBorrowCapGuardian","type":"address"},{"indexed":false,"internalType":"address","name":"newBorrowCapGuardian","type":"address"}],"name":"NewBorrowCapGuardian","type":"event","signature":"0xeda98690e518e9a05f8ec6837663e188211b2da8f4906648b323f2c1d4434e29"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldCloseFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCloseFactorMantissa","type":"uint256"}],"name":"NewCloseFactor","type":"event","signature":"0x3b9670cf975d26958e754b57098eaa2ac914d8d2a31b83257997b9f346110fd9"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract CToken","name":"cToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldCollateralFactorMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCollateralFactorMantissa","type":"uint256"}],"name":"NewCollateralFactor","type":"event","signature":"0x70483e6592cd5182d45ac970e05bc62cdcc90e9d8ef2c2dbe686cf383bcd7fc5"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldCompRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newCompRate","type":"uint256"}],"name":"NewCompRate","type":"event","signature":"0xc227c9272633c3a307d9845bf2bc2509cefb20d655b5f3c1002d8e1e3f22c8b0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldLiquidationIncentiveMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newLiquidationIncentiveMantissa","type":"uint256"}],"name":"NewLiquidationIncentive","type":"event","signature":"0xaeba5a6c40a8ac138134bff1aaa65debf25971188a58804bad717f82f0ec1316"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldMaxAssets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMaxAssets","type":"uint256"}],"name":"NewMaxAssets","type":"event","signature":"0x7093cf1eb653f749c3ff531d6df7f92764536a7fa0d13530cd26e070780c32ea"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldPauseGuardian","type":"address"},{"indexed":false,"internalType":"address","name":"newPauseGuardian","type":"address"}],"name":"NewPauseGuardian","type":"event","signature":"0x0613b6ee6a04f0d09f390e4d9318894b9f6ac7fd83897cd8d18896ba579c401e"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract PriceOracle","name":"oldPriceOracle","type":"address"},{"indexed":false,"internalType":"contract PriceOracle","name":"newPriceOracle","type":"address"}],"name":"NewPriceOracle","type":"event","signature":"0xd52b2b9b7e9ee655fcb95d2e5b9e0c9f69e7ef2b8e9d2d0ea78402d576d22e22"},{"constant":false,"inputs":[{"internalType":"address[]","name":"cTokens","type":"address[]"}],"name":"_addCompMarkets","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xce485c5e"},{"constant":false,"inputs":[{"internalType":"contract Unitroller","name":"unitroller","type":"address"}],"name":"_become","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x1d504dc6"},{"constant":true,"inputs":[],"name":"_borrowGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe6653f3d"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"}],"name":"_dropCompMarket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3aa729b4"},{"constant":true,"inputs":[],"name":"_mintGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3c94786f"},{"constant":false,"inputs":[{"internalType":"address","name":"newBorrowCapGuardian","type":"address"}],"name":"_setBorrowCapGuardian","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x391957d7"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"_setBorrowPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x18c882a5"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newCloseFactorMantissa","type":"uint256"}],"name":"_setCloseFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x317b0b77"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"},{"internalType":"uint256","name":"newCollateralFactorMantissa","type":"uint256"}],"name":"_setCollateralFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe4028eee"},{"constant":false,"inputs":[{"internalType":"uint256","name":"compRate_","type":"uint256"}],"name":"_setCompRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6a491112"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newLiquidationIncentiveMantissa","type":"uint256"}],"name":"_setLiquidationIncentive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4fd42e17"},{"constant":false,"inputs":[{"internalType":"contract CToken[]","name":"cTokens","type":"address[]"},{"internalType":"uint256[]","name":"newBorrowCaps","type":"uint256[]"}],"name":"_setMarketBorrowCaps","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x607ef6c1"},{"constant":false,"inputs":[{"internalType":"uint256","name":"newMaxAssets","type":"uint256"}],"name":"_setMaxAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xd9226ced"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"},{"internalType":"bool","name":"state","type":"bool"}],"name":"_setMintPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3bcf7ec1"},{"constant":false,"inputs":[{"internalType":"address","name":"newPauseGuardian","type":"address"}],"name":"_setPauseGuardian","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x5f5af1aa"},{"constant":false,"inputs":[{"internalType":"contract PriceOracle","name":"newOracle","type":"address"}],"name":"_setPriceOracle","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x55ee1fe1"},{"constant":false,"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"_setSeizePaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x2d70db78"},{"constant":false,"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"_setTransferPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x8ebf6364"},{"constant":false,"inputs":[{"internalType":"contract CToken","name":"cToken","type":"address"}],"name":"_supportMarket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa76b3fda"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"accountAssets","outputs":[{"internalType":"contract CToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdce15449"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xf851a440"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allMarkets","outputs":[{"internalType":"contract CToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x52d84d1e"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrowAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xda3d454c"},{"constant":true,"inputs":[],"name":"borrowCapGuardian","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x21af4569"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"borrowCaps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4a584432"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"borrowGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6d154ea5"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"borrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x5c778605"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"contract CToken","name":"cToken","type":"address"}],"name":"checkMembership","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x929fe9a1"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"contract CToken[]","name":"cTokens","type":"address[]"}],"name":"claimComp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x1c3db2e0"},{"constant":false,"inputs":[{"internalType":"address[]","name":"holders","type":"address[]"},{"internalType":"contract CToken[]","name":"cTokens","type":"address[]"},{"internalType":"bool","name":"borrowers","type":"bool"},{"internalType":"bool","name":"suppliers","type":"bool"}],"name":"claimComp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6810dfa6"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"claimComp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xe9af0292"},{"constant":true,"inputs":[],"name":"closeFactorMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe8755446"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compAccrued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xcc7ebdc4"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compBorrowState","outputs":[{"internalType":"uint224","name":"index","type":"uint224"},{"internalType":"uint32","name":"block","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8c57804e"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"compBorrowerIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xca0af043"},{"constant":true,"inputs":[],"name":"compClaimThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x747026c9"},{"constant":true,"inputs":[],"name":"compInitialIndex","outputs":[{"internalType":"uint224","name":"","type":"uint224"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xa7f0e231"},{"constant":true,"inputs":[],"name":"compRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xaa900754"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compSpeeds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x1d7b33d7"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"compSupplierIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb21be7fd"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"compSupplyState","outputs":[{"internalType":"uint224","name":"index","type":"uint224"},{"internalType":"uint32","name":"block","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6b79c38d"},{"constant":true,"inputs":[],"name":"comptrollerImplementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbb82aa5e"},{"constant":false,"inputs":[{"internalType":"address[]","name":"cTokens","type":"address[]"}],"name":"enterMarkets","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc2998238"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenAddress","type":"address"}],"name":"exitMarket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xede4edd0"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAccountLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x5ec88c79"},{"constant":true,"inputs":[],"name":"getAllMarkets","outputs":[{"internalType":"contract CToken[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb0772d0b"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getAssetsIn","outputs":[{"internalType":"contract CToken[]","name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xabfceffc"},{"constant":true,"inputs":[],"name":"getBlockNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x42cbb15c"},{"constant":true,"inputs":[],"name":"getCompAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9d1b5a0a"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"cTokenModify","type":"address"},{"internalType":"uint256","name":"redeemTokens","type":"uint256"},{"internalType":"uint256","name":"borrowAmount","type":"uint256"}],"name":"getHypotheticalAccountLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4e79238f"},{"constant":true,"inputs":[],"name":"isComptroller","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x007e3dd2"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"liquidateBorrowAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x5fc7e71e"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"actualRepayAmount","type":"uint256"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"liquidateBorrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x47ef3b3b"},{"constant":true,"inputs":[{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"uint256","name":"actualRepayAmount","type":"uint256"}],"name":"liquidateCalculateSeizeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc488847b"},{"constant":true,"inputs":[],"name":"liquidationIncentiveMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4ada90af"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"markets","outputs":[{"internalType":"bool","name":"isListed","type":"bool"},{"internalType":"uint256","name":"collateralFactorMantissa","type":"uint256"},{"internalType":"bool","name":"isComped","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8e8f294b"},{"constant":true,"inputs":[],"name":"maxAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x94b2294b"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"mintAmount","type":"uint256"}],"name":"mintAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4ef4c3e1"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x731f0c2b"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"minter","type":"address"},{"internalType":"uint256","name":"actualMintAmount","type":"uint256"},{"internalType":"uint256","name":"mintTokens","type":"uint256"}],"name":"mintVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x41c728b9"},{"constant":true,"inputs":[],"name":"oracle","outputs":[{"internalType":"contract PriceOracle","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x7dc0d1d0"},{"constant":true,"inputs":[],"name":"pauseGuardian","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x24a3d622"},{"constant":true,"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x26782247"},{"constant":true,"inputs":[],"name":"pendingComptrollerImplementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdcfbc0c7"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"redeemer","type":"address"},{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeemAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xeabe7d91"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"redeemer","type":"address"},{"internalType":"uint256","name":"redeemAmount","type":"uint256"},{"internalType":"uint256","name":"redeemTokens","type":"uint256"}],"name":"redeemVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x51dff989"},{"constant":false,"inputs":[],"name":"refreshCompSpeeds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4d8e5037"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"payer","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"repayAmount","type":"uint256"}],"name":"repayBorrowAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x24008a62"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"payer","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"actualRepayAmount","type":"uint256"},{"internalType":"uint256","name":"borrowerIndex","type":"uint256"}],"name":"repayBorrowVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x1ededc91"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seizeAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xd02f7351"},{"constant":true,"inputs":[],"name":"seizeGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xac0b0bb7"},{"constant":false,"inputs":[{"internalType":"address","name":"cTokenCollateral","type":"address"},{"internalType":"address","name":"cTokenBorrowed","type":"address"},{"internalType":"address","name":"liquidator","type":"address"},{"internalType":"address","name":"borrower","type":"address"},{"internalType":"uint256","name":"seizeTokens","type":"uint256"}],"name":"seizeVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6d35bf91"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"transferTokens","type":"uint256"}],"name":"transferAllowed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xbdcdc258"},{"constant":true,"inputs":[],"name":"transferGuardianPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x87f76303"},{"constant":false,"inputs":[{"internalType":"address","name":"cToken","type":"address"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"transferTokens","type":"uint256"}],"name":"transferVerify","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x6a56947e"}],
    Oracle:[
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "contract CToken",
                    "name": "cToken",
                    "type": "address"
                }
            ],
            "name": "getUnderlyingPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isPriceOracle",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    JumpRateModel: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "baseRatePerYear",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "multiplierPerYear",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "jumpMultiplierPerYear",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "kink_",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "baseRatePerBlock",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "multiplierPerBlock",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "jumpMultiplierPerBlock",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "kink",
                    "type": "uint256"
                }
            ],
            "name": "NewInterestParams",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "baseRatePerBlock",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "blocksPerYear",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "cash",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "borrows",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserves",
                    "type": "uint256"
                }
            ],
            "name": "getBorrowRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "cash",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "borrows",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserves",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveFactorMantissa",
                    "type": "uint256"
                }
            ],
            "name": "getSupplyRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isInterestRateModel",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "jumpMultiplierPerBlock",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "kink",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "multiplierPerBlock",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "cash",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "borrows",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserves",
                    "type": "uint256"
                }
            ],
            "name": "utilizationRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
}

export const cTokens = [
    'eFIL',
    'eUSDT',
];

export const underlyings = [
    'FIL',
    'USDT',
];

export const decimals = {
    'eFIL': 8,
    'eUSDT': 8,
    'USDT': 6,
    'FIL': 18,
};