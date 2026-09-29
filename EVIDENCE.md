# Level 5 Evidence Index

This file keeps required evidence visible in repository root so automated and human reviewers can inspect it without external git metadata.

| Requirement | Evidence | Verified status |
|---|---|---|
| 50 Preprod users | [USERS.md](USERS.md) | 59 unique addresses |
| Feedback documentation | [FEEDBACK.md](FEEDBACK.md) | 61 responses, collection method, themes, changes |
| Usage documentation | [USAGE.md](USAGE.md) | Public, supplier, lab, admin, troubleshooting, security |
| Feedback-driven code | [FEEDBACK.md#what-we-changed](FEEDBACK.md#what-we-changed) | Changes linked to commit `b44aee4` |
| Contract deployment | [README.md#contract-address](README.md#contract-address) | Preprod address documented |
| Commit quality | [COMMIT_HISTORY.md](COMMIT_HISTORY.md) | Generated chronological evidence |

Run `npm run validate:evidence` to check wallet uniqueness, row structure, declared totals, feedback numbering, and required sections.
