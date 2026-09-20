# Level 4 submission evidence

Use this file as final submission checklist. External X bio and product-post
evidence must remain current on the linked profile.

## Required evidence

- [x] Public GitHub repository: this repository
- [x] MVP entry point: `/`
- [x] Preprod network selected in code: `lib/contract-config.ts`
- [x] Preprod contract address documented in `README.md`
- [x] README setup and usage instructions
- [x] Reproducible Preprod deployment guide: `docs/DEPLOYMENT.md`
- [x] Contract privacy model documented in `README.md` and `contract/README.md`
- [x] CI workflow: `.github/workflows/ci.yml`
- [x] Contract tests: `contract/test/contract.spec.ts` (8 tests)
- [x] Product proposal: `proposals.md`
- [x] One-command local verification: `npm run ci`
- [x] Passing GitHub Actions run URL: https://github.com/indra0605/GreenProof/actions/runs/35496313008
- [x] Live deployed MVP URL: https://green-proof-flax.vercel.app/
- [x] Demo video URL: https://drive.google.com/file/d/1XSnEXpI88DMPYyhx1Lhq2_XCaXwMpPvV/view?usp=sharing
- [x] Product X profile linked: https://x.com/GreenProof
- [ ] Product X profile has public Green Proof bio and at least one product post
- [x] At least 15 meaningful commits: 24 commits on `main`

## Feedback closure

- Live MVP URL is now public and linked in `README.md`.
- Product X profile is linked in `README.md`; keep its bio and at least one
  Green Proof product post publicly visible before resubmitting.
- CI badge and latest successful run are linked in `README.md`.

## Demo script

Record one minute:

1. Open public landing page and show Green Proof purpose.
2. Open `/deploy`; show Midnight `preprod` and contract address.
3. Connect 1AM, deploy a fresh contract, then create a batch from `/portal/batches/new`.
4. Open `/portal/lab`; submit real private evidence and approve `verifyBatch` in 1AM.
5. Open `/verify/<batch-id-hash>`; show public result from live ledger.
6. Point to README privacy model and passing CI run.

## Link block for README

Add real URLs here after publishing:

```text
Live MVP: https://green-proof-flax.vercel.app/
Demo video: https://drive.google.com/file/d/1XSnEXpI88DMPYyhx1Lhq2_XCaXwMpPvV/view?usp=sharing
Product X profile: https://x.com/GreenProof
Latest CI run: https://github.com/indra0605/GreenProof/actions/runs/35496313008
```
