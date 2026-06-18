import React from "react";
import Link from "next/link";
import { LayoutDashboard, Route, Database, ArrowLeftRight, Wallet } from "lucide-react";
import { useWallet } from "@/hooks/useWallet";

export const Sidebar = () => {
  const { wallet } = useWallet();

  return (
    <aside className="w-64 h-screen border-r border-border bg-surface flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
          </div>
          <div>
            <h2 className="font-heading font-bold text-sm leading-tight text-foreground">Network Node</h2>
            <p className="text-xs text-foreground/50">{wallet.network}</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <NavItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" active />
          <NavItem href="/routes" icon={<Route size={18} />} label="Routes" />
          <NavItem href="/pools" icon={<Database size={18} />} label="Pools" />
          <NavItem href="/transactions" icon={<ArrowLeftRight size={18} />} label="Transactions" />
          <NavItem href="/wallet" icon={<Wallet size={18} />} label="Wallet" />
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
  );
};

const NavItem = ({ href, icon, label, active }: { href: string; icon: React.ReactNode; label: string; active?: boolean }) => (
  <Link 
    href={href}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
      active 
        ? "bg-primary text-white" 
        : "text-foreground/70 hover:bg-gray-100 hover:text-foreground"
    }`}
  >
    {icon}
    {label}
  </Link>
);
