import React from "react";
import { Card } from "@/components/ui/Card";
import { Pool } from "@/types/pools";
import { cn } from "@/lib/utils";

export const PoolCard = ({ pool }: { pool: Pool }) => {
  return (
    <Card className="p-6 border-border hover:border-primary/20 transition-colors">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          {/* Overlapping token icons */}
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-foreground/60 z-10">
              {pool.assetASymbol}
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-xs font-bold text-primary z-0">
              {pool.assetBSymbol}
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg leading-tight">
              {pool.assetA} <span className="text-foreground/40 mx-0.5">/</span> {pool.assetB}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded border border-border">
          <div className={cn(
            "w-1.5 h-1.5 rounded-full",
            pool.status === "Optimal" ? "bg-primary" : "bg-accent"
          )} />
          <span className="text-xs font-medium text-foreground/70">{pool.status}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-foreground/60 font-medium">Liquidity</span>
          <span className="font-semibold">{pool.liquidity}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-foreground/60 font-medium">Volume (24h)</span>
          <span className="font-semibold">{pool.volume}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-foreground/60 font-medium">Fee Tier</span>
          <span className="font-semibold">{pool.fee}</span>
        </div>
      </div>
    </Card>
  );
};
