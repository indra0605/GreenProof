"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { sampleSigningKey } from "@midnight-ntwrk/compact-runtime";
import { CompiledContract } from "@midnight-ntwrk/compact-js";
import { createUnprovenDeployTx, submitTxAsync } from "@midnight-ntwrk/midnight-js-contracts";
import * as GreenProof from "@contract/managed/green-proof/contract/index.js";

import { selectPreprodNetwork, type ConnectedSession } from "./midnight";

const ZK_ASSET_PATH = "/zk/green-proof/";
export const PRIVATE_STATE_ID = "greenProofPrivateState";

export type GreenProofPrivateState = {
  callerSecret: Uint8Array;
  pendingEvidence?: unknown;
};

function deploymentWitnesses() {
  return {
    callerSecret: ({ privateState }: { privateState: GreenProofPrivateState }) => [
      privateState,
      privateState.callerSecret,
    ],
    verificationEvidence: () => {
      throw new Error("Verification evidence is not used during deployment.");
    },
    getSchnorrReduction: () => {
      throw new Error("Schnorr reduction is not used during deployment.");
    },
  };
}

function makeCompiledContract() {
  return CompiledContract.make("green-proof", GreenProof.Contract).pipe(
    CompiledContract.withWitnesses(deploymentWitnesses() as any),
    CompiledContract.withCompiledFileAssets(ZK_ASSET_PATH),
  );
}

function createInitialPrivateState(): GreenProofPrivateState {
  const callerSecret = new Uint8Array(32);
  window.crypto.getRandomValues(callerSecret);
  return { callerSecret };
}

export async function deployGreenProof(session: ConnectedSession): Promise<string> {
  selectPreprodNetwork();
  const compiledContract = makeCompiledContract();
  const initialPrivateState = createInitialPrivateState();

  const deployTxData = await (createUnprovenDeployTx as any)(
    {
      zkConfigProvider: session.providers.zkConfigProvider,
      walletProvider: session.providers.walletProvider,
    },
    {
      compiledContract,
      args: [],
      privateStateId: PRIVATE_STATE_ID,
      initialPrivateState,
      signingKey: sampleSigningKey(),
    },
  );

  const contractAddress = deployTxData.public.contractAddress as string;
  await (submitTxAsync as any)(session.providers, {
    unprovenTx: deployTxData.private.unprovenTx,
  });

  session.providers.privateStateProvider.setContractAddress(contractAddress);
  await session.providers.privateStateProvider.set(
    PRIVATE_STATE_ID,
    deployTxData.private.initialPrivateState,
  );
  await session.providers.privateStateProvider.setSigningKey(
    contractAddress,
    deployTxData.private.signingKey,
  );

  return contractAddress;
}
