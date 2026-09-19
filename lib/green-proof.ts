"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { sampleSigningKey } from "@midnight-ntwrk/compact-runtime";
import { CompiledContract } from "@midnight-ntwrk/compact-js";
import { createUnprovenDeployTx, findDeployedContract, submitTxAsync } from "@midnight-ntwrk/midnight-js-contracts";
import * as GreenProof from "@contract/managed/green-proof/contract/index.js";
import { witnesses } from "@contract/witnesses";
import type { VerificationEvidence } from "@contract/witnesses";

import { selectPreprodNetwork, toHex, type ConnectedSession } from "./midnight";

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

function makeCompiledContract(useRealWitnesses = false) {
  return CompiledContract.make("green-proof", GreenProof.Contract).pipe(
    CompiledContract.withWitnesses((useRealWitnesses ? witnesses : deploymentWitnesses()) as any),
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

export async function callGreenProofCircuit(
  session: ConnectedSession,
  contractAddress: string,
  circuitId: "manageAdmin" | "manageLab" | "manageBatch" | "verifyBatch" | "revokeBatch",
  args: readonly unknown[],
): Promise<string> {
  selectPreprodNetwork();
  const compiledContract = makeCompiledContract(true);
  const found = await findDeployedContract(session.providers as any, {
    compiledContract,
    contractAddress,
    privateStateId: PRIVATE_STATE_ID,
  });
  const txId = await (found.callTx as any)[circuitId](...args);
  return txId?.txId ?? txId?.id ?? "confirmed";
}

export async function setVerificationEvidence(
  session: ConnectedSession,
  evidence: VerificationEvidence,
): Promise<void> {
  const current = await session.providers.privateStateProvider.get(PRIVATE_STATE_ID);
  if (!current) throw new Error("No private state found. Deploy a contract in this browser session first.");
  await session.providers.privateStateProvider.set(PRIVATE_STATE_ID, {
    ...(current as GreenProofPrivateState),
    pendingEvidence: evidence,
  });
}

export async function deriveCurrentRoleKeys(session: ConnectedSession): Promise<{ admin: string; supplier: string; labOperator: string }> {
  const current = await session.providers.privateStateProvider.get(PRIVATE_STATE_ID) as GreenProofPrivateState | null;
  if (!current) throw new Error("No private state found. Deploy a contract in this browser session first.");
  return {
    admin: toHex(GreenProof.pureCircuits.deriveAdminKey(current.callerSecret)),
    supplier: toHex(GreenProof.pureCircuits.deriveSupplierKey(current.callerSecret)),
    labOperator: toHex(GreenProof.pureCircuits.deriveLabOperatorKey(current.callerSecret)),
  };
}
