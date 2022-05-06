import { config } from "@onflow/fcl";

config({
  "app.detail.title": "FLOAT", // Shows user what dapp is trying to connect
  "app.detail.icon": "https://floats.city/floatlogo_big.png", // shows image to the user to display your dapp brand
  "accessNode.api": "https://rest-testnet.onflow.org", // import.meta.env.VITE_ACCESS_NODE_API,
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // import.meta.env.VITE_DISCOVERY_WALLET,
  "0xFLOAT": "0x0afe396ebc8eee65",
  "0xCORE": "0x631e88ae7f1d7c20",
  "0xFLOWTOKEN": "0x7e60df042a9c0868",
  "0xFUNGIBLETOKEN": "0x9a0766d93b6608b7",
  "0xFN": "0xb05b2abb42335e88",
  "0xFIND": "0xa16ab1d0abde3625"
})

export const verifiersIdentifier = 'A.0afe396ebc8eee65';
export const flowTokenIdentifier = 'A.7e60df042a9c0868';