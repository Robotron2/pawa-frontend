"use client";

import React from "react";
import { Transaction } from "@/types/transactions";
import { TransactionStatusBadge } from "./TransactionStatusBadge";
import { Card } from "@/components/ui/Card";

interface TransactionTableProps {
  transactions: Transaction[];
}

export const TransactionTable = ({ transactions }: TransactionTableProps) => {
  if (transactions.length === 0) {
    return (
      <Card className="p-8 text-center text-foreground/60">
        No transactions found.
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border border-border">
      <div className="overflow-x-auto">
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
              <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
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
                  {tx.id.substring(0, 8)}...
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
