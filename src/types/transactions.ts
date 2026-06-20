export type TransactionStatus = "completed" | "pending" | "failed";

export interface Transaction {
  id: string;
  status: TransactionStatus;
  route: string[];
  inputAsset: string;
  outputAsset: string;
  inputAmount: string;
  outputAmount: string;
  fees: string;
  efficiency: number;
  hops: number;
  timestamp: string;
}

export interface TransactionSummary {
  totalTransactions: number;
  successfulRoutes: number;
  totalVolumeRouted: string;
  averageEfficiency: number;
}
