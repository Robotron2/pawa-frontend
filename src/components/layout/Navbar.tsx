import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export const Navbar = () => {
  return (
    <header className="w-full border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-heading font-bold text-xl text-primary flex items-center gap-2">
              StellarRoute
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
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

          <div className="flex items-center gap-4">
            <Button variant="primary">Connect Wallet</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
