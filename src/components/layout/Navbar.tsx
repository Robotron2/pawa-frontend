"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
              <Link href="/" className="hover:opacity-90 transition-opacity">
                <Logo />
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
              <Button variant="primary">Connect Wallet</Button>
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
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 md:hidden animate-in fade-in" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-screen w-[280px] bg-surface shadow-2xl border-l border-border z-50 md:hidden flex flex-col p-6 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8 mt-1">
          <Logo />
          <button 
            className="p-2 -mr-2 text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="flex flex-col gap-2">
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
        
        <div className="mt-auto pt-6 border-t border-border">
          <Button variant="primary" className="w-full shadow-md" onClick={() => setIsOpen(false)}>
            Connect Wallet
          </Button>
        </div>
      </div>
    </>
  );
};
