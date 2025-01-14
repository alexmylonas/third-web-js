export default {
  "name": "ResinCoin Mainnet",
  "chain": "RESIN",
  "icon": {
    "url": "ipfs://QmTBszPzBeWPhjozf4TxpL2ws1NkG9yJvisx9h6MFii1zb",
    "width": 460,
    "height": 460,
    "format": "png"
  },
  "rpc": [
    "https://resincoin.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://mainnet.resincoin.dev"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "RESIN",
    "decimals": 18
  },
  "infoURL": "https://resincoin.dev",
  "shortName": "resin",
  "chainId": 75000,
  "networkId": 75000,
  "explorers": [
    {
      "name": "ResinScan",
      "url": "https://explorer.resincoin.dev",
      "standard": "none"
    }
  ],
  "testnet": false,
  "slug": "resincoin"
} as const;