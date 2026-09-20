import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type BatchId = Uint8Array;

export type CallerSecret = Uint8Array;

export type AdminKey = Uint8Array;

export type SupplierKey = Uint8Array;

export type LabOperatorKey = Uint8Array;

export enum BatchStatus { PENDING = 0,
                          COMPLIANT = 1,
                          NON_COMPLIANT = 2,
                          REVOKED = 3,
                          ARCHIVED = 4,
                          DELETED = 5
}

export enum AdminAction { SET_PAUSED = 0, TRANSFER_ADMIN = 1 }

export enum LabAction { REGISTER = 0, UPDATE = 1, SET_ACTIVE = 2, DELETE = 3 }

export enum BatchAction { CREATE = 0,
                          UPDATE = 1,
                          DELETE = 2,
                          REQUEST_REVERIFICATION = 3,
                          ARCHIVE = 4
}

export type LabRecord = { operatorKey: LabOperatorKey;
                          signingKey: __compactRuntime.JubjubPoint;
                          metadataHash: Uint8Array;
                          active: boolean;
                          revision: bigint
                        };

export type BatchRecord = { supplier: SupplierKey;
                            productHash: Uint8Array;
                            metadataHash: Uint8Array;
                            requirementBps: bigint;
                            status: BatchStatus;
                            recordRevision: bigint;
                            verificationCount: bigint
                          };

export type VerificationRecord = { status: BatchStatus;
                                   labId: bigint;
                                   evidenceCommitment: Uint8Array;
                                   inspectedAt: bigint;
                                   validUntil: bigint;
                                   revoked: boolean
                                 };

export type Schnorr_SchnorrSignature = { announcement: __compactRuntime.JubjubPoint;
                                         response: bigint
                                       };

export type Witnesses<PS> = {
  getSchnorrReduction(context: __compactRuntime.WitnessContext<Ledger, PS>,
                      challengeHash_0: bigint): [PS, [bigint, bigint]];
  callerSecret(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, CallerSecret];
  verificationEvidence(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, { actualBps: bigint,
                                                                                     labId: bigint,
                                                                                     inspectedAt: bigint,
                                                                                     validUntil: bigint,
                                                                                     commitmentNonce: Uint8Array,
                                                                                     signature: Schnorr_SchnorrSignature
                                                                                   }];
}

