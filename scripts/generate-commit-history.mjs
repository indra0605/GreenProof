import { execFileSync } from "node:child_process";
import { writeFile } from "node:fs/promises";

const level4Baseline = "0e9b7bc";
const format = "%h%x09%ad%x09%s";
const rows = execFileSync("git", ["log", "--reverse", `--format=${format}`, "--date=short", `${level4Baseline}..HEAD`], { encoding: "utf8" })
  .trim()
  .split("\n")
  .filter(Boolean)
  .map((line) => line.split("\t"));
const total = execFileSync("git", ["rev-list", "--count", "HEAD"], { encoding: "utf8" }).trim();

const markdown = `# Commit History Evidence

Generated from repository history with \`npm run evidence:commits\`.

- Repository commits at generation: **${total}**
- Level 5 commits after baseline \`${level4Baseline}\`: **${rows.length}**
- Baseline: Level 4 evidence update on 20 September 2026

| # | Commit | Date | Message |
|---:|---|---|---|
${rows.map(([hash, date, subject], index) => `| ${index + 1} | \`${hash}\` | ${date} | ${subject.replaceAll("|", "\\|")} |`).join("\n")}

Git remains source of truth. This checked-in snapshot exists because submission review may not expose repository metadata.
`;

await writeFile(new URL("../COMMIT_HISTORY.md", import.meta.url), markdown);
console.log(`Wrote COMMIT_HISTORY.md with ${rows.length} Level 5 commits (${total} total).`);
