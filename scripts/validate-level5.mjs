import { readFile } from "node:fs/promises";

const users = await readFile(new URL("../USERS.md", import.meta.url), "utf8");
const feedback = await readFile(new URL("../FEEDBACK.md", import.meta.url), "utf8");

const addresses = [...users.matchAll(/`(mn_addr_preprod1[0-9a-z]+)`/g)].map((match) => match[1]);
const uniqueAddresses = new Set(addresses);
const userRows = [...users.matchAll(/^\|\s*(\d+)\s*\|\s*`([^`]+)`\s*\|\s*(\d{2}\/\d{2}\/\d{4})\s*\|$/gm)];
const feedbackRows = [...feedback.matchAll(/^\|\s*(\d+)\s*\|/gm)].map((match) => Number(match[1]));
const declaredUserCount = Number(users.match(/Current count: \*\*(\d+) \/ 50\*\*/)?.[1]);
const declaredResponseCount = Number(feedback.match(/contains (\d+) submissions/)?.[1]);

const errors = [];
if (addresses.length < 50) errors.push(`USERS.md has ${addresses.length} addresses; expected at least 50.`);
if (uniqueAddresses.size !== addresses.length) errors.push("USERS.md contains duplicate wallet addresses.");
if (userRows.length !== addresses.length) errors.push("USERS.md contains a malformed wallet row or date.");
if (userRows.some((row, index) => Number(row[1]) !== index + 1)) errors.push("USERS.md row numbering is not contiguous.");
if (userRows.some((row) => row[2] !== row[2].toLowerCase())) errors.push("USERS.md wallet addresses must be lowercase.");
if (declaredUserCount !== uniqueAddresses.size) errors.push(`USERS.md declares ${declaredUserCount} users but lists ${uniqueAddresses.size}.`);
if (feedbackRows.length !== 61) errors.push(`FEEDBACK.md has ${feedbackRows.length} response rows; expected 61.`);
if (declaredResponseCount !== feedbackRows.length) errors.push(`FEEDBACK.md declares ${declaredResponseCount} responses but lists ${feedbackRows.length}.`);
if (feedbackRows.some((value, index) => value !== index + 1)) errors.push("FEEDBACK.md response numbering is not contiguous.");
if (!feedback.includes("## What We Heard (Themes)")) errors.push("FEEDBACK.md is missing What We Heard section.");
if (!feedback.includes("## What We Changed")) errors.push("FEEDBACK.md is missing What We Changed section.");

if (errors.length) {
  for (const error of errors) console.error(`Level 5 evidence error: ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Level 5 evidence valid: ${uniqueAddresses.size} unique wallets, ${feedbackRows.length} feedback responses.`);
}
