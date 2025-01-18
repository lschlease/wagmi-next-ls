export const wagmiContractConfig = {
    address: '0xf4F893947e117412C9FC95C6A20dAFf7FAA49207',
    abi:[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "newString",
                    "type": "string"
                }
            ],
            "name": "setHelloWorld",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "sayHelloWorld",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "strVar",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
  } as const

