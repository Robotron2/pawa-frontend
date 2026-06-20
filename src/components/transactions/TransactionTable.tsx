"use client";

import React, { useState } from "react";
import { Transaction } from "@/types/transactions";
import { TransactionStatusBadge } from "./TransactionStatusBadge";
import { TransactionDetails } from "./TransactionDetails";
import { Card } from "@/components/ui/Card";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable = ({ transactions }: TransactionTableProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleRow = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  if (transactions.length === 0) {
    return (
      <Card className="p-8 text-center text-foreground/60">
        No transactions found.
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border border-border">
      {/* Mobile View */}
      <div className="md:hidden divide-y divide-border">
        {transactions.map((tx) => (
          <div key={`mobile-${tx.id}`} className="flex flex-col">
            <div 
              onClick={() => toggleRow(tx.id)}
              className={cn(
                "p-4 flex flex-col gap-3 cursor-pointer transition-colors hover:bg-gray-50/50",
                expandedId === tx.id ? "bg-gray-50/30" : ""
              )}
            >
              <div className="flex justify-between items-start">
                <TransactionStatusBadge status={tx.status} />
                <div className="flex items-center gap-2 text-foreground/60">
                  <span className="text-xs font-mono">{tx.id.substring(0, 8)}...</span>
                  <ChevronDown size={16} className={cn("transition-transform", expandedId === tx.id ? "rotate-180" : "")} />
                </div>
              </div>
              
              <div className="flex items-center justify-between bg-white border border-border rounded-lg p-3 shadow-sm">
                <div>
                  <p className="text-xs text-foreground/50 mb-0.5">Input</p>
                  <p className="text-sm font-bold">{tx.inputAmount} <span className="text-foreground/60 font-medium">{tx.inputAsset}</span></p>
                </div>
                <div className="text-foreground/30">→</div>
                <div className="text-right">
                  <p className="text-xs text-foreground/50 mb-0.5">Output</p>
                  <p className="text-sm font-bold text-primary">{tx.outputAmount} <span className="opacity-80 font-medium">{tx.outputAsset}</span></p>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-foreground/60 mt-1">
                <span>{new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(tx.timestamp))}</span>
                <span>{tx.route[0]} → {tx.route[tx.route.length - 1]} ({tx.hops} {tx.hops === 1 ? 'hop' : 'hops'})</span>
              </div>
            </div>
            
            {expandedId === tx.id && (
              <div className="animate-in slide-in-from-top-2 fade-in duration-200">
                <TransactionDetails transaction={tx} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="border-b border-border bg-gray-50/50 text-xs text-foreground/60 uppercase tracking-wider">
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Route</th>
              <th className="px-6 py-4 font-medium">Input</th>
              <th className="px-6 py-4 font-medium">Output</th>
              <th className="px-6 py-4 font-medium">Hops</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium text-right">Transaction ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transactions.map((tx) => (
              <React.Fragment key={tx.id}>
                <tr 
                  onClick={() => toggleRow(tx.id)}
                  className={cn(
                    "hover:bg-gray-50/50 transition-colors group cursor-pointer",
                    expandedId === tx.id ? "bg-gray-50/50" : ""
                  )}
                >
                  <td className="px-6 py-4">
                    <TransactionStatusBadge status={tx.status} />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {tx.route[0]} <span className="text-foreground/40 mx-1">→</span> {tx.route[tx.route.length - 1]}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {tx.inputAmount} <span className="text-foreground/60">{tx.inputAsset}</span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {tx.outputAmount} <span className="text-foreground/60">{tx.outputAsset}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground/60">
                    {tx.hops} {tx.hops === 1 ? 'hop' : 'hops'}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground/60">
                    {new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(tx.timestamp))}
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground/60 font-mono text-right">
                    <div className="flex items-center justify-end gap-3">
                      {tx.id.substring(0, 8)}...
                      <ChevronDown size={16} className={cn("transition-transform text-foreground/40", expandedId === tx.id ? "rotate-180" : "")} />
                    </div>
                  </td>
                </tr>
                {expandedId === tx.id && (
                  <tr>
                    <td colSpan={7} className="p-0">
                      <div className="animate-in slide-in-from-top-2 fade-in duration-200">
                        <TransactionDetails transaction={tx} />
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
