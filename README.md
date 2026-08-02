# Green Proof

CI workflow: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)  

Private recycled-content verification on Midnight. A trusted lab can prove that a batch meets a public threshold without exposing its exact recycled percentage, recipe, or evidence.

**Preprod contract:** `985167313b70cfd68728877192cf4b63afc5e4994834d942096e87f3dc6cf3a4`

**Product proposal:** [`proposals.md`](proposals.md)  
**Level 4 evidence checklist:** [`docs/LEVEL-4-SUBMISSION.md`](docs/LEVEL-4-SUBMISSION.md)  
**Preprod deployment guide:** [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)  
**Product X profile:** `PENDING — add public profile URL before submission`  
**Demo video:** `PENDING — add public video URL before submission`

## Browser deployment on Midnight preprod

Green Proof follows the 1AM browser-extension pattern from [`tusharpamnani/midnight-skills-counter-dapp`](https://github.com/tusharpamnani/midnight-skills-counter-dapp). Deployment is performed by the connected 1AM wallet; the app does not contain a funded deployer wallet or a deployment API route.

### Prerequisites

- Node.js 22+
- The [1AM browser extension](https://1am.xyz), configured for Midnight **preprod**
- The generated Compact bundle in `contract/src/managed/green-proof`

### Run

```bash
npm install
npm run sync:assets
npm run dev
```

For full local verification, install the Compact CLI, then run:

```bash
compact update 0.23.0
npm run ci
```

`npm run ci` compiles the contract, runs its five tests, lints the app, and
creates the production build.

Open [http://localhost:3000/deploy](http://localhost:3000/deploy), then:

1. Confirm 1AM is on preprod.
2. Select **Connect 1AM** and approve the connection.
3. Select **Deploy Green Proof** and approve the wallet flow.
4. Copy the contract address displayed immediately after successful submission.

The app calls `setNetworkId("preprod")` before wallet detection, connection, and deployment. It builds the unproven deployment in the browser, asks 1AM for its proving provider, lets the wallet balance the transaction, and submits through the wallet API. The normal path uses 1AM/ProofStation and needs no locally running prover.

## Build

```bash
npm run lint
npm run build
```

`npm run build` copies the generated ZK keys and ZKIR files to `public/zk/green-proof` before building. These assets are fetched by the browser-side `FetchZkConfigProvider`.

## Runtime compatibility

The generated contract calls `checkRuntimeVersion("0.16.0")`. Therefore the app and contract pin `@midnight-ntwrk/compact-runtime` to `0.16.0`; regenerate the bundle before changing that runtime instead of forcing an incompatible bundle.

## Project layout

- `contract/` — Compact contract, generated bundle, tests, and contract documentation
- `app/deploy/` — 1AM preprod connection and browser deployment UI
- `lib/midnight.ts` — network selection and wallet-backed Midnight providers
- `lib/green-proof.ts` — compiled-contract construction and deployment transaction
- `public/zk/green-proof/` — browser-served proving assets
- `app/portal/` — multi-page operator workspace
- `app/verify/` — public batch verification pages

## CI/CD

GitHub Actions runs Compact compilation, contract tests, ESLint, and the
production Next.js build on every push and pull request. See
`.github/workflows/ci.yml` and add the latest passing run URL to the Level 4
evidence checklist before submission.

No contract has to be deployed while building the application. The deployed address appears on `/deploy` after the user approves an actual preprod deployment.
