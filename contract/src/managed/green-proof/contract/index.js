import * as __compactRuntime from '@midnight-ntwrk/compact-runtime';
__compactRuntime.checkRuntimeVersion('0.16.0');

export var BatchStatus;
(function (BatchStatus) {
  BatchStatus[BatchStatus['PENDING'] = 0] = 'PENDING';
  BatchStatus[BatchStatus['COMPLIANT'] = 1] = 'COMPLIANT';
  BatchStatus[BatchStatus['NON_COMPLIANT'] = 2] = 'NON_COMPLIANT';
  BatchStatus[BatchStatus['REVOKED'] = 3] = 'REVOKED';
  BatchStatus[BatchStatus['ARCHIVED'] = 4] = 'ARCHIVED';
  BatchStatus[BatchStatus['DELETED'] = 5] = 'DELETED';
})(BatchStatus || (BatchStatus = {}));

export var AdminAction;
(function (AdminAction) {
  AdminAction[AdminAction['SET_PAUSED'] = 0] = 'SET_PAUSED';
  AdminAction[AdminAction['TRANSFER_ADMIN'] = 1] = 'TRANSFER_ADMIN';
})(AdminAction || (AdminAction = {}));

export var LabAction;
(function (LabAction) {
  LabAction[LabAction['REGISTER'] = 0] = 'REGISTER';
  LabAction[LabAction['UPDATE'] = 1] = 'UPDATE';
  LabAction[LabAction['SET_ACTIVE'] = 2] = 'SET_ACTIVE';
  LabAction[LabAction['DELETE'] = 3] = 'DELETE';
})(LabAction || (LabAction = {}));

export var BatchAction;
(function (BatchAction) {
  BatchAction[BatchAction['CREATE'] = 0] = 'CREATE';
  BatchAction[BatchAction['UPDATE'] = 1] = 'UPDATE';
  BatchAction[BatchAction['DELETE'] = 2] = 'DELETE';
  BatchAction[BatchAction['REQUEST_REVERIFICATION'] = 3] = 'REQUEST_REVERIFICATION';
  BatchAction[BatchAction['ARCHIVE'] = 4] = 'ARCHIVE';
})(BatchAction || (BatchAction = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_2 = new __compactRuntime.CompactTypeEnum(5, 1);

class _BatchRecord_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment()))))));
  }
  fromValue(value_0) {
    return {
      supplier: _descriptor_0.fromValue(value_0),
      productHash: _descriptor_0.fromValue(value_0),
      metadataHash: _descriptor_0.fromValue(value_0),
      requirementBps: _descriptor_1.fromValue(value_0),
      status: _descriptor_2.fromValue(value_0),
      recordRevision: _descriptor_1.fromValue(value_0),
      verificationCount: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.supplier).concat(_descriptor_0.toValue(value_0.productHash).concat(_descriptor_0.toValue(value_0.metadataHash).concat(_descriptor_1.toValue(value_0.requirementBps).concat(_descriptor_2.toValue(value_0.status).concat(_descriptor_1.toValue(value_0.recordRevision).concat(_descriptor_1.toValue(value_0.verificationCount)))))));
  }
}

const _descriptor_3 = new _BatchRecord_0();

const _descriptor_4 = __compactRuntime.CompactTypeBoolean;

const _descriptor_5 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _VerificationRecord_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_4.alignment())))));
  }
  fromValue(value_0) {
    return {
      status: _descriptor_2.fromValue(value_0),
      labId: _descriptor_1.fromValue(value_0),
      evidenceCommitment: _descriptor_0.fromValue(value_0),
      inspectedAt: _descriptor_5.fromValue(value_0),
      validUntil: _descriptor_5.fromValue(value_0),
      revoked: _descriptor_4.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.status).concat(_descriptor_1.toValue(value_0.labId).concat(_descriptor_0.toValue(value_0.evidenceCommitment).concat(_descriptor_5.toValue(value_0.inspectedAt).concat(_descriptor_5.toValue(value_0.validUntil).concat(_descriptor_4.toValue(value_0.revoked))))));
  }
}

const _descriptor_6 = new _VerificationRecord_0();

const _descriptor_7 = __compactRuntime.CompactTypeField;

const _descriptor_8 = new __compactRuntime.CompactTypeVector(4, _descriptor_7);

const _descriptor_9 = __compactRuntime.CompactTypeJubjubPoint;

class _LabRecord_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_9.alignment().concat(_descriptor_0.alignment().concat(_descriptor_4.alignment().concat(_descriptor_1.alignment()))));
  }
  fromValue(value_0) {
    return {
      operatorKey: _descriptor_0.fromValue(value_0),
      signingKey: _descriptor_9.fromValue(value_0),
      metadataHash: _descriptor_0.fromValue(value_0),
      active: _descriptor_4.fromValue(value_0),
      revision: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.operatorKey).concat(_descriptor_9.toValue(value_0.signingKey).concat(_descriptor_0.toValue(value_0.metadataHash).concat(_descriptor_4.toValue(value_0.active).concat(_descriptor_1.toValue(value_0.revision)))));
  }
}

const _descriptor_10 = new _LabRecord_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_11 = new _ContractAddress_0();

const _descriptor_12 = new __compactRuntime.CompactTypeEnum(3, 1);

const _descriptor_13 = new __compactRuntime.CompactTypeEnum(4, 1);

const _descriptor_14 = new __compactRuntime.CompactTypeEnum(1, 1);

class _SchnorrSignature_0 {
  alignment() {
    return _descriptor_9.alignment().concat(_descriptor_7.alignment());
  }
  fromValue(value_0) {
    return {
      announcement: _descriptor_9.fromValue(value_0),
      response: _descriptor_7.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_9.toValue(value_0.announcement).concat(_descriptor_7.toValue(value_0.response));
  }
}

const _descriptor_15 = new _SchnorrSignature_0();

class _VerificationEvidence_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment().concat(_descriptor_0.alignment().concat(_descriptor_15.alignment())))));
  }
  fromValue(value_0) {
    return {
      actualBps: _descriptor_1.fromValue(value_0),
      labId: _descriptor_1.fromValue(value_0),
      inspectedAt: _descriptor_5.fromValue(value_0),
      validUntil: _descriptor_5.fromValue(value_0),
      commitmentNonce: _descriptor_0.fromValue(value_0),
      signature: _descriptor_15.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.actualBps).concat(_descriptor_1.toValue(value_0.labId).concat(_descriptor_5.toValue(value_0.inspectedAt).concat(_descriptor_5.toValue(value_0.validUntil).concat(_descriptor_0.toValue(value_0.commitmentNonce).concat(_descriptor_15.toValue(value_0.signature))))));
  }
}

const _descriptor_16 = new _VerificationEvidence_0();

const _descriptor_17 = new __compactRuntime.CompactTypeUnsignedInteger(452312848583266388373324160190187140051835877600158453279131187530910662655n, 31);

class _tuple_0 {
  alignment() {
    return _descriptor_7.alignment().concat(_descriptor_17.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_7.fromValue(value_0),
      _descriptor_17.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_7.toValue(value_0[0]).concat(_descriptor_17.toValue(value_0[1]));
  }
}

const _descriptor_18 = new _tuple_0();

const _descriptor_19 = new __compactRuntime.CompactTypeBytes(26);

class _tuple_1 {
  alignment() {
    return _descriptor_19.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_19.fromValue(value_0),
      _descriptor_0.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_19.toValue(value_0[0]).concat(_descriptor_0.toValue(value_0[1]));
  }
}

const _descriptor_20 = new _tuple_1();

class _EvidenceCommitInput_0 {
  alignment() {
    return _descriptor_11.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_5.alignment().concat(_descriptor_5.alignment()))))))));
  }
  fromValue(value_0) {
    return {
      contractAddress: _descriptor_11.fromValue(value_0),
      batchId: _descriptor_0.fromValue(value_0),
      supplier: _descriptor_0.fromValue(value_0),
      productHash: _descriptor_0.fromValue(value_0),
      requirementBps: _descriptor_1.fromValue(value_0),
      actualBps: _descriptor_1.fromValue(value_0),
      labId: _descriptor_1.fromValue(value_0),
      inspectedAt: _descriptor_5.fromValue(value_0),
      validUntil: _descriptor_5.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_11.toValue(value_0.contractAddress).concat(_descriptor_0.toValue(value_0.batchId).concat(_descriptor_0.toValue(value_0.supplier).concat(_descriptor_0.toValue(value_0.productHash).concat(_descriptor_1.toValue(value_0.requirementBps).concat(_descriptor_1.toValue(value_0.actualBps).concat(_descriptor_1.toValue(value_0.labId).concat(_descriptor_5.toValue(value_0.inspectedAt).concat(_descriptor_5.toValue(value_0.validUntil)))))))));
  }
}

