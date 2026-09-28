# Green Proof Usage

## Public verification

1. Open [the live verifier](https://green-proof-flax.vercel.app/verify).
2. Paste a 64-character hexadecimal batch ID.
3. Select **Verify batch**.
4. Read status, public threshold, evidence validity, lab ID, and commitment from live Midnight Preprod state.

No wallet is required. Exact recycled content, recipes, sources, raw reports, and certificate signatures remain private.

## Supplier workflow

1. Connect 1AM on Midnight Preprod and deploy or join the configured contract.
2. Hash batch, product, and metadata values locally into 32-byte hexadecimal values.
3. Open `/portal/batches/new` and review the three-step guide.
4. Enter only hashes and the public recycled-content threshold. Never enter a seed phrase, private key, product name, recipe, or raw report.
5. Review the public-value summary and approve the transaction in 1AM.
6. Use the confirmation link to open the public verifier after indexing completes.

## Lab workflow

1. Ensure the admin registered the lab and its operator key.
2. Open `/portal/lab` and select a pending batch.
3. Enter exact recycled content, validity, nonce, and signed evidence. These values are provided as private witness data; the contract publishes only the allowed verification record.
4. Approve proof generation and submission in 1AM.
5. Open the batch verifier and confirm status plus **Valid until** time.

## Admin workflow

Use `/portal/admin` to register or update trusted labs, transfer admin authority, pause the contract, or revoke batches. Verify all IDs and hashes before wallet approval.

## Troubleshooting

- **Wallet not found:** install and unlock 1AM, then reload page.
- **Network mismatch:** switch wallet to Midnight Preprod.
- **Invalid hash:** use exactly 64 hexadecimal characters; optional `0x` prefix is accepted in batch creation.
- **Ledger unavailable:** retry after Preprod indexer recovers.
- **Submitted but not visible:** allow time for transaction confirmation and indexer ingestion, then refresh.

## Security limits

- Never share wallet seed phrases, private keys, caller secrets, or raw evidence.
- Browser private state is not a durable backup.
- Green Proof is an MVP, not an independently audited certification system.
- Confirm network, contract, and transaction details before wallet approval.
