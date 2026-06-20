"use client";

import React from "react";
import { Transaction } from "@/types/transactions";
import { RouteGraph, PathNode } from "@/components/routes/RouteGraph";
import { TransactionStatusBadge } from "./TransactionStatusBadge";

interface TransactionDetailsProps {
  transaction: Transaction;
}

export const TransactionDetails = ({ transaction }: TransactionDetailsProps) => {
  // Convert route strings to PathNode array for RouteGraph
  const nodes: PathNode[] = transaction.route.map((asset, index) => {
    const isFirst = index === 0;
    const isLast = index === transaction.route.length - 1;
    
    return {
      type: "token",
      label: asset,
      symbol: asset.substring(0, 1),
      color: isFirst ? "var(--color-accent)" : isLast ? "var(--color-primary)" : "#888888"
    };
  });

  // Inject intermediate pool nodes between tokens for visual realism
  const visualNodes: PathNode[] = [];
  for (let i = 0; i < nodes.length; i++) {
    visualNodes.push(nodes[i]);
    if (i < nodes.length - 1) {
      visualNodes.push({
        type: "pool",
        label: `${nodes[i].label}/${nodes[i+1].label} Pool`
      });
    }
  }

  return (
    <div className="p-4 sm:p-6 bg-gray-50/40 border-t border-border/50 shadow-inner">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Left Col: Details */}
        <div className="lg:col-span-1 space-y-4">
          <div>
            <h4 className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-2">Execution Details</h4>
            <div className="bg-white rounded-xl border border-border p-4 space-y-3 shadow-sm">
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/60">Transaction ID</span>
                <span className="font-mono text-xs">{transaction.id}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/60">Timestamp</span>
                <span>{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(transaction.timestamp))}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/60">Status</span>
                <TransactionStatusBadge status={transaction.status} />
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl border border-border p-4 space-y-3 shadow-sm">
               <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/60">Network Fee</span>
                <span className="font-medium">{transaction.fees} XLM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground/60">Efficiency Score</span>
                <span className={transaction.efficiency > 98 ? "text-success font-bold" : "font-medium"}>
                  {transaction.efficiency}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Route Visualization */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] font-bold text-foreground/50 uppercase tracking-wider mb-2">Route Path Execution</h4>
          <div className="bg-white rounded-xl border border-border p-4 sm:p-6 shadow-sm h-full lg:h-[calc(100%-1.75rem)] flex flex-col justify-center">
            
            <div className="flex justify-between items-center mb-6">
               <div>
                  <p className="text-xs text-foreground/60 mb-1">Input Amount</p>
                  <p className="font-bold text-lg">{transaction.inputAmount} <span className="text-foreground/60 font-medium">{transaction.inputAsset}</span></p>
               </div>
               <div className="text-right">
                  <p className="text-xs text-foreground/60 mb-1">Final Output</p>
                  <p className="font-bold text-lg text-primary">{transaction.outputAmount} <span className="opacity-80 font-medium">{transaction.outputAsset}</span></p>
               </div>
            </div>
            
            <div className="pt-2 border-t border-border border-dashed">
              <RouteGraph nodes={visualNodes} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
