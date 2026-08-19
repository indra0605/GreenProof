import type { NextConfig } from "next";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);
const onchainRuntimeBrowserEntry = path.join(
  path.dirname(require.resolve("@midnight-ntwrk/onchain-runtime-v3")),
  "midnight_onchain_runtime_wasm.js",
);

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      topLevelAwait: true,
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        child_process: false,
        fs: false,
        net: false,
        tls: false,
      };
      config.resolve.alias = {
        ...config.resolve.alias,
        "isomorphic-ws": require.resolve("./lib/isomorphic-ws-fix.mjs"),
        "@midnight-ntwrk/compact-runtime$": require.resolve("@midnight-ntwrk/compact-runtime"),
        "@midnight-ntwrk/onchain-runtime-v3$": onchainRuntimeBrowserEntry,
      };
    }

    return config;
  },
};

export default nextConfig;
