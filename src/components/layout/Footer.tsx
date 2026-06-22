import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-border py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-2 block hover:opacity-90 transition-opacity w-fit -ml-10 -mt-4">
              <Logo size="xl" />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              © 2024 PawaProtocol. <br />
              Infrastructure. Secure Settlement Layer.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              <li><FooterLink href="/routes">Route Explorer</FooterLink></li>
              <li><FooterLink href="/pools">Pool Explorer</FooterLink></li>
              <li><FooterLink href="/dashboard">Dashboard</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-4">Developers</h4>
            <ul className="space-y-3">
              <li><FooterLink href="#">Documentation</FooterLink></li>
              <li><FooterLink href="#">GitHub</FooterLink></li>
              <li><FooterLink href="#">NPM Package</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-4">Protocol</h4>
            <ul className="space-y-3">
              <li><FooterLink href="#">Governance</FooterLink></li>
              <li><FooterLink href="#">Whitepaper</FooterLink></li>
              <li><FooterLink href="#">Audits</FooterLink></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
    {children}
  </Link>
);
