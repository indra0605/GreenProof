# Preprod deployment

Green Proof uses browser deployment through the connected 1AM wallet. No
private deployer key is stored in this repository.

## Build

```bash
npm install
cd contract
npm install
npm run compact
cd ..
npm run build
```

## Deploy

1. Install and unlock [1AM](https://1am.xyz).
2. Select Midnight `preprod` in the wallet.
3. Start the app with `npm run dev`.
4. Open `http://localhost:3000/deploy`.
5. Connect 1AM, approve deployment, and wait for indexer confirmation.
6. Record the returned contract address in the submission checklist.

The app sets the network to `preprod` before wallet detection and rejects a
wallet connected to another network. Deployment uses wallet-provided proving,
balancing, and submission APIs.

## Current deployment record

- Network: `preprod`
- Contract: `985167313b70cfd68728877192cf4b63afc5e4994834d942096e87f3dc6cf3a4`
- Public verifier route: `/verify/<32-byte batch ID>`
- Deployment UI: `/deploy`

Confirm address and final transaction state in a current Preprod explorer
before submission. Do not treat a locally displayed address as proof of a
confirmed deployment.
