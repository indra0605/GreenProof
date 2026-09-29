# Level 5 Submission Evidence

## Requirement status

| Requirement | Status | Evidence |
|---|---|---|
| `FEEDBACK.md` correct structure | Complete | [FEEDBACK.md](../FEEDBACK.md) |
| `USERS.md` with 50 users | Complete | [59 unique addresses](../USERS.md) |
| `USAGE.md` current workflows | Complete | [USAGE.md](../USAGE.md) |
| User acquisition messages | Complete | [USER-ACQUISITION.md](USER-ACQUISITION.md) |
| Contract address in README | Complete | [README.md](../README.md#contract-address) |
| Level 5 README section | Complete | [README.md](../README.md#level-5--user-validation) |
| Required file structure | Complete | `contract/`, managed output, `app/`, tests, workflow, docs, proposal, README |
| Top feedback improvements | Complete | [FEEDBACK.md](../FEEDBACK.md#what-we-changed) |
| Updated live deployment | Manual action | Redeploy after merge and confirm URL |
| Commit history visible to reviewer | Complete | [COMMIT_HISTORY.md](../COMMIT_HISTORY.md) |

## Validation summary

- 61 submitted responses
- 59 unique Preprod wallet addresses
- 4.39/5 average rating
- 50-user target exceeded by 9 unique addresses
- Collection dates: 22–28 September 2026

## Implemented improvements

1. Three-step onboarding before batch creation.
2. Field examples and explicit sensitive-data warnings.
3. Review summary before wallet approval.
4. Strong success confirmation and direct next action.
5. Strict verifier input validation with recovery text.
6. Visible evidence validity and inspection time.
7. Larger mobile inputs, navigation items, and touch targets.

## Manual completion

1. Run `npm run ci` and save passing output.
2. Capture updated `/portal/batches/new` and `/verify/<real-batch-id>` screenshots.
3. Run `npm run evidence:commits` after final changes.
4. Push and redeploy live site.
5. Verify live contract lookup and feedback links.
6. Keep evidence links and counts current when new responses arrive.

## Local verification

```bash
npm run validate:evidence
npm run ci
npm run evidence:commits
```

Commit history snapshot is checked in because challenge review may expose source files without `.git` metadata.
