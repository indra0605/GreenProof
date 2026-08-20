# Green Proof Product Proposal

## Selected idea

Private Allowlist Access — prove membership without revealing identity.

## Product

Green Proof is a privacy-preserving recycled-content verification dApp on
Midnight. A trusted lab proves that a product batch meets a public recycled
content threshold. Suppliers and labs keep exact measurements, recipes, raw
reports, certificate signatures, and commitment nonces private.

The public verifier receives only the batch identifier and reads the final
compliance result from Midnight. It does not need a wallet or an account.

## Problem

Manufacturers need to prove environmental claims to buyers and auditors, but
publishing exact recipes, supplier data, and laboratory evidence exposes
commercially sensitive information. A signed PDF alone also makes replay and
tampering difficult to detect.

## Privacy-critical design

- Private witness: exact recycled percentage (`actualBps`), evidence nonce,
  certificate signature, and caller secret.
- Public ledger: batch ID, product/metadata hashes, required threshold, lab ID,
  compliance verdict, validity window, and hiding evidence commitment.
- Circuit checks: threshold, trusted lab, signature validity, expiry, replay,
  supplier ownership, and admin controls.
- Public observer learns: whether a batch is compliant, its public threshold,
  validity metadata, and proof history.
- Public observer does not learn: exact percentage, recipe, raw report,
  supplier secret, certificate signature, or commitment nonce.

## MVP scope

1. Admin registers trusted labs and controls emergency pause/revocation.
2. Supplier creates a batch with public identifiers and threshold.
3. Lab generates a proof from private evidence.
4. Anyone verifies the public result at `/verify`.
5. Browser deployment and authenticated operations use 1AM on Midnight
   preprod.

## Success criteria

- A real preprod deployment is reachable from `/deploy`.
- Three or more contract tests pass locally and in CI.
- No exact measurement appears in exported ledger declarations.
- A consumer can verify a batch without connecting a wallet.

## Risks and limits

This MVP is not a production certification system. Key management, lab
onboarding, browser private-state storage, and independent security review are
required before regulatory or financial reliance.
