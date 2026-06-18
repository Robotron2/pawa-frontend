import { useState } from 'react';
import { Pool } from '@/types/pools';

export const usePools = () => {
  const [pools] = useState<Pool[]>([
    {
      id: "pool-1",
      assetA: "XLM",
      assetB: "USDC",
      assetASymbol: "X",
      assetBSymbol: "U",
      liquidity: "$45,200,000.00",
      volume: "$12,400,000.00",
      fee: "0.05%",
      status: "Optimal"
    },
    {
      id: "pool-2",
      assetA: "BTC",
      assetB: "USDC",
      assetASymbol: "B",
      assetBSymbol: "U",
      liquidity: "$128,500,000.00",
      volume: "$45,100,000.00",
      fee: "0.30%",
      status: "Optimal"
    },
    {
      id: "pool-3",
      assetA: "ETH",
      assetB: "USDC",
      assetASymbol: "E",
      assetBSymbol: "U",
      liquidity: "$89,200,000.00",
      volume: "$28,900,000.00",
      fee: "0.30%",
      status: "Optimal"
    },
    {
      id: "pool-4",
      assetA: "XLM",
      assetB: "yXLM",
      assetASymbol: "X",
      assetBSymbol: "Y",
      liquidity: "$15,400,000.00",
      volume: "$2,100,000.00",
      fee: "0.01%",
      status: "Optimal"
    }
  ]);
  
  return { pools, isLoading: false };
};
