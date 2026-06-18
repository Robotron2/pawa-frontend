"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useRoutes } from "@/hooks/useRoutes";

export const RouteSummary = () => {
  const { bestRoute } = useRoutes();

  return (
    <Card className="max-w-xl mx-auto mt-6 border-primary/20">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2 text-accent font-semibold">
          <CheckCircle2 size={18} className="text-accent" />
          <span>Optimal Path Discovered</span>
        </div>
        <div className="bg-gray-100 text-gray-500 text-xs font-mono px-2 py-1 rounded">
          ~450ms
        </div>
      </div>

      <div className="p-6">
        {/* Visualization Graph */}
        <div className="relative mb-8 bg-gray-50/50 rounded-lg p-6 border border-border border-dashed">
          <div className="flex items-center justify-between relative z-10">
            {/* XLM */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center relative z-10">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-xs font-bold mt-2">{bestRoute.path[0]}</span>
            </div>

            {/* Aqua Pool */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <span className="text-[10px] text-foreground/60 mt-2 absolute -bottom-4 whitespace-nowrap">{bestRoute.path[1]}</span>
            </div>

            {/* USDC */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-success flex items-center justify-center relative z-10">
                <div className="w-2 h-2 rounded-full bg-success" />
              </div>
              <span className="text-xs font-bold mt-2">{bestRoute.path[2]}</span>
            </div>
          </div>
          
          {/* Connecting line */}
          <div className="absolute top-[35px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary via-accent to-success z-0" />
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-sm text-foreground/60">Expected Output</span>
            <span className="text-sm font-semibold">{bestRoute.expectedOutput} USDC</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-sm text-foreground/60">Efficiency Score</span>
            <span className="text-sm font-semibold text-primary">{bestRoute.efficiencyScore}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-sm text-foreground/60">Network Fee</span>
            <span className="text-sm font-semibold">{bestRoute.totalFees} XLM</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-100 pb-2">
            <span className="text-sm text-foreground/60">Path Hops</span>
            <span className="text-sm font-semibold">{bestRoute.hops} Nodes</span>
          </div>
        </div>

        <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-primary/20 hover:border-primary text-primary hover:bg-primary/5">
          Execute Settlement <ArrowRight size={16} />
        </Button>
      </div>
    </Card>
  );
};
