export type Pool = {
  id: string;
  assetA: string;
  assetB: string;
  assetASymbol: string;
  assetBSymbol: string;
  liquidity: string;
  volume: string;
  fee: string;
  status: "Optimal" | "Warning" | "Offline";
};
