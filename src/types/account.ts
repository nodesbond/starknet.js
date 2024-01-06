import { BigNumberish, BlockIdentifier } from './lib';
import { DeclareTransactionReceiptResponse, EstimateFeeResponse } from './provider';

export interface EstimateFee extends EstimateFeeResponse {
  suggestedMaxFee: bigint;
}

export type EstimateFeeBulk = EstimateFee[];

export interface AccountInvocationsFactoryDetails {
  versions: bigint[];
  nonce?: BigNumberish;
  blockIdentifier?: BlockIdentifier;
}

export interface EstimateFeeDetails {
  nonce?: BigNumberish;
  blockIdentifier?: BlockIdentifier;
  skipValidate?: boolean;
}

export interface DeployContractResponse {
  contract_address: string;
  transaction_hash: string;
}

export interface MultiDeployContractResponse {
  contract_address: string[];
  transaction_hash: string;
}

export interface DeployContractUDCResponse {
  contract_address: string;
  transaction_hash: string;
  address: string;
  deployer: string;
  unique: string;
  classHash: string;
  calldata_len: string;
  calldata: string[];
  salt: string;
}

export interface DeclareDeployUDCResponse {
  declare: Partial<DeclareTransactionReceiptResponse> & {
    class_hash: BigNumberish;
  };
  deploy: DeployContractUDCResponse;
}

export interface SimulateTransactionDetails {
  nonce?: BigNumberish;
  blockIdentifier?: BlockIdentifier;
  skipValidate?: boolean;
  skipExecute?: boolean;
}

export const SIMULATION_FLAG = {
  SKIP_VALIDATE: 'SKIP_VALIDATE',
  SKIP_EXECUTE: 'SKIP_EXECUTE',
} as const;
