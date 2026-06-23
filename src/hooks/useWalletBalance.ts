"use client";

import { useState, useEffect, useCallback } from 'react';
import { useWallet } from '@/hooks/useWallet';
import { fetchAccountBalances } from '@/stellar/horizon';

export type WalletAssetBalance = {
  assetName: string;
  assetCode: string;
  issuer?: string;
  amount: string;
  type: "native" | "issued";
};

export const useWalletBalance = () => {
  const { wallet } = useWallet();
  const [balances, setBalances] = useState<WalletAssetBalance[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBalances = useCallback(async () => {
    if (!wallet.connected || !wallet.address) {
      setBalances([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const rawBalances = await fetchAccountBalances(wallet.address, wallet.network);
      
      const formattedBalances: WalletAssetBalance[] = rawBalances.map((b) => {
        const isNative = b.asset_type === 'native';
        const amountNum = parseFloat(b.balance);
        
        // Format to string with 2-7 decimal places without trailing zeros if possible, 
        // but toLocaleString does standard formatting.
        const amountStr = amountNum.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 7
        });
        
        return {
          assetName: isNative ? 'XLM' : (b.asset_code || 'UNKNOWN'),
          assetCode: isNative ? 'XLM' : (b.asset_code || 'UNKNOWN'),
          issuer: b.asset_issuer,
          amount: amountStr,
          type: isNative ? 'native' : 'issued'
        };
      });

      // Put XLM first
      formattedBalances.sort((a, b) => {
        if (a.type === 'native') return -1;
        if (b.type === 'native') return 1;
        return 0;
      });

      setBalances(formattedBalances);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load balances';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [wallet.connected, wallet.address, wallet.network]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBalances();
  }, [fetchBalances]);

  return {
    balances,
    loading,
    error,
    refetch: fetchBalances
  };
};
