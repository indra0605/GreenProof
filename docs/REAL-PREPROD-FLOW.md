# Real Preprod transaction flow

Portal pages use Midnight state and 1AM transactions. No server stores caller
secrets or evidence.

## Required order

1. Open `/portal` and select **Connect 1AM**.
2. Keep 1AM on `preprod` and approve connection.
3. Select **Deploy fresh contract**. This creates a contract whose caller
   secret remains in the current browser session.
4. Open `/portal/admin`, derive the lab operator key, enter the lab signing
   public point and metadata hash, then submit `manageLab` through 1AM.
5. Open `/portal/batches/new`, enter 32-byte hashes and threshold, then submit
   `manageBatch(CREATE)` through 1AM.
6. Open `/portal/lab`, enter signed private evidence, then submit
   `verifyBatch` through 1AM.
7. Open the batch hash from the live batches table. `/verify/<batch-hash>` reads
   public ledger state directly from the Preprod indexer.

## Important limits

- Compact contract stores hashes, not product names. Product labels belong in
  an external application database keyed by hash; this MVP intentionally has
  no mock fallback.
- Private caller state exists only in the current browser session. Reloading
  loses it; deploy fresh again or add encrypted private-state export/import.
- Lab signing point and signature must come from a real lab keypair. Zero or
  invented values fail circuit verification.
- Wallet seed phrases and private signing keys must never be entered into the
  app or recorded in demo video.
