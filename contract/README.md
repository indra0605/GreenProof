# Green Proof contract

Privacy-preserving recycled-content verification for Midnight. Suppliers expose
only whether a batch meets its public threshold. Exact recycled percentage,
certificate signature, and commitment nonce remain private proof inputs.

## Trust and privacy model

- Admin manages trusted lab keys, pause state, and emergency revocation.
- Suppliers authenticate by proving knowledge of a local 32-byte secret whose
  domain-separated hash owns each batch.
- Labs sign committed evidence with Jubjub Schnorr keys. Invalid, expired, or
  replayed certificates fail in-circuit.
- Public state contains product/metadata hashes, required threshold, compliance
  outcome, validity window, lab ID, and a hiding evidence commitment. It never
  contains `actualBps` or commitment nonce.
- Consumers query exported ledger data through the public indexer. Reads require
  no role and create no transaction. All state changes require supplier proof,
  lab proof/signature, or admin proof.

Percentages use basis points: `5000` means 50.00%, `6500` means 65.00%.

## Operations

- Governance: `manageAdmin` dispatches pause and admin-transfer actions
- Labs: `manageLab` dispatches register, update, activation, and delete actions
- Batches: `manageBatch` dispatches create, update, delete, reverification,
  and archive actions
- Verification: `verifyBatch` and role-authenticated `revokeBatch`
- Public reads: exported `labs`, `batches`, `verifications`, counters, and
  governance state are read directly through the indexer without provable calls

Deletes are tombstones. Verified evidence history is append-only, preserving QR
and audit integrity.

## Build

Requires Node.js 22+, Compact CLI, Compact language 0.22-0.23, and Midnight JS
4.1.1-compatible packages.

```bash
cd contract
npm install
npm run test:compile
```

Generated artifacts land in `src/managed/green-proof` and are intentionally
ignored. Never commit caller secrets, lab signing keys, evidence nonces, or raw
lab reports.

## Integration requirements

Before production use, the browser app and lab tooling must:

1. Generate secrets and nonces with a cryptographically secure RNG.
2. Store private state encrypted; never send `actualBps` to public API/indexer.
3. Build the exact `EvidenceCommitInput`, sign the four-field
   `signatureMessage`, then set `pendingEvidence` only for proof generation.
4. Encode QR data as network + contract address + batch ID, never as a mutable
   web-only badge.
5. Pin compiler/runtime versions and complete independent contract/security
   audits before production funds or regulatory claims depend on deployment.
