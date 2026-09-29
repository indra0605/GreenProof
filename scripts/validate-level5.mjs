import { readFile } from "node:fs/promises";

const users = await readFile(new URL("../USERS.md", import.meta.url), "utf8");
const feedback = await readFile(new URL("../FEEDBACK.md", import.meta.url), "utf8");

const addresses = [...users.matchAll(/`(mn_addr_preprod1[0-9a-z]+)`/g)].map((match) => match[1]);
const uniqueAddresses = new Set(addresses);
const feedbackRows = [...feedback.matchAll(/^\|\s*(\d+)\s*\|/gm)].map((match) => Number(match[1]));

const errors = [];
if (addresses.length < 50) errors.push(`USERS.md has ${addresses.length} addresses; expected at least 50.`);
if (uniqueAddresses.size !== addresses.length) errors.push("USERS.md contains duplicate wallet addresses.");
if (feedbackRows.length !== 61) errors.push(`FEEDBACK.md has ${feedbackRows.length} response rows; expected 61.`);
if (feedbackRows.some((value, index) => value !== index + 1)) errors.push("FEEDBACK.md response numbering is not contiguous.");
if (!feedback.includes("## What We Heard (Themes)")) errors.push("FEEDBACK.md is missing What We Heard section.");
if (!feedback.includes("## What We Changed")) errors.push("FEEDBACK.md is missing What We Changed section.");

if (errors.length) {
  for (const error of errors) console.error(`Level 5 evidence error: ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Level 5 evidence valid: ${uniqueAddresses.size} unique wallets, ${feedbackRows.length} feedback responses.`);
}
