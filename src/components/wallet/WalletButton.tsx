"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useWallet } from "@/hooks/useWallet";
import { LogOut, ChevronDown } from "lucide-react";

export const WalletButton = ({ className }: { className?: string }) => {
  const { wallet, connectWallet, disconnectWallet, isConnecting } = useWallet();
  const [showDropdown, setShowDropdown] = useState(false);

  const shortenAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (!wallet.connected) {
    return (
      <Button 
        variant="primary" 
        onClick={connectWallet} 
        disabled={isConnecting}
        className={className}
      >
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </Button>
    );
  }

  return (
    <div className="relative inline-block text-left">
      <Button 
        variant="outline" 
        onClick={() => setShowDropdown(!showDropdown)}
        className={`flex items-center gap-2 bg-surface border-border shadow-sm ${className}`}
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="font-medium">{shortenAddress(wallet.address)}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
      </Button>

      {showDropdown && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowDropdown(false)} 
          />
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-surface border border-border shadow-lg z-50 overflow-hidden animate-in slide-in-from-top-2">
            <div className="p-3 border-b border-border bg-gray-50/50">
              <p className="text-xs text-foreground/60 mb-1">Connected Network</p>
              <p className="text-sm font-medium text-foreground">{wallet.network}</p>
            </div>
            <div className="p-2">
              <button
                onClick={() => {
                  disconnectWallet();
                  setShowDropdown(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
              >
                <LogOut size={16} />
                Disconnect
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
