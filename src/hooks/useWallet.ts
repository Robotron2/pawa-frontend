"use client";

import { useWalletContext } from '@/providers/WalletProvider';

export const useWallet = () => {
  const context = useWalletContext();
  
  return {
    wallet: {
      connected: context.isConnected,
      address: context.address || '',
      network: context.network,
    },
    ...context
  };
};
