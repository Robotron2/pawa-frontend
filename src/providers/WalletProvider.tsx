"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { StellarWalletsKit, Networks } from '@creit.tech/stellar-wallets-kit';
import { FreighterModule, FREIGHTER_ID } from '@creit.tech/stellar-wallets-kit/modules/freighter';
import { toast } from 'sonner';

export interface WalletContextState {
  address: string | null;
  isConnected: boolean;
  isConnecting: boolean;
  error: string | null;
  network: string;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextState | undefined>(undefined);

// Keep track of initialization to avoid doing it multiple times
let initialized = false;

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(true); // start as true to prevent flash while restoring
  const [error, setError] = useState<string | null>(null);
  const [network, setNetwork] = useState<string>('Testnet');

  // Initialize the kit and restore session
  useEffect(() => {
    const initAndRestore = async () => {
      if (typeof window !== 'undefined' && !initialized) {
        StellarWalletsKit.init({
          network: Networks.TESTNET,
          selectedWalletId: FREIGHTER_ID,
          modules: [new FreighterModule()],
        });
        initialized = true;

        // Restore session if exists
        const savedWallet = localStorage.getItem('pawa_connected_wallet');
        if (savedWallet) {
          try {
            StellarWalletsKit.setWallet(savedWallet);
            // fetchAddress asks the module directly without UI if already authorized
            const { address } = await StellarWalletsKit.fetchAddress();
            setAddress(address);
            setIsConnected(true);
          } catch (err) {
            console.error("Failed to restore wallet session:", err);
            localStorage.removeItem('pawa_connected_wallet');
          }
        }
      }
      setIsConnecting(false); // Done checking
    };
    
    initAndRestore();
  }, []);

  const connectWallet = useCallback(async () => {
    if (!initialized) return;
    
    setIsConnecting(true);
    setError(null);
    
    try {
      const { address } = await StellarWalletsKit.authModal();
      setAddress(address);
      setIsConnected(true);
      setError(null);
      localStorage.setItem('pawa_connected_wallet', FREIGHTER_ID);
      toast.success("Wallet connected successfully");
    } catch (err: any) {
      if (err.code === -1 || err.message === 'The user closed the modal.') {
        toast.info("Wallet connection cancelled");
      } else {
        console.error("Failed to connect wallet:", err);
        setError(err.message || "Failed to initialize wallet connection");
        toast.error(err.message || "Failed to connect wallet");
      }
      setIsConnected(false);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    StellarWalletsKit.disconnect().catch(console.error);
    setAddress(null);
    setIsConnected(false);
    setError(null);
    localStorage.removeItem('pawa_connected_wallet');
  }, []);

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnected,
        isConnecting,
        error,
        network,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletContext must be used within a WalletProvider');
  }
  return context;
};
