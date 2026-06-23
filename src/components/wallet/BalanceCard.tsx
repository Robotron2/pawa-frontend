"use client";

import React from 'react';
import { useWalletBalance } from '@/hooks/useWalletBalance';
import { useWallet } from '@/hooks/useWallet';

export const BalanceCard = () => {
  const { wallet } = useWallet();
  const { balances, loading, error, refetch } = useWalletBalance();

  if (!wallet.connected) {
    return null;
  }

  return (
    <div className="mb-10 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-heading font-semibold text-foreground">Wallet Balances</h2>
        <button 
          onClick={refetch}
          disabled={loading}
          className="text-sm text-foreground/60 hover:text-foreground transition-colors disabled:opacity-50"
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      {error ? (
        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
          <p>{error}</p>
        </div>
      ) : balances.length === 0 && !loading ? (
        <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center text-foreground/60">
          <p>No balances found. Account might be unfunded.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {balances.map((balance, i) => (
            <div 
              key={`${balance.assetCode}-${i}`}
              className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md flex flex-col group cursor-default min-h-[120px]"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-foreground/60">{balance.assetName}</span>
              </div>
              <span className="text-2xl font-semibold tracking-tight mb-2">{balance.amount}</span>
              
              <div className="mt-auto">
                {balance.type === 'native' ? (
                  <span className="text-xs text-foreground/40">Native Stellar Asset</span>
                ) : (
                  <span className="text-xs text-foreground/40 font-mono flex flex-col">
                    <span className="mb-0.5">Issuer:</span>
                    <span title={balance.issuer} className="truncate">
                      {balance.issuer ? `${balance.issuer.substring(0, 4)}...${balance.issuer.substring(balance.issuer.length - 4)}` : 'Unknown'}
                    </span>
                  </span>
                )}
              </div>
            </div>
          ))}
          {balances.length === 1 && balances[0].type === 'native' && (
            <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-center min-h-[120px]">
              <span className="text-sm text-foreground/60">No issued assets found</span>
            </div>
          )}
          {loading && balances.length === 0 && (
             <div className="p-5 rounded-xl border border-white/10 bg-white/5 animate-pulse flex flex-col min-h-[120px]">
              <div className="h-4 w-12 bg-white/10 rounded mb-2"></div>
              <div className="h-8 w-24 bg-white/10 rounded"></div>
             </div>
          )}
        </div>
      )}
    </div>
  );
};
