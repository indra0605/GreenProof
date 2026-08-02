"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { GREEN_PROOF_CONTRACT_ADDRESS } from "@/lib/contract-config";
import { deployGreenProof } from "@/lib/green-proof";
import { connectOneAmPreprod, detectOneAmWallet, pollForState, selectPreprodNetwork, type ConnectedSession } from "@/lib/midnight";

const STORED_ADDRESS = "greenproof:preprod:contract-address";
const messageFrom = (error: unknown) => error instanceof Error ? error.message : String(error);

export default function DeployClient() {
  const [walletInstalled, setWalletInstalled] = useState<boolean | null>(null);
  const [session, setSession] = useState<ConnectedSession | null>(null);
  const [contractAddress, setContractAddress] = useState<string>(GREEN_PROOF_CONTRACT_ADDRESS);
  const [connecting, setConnecting] = useState(false);
  const [deploying, setDeploying] = useState(false);
  const [status, setStatus] = useState("Ready to connect");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const mounted = useRef(true);

  const scanForWallet = useCallback(async () => {
    setWalletInstalled(null);
    setError("");
    setStatus("Detecting 1AM…");
    selectPreprodNetwork();
    const wallet = await detectOneAmWallet();
    if (!mounted.current) return;
    setWalletInstalled(wallet !== null);
    window.localStorage.setItem(STORED_ADDRESS, GREEN_PROOF_CONTRACT_ADDRESS);
    setContractAddress(GREEN_PROOF_CONTRACT_ADDRESS);
    setStatus(wallet ? "1AM detected" : "1AM was not injected into this page");
  }, []);

  useEffect(() => {
    mounted.current = true;
    const timer = window.setTimeout(() => { void scanForWallet(); }, 0);
    return () => {
      window.clearTimeout(timer);
      mounted.current = false;
    };
  }, [scanForWallet]);

  const connect = useCallback(async () => {
    setConnecting(true);
    setError("");
    setStatus("Requesting 1AM connection…");
    try {
      selectPreprodNetwork();
      const connected = await connectOneAmPreprod("/zk/green-proof/");
      if (!mounted.current) return;
      setSession(connected);
      setWalletInstalled(true);
      setStatus("1AM connected on preprod");
    } catch (caught) {
      if (mounted.current) {
        setError(messageFrom(caught));
        setStatus("Connection failed");
      }
    } finally {
      if (mounted.current) setConnecting(false);
    }
  }, []);

  const deploy = useCallback(async () => {
    if (!session) return;
    setDeploying(true);
    setError("");
    setCopied(false);
    setStatus("1AM is proving and submitting…");
    let submittedAddress = "";
    try {
      selectPreprodNetwork();
      submittedAddress = await deployGreenProof(session);
      if (!mounted.current) return;
      setContractAddress(submittedAddress);
      window.localStorage.setItem(STORED_ADDRESS, submittedAddress);
      setStatus("Submitted. Waiting for the preprod indexer…");
      await pollForState(session.config.indexerUri, submittedAddress, (attempt) => {
        if (mounted.current) setStatus(`Submitted. Indexer check ${attempt}…`);
      });
      if (mounted.current) setStatus("Deployment confirmed on Midnight preprod");
    } catch (caught) {
      if (mounted.current) {
        setError(messageFrom(caught));
        setStatus(submittedAddress ? "Submitted; indexer confirmation pending" : "Deployment failed");
      }
    } finally {
      if (mounted.current) setDeploying(false);
    }
  }, [session]);

  const copyAddress = useCallback(async () => {
    await navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    window.setTimeout(() => { if (mounted.current) setCopied(false); }, 1_500);
  }, [contractAddress]);

  return (
    <section className="deploy-panel" aria-live="polite">
      <header><div><span className="network-dot" />Preprod</div><small>{status}</small></header>
      {walletInstalled === false ? (
        <div className="deploy-state"><span className="deploy-state__number">01</span><h2>1AM wallet not detected</h2><p>Unlock 1AM, allow it on this site, select preprod, then retry. Chrome and Brave require the extension’s site access to include this origin.</p><div className="deploy-actions"><button className="button button--primary" type="button" onClick={scanForWallet}>Retry detection</button><a className="button button--quiet" href="https://1am.xyz" target="_blank" rel="noreferrer">Install 1AM</a></div></div>
      ) : !session ? (
        <div className="deploy-state"><span className="deploy-state__number">01</span><h2>Connect your wallet</h2><p>Green Proof requests a preprod session from the browser extension.</p><button className="button button--primary" type="button" onClick={connect} disabled={connecting || walletInstalled === null}>{connecting ? "Connecting…" : walletInstalled === null ? "Detecting 1AM…" : "Connect 1AM"}</button></div>
      ) : (
        <div className="deploy-state"><span className="deploy-state__number">02</span><h2>{contractAddress ? "Contract deployed" : "Ready to deploy"}</h2><p className="wallet-address"><span>Wallet</span>{session.unshieldedAddress}</p>{!contractAddress && <button className="button button--primary" type="button" onClick={deploy} disabled={deploying}>{deploying ? "Proving in 1AM…" : "Deploy Green Proof"}</button>}</div>
      )}
      {contractAddress && <div className="contract-address"><span>Deployed contract address</span><code>{contractAddress}</code><button type="button" onClick={copyAddress}>{copied ? "Copied" : "Copy address"}</button></div>}
      {error && <p className="deploy-error" role="alert">{error}</p>}
      <footer><span>Network locked: preprod</span><span>Provider: 1AM / ProofStation</span></footer>
    </section>
  );
}
