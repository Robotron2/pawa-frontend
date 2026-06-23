"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";
import { WalletButton } from "@/components/wallet/WalletButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="w-full border-b border-border bg-surface/90 backdrop-blur-md sticky top-0 z-40">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="hover:opacity-90 transition-opacity -ml-6">
                <Logo size="lg" />
              </Link>
              
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/dashboard" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Dashboard
                </Link>
                <Link href="/routes" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Routes
                </Link>
                <Link href="/pools" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Pools
                </Link>
                <Link href="/developers" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Developers
                </Link>
                <Link href="/docs" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  Documentation
                </Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <WalletButton />
            </div>

            {/* Mobile Menu Toggle (Hamburger) */}
            <button 
              className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50 md:hidden" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="fixed inset-y-0 right-0 h-[100dvh] w-[280px] bg-surface shadow-2xl border-l border-border z-50 md:hidden flex flex-col"
          >
            <div className="flex flex-col flex-1 overflow-y-auto p-6">
              <div className="flex items-center justify-between -mb-8 -mt-6 shrink-0">
                <div className="-ml-6">
                  <Logo size="lg" />
                </div>
                <button 
                  className="p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={20} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-2 shrink-0">
                <Link 
                  href="/dashboard" 
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  href="/routes" 
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Routes
                </Link>
                <Link 
                  href="/pools" 
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pools
                </Link>
                <Link 
                  href="/developers" 
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Developers
                </Link>
                <Link 
                  href="/docs" 
                  className="px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-50 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Documentation
                </Link>
              </nav>
              
              <div className="mt-auto pt-6 border-t border-border shrink-0">
                <div onClick={() => setIsOpen(false)}>
                  <WalletButton className="w-full shadow-md" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