export type ImpureCircuits<PS> = {
  manageAdmin(context: __compactRuntime.CircuitContext<PS>,
              action_0: AdminAction,
              nextPaused_0: boolean,
              nextAdmin_0: AdminKey): __compactRuntime.CircuitResults<PS, []>;
  manageLab(context: __compactRuntime.CircuitContext<PS>,
            action_0: LabAction,
            labId_0: bigint,
            operatorKey_0: LabOperatorKey,
            signingKey_0: __compactRuntime.JubjubPoint,
            metadataHash_0: Uint8Array,
            active_0: boolean): __compactRuntime.CircuitResults<PS, []>;
  manageBatch(context: __compactRuntime.CircuitContext<PS>,
              action_0: BatchAction,
              batchId_0: BatchId,
              productHash_0: Uint8Array,
              metadataHash_0: Uint8Array,
              requirementBps_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  verifyBatch(context: __compactRuntime.CircuitContext<PS>, batchId_0: BatchId): __compactRuntime.CircuitResults<PS, []>;
  revokeBatch(context: __compactRuntime.CircuitContext<PS>,
              batchId_0: BatchId,
              byAdmin_0: boolean): __compactRuntime.CircuitResults<PS, []>;
}

export type ProvableCircuits<PS> = {
  manageAdmin(context: __compactRuntime.CircuitContext<PS>,
              action_0: AdminAction,
              nextPaused_0: boolean,
              nextAdmin_0: AdminKey): __compactRuntime.CircuitResults<PS, []>;
  manageLab(context: __compactRuntime.CircuitContext<PS>,
            action_0: LabAction,
            labId_0: bigint,
            operatorKey_0: LabOperatorKey,
            signingKey_0: __compactRuntime.JubjubPoint,
            metadataHash_0: Uint8Array,
            active_0: boolean): __compactRuntime.CircuitResults<PS, []>;
  manageBatch(context: __compactRuntime.CircuitContext<PS>,
              action_0: BatchAction,
              batchId_0: BatchId,
              productHash_0: Uint8Array,
              metadataHash_0: Uint8Array,
              requirementBps_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  verifyBatch(context: __compactRuntime.CircuitContext<PS>, batchId_0: BatchId): __compactRuntime.CircuitResults<PS, []>;
  revokeBatch(context: __compactRuntime.CircuitContext<PS>,
              batchId_0: BatchId,
              byAdmin_0: boolean): __compactRuntime.CircuitResults<PS, []>;
}

export type PureCircuits = {
  deriveAdminKey(secret_0: CallerSecret): AdminKey;
  deriveSupplierKey(secret_0: CallerSecret): SupplierKey;
  deriveLabOperatorKey(secret_0: CallerSecret): LabOperatorKey;
  certificateChallenge(ann_x_0: bigint,
                       ann_y_0: bigint,
                       pk_x_0: bigint,
                       pk_y_0: bigint,
                       msg_0: bigint[]): bigint;
}

export type Circuits<PS> = {
  deriveAdminKey(context: __compactRuntime.CircuitContext<PS>,
                 secret_0: CallerSecret): __compactRuntime.CircuitResults<PS, AdminKey>;
  deriveSupplierKey(context: __compactRuntime.CircuitContext<PS>,
                    secret_0: CallerSecret): __compactRuntime.CircuitResults<PS, SupplierKey>;
  deriveLabOperatorKey(context: __compactRuntime.CircuitContext<PS>,
                       secret_0: CallerSecret): __compactRuntime.CircuitResults<PS, LabOperatorKey>;
  manageAdmin(context: __compactRuntime.CircuitContext<PS>,
              action_0: AdminAction,
              nextPaused_0: boolean,
              nextAdmin_0: AdminKey): __compactRuntime.CircuitResults<PS, []>;
  manageLab(context: __compactRuntime.CircuitContext<PS>,
            action_0: LabAction,
            labId_0: bigint,
            operatorKey_0: LabOperatorKey,
            signingKey_0: __compactRuntime.JubjubPoint,
            metadataHash_0: Uint8Array,
            active_0: boolean): __compactRuntime.CircuitResults<PS, []>;
  manageBatch(context: __compactRuntime.CircuitContext<PS>,
              action_0: BatchAction,
              batchId_0: BatchId,
              productHash_0: Uint8Array,
              metadataHash_0: Uint8Array,
              requirementBps_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  verifyBatch(context: __compactRuntime.CircuitContext<PS>, batchId_0: BatchId): __compactRuntime.CircuitResults<PS, []>;
  revokeBatch(context: __compactRuntime.CircuitContext<PS>,
              batchId_0: BatchId,
              byAdmin_0: boolean): __compactRuntime.CircuitResults<PS, []>;
  certificateChallenge(context: __compactRuntime.CircuitContext<PS>,
                       ann_x_0: bigint,
                       ann_y_0: bigint,
                       pk_x_0: bigint,
                       pk_y_0: bigint,
                       msg_0: bigint[]): __compactRuntime.CircuitResults<PS, bigint>;
}

export type Ledger = {
  readonly admin: AdminKey;
  readonly paused: boolean;
  labs: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): LabRecord;
    [Symbol.iterator](): Iterator<[bigint, LabRecord]>
  };
  batches: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: BatchId): boolean;
    lookup(key_0: BatchId): BatchRecord;
    [Symbol.iterator](): Iterator<[BatchId, BatchRecord]>
  };
  verifications: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: BatchId): boolean;
    lookup(key_0: BatchId): {
      isEmpty(): boolean;
      size(): bigint;
      member(key_1: bigint): boolean;
      lookup(key_1: bigint): VerificationRecord;
      [Symbol.iterator](): Iterator<[bigint, VerificationRecord]>
    }
  };
  usedEvidence: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
  };
  readonly totalBatches: bigint;
  readonly totalLabs: bigint;
  readonly totalVerifications: bigint;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
