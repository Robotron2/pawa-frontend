"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Route, Database, ArrowLeftRight, Wallet, Home, Menu, X } from "lucide-react";
import { useWallet } from "@/hooks/useWallet";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const { wallet } = useWallet();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-surface border-b border-border flex items-center justify-between px-4 z-40">
        <Link href="/">
          <Logo size="md" />
        </Link>
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 text-foreground/80 hover:text-primary transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-in fade-in" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "w-64 h-screen border-r border-border bg-surface flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-6 relative">
          {/* Mobile Close Button */}
          <button 
            className="lg:hidden absolute top-6 right-6 p-1 text-foreground/60 hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>

          <Link href="/" className="flex items-center gap-3 mb-10 hover:opacity-80 transition-opacity w-fit">
            <Logo size="sm" />
            <div>
              <h2 className="font-heading font-bold text-sm leading-tight text-foreground">Network Node</h2>
              <p className="text-xs text-foreground/50">{wallet.network}</p>
            </div>
          </Link>

          <nav className="flex flex-col gap-2">
            <NavItem href="/" icon={<Home size={18} />} label="Home" onClick={() => setIsOpen(false)} />
            <div className="h-px bg-border my-2" />
            <NavItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" onClick={() => setIsOpen(false)} />
            <NavItem href="/routes" icon={<Route size={18} />} label="Routes" onClick={() => setIsOpen(false)} />
            <NavItem href="/pools" icon={<Database size={18} />} label="Pools" onClick={() => setIsOpen(false)} />
            <NavItem href="/transactions" icon={<ArrowLeftRight size={18} />} label="Transactions" onClick={() => setIsOpen(false)} />
            <NavItem href="/wallet" icon={<Wallet size={18} />} label="Wallet" onClick={() => setIsOpen(false)} />
          </nav>
        </div>

        <div className="mt-auto p-6">
          <div className="rounded-xl border border-border p-4 bg-gray-50 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-foreground/60 mb-1">Node Status</p>
              <p className="text-sm font-semibold text-primary">Synced: Block 849201</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(0,200,235,0.8)]" />
          </div>
        </div>
      </aside>
    </>
  );
};

const NavItem = ({ href, icon, label, onClick }: { href: string; icon: React.ReactNode; label: string; onClick?: () => void }) => {
  const pathname = usePathname();
  const active = href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <Link 
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
        active 
          ? "bg-primary text-white shadow-md shadow-primary/20 translate-x-1" 
          : "text-foreground/70 hover:bg-gray-100 hover:text-foreground"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};
