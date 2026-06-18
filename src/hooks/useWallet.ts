import { useState } from 'react';
import { WalletState } from '@/types/wallet';

export const useWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({
    connected: true,
    address: 'GBL3...K89S',
    network: 'Mainnet-v1.2',
  });
  
  return { wallet };
};
