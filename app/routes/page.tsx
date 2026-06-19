import React from "react";
import { Button } from "@/components/ui/Button";
import { RouteExplorerCard } from "@/components/routes/RouteExplorerCard";
import { SlidersHorizontal, ArrowDownUp } from "lucide-react";

export default function RoutesPage() {
  return (
    <main className="p-4 sm:p-8 lg:p-12 relative min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Route Explorer</h1>
          <p className="text-foreground/60 max-w-2xl">
            Visualizing optimal asset paths across PawaProtocol pools. Showing 12 available routes for USDC <span className="mx-1">→</span> PAWA.
          </p>
        </div>

        {/* Top Controls Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div className="bg-white border border-border rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 shadow-sm w-full lg:w-auto">
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold shrink-0">$</div>
              <span className="font-semibold text-lg">10,000 USDC</span>
              <ArrowDownUp size={16} className="text-gray-400 rotate-90 shrink-0 mx-1" />
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">P</div>
              <span className="font-semibold text-lg">PAWA</span>
            </div>
            
            <div className="hidden sm:block h-8 w-px bg-border" />
            
            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start border-t border-border sm:border-0 pt-4 sm:pt-0 mt-2 sm:mt-0">
              <div>
                <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-wider mb-0.5">Max Slippage</p>
                <p className="text-sm font-semibold">0.5%</p>
              </div>
              <div>
                <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-wider mb-0.5">Est. Gas Total</p>
                <p className="text-sm font-semibold">~$4.20</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-2 w-full lg:w-auto">
            <div className="bg-white border border-border rounded-lg flex shadow-sm w-full lg:w-auto">
              <button className="flex-1 lg:flex-none justify-center px-4 py-2.5 text-sm font-medium border-r border-border hover:bg-gray-50 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                Best Output
              </button>
              <button className="flex-1 lg:flex-none justify-center px-4 py-2.5 text-sm font-medium hover:bg-gray-50 flex items-center gap-2 text-foreground/60">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Lowest Gas
              </button>
            </div>
            <Button variant="outline" className="w-11 h-11 p-0 bg-white shadow-sm shrink-0">
              <SlidersHorizontal size={16} />
            </Button>
          </div>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RouteExplorerCard 
            title="Direct AMM Flow"
            subtitle="Single hop via concentrated liquidity pool"
            expectedOutput="24,502.81 PAWA"
            isBest={true}
            poolsUsed={1}
            routeFee="0.05%"
            efficiencyScore={99.8}
            nodes={[
              { type: "token", label: "USDC", symbol: "$", color: "var(--color-accent)" },
              { type: "pool", label: "PAWA/USDC 0.05%" },
              { type: "token", label: "PAWA", symbol: "P", color: "var(--color-primary)" }
            ]}
          />
          
          <RouteExplorerCard 
            title="Multi-Hop Router"
            subtitle="Via ETH intermediate"
            expectedOutput="24,491.10 PAWA"
            poolsUsed={2}
            routeFee="0.60%"
            efficiencyScore={96.4}
            nodes={[
              { type: "token", label: "USDC", symbol: "$", color: "var(--color-accent)" },
              { type: "pool", label: "USDC/ETH 0.3%" },
              { type: "pool", label: "ETH/PAWA 0.3%" },
              { type: "token", label: "PAWA", symbol: "P", color: "var(--color-primary)" }
            ]}
          />
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="bg-white">
            Load More Routes
          </Button>
        </div>
      </div>
    </main>
  );
}