const _descriptor_21 = new _EvidenceCommitInput_0();

const _descriptor_22 = new __compactRuntime.CompactTypeBytes(19);

class _tuple_2 {
  alignment() {
    return _descriptor_22.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_22.fromValue(value_0),
      _descriptor_0.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_22.toValue(value_0[0]).concat(_descriptor_0.toValue(value_0[1]));
  }
}

const _descriptor_23 = new _tuple_2();

const _descriptor_24 = new __compactRuntime.CompactTypeBytes(22);

class _tuple_3 {
  alignment() {
    return _descriptor_24.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_24.fromValue(value_0),
      _descriptor_0.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_24.toValue(value_0[0]).concat(_descriptor_0.toValue(value_0[1]));
  }
}

const _descriptor_25 = new _tuple_3();

class _SchnorrHashInput_0 {
  alignment() {
    return _descriptor_7.alignment().concat(_descriptor_7.alignment().concat(_descriptor_7.alignment().concat(_descriptor_7.alignment().concat(_descriptor_8.alignment()))));
  }
  fromValue(value_0) {
    return {
      ann_x: _descriptor_7.fromValue(value_0),
      ann_y: _descriptor_7.fromValue(value_0),
      pk_x: _descriptor_7.fromValue(value_0),
      pk_y: _descriptor_7.fromValue(value_0),
      msg: _descriptor_8.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_7.toValue(value_0.ann_x).concat(_descriptor_7.toValue(value_0.ann_y).concat(_descriptor_7.toValue(value_0.pk_x).concat(_descriptor_7.toValue(value_0.pk_y).concat(_descriptor_8.toValue(value_0.msg)))));
  }
}

const _descriptor_26 = new _SchnorrHashInput_0();

class _Either_0 {
  alignment() {
    return _descriptor_4.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_4.fromValue(value_0),
      left: _descriptor_0.fromValue(value_0),
      right: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_4.toValue(value_0.is_left).concat(_descriptor_0.toValue(value_0.left).concat(_descriptor_0.toValue(value_0.right)));
  }
}

const _descriptor_27 = new _Either_0();

const _descriptor_28 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

const _descriptor_29 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

export class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    if (typeof(witnesses_0.getSchnorrReduction) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named getSchnorrReduction');
    }
    if (typeof(witnesses_0.callerSecret) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named callerSecret');
    }
    if (typeof(witnesses_0.verificationEvidence) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named verificationEvidence');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      deriveAdminKey(context, ...args_1) {
        return { result: pureCircuits.deriveAdminKey(...args_1), context };
      },
      deriveSupplierKey(context, ...args_1) {
        return { result: pureCircuits.deriveSupplierKey(...args_1), context };
      },
      deriveLabOperatorKey(context, ...args_1) {
        return { result: pureCircuits.deriveLabOperatorKey(...args_1), context };
      },
      manageAdmin: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`manageAdmin: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const action_0 = args_1[1];
        const nextPaused_0 = args_1[2];
        const nextAdmin_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('manageAdmin',
                                     'argument 1 (as invoked from Typescript)',
                                     'green-proof.compact line 146 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(action_0) === 'number' && action_0 >= 0 && action_0 <= 1)) {
          __compactRuntime.typeError('manageAdmin',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'green-proof.compact line 146 char 1',
                                     'Enum<AdminAction, SET_PAUSED, TRANSFER_ADMIN>',
                                     action_0)
        }
        if (!(typeof(nextPaused_0) === 'boolean')) {
          __compactRuntime.typeError('manageAdmin',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'green-proof.compact line 146 char 1',
                                     'Boolean',
                                     nextPaused_0)
        }
        if (!(nextAdmin_0.buffer instanceof ArrayBuffer && nextAdmin_0.BYTES_PER_ELEMENT === 1 && nextAdmin_0.length === 32)) {
          __compactRuntime.typeError('manageAdmin',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'green-proof.compact line 146 char 1',
                                     'Bytes<32>',
                                     nextAdmin_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_14.toValue(action_0).concat(_descriptor_4.toValue(nextPaused_0).concat(_descriptor_0.toValue(nextAdmin_0))),
            alignment: _descriptor_14.alignment().concat(_descriptor_4.alignment().concat(_descriptor_0.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._manageAdmin_0(context,
                                             partialProofData,
                                             action_0,
                                             nextPaused_0,
                                             nextAdmin_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      manageLab: (...args_1) => {
        if (args_1.length !== 7) {
          throw new __compactRuntime.CompactError(`manageLab: expected 7 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const action_0 = args_1[1];
        const labId_0 = args_1[2];
        const operatorKey_0 = args_1[3];
        const signingKey_0 = args_1[4];
        const metadataHash_0 = args_1[5];
        const active_0 = args_1[6];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('manageLab',
                                     'argument 1 (as invoked from Typescript)',
                                     'green-proof.compact line 161 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(action_0) === 'number' && action_0 >= 0 && action_0 <= 3)) {
          __compactRuntime.typeError('manageLab',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'green-proof.compact line 161 char 1',
                                     'Enum<LabAction, REGISTER, UPDATE, SET_ACTIVE, DELETE>',
                                     action_0)
        }
        if (!(typeof(labId_0) === 'bigint' && labId_0 >= 0n && labId_0 <= 65535n)) {
          __compactRuntime.typeError('manageLab',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'green-proof.compact line 161 char 1',
                                     'Uint<0..65536>',
                                     labId_0)
        }
        if (!(operatorKey_0.buffer instanceof ArrayBuffer && operatorKey_0.BYTES_PER_ELEMENT === 1 && operatorKey_0.length === 32)) {
          __compactRuntime.typeError('manageLab',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'green-proof.compact line 161 char 1',
                                     'Bytes<32>',
                                     operatorKey_0)
        }
        if (!(metadataHash_0.buffer instanceof ArrayBuffer && metadataHash_0.BYTES_PER_ELEMENT === 1 && metadataHash_0.length === 32)) {
          __compactRuntime.typeError('manageLab',
                                     'argument 5 (argument 6 as invoked from Typescript)',
                                     'green-proof.compact line 161 char 1',
                                     'Bytes<32>',
                                     metadataHash_0)
        }
        if (!(typeof(active_0) === 'boolean')) {
          __compactRuntime.typeError('manageLab',
                                     'argument 6 (argument 7 as invoked from Typescript)',
                                     'green-proof.compact line 161 char 1',
                                     'Boolean',
                                     active_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_12.toValue(action_0).concat(_descriptor_1.toValue(labId_0).concat(_descriptor_0.toValue(operatorKey_0).concat(_descriptor_9.toValue(signingKey_0).concat(_descriptor_0.toValue(metadataHash_0).concat(_descriptor_4.toValue(active_0)))))),
            alignment: _descriptor_12.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_9.alignment().concat(_descriptor_0.alignment().concat(_descriptor_4.alignment())))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._manageLab_0(context,
                                           partialProofData,
                                           action_0,
                                           labId_0,
                                           operatorKey_0,
                                           signingKey_0,
                                           metadataHash_0,
                                           active_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      manageBatch: (...args_1) => {
        if (args_1.length !== 6) {
          throw new __compactRuntime.CompactError(`manageBatch: expected 6 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const action_0 = args_1[1];
        const batchId_0 = args_1[2];
        const productHash_0 = args_1[3];
        const metadataHash_0 = args_1[4];
        const requirementBps_0 = args_1[5];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('manageBatch',
                                     'argument 1 (as invoked from Typescript)',
                                     'green-proof.compact line 223 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(typeof(action_0) === 'number' && action_0 >= 0 && action_0 <= 4)) {
          __compactRuntime.typeError('manageBatch',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'green-proof.compact line 223 char 1',
                                     'Enum<BatchAction, CREATE, UPDATE, DELETE, REQUEST_REVERIFICATION, ARCHIVE>',
                                     action_0)
        }
        if (!(batchId_0.buffer instanceof ArrayBuffer && batchId_0.BYTES_PER_ELEMENT === 1 && batchId_0.length === 32)) {
          __compactRuntime.typeError('manageBatch',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'green-proof.compact line 223 char 1',
                                     'Bytes<32>',
                                     batchId_0)
        }
        if (!(productHash_0.buffer instanceof ArrayBuffer && productHash_0.BYTES_PER_ELEMENT === 1 && productHash_0.length === 32)) {
          __compactRuntime.typeError('manageBatch',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'green-proof.compact line 223 char 1',
                                     'Bytes<32>',
                                     productHash_0)
        }
        if (!(metadataHash_0.buffer instanceof ArrayBuffer && metadataHash_0.BYTES_PER_ELEMENT === 1 && metadataHash_0.length === 32)) {
          __compactRuntime.typeError('manageBatch',
                                     'argument 4 (argument 5 as invoked from Typescript)',
                                     'green-proof.compact line 223 char 1',
                                     'Bytes<32>',
                                     metadataHash_0)
        }
        if (!(typeof(requirementBps_0) === 'bigint' && requirementBps_0 >= 0n && requirementBps_0 <= 65535n)) {
          __compactRuntime.typeError('manageBatch',
                                     'argument 5 (argument 6 as invoked from Typescript)',
                                     'green-proof.compact line 223 char 1',
                                     'Uint<0..65536>',
                                     requirementBps_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_13.toValue(action_0).concat(_descriptor_0.toValue(batchId_0).concat(_descriptor_0.toValue(productHash_0).concat(_descriptor_0.toValue(metadataHash_0).concat(_descriptor_1.toValue(requirementBps_0))))),
            alignment: _descriptor_13.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment()))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._manageBatch_0(context,
                                             partialProofData,
                                             action_0,
                                             batchId_0,
                                             productHash_0,
                                             metadataHash_0,
                                             requirementBps_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      verifyBatch: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`verifyBatch: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const batchId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('verifyBatch',
                                     'argument 1 (as invoked from Typescript)',
                                     'green-proof.compact line 322 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(batchId_0.buffer instanceof ArrayBuffer && batchId_0.BYTES_PER_ELEMENT === 1 && batchId_0.length === 32)) {
          __compactRuntime.typeError('verifyBatch',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'green-proof.compact line 322 char 1',
                                     'Bytes<32>',
                                     batchId_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(batchId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._verifyBatch_0(context,
                                             partialProofData,
                                             batchId_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      revokeBatch: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`revokeBatch: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const batchId_0 = args_1[1];
        const byAdmin_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('revokeBatch',
                                     'argument 1 (as invoked from Typescript)',
                                     'green-proof.compact line 446 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(batchId_0.buffer instanceof ArrayBuffer && batchId_0.BYTES_PER_ELEMENT === 1 && batchId_0.length === 32)) {
          __compactRuntime.typeError('revokeBatch',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'green-proof.compact line 446 char 1',
                                     'Bytes<32>',
                                     batchId_0)
        }
        if (!(typeof(byAdmin_0) === 'boolean')) {
          __compactRuntime.typeError('revokeBatch',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'green-proof.compact line 446 char 1',
                                     'Boolean',
                                     byAdmin_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(batchId_0).concat(_descriptor_4.toValue(byAdmin_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_4.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._revokeBatch_0(context,
                                             partialProofData,
                                             batchId_0,
                                             byAdmin_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      certificateChallenge(context, ...args_1) {
        return { result: pureCircuits.certificateChallenge(...args_1), context };
      }
    };
    this.impureCircuits = {
      manageAdmin: this.circuits.manageAdmin,
      manageLab: this.circuits.manageLab,
      manageBatch: this.circuits.manageBatch,
      verifyBatch: this.circuits.verifyBatch,
      revokeBatch: this.circuits.revokeBatch
    };
    this.provableCircuits = {
      manageAdmin: this.circuits.manageAdmin,
      manageLab: this.circuits.manageLab,
      manageBatch: this.circuits.manageBatch,
      verifyBatch: this.circuits.verifyBatch,
      revokeBatch: this.circuits.revokeBatch
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = new __compactRuntime.ChargedState(stateValue_0);
    state_0.setOperation('manageAdmin', new __compactRuntime.ContractOperation());
    state_0.setOperation('manageLab', new __compactRuntime.ContractOperation());
    state_0.setOperation('manageBatch', new __compactRuntime.ContractOperation());
    state_0.setOperation('verifyBatch', new __compactRuntime.ContractOperation());
    state_0.setOperation('revokeBatch', new __compactRuntime.ContractOperation());
    const context = __compactRuntime.createCircuitContext(__compactRuntime.dummyContractAddress(), constructorContext_0.initialZswapLocalState.coinPublicKey, state_0.data, constructorContext_0.initialPrivateState);
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(0n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(1n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(false),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(2n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(3n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(4n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(5n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(6n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(7n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(8n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    const tmp_0 = this._deriveAdminKey_0(this._callerSecret_0(context,
                                                              partialProofData));
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(0n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(1n),
                                                                                              alignment: _descriptor_29.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(false),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    state_0.data = new __compactRuntime.ChargedState(context.currentQueryContext.state.state);
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _transientHash_0(value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_19, value_0);
    return result_0;
  }
  _transientHash_1(value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_0, value_0);
    return result_0;
  }
  _transientHash_2(value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_26, value_0);
    return result_0;
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_23, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_25, value_0);
    return result_0;
  }
  _persistentHash_2(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_20, value_0);
    return result_0;
  }
  _persistentCommit_0(value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_21,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  _jubjubPointX_0(np_0) {
    const result_0 = __compactRuntime.jubjubPointX(np_0);
    return result_0;
  }
  _jubjubPointY_0(np_0) {
    const result_0 = __compactRuntime.jubjubPointY(np_0);
    return result_0;
  }
  _ecAdd_0(a_0, b_0) {
    const result_0 = __compactRuntime.ecAdd(a_0, b_0);
    return result_0;
  }
  _ecMul_0(a_0, b_0) {
    const result_0 = __compactRuntime.ecMul(a_0, b_0);
    return result_0;
  }
  _ecMulGenerator_0(b_0) {
    const result_0 = __compactRuntime.ecMulGenerator(b_0);
    return result_0;
  }
  _getSchnorrReduction_0(context, partialProofData, challengeHash_0) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.getSchnorrReduction(witnessContext_0,
                                                                              challengeHash_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(Array.isArray(result_0) && result_0.length === 2  && typeof(result_0[0]) === 'bigint' && result_0[0] >= 0 && result_0[0] <= __compactRuntime.MAX_FIELD && typeof(result_0[1]) === 'bigint' && result_0[1] >= 0n && result_0[1] <= 452312848583266388373324160190187140051835877600158453279131187530910662655n)) {
      __compactRuntime.typeError('getSchnorrReduction',
                                 'return value',
                                 'schnorr.compact line 19 char 3',
                                 '[Field, Uint<0..452312848583266388373324160190187140051835877600158453279131187530910662656>]',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_18.toValue(result_0),
      alignment: _descriptor_18.alignment()
    });
    return result_0;
  }
  _schnorrVerify_0(context, partialProofData, msg_0, signature_0, pk_0) {
    const __compact_pattern_tmp2_0 = signature_0;
    const announcement_0 = __compact_pattern_tmp2_0.announcement;
    const response_0 = __compact_pattern_tmp2_0.response;
    const challengeHash_0 = this._transientHash_2({ ann_x:
                                                      this._jubjubPointX_0(announcement_0),
                                                    ann_y:
                                                      this._jubjubPointY_0(announcement_0),
                                                    pk_x:
                                                      this._jubjubPointX_0(pk_0),
                                                    pk_y:
                                                      this._jubjubPointY_0(pk_0),
                                                    msg: msg_0 });
    const TWO_248_0 = 452312848583266388373324160190187140051835877600158453279131187530910662656n;
    const __compact_pattern_tmp1_0 = this._getSchnorrReduction_0(context,
                                                                 partialProofData,
                                                                 challengeHash_0);
    const quotient_0 = __compact_pattern_tmp1_0[0];
    const reducedChallenge_0 = __compact_pattern_tmp1_0[1];
    __compactRuntime.assert(__compactRuntime.addField(__compactRuntime.mulField(quotient_0,
                                                                                TWO_248_0),
                                                      reducedChallenge_0)
                            ===
                            challengeHash_0,
                            'Invalid challenge reduction');
    const challenge_0 = reducedChallenge_0;
    const lhs_0 = this._ecMulGenerator_0(response_0);
    const rhs_0 = this._ecAdd_0(announcement_0, this._ecMul_0(pk_0, challenge_0));
    __compactRuntime.assert(this._jubjubPointX_0(lhs_0)
                            ===
                            this._jubjubPointX_0(rhs_0)
                            &&
                            this._jubjubPointY_0(lhs_0)
                            ===
                            this._jubjubPointY_0(rhs_0),
                            'Invalid lab certificate signature');
    return [];
  }
  _schnorrChallenge_0(ann_x_0, ann_y_0, pk_x_0, pk_y_0, msg_0) {
    return this._transientHash_2({ ann_x: ann_x_0,
                                   ann_y: ann_y_0,
                                   pk_x: pk_x_0,
                                   pk_y: pk_y_0,
                                   msg: msg_0 });
  }
  _callerSecret_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.callerSecret(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('callerSecret',
                                 'return value',
                                 'green-proof.compact line 88 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _verificationEvidence_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.verificationEvidence(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && typeof(result_0.actualBps) === 'bigint' && result_0.actualBps >= 0n && result_0.actualBps <= 65535n && typeof(result_0.labId) === 'bigint' && result_0.labId >= 0n && result_0.labId <= 65535n && typeof(result_0.inspectedAt) === 'bigint' && result_0.inspectedAt >= 0n && result_0.inspectedAt <= 18446744073709551615n && typeof(result_0.validUntil) === 'bigint' && result_0.validUntil >= 0n && result_0.validUntil <= 18446744073709551615n && result_0.commitmentNonce.buffer instanceof ArrayBuffer && result_0.commitmentNonce.BYTES_PER_ELEMENT === 1 && result_0.commitmentNonce.length === 32 && typeof(result_0.signature) === 'object' && true && typeof(result_0.signature.response) === 'bigint' && result_0.signature.response >= 0 && result_0.signature.response <= __compactRuntime.MAX_FIELD)) {
      __compactRuntime.typeError('verificationEvidence',
                                 'return value',
                                 'green-proof.compact line 89 char 1',
                                 'struct VerificationEvidence<actualBps: Uint<0..65536>, labId: Uint<0..65536>, inspectedAt: Uint<0..18446744073709551616>, validUntil: Uint<0..18446744073709551616>, commitmentNonce: Bytes<32>, signature: struct SchnorrSignature<announcement: Opaque<"JubjubPoint">, response: Field>>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_16.toValue(result_0),
      alignment: _descriptor_16.alignment()
    });
    return result_0;
  }
  _deriveAdminKey_0(secret_0) {
    return this._persistentHash_0([new Uint8Array([103, 114, 101, 101, 110, 112, 114, 111, 111, 102, 58, 97, 100, 109, 105, 110, 58, 118, 49]),
                                   secret_0]);
  }
  _deriveSupplierKey_0(secret_0) {
    return this._persistentHash_1([new Uint8Array([103, 114, 101, 101, 110, 112, 114, 111, 111, 102, 58, 115, 117, 112, 112, 108, 105, 101, 114, 58, 118, 49]),
                                   secret_0]);
  }
  _deriveLabOperatorKey_0(secret_0) {
    return this._persistentHash_2([new Uint8Array([103, 114, 101, 101, 110, 112, 114, 111, 111, 102, 58, 108, 97, 98, 45, 111, 112, 101, 114, 97, 116, 111, 114, 58, 118, 49]),
                                   secret_0]);
  }
  _assertAdmin_0(context, partialProofData) {
    __compactRuntime.assert(this._equal_0(_descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                    partialProofData,
                                                                                                    [
                                                                                                     { dup: { n: 0 } },
                                                                                                     { idx: { cached: false,
                                                                                                              pushPath: false,
                                                                                                              path: [
                                                                                                                     { tag: 'value',
                                                                                                                       value: { value: _descriptor_29.toValue(0n),
                                                                                                                                alignment: _descriptor_29.alignment() } }] } },
                                                                                                     { popeq: { cached: false,
                                                                                                                result: undefined } }]).value),
                                          this._deriveAdminKey_0(this._callerSecret_0(context,
                                                                                      partialProofData))),
                            'Only admin may perform this operation');
    return [];
  }
  _assertNotPaused_0(context, partialProofData) {
    __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_29.toValue(1n),
                                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                                        { popeq: { cached: false,
                                                                                                   result: undefined } }]).value),
                            'Contract is paused');
    return [];
  }
  _assertSupplier_0(context, partialProofData, batch_0) {
    __compactRuntime.assert(this._equal_1(batch_0.supplier,
                                          this._deriveSupplierKey_0(this._callerSecret_0(context,
                                                                                         partialProofData))),
                            'Only batch supplier may perform this operation');
    return [];
  }
  _assertLabOperator_0(context, partialProofData, labId_0) {
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_29.toValue(2n),
                                                                                                                  alignment: _descriptor_29.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(labId_0),
                                                                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Lab not found');
    const lab_0 = _descriptor_10.fromValue(__compactRuntime.queryLedgerState(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 0 } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_29.toValue(2n),
                                                                                                         alignment: _descriptor_29.alignment() } }] } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_1.toValue(labId_0),
                                                                                                         alignment: _descriptor_1.alignment() } }] } },
                                                                              { popeq: { cached: false,
                                                                                         result: undefined } }]).value);
    __compactRuntime.assert(lab_0.active, 'Lab is inactive');
    __compactRuntime.assert(this._equal_2(lab_0.operatorKey,
                                          this._deriveLabOperatorKey_0(this._callerSecret_0(context,
                                                                                            partialProofData))),
                            'Only lab operator may perform this operation');
    return [];
  }
  _manageAdmin_0(context, partialProofData, action_0, nextPaused_0, nextAdmin_0)
  {
    this._assertAdmin_0(context, partialProofData);
    const publicAction_0 = action_0;
    if (publicAction_0 === 0) {
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(1n),
                                                                                                alignment: _descriptor_29.alignment() }).encode() } },
                                         { push: { storage: true,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(nextPaused_0),
                                                                                                alignment: _descriptor_4.alignment() }).encode() } },
                                         { ins: { cached: false, n: 1 } }]);
    } else {
      __compactRuntime.assert(!this._equal_3(nextAdmin_0,
                                             _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                       partialProofData,
                                                                                                       [
                                                                                                        { dup: { n: 0 } },
                                                                                                        { idx: { cached: false,
                                                                                                                 pushPath: false,
                                                                                                                 path: [
                                                                                                                        { tag: 'value',
                                                                                                                          value: { value: _descriptor_29.toValue(0n),
                                                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                                                        { popeq: { cached: false,
                                                                                                                   result: undefined } }]).value)),
                              'New admin must differ from current admin');
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_29.toValue(0n),
                                                                                                alignment: _descriptor_29.alignment() }).encode() } },
                                         { push: { storage: true,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nextAdmin_0),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { ins: { cached: false, n: 1 } }]);
    }
    return [];
  }
  _manageLab_0(context,
               partialProofData,
               action_0,
               labId_0,
               operatorKey_0,
               signingKey_0,
               metadataHash_0,
               active_0)
  {
    this._assertAdmin_0(context, partialProofData);
    const publicAction_0 = action_0;
    const publicLabId_0 = labId_0;
    __compactRuntime.assert(publicLabId_0 > 0n, 'Lab ID zero is reserved');
    if (publicAction_0 === 0) {
      __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                         partialProofData,
                                                                                         [
                                                                                          { dup: { n: 0 } },
                                                                                          { idx: { cached: false,
                                                                                                   pushPath: false,
                                                                                                   path: [
                                                                                                          { tag: 'value',
                                                                                                            value: { value: _descriptor_29.toValue(2n),
                                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                                          { push: { storage: false,
                                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(publicLabId_0),
                                                                                                                                                 alignment: _descriptor_1.alignment() }).encode() } },
                                                                                          'member',
                                                                                          { popeq: { cached: true,
                                                                                                     result: undefined } }]).value),
                              'Lab already exists');
      const tmp_0 = { operatorKey: operatorKey_0,
                      signingKey: signingKey_0,
                      metadataHash: metadataHash_0,
                      active: true,
                      revision: 1n };
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { idx: { cached: false,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_29.toValue(2n),
                                                                    alignment: _descriptor_29.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(publicLabId_0),
                                                                                                alignment: _descriptor_1.alignment() }).encode() } },
                                         { push: { storage: true,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_0),
                                                                                                alignment: _descriptor_10.alignment() }).encode() } },
                                         { ins: { cached: false, n: 1 } },
                                         { ins: { cached: true, n: 1 } }]);
      const tmp_1 = 1n;
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { idx: { cached: false,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_29.toValue(7n),
                                                                    alignment: _descriptor_29.alignment() } }] } },
                                         { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                                { value: _descriptor_1.toValue(tmp_1),
                                                                  alignment: _descriptor_1.alignment() }
                                                                  .value
                                                              )) } },
                                         { ins: { cached: true, n: 1 } }]);
    } else {
      __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                        partialProofData,
                                                                                        [
                                                                                         { dup: { n: 0 } },
                                                                                         { idx: { cached: false,
                                                                                                  pushPath: false,
                                                                                                  path: [
                                                                                                         { tag: 'value',
                                                                                                           value: { value: _descriptor_29.toValue(2n),
                                                                                                                    alignment: _descriptor_29.alignment() } }] } },
                                                                                         { push: { storage: false,
                                                                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(publicLabId_0),
                                                                                                                                                alignment: _descriptor_1.alignment() }).encode() } },
                                                                                         'member',
                                                                                         { popeq: { cached: true,
                                                                                                    result: undefined } }]).value),
                              'Lab not found');
      const existing_0 = _descriptor_10.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                    partialProofData,
                                                                                    [
                                                                                     { dup: { n: 0 } },
                                                                                     { idx: { cached: false,
                                                                                              pushPath: false,
                                                                                              path: [
                                                                                                     { tag: 'value',
                                                                                                       value: { value: _descriptor_29.toValue(2n),
                                                                                                                alignment: _descriptor_29.alignment() } }] } },
                                                                                     { idx: { cached: false,
                                                                                              pushPath: false,
                                                                                              path: [
                                                                                                     { tag: 'value',
                                                                                                       value: { value: _descriptor_1.toValue(publicLabId_0),
                                                                                                                alignment: _descriptor_1.alignment() } }] } },
                                                                                     { popeq: { cached: false,
                                                                                                result: undefined } }]).value);
      let t_0;
      __compactRuntime.assert((t_0 = existing_0.revision, t_0 < 65535n),
                              'Lab revision limit reached');
      if (publicAction_0 === 1) {
        const tmp_2 = { operatorKey: operatorKey_0,
                        signingKey: signingKey_0,
                        metadataHash: metadataHash_0,
                        active: existing_0.active,
                        revision:
                          ((t1) => {
                            if (t1 > 65535n) {
                              throw new __compactRuntime.CompactError('green-proof.compact line 198 char 21: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 65535');
                            }
                            return t1;
                          })(existing_0.revision + 1n) };
        __compactRuntime.queryLedgerState(context,
                                          partialProofData,
                                          [
                                           { idx: { cached: false,
                                                    pushPath: true,
                                                    path: [
                                                           { tag: 'value',
                                                             value: { value: _descriptor_29.toValue(2n),
                                                                      alignment: _descriptor_29.alignment() } }] } },
                                           { push: { storage: false,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(publicLabId_0),
                                                                                                  alignment: _descriptor_1.alignment() }).encode() } },
                                           { push: { storage: true,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_2),
                                                                                                  alignment: _descriptor_10.alignment() }).encode() } },
                                           { ins: { cached: false, n: 1 } },
                                           { ins: { cached: true, n: 1 } }]);
      } else {
        if (publicAction_0 === 3) {
          __compactRuntime.assert(existing_0.active, 'Lab already inactive');
        }
        const tmp_3 = { operatorKey: existing_0.operatorKey,
                        signingKey: existing_0.signingKey,
                        metadataHash: existing_0.metadataHash,
                        active: publicAction_0 === 3 ? false : active_0,
                        revision:
                          ((t1) => {
                            if (t1 > 65535n) {
                              throw new __compactRuntime.CompactError('green-proof.compact line 212 char 21: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 65535');
                            }
                            return t1;
                          })(existing_0.revision + 1n) };
        __compactRuntime.queryLedgerState(context,
                                          partialProofData,
                                          [
                                           { idx: { cached: false,
                                                    pushPath: true,
                                                    path: [
                                                           { tag: 'value',
                                                             value: { value: _descriptor_29.toValue(2n),
                                                                      alignment: _descriptor_29.alignment() } }] } },
                                           { push: { storage: false,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(publicLabId_0),
                                                                                                  alignment: _descriptor_1.alignment() }).encode() } },
                                           { push: { storage: true,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_3),
                                                                                                  alignment: _descriptor_10.alignment() }).encode() } },
                                           { ins: { cached: false, n: 1 } },
                                           { ins: { cached: true, n: 1 } }]);
      }
    }
    return [];
  }
  _manageBatch_0(context,
                 partialProofData,
                 action_0,
                 batchId_0,
                 productHash_0,
                 metadataHash_0,
                 requirementBps_0)
  {
    this._assertNotPaused_0(context, partialProofData);
    const publicAction_0 = action_0;
    const publicBatchId_0 = batchId_0;
    if (publicAction_0 === 0) {
      __compactRuntime.assert(requirementBps_0 > 0n
                              &&
                              requirementBps_0 <= 10000n,
                              'Requirement must be 1..10000 bps');
      __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                         partialProofData,
                                                                                         [
                                                                                          { dup: { n: 0 } },
                                                                                          { idx: { cached: false,
                                                                                                   pushPath: false,
                                                                                                   path: [
                                                                                                          { tag: 'value',
                                                                                                            value: { value: _descriptor_29.toValue(3n),
                                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                                          { push: { storage: false,
                                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                                          'member',
                                                                                          { popeq: { cached: true,
                                                                                                     result: undefined } }]).value),
                              'Batch ID already exists');
      const supplier_0 = this._deriveSupplierKey_0(this._callerSecret_0(context,
                                                                        partialProofData));
      const tmp_0 = { supplier: supplier_0,
                      productHash: productHash_0,
                      metadataHash: metadataHash_0,
                      requirementBps: requirementBps_0,
                      status: 0,
                      recordRevision: 1n,
                      verificationCount: 0n };
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { idx: { cached: false,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_29.toValue(3n),
                                                                    alignment: _descriptor_29.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { push: { storage: true,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_0),
                                                                                                alignment: _descriptor_3.alignment() }).encode() } },
                                         { ins: { cached: false, n: 1 } },
                                         { ins: { cached: true, n: 1 } }]);
      const tmp_1 = 1n;
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { idx: { cached: false,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_29.toValue(6n),
                                                                    alignment: _descriptor_29.alignment() } }] } },
                                         { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                                { value: _descriptor_1.toValue(tmp_1),
                                                                  alignment: _descriptor_1.alignment() }
                                                                  .value
                                                              )) } },
                                         { ins: { cached: true, n: 1 } }]);
    } else {
      __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                        partialProofData,
                                                                                        [
                                                                                         { dup: { n: 0 } },
                                                                                         { idx: { cached: false,
                                                                                                  pushPath: false,
                                                                                                  path: [
                                                                                                         { tag: 'value',
                                                                                                           value: { value: _descriptor_29.toValue(3n),
                                                                                                                    alignment: _descriptor_29.alignment() } }] } },
                                                                                         { push: { storage: false,
                                                                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                                                                         'member',
                                                                                         { popeq: { cached: true,
                                                                                                    result: undefined } }]).value),
                              'Batch not found');
      const existing_0 = _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_29.toValue(3n),
                                                                                                               alignment: _descriptor_29.alignment() } }] } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                               alignment: _descriptor_0.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value);
      this._assertSupplier_0(context, partialProofData, existing_0);
      let t_0;
      __compactRuntime.assert((t_0 = existing_0.recordRevision, t_0 < 65535n),
                              'Batch revision limit reached');
      if (publicAction_0 === 1) {
        __compactRuntime.assert(requirementBps_0 > 0n
                                &&
                                requirementBps_0 <= 10000n,
                                'Requirement must be 1..10000 bps');
        __compactRuntime.assert(existing_0.status === 0,
                                'Only pending batch may be updated');
        const tmp_2 = { supplier: existing_0.supplier,
                        productHash: productHash_0,
                        metadataHash: metadataHash_0,
                        requirementBps: requirementBps_0,
                        status: existing_0.status,
                        recordRevision:
                          ((t1) => {
                            if (t1 > 65535n) {
                              throw new __compactRuntime.CompactError('green-proof.compact line 266 char 27: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 65535');
                            }
                            return t1;
                          })(existing_0.recordRevision + 1n),
                        verificationCount: existing_0.verificationCount };
        __compactRuntime.queryLedgerState(context,
                                          partialProofData,
                                          [
                                           { idx: { cached: false,
                                                    pushPath: true,
                                                    path: [
                                                           { tag: 'value',
                                                             value: { value: _descriptor_29.toValue(3n),
                                                                      alignment: _descriptor_29.alignment() } }] } },
                                           { push: { storage: false,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                  alignment: _descriptor_0.alignment() }).encode() } },
                                           { push: { storage: true,
                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_2),
                                                                                                  alignment: _descriptor_3.alignment() }).encode() } },
                                           { ins: { cached: false, n: 1 } },
                                           { ins: { cached: true, n: 1 } }]);
      } else {
        if (publicAction_0 === 2) {
          __compactRuntime.assert(existing_0.status === 0,
                                  'Only pending batch may be deleted');
          __compactRuntime.assert(this._equal_4(existing_0.verificationCount, 0n),
                                  'Verified batch cannot be deleted');
          const tmp_3 = { supplier: existing_0.supplier,
                          productHash: existing_0.productHash,
                          metadataHash: existing_0.metadataHash,
                          requirementBps: existing_0.requirementBps,
                          status: 5,
                          recordRevision:
                            ((t1) => {
                              if (t1 > 65535n) {
                                throw new __compactRuntime.CompactError('green-proof.compact line 280 char 27: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 65535');
                              }
                              return t1;
                            })(existing_0.recordRevision + 1n),
                          verificationCount: 0n };
          __compactRuntime.queryLedgerState(context,
                                            partialProofData,
                                            [
                                             { idx: { cached: false,
                                                      pushPath: true,
                                                      path: [
                                                             { tag: 'value',
                                                               value: { value: _descriptor_29.toValue(3n),
                                                                        alignment: _descriptor_29.alignment() } }] } },
                                             { push: { storage: false,
                                                       value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                    alignment: _descriptor_0.alignment() }).encode() } },
                                             { push: { storage: true,
                                                       value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_3),
                                                                                                    alignment: _descriptor_3.alignment() }).encode() } },
                                             { ins: { cached: false, n: 1 } },
                                             { ins: { cached: true, n: 1 } }]);
        } else {
          if (publicAction_0 === 3) {
            __compactRuntime.assert(existing_0.status === 1
                                    ||
                                    existing_0.status === 2
                                    ||
                                    existing_0.status === 3,
                                    'Batch cannot request reverification');
            const tmp_4 = { supplier: existing_0.supplier,
                            productHash: existing_0.productHash,
                            metadataHash: existing_0.metadataHash,
                            requirementBps: existing_0.requirementBps,
                            status: 0,
                            recordRevision:
                              ((t1) => {
                                if (t1 > 65535n) {
                                  throw new __compactRuntime.CompactError('green-proof.compact line 297 char 29: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 65535');
                                }
                                return t1;
                              })(existing_0.recordRevision + 1n),
                            verificationCount: existing_0.verificationCount };
            __compactRuntime.queryLedgerState(context,
                                              partialProofData,
                                              [
                                               { idx: { cached: false,
                                                        pushPath: true,
                                                        path: [
                                                               { tag: 'value',
                                                                 value: { value: _descriptor_29.toValue(3n),
                                                                          alignment: _descriptor_29.alignment() } }] } },
                                               { push: { storage: false,
                                                         value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                      alignment: _descriptor_0.alignment() }).encode() } },
                                               { push: { storage: true,
                                                         value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_4),
                                                                                                      alignment: _descriptor_3.alignment() }).encode() } },
                                               { ins: { cached: false, n: 1 } },
                                               { ins: { cached: true, n: 1 } }]);
          } else {
            __compactRuntime.assert(existing_0.status !== 5,
                                    'Deleted batch cannot be archived');
            __compactRuntime.assert(existing_0.status !== 4,
                                    'Batch already archived');
            const tmp_5 = { supplier: existing_0.supplier,
                            productHash: existing_0.productHash,
                            metadataHash: existing_0.metadataHash,
                            requirementBps: existing_0.requirementBps,
                            status: 4,
                            recordRevision:
                              ((t1) => {
                                if (t1 > 65535n) {
                                  throw new __compactRuntime.CompactError('green-proof.compact line 309 char 29: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 65535');
                                }
                                return t1;
                              })(existing_0.recordRevision + 1n),
                            verificationCount: existing_0.verificationCount };
            __compactRuntime.queryLedgerState(context,
                                              partialProofData,
                                              [
                                               { idx: { cached: false,
                                                        pushPath: true,
                                                        path: [
                                                               { tag: 'value',
                                                                 value: { value: _descriptor_29.toValue(3n),
                                                                          alignment: _descriptor_29.alignment() } }] } },
                                               { push: { storage: false,
                                                         value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                      alignment: _descriptor_0.alignment() }).encode() } },
                                               { push: { storage: true,
                                                         value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_5),
                                                                                                      alignment: _descriptor_3.alignment() }).encode() } },
                                               { ins: { cached: false, n: 1 } },
                                               { ins: { cached: true, n: 1 } }]);
          }
        }
      }
    }
    return [];
  }
  _verifyBatch_0(context, partialProofData, batchId_0) {
    this._assertNotPaused_0(context, partialProofData);
    const publicBatchId_0 = batchId_0;
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_29.toValue(3n),
                                                                                                                  alignment: _descriptor_29.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Batch not found');
    const batch_0 = _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_29.toValue(3n),
                                                                                                          alignment: _descriptor_29.alignment() } }] } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                          alignment: _descriptor_0.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value);
    __compactRuntime.assert(batch_0.status === 0,
                            'Batch is not pending verification');
    let t_0;
    __compactRuntime.assert((t_0 = batch_0.verificationCount, t_0 < 65535n),
                            'Verification history limit reached');
    const evidence_0 = this._verificationEvidence_0(context, partialProofData);
    let t_1;
    __compactRuntime.assert((t_1 = evidence_0.actualBps, t_1 <= 10000n),
                            'Actual recycled content exceeds 10000 bps');
    const publicLabId_0 = evidence_0.labId;
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_29.toValue(2n),
                                                                                                                  alignment: _descriptor_29.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(publicLabId_0),
                                                                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Certificate lab is not registered');
    const lab_0 = _descriptor_10.fromValue(__compactRuntime.queryLedgerState(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 0 } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_29.toValue(2n),
                                                                                                         alignment: _descriptor_29.alignment() } }] } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_1.toValue(publicLabId_0),
                                                                                                         alignment: _descriptor_1.alignment() } }] } },
                                                                              { popeq: { cached: false,
                                                                                         result: undefined } }]).value);
    __compactRuntime.assert(lab_0.active, 'Certificate lab is inactive');
    let tmp_0;
    __compactRuntime.assert(!(tmp_0 = evidence_0.inspectedAt,
                              _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                        partialProofData,
                                                                                        [
                                                                                         { dup: { n: 2 } },
                                                                                         { idx: { cached: true,
                                                                                                  pushPath: false,
                                                                                                  path: [
                                                                                                         { tag: 'value',
                                                                                                           value: { value: _descriptor_29.toValue(2n),
                                                                                                                    alignment: _descriptor_29.alignment() } }] } },
                                                                                         { push: { storage: false,
                                                                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(tmp_0),
                                                                                                                                                alignment: _descriptor_5.alignment() }).encode() } },
                                                                                         'lt',
                                                                                         { popeq: { cached: true,
                                                                                                    result: undefined } }]).value)),
                            'Inspection time is in the future');
    let tmp_1;
    __compactRuntime.assert((tmp_1 = evidence_0.validUntil,
                             _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 2 } },
                                                                                        { idx: { cached: true,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_29.toValue(2n),
                                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(tmp_1),
                                                                                                                                               alignment: _descriptor_5.alignment() }).encode() } },
                                                                                        'lt',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value)),
                            'Certificate is expired');
    let t_2;
    __compactRuntime.assert((t_2 = evidence_0.validUntil,
                             t_2 > evidence_0.inspectedAt),
                            'Invalid certificate validity window');
    const evidenceCommitment_0 = this._persistentCommit_0({ contractAddress:
                                                              _descriptor_11.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                                                         partialProofData,
                                                                                                                         [
                                                                                                                          { dup: { n: 2 } },
                                                                                                                          { idx: { cached: true,
                                                                                                                                   pushPath: false,
                                                                                                                                   path: [
                                                                                                                                          { tag: 'value',
                                                                                                                                            value: { value: _descriptor_29.toValue(0n),
                                                                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                                                                          { popeq: { cached: true,
                                                                                                                                     result: undefined } }]).value),
                                                            batchId:
                                                              publicBatchId_0,
                                                            supplier:
                                                              batch_0.supplier,
                                                            productHash:
                                                              batch_0.productHash,
                                                            requirementBps:
                                                              batch_0.requirementBps,
                                                            actualBps:
                                                              evidence_0.actualBps,
                                                            labId:
                                                              evidence_0.labId,
                                                            inspectedAt:
                                                              evidence_0.inspectedAt,
                                                            validUntil:
                                                              evidence_0.validUntil },
                                                          evidence_0.commitmentNonce);
    const publicCommitment_0 = evidenceCommitment_0;
    __compactRuntime.assert(!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_29.toValue(5n),
                                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicCommitment_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'Certificate evidence already used');
    const signatureMessage_0 = [this._transientHash_0(new Uint8Array([103, 114, 101, 101, 110, 112, 114, 111, 111, 102, 58, 118, 101, 114, 105, 102, 105, 99, 97, 116, 105, 111, 110, 58, 118, 49])),
                                this._transientHash_1(publicCommitment_0),
                                publicLabId_0,
                                1n];
    this._schnorrVerify_0(context,
                          partialProofData,
                          signatureMessage_0,
                          evidence_0.signature,
                          lab_0.signingKey);
    let t_3;
    const privateStatus_0 = (t_3 = evidence_0.actualBps,
                             t_3 >= batch_0.requirementBps)
                            ?
                            1 :
                            2;
    const publicStatus_0 = privateStatus_0;
    const verificationNumber_0 = ((t1) => {
                                   if (t1 > 65535n) {
                                     throw new __compactRuntime.CompactError('green-proof.compact line 376 char 30: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 65535');
                                   }
                                   return t1;
                                 })(batch_0.verificationCount + 1n);
    if (!_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_29.toValue(4n),
                                                                                               alignment: _descriptor_29.alignment() } }] } },
                                                                    { push: { storage: false,
                                                                              value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                                           alignment: _descriptor_0.alignment() }).encode() } },
                                                                    'member',
                                                                    { popeq: { cached: true,
                                                                               result: undefined } }]).value))
    {
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { idx: { cached: false,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_29.toValue(4n),
                                                                    alignment: _descriptor_29.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { push: { storage: true,
                                                   value: __compactRuntime.StateValue.newMap(
                                                            new __compactRuntime.StateMap()
                                                          ).encode() } },
                                         { ins: { cached: false, n: 1 } },
                                         { ins: { cached: true, n: 1 } }]);
    }
    const tmp_2 = { status: publicStatus_0,
                    labId: publicLabId_0,
                    evidenceCommitment: publicCommitment_0,
                    inspectedAt: evidence_0.inspectedAt,
                    validUntil: evidence_0.validUntil,
                    revoked: false };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_29.toValue(4n),
                                                                  alignment: _descriptor_29.alignment() } },
                                                       { tag: 'value',
                                                         value: { value: _descriptor_0.toValue(publicBatchId_0),
                                                                  alignment: _descriptor_0.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(verificationNumber_0),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(tmp_2),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 2 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_29.toValue(5n),
                                                                  alignment: _descriptor_29.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicCommitment_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_3 = { supplier: batch_0.supplier,
                    productHash: batch_0.productHash,
                    metadataHash: batch_0.metadataHash,
                    requirementBps: batch_0.requirementBps,
                    status: publicStatus_0,
                    recordRevision: batch_0.recordRevision,
                    verificationCount: verificationNumber_0 };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_29.toValue(3n),
                                                                  alignment: _descriptor_29.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_3),
                                                                                              alignment: _descriptor_3.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_4 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_29.toValue(8n),
                                                                  alignment: _descriptor_29.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_1.toValue(tmp_4),
                                                                alignment: _descriptor_1.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _revokeLatestVerification_0(context, partialProofData, batchId_0, batch_0) {
    let t_0;
    __compactRuntime.assert((t_0 = batch_0.verificationCount, t_0 > 0n),
                            'Batch has no verification');
    __compactRuntime.assert(batch_0.status === 1 || batch_0.status === 2,
                            'Latest verification cannot be revoked');
    let tmp_0;
    const latest_0 = (tmp_0 = batch_0.verificationCount,
                      _descriptor_6.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 0 } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_29.toValue(4n),
                                                                                                            alignment: _descriptor_29.alignment() } },
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_0.toValue(batchId_0),
                                                                                                            alignment: _descriptor_0.alignment() } }] } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_1.toValue(tmp_0),
                                                                                                            alignment: _descriptor_1.alignment() } }] } },
                                                                                 { popeq: { cached: false,
                                                                                            result: undefined } }]).value));
    __compactRuntime.assert(!latest_0.revoked, 'Verification already revoked');
    const tmp_1 = batch_0.verificationCount;
    const tmp_2 = { status: latest_0.status,
                    labId: latest_0.labId,
                    evidenceCommitment: latest_0.evidenceCommitment,
                    inspectedAt: latest_0.inspectedAt,
                    validUntil: latest_0.validUntil,
                    revoked: true };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_29.toValue(4n),
                                                                  alignment: _descriptor_29.alignment() } },
                                                       { tag: 'value',
                                                         value: { value: _descriptor_0.toValue(batchId_0),
                                                                  alignment: _descriptor_0.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(tmp_2),
                                                                                              alignment: _descriptor_6.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 2 } }]);
    const tmp_3 = { supplier: batch_0.supplier,
                    productHash: batch_0.productHash,
                    metadataHash: batch_0.metadataHash,
                    requirementBps: batch_0.requirementBps,
                    status: 3,
                    recordRevision: batch_0.recordRevision,
                    verificationCount: batch_0.verificationCount };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_29.toValue(3n),
                                                                  alignment: _descriptor_29.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(batchId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(tmp_3),
                                                                                              alignment: _descriptor_3.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _revokeBatch_0(context, partialProofData, batchId_0, byAdmin_0) {
    this._assertNotPaused_0(context, partialProofData);
    const publicByAdmin_0 = byAdmin_0;
    const publicBatchId_0 = batchId_0;
    __compactRuntime.assert(_descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_29.toValue(3n),
                                                                                                                  alignment: _descriptor_29.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'Batch not found');
    const batch_0 = _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_29.toValue(3n),
                                                                                                          alignment: _descriptor_29.alignment() } }] } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                          alignment: _descriptor_0.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value);
    let t_0;
    __compactRuntime.assert((t_0 = batch_0.verificationCount, t_0 > 0n),
                            'Batch has no verification');
    let tmp_0;
    const latest_0 = (tmp_0 = batch_0.verificationCount,
                      _descriptor_6.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 0 } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_29.toValue(4n),
                                                                                                            alignment: _descriptor_29.alignment() } },
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_0.toValue(publicBatchId_0),
                                                                                                            alignment: _descriptor_0.alignment() } }] } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_1.toValue(tmp_0),
                                                                                                            alignment: _descriptor_1.alignment() } }] } },
                                                                                 { popeq: { cached: false,
                                                                                            result: undefined } }]).value));
    if (publicByAdmin_0) {
      this._assertAdmin_0(context, partialProofData);
    } else {
      this._assertLabOperator_0(context, partialProofData, latest_0.labId);
    }
    this._revokeLatestVerification_0(context,
                                     partialProofData,
                                     publicBatchId_0,
                                     batch_0);
    return [];
  }
  _certificateChallenge_0(ann_x_0, ann_y_0, pk_x_0, pk_y_0, msg_0) {
    return this._schnorrChallenge_0(ann_x_0, ann_y_0, pk_x_0, pk_y_0, msg_0);
  }
  _equal_0(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_3(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_4(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
}
export function ledger(stateOrChargedState) {
  const state = stateOrChargedState instanceof __compactRuntime.StateValue ? stateOrChargedState : stateOrChargedState.state;
  const chargedState = stateOrChargedState instanceof __compactRuntime.StateValue ? new __compactRuntime.ChargedState(stateOrChargedState) : stateOrChargedState;
  const context = {
    currentQueryContext: new __compactRuntime.QueryContext(chargedState, __compactRuntime.dummyContractAddress()),
    costModel: __compactRuntime.CostModel.initialCostModel()
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get admin() {
      return _descriptor_0.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_29.toValue(0n),
                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    },
    get paused() {
      return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_29.toValue(1n),
                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    },
    labs: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(2n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                                                                                 alignment: _descriptor_5.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(2n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0n && key_0 <= 65535n)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'green-proof.compact line 80 char 1',
                                     'Uint<0..65536>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(2n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(key_0),
                                                                                                                                 alignment: _descriptor_1.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0n && key_0 <= 65535n)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'green-proof.compact line 80 char 1',
                                     'Uint<0..65536>',
                                     key_0)
        }
        return _descriptor_10.fromValue(__compactRuntime.queryLedgerState(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_29.toValue(2n),
                                                                                                      alignment: _descriptor_29.alignment() } }] } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_1.toValue(key_0),
                                                                                                      alignment: _descriptor_1.alignment() } }] } },
                                                                           { popeq: { cached: false,
                                                                                      result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[2];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_1.fromValue(key.value),      _descriptor_10.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    batches: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(3n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                                                                                 alignment: _descriptor_5.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(3n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'green-proof.compact line 81 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(3n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'green-proof.compact line 81 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_3.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(3n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[3];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_3.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    verifications: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(4n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                                                                                 alignment: _descriptor_5.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(4n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'green-proof.compact line 82 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(4n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'green-proof.compact line 82 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        if (state.asArray()[4].asMap().get({ value: _descriptor_0.toValue(key_0),
                                             alignment: _descriptor_0.alignment() }) === undefined) {
          throw new __compactRuntime.CompactError(`Map value undefined for ${key_0}`);
        }
        return {
          isEmpty(...args_1) {
            if (args_1.length !== 0) {
              throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_1.length}`);
            }
            return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 0 } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_29.toValue(4n),
                                                                                                         alignment: _descriptor_29.alignment() } },
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_0.toValue(key_0),
                                                                                                         alignment: _descriptor_0.alignment() } }] } },
                                                                              'size',
                                                                              { push: { storage: false,
                                                                                        value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                                                                                     alignment: _descriptor_5.alignment() }).encode() } },
                                                                              'eq',
                                                                              { popeq: { cached: true,
                                                                                         result: undefined } }]).value);
          },
          size(...args_1) {
            if (args_1.length !== 0) {
              throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_1.length}`);
            }
            return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 0 } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_29.toValue(4n),
                                                                                                         alignment: _descriptor_29.alignment() } },
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_0.toValue(key_0),
                                                                                                         alignment: _descriptor_0.alignment() } }] } },
                                                                              'size',
                                                                              { popeq: { cached: true,
                                                                                         result: undefined } }]).value);
          },
          member(...args_1) {
            if (args_1.length !== 1) {
              throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_1.length}`);
            }
            const key_1 = args_1[0];
            if (!(typeof(key_1) === 'bigint' && key_1 >= 0n && key_1 <= 65535n)) {
              __compactRuntime.typeError('member',
                                         'argument 1',
                                         'green-proof.compact line 82 char 43',
                                         'Uint<0..65536>',
                                         key_1)
            }
            return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 0 } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_29.toValue(4n),
                                                                                                         alignment: _descriptor_29.alignment() } },
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_0.toValue(key_0),
                                                                                                         alignment: _descriptor_0.alignment() } }] } },
                                                                              { push: { storage: false,
                                                                                        value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(key_1),
                                                                                                                                     alignment: _descriptor_1.alignment() }).encode() } },
                                                                              'member',
                                                                              { popeq: { cached: true,
                                                                                         result: undefined } }]).value);
          },
          lookup(...args_1) {
            if (args_1.length !== 1) {
              throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_1.length}`);
            }
            const key_1 = args_1[0];
            if (!(typeof(key_1) === 'bigint' && key_1 >= 0n && key_1 <= 65535n)) {
              __compactRuntime.typeError('lookup',
                                         'argument 1',
                                         'green-proof.compact line 82 char 43',
                                         'Uint<0..65536>',
                                         key_1)
            }
            return _descriptor_6.fromValue(__compactRuntime.queryLedgerState(context,
                                                                             partialProofData,
                                                                             [
                                                                              { dup: { n: 0 } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_29.toValue(4n),
                                                                                                         alignment: _descriptor_29.alignment() } },
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_0.toValue(key_0),
                                                                                                         alignment: _descriptor_0.alignment() } }] } },
                                                                              { idx: { cached: false,
                                                                                       pushPath: false,
                                                                                       path: [
                                                                                              { tag: 'value',
                                                                                                value: { value: _descriptor_1.toValue(key_1),
                                                                                                         alignment: _descriptor_1.alignment() } }] } },
                                                                              { popeq: { cached: false,
                                                                                         result: undefined } }]).value);
          },
          [Symbol.iterator](...args_1) {
            if (args_1.length !== 0) {
              throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_1.length}`);
            }
            const self_0 = state.asArray()[4].asMap().get({ value: _descriptor_0.toValue(key_0),
                                                            alignment: _descriptor_0.alignment() });
            return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_1.fromValue(key.value),      _descriptor_6.fromValue(value.value)    ];  })[Symbol.iterator]();
          }
        }
      }
    },
    usedEvidence: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(5n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                                                                                 alignment: _descriptor_5.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(5n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'green-proof.compact line 83 char 1',
                                     'Bytes<32>',
                                     elem_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_29.toValue(5n),
                                                                                                     alignment: _descriptor_29.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[5];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    get totalBatches() {
      return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_29.toValue(6n),
                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                        { popeq: { cached: true,
                                                                                   result: undefined } }]).value);
    },
    get totalLabs() {
      return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_29.toValue(7n),
                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                        { popeq: { cached: true,
                                                                                   result: undefined } }]).value);
    },
    get totalVerifications() {
      return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_29.toValue(8n),
                                                                                                   alignment: _descriptor_29.alignment() } }] } },
                                                                        { popeq: { cached: true,
                                                                                   result: undefined } }]).value);
    }
  };
}
const _emptyContext = {
  currentQueryContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  getSchnorrReduction: (...args) => undefined,
  callerSecret: (...args) => undefined,
  verificationEvidence: (...args) => undefined
});
export const pureCircuits = {
  deriveAdminKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`deriveAdminKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const secret_0 = args_0[0];
    if (!(secret_0.buffer instanceof ArrayBuffer && secret_0.BYTES_PER_ELEMENT === 1 && secret_0.length === 32)) {
      __compactRuntime.typeError('deriveAdminKey',
                                 'argument 1',
                                 'green-proof.compact line 96 char 1',
                                 'Bytes<32>',
                                 secret_0)
    }
    return _dummyContract._deriveAdminKey_0(secret_0);
  },
  deriveSupplierKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`deriveSupplierKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const secret_0 = args_0[0];
    if (!(secret_0.buffer instanceof ArrayBuffer && secret_0.BYTES_PER_ELEMENT === 1 && secret_0.length === 32)) {
      __compactRuntime.typeError('deriveSupplierKey',
                                 'argument 1',
                                 'green-proof.compact line 103 char 1',
                                 'Bytes<32>',
                                 secret_0)
    }
    return _dummyContract._deriveSupplierKey_0(secret_0);
  },
  deriveLabOperatorKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`deriveLabOperatorKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const secret_0 = args_0[0];
    if (!(secret_0.buffer instanceof ArrayBuffer && secret_0.BYTES_PER_ELEMENT === 1 && secret_0.length === 32)) {
      __compactRuntime.typeError('deriveLabOperatorKey',
                                 'argument 1',
                                 'green-proof.compact line 110 char 1',
                                 'Bytes<32>',
                                 secret_0)
    }
    return _dummyContract._deriveLabOperatorKey_0(secret_0);
  },
  certificateChallenge: (...args_0) => {
    if (args_0.length !== 5) {
      throw new __compactRuntime.CompactError(`certificateChallenge: expected 5 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const ann_x_0 = args_0[0];
    const ann_y_0 = args_0[1];
    const pk_x_0 = args_0[2];
    const pk_y_0 = args_0[3];
    const msg_0 = args_0[4];
    if (!(typeof(ann_x_0) === 'bigint' && ann_x_0 >= 0 && ann_x_0 <= __compactRuntime.MAX_FIELD)) {
      __compactRuntime.typeError('certificateChallenge',
                                 'argument 1',
                                 'green-proof.compact line 462 char 1',
                                 'Field',
                                 ann_x_0)
    }
    if (!(typeof(ann_y_0) === 'bigint' && ann_y_0 >= 0 && ann_y_0 <= __compactRuntime.MAX_FIELD)) {
      __compactRuntime.typeError('certificateChallenge',
                                 'argument 2',
                                 'green-proof.compact line 462 char 1',
                                 'Field',
                                 ann_y_0)
    }
    if (!(typeof(pk_x_0) === 'bigint' && pk_x_0 >= 0 && pk_x_0 <= __compactRuntime.MAX_FIELD)) {
      __compactRuntime.typeError('certificateChallenge',
                                 'argument 3',
                                 'green-proof.compact line 462 char 1',
                                 'Field',
                                 pk_x_0)
    }
    if (!(typeof(pk_y_0) === 'bigint' && pk_y_0 >= 0 && pk_y_0 <= __compactRuntime.MAX_FIELD)) {
      __compactRuntime.typeError('certificateChallenge',
                                 'argument 4',
                                 'green-proof.compact line 462 char 1',
                                 'Field',
                                 pk_y_0)
    }
    if (!(Array.isArray(msg_0) && msg_0.length === 4 && msg_0.every((t) => typeof(t) === 'bigint' && t >= 0 && t <= __compactRuntime.MAX_FIELD))) {
      __compactRuntime.typeError('certificateChallenge',
                                 'argument 5',
                                 'green-proof.compact line 462 char 1',
                                 'Vector<4, Field>',
                                 msg_0)
    }
    return _dummyContract._certificateChallenge_0(ann_x_0,
                                                  ann_y_0,
                                                  pk_x_0,
                                                  pk_y_0,
                                                  msg_0);
  }
};
export const contractReferenceLocations =
  { tag: 'publicLedgerArray', indices: { } };
//# sourceMappingURL=index.js.map
