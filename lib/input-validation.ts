const HEX_32_BYTES = /^[0-9a-f]{64}$/;

export function normalizeBytes32(value: string, label: string) {
  const clean = value.trim().replace(/^0x/i, "").toLowerCase();
  if (!HEX_32_BYTES.test(clean)) throw new Error(`${label} must be exactly 64 hexadecimal characters.`);
  return clean;
}

export function bytes32(value: string, label: string) {
  const clean = normalizeBytes32(value, label);
  return Uint8Array.from(clean.match(/.{2}/g)!.map((part) => Number.parseInt(part, 16)));
}

export function percentageToBasisPoints(value: string) {
  const percentage = Number(value);
  if (!Number.isFinite(percentage) || percentage < 0.01 || percentage > 100) {
    throw new Error("Required recycled content must be between 0.01% and 100%.");
  }
  return BigInt(Math.round(percentage * 100));
}
