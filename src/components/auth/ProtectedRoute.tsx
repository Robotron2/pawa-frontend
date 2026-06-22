"use client";

import React, { useEffect, useState } from "react";
import { useWallet } from "@/hooks/useWallet";
import { Button } from "@/components/ui/Button";
import { Wallet, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { wallet, connectWallet, isConnecting } = useWallet();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loading spinner
  }

  if (!wallet.connected) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-surface border border-border rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert size={32} className="text-primary" />
          </div>
          
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
            Wallet Connection Required
          </h2>
          
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Please connect your Stellar wallet to access this area. This ensures your identity and secures your session.
          </p>
          
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full flex items-center justify-center gap-2"
            onClick={connectWallet}
            disabled={isConnecting}
          >
            <Wallet size={20} />
            {isConnecting ? "Connecting to Wallet..." : "Connect Wallet"}
          </Button>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
};
