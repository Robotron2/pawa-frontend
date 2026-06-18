import React from "react";
import { SwapWidget } from "@/components/dashboard/SwapWidget";
import { RouteSummary } from "@/components/dashboard/RouteSummary";

export default function DashboardPage() {
  return (
    <main className="p-12 relative min-h-screen">
      {/* Subtle grid background for dashboard */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-3">Liquidity Routing</h1>
          <p className="text-foreground/60">Configure parameters to discover the optimal settlement path across networked pools.</p>
        </div>

        <SwapWidget />
        <RouteSummary />
      </div>
    </main>
  );
}
