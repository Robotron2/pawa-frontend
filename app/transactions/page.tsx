"use client";

import React from "react";
import { useTransactions } from "@/hooks/useTransactions";
import { TransactionSummaryCard } from "@/components/transactions/TransactionSummaryCard";
import { TransactionTable } from "@/components/transactions/TransactionTable";
import { Activity, CheckCircle2, RefreshCcw, Zap } from "lucide-react";

export default function TransactionsPage() {
  const { transactions, summary, isLoading } = useTransactions();

  return (
    <main className="p-4 sm:p-8 lg:p-12 relative min-h-screen max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Transactions</h1>
        <p className="text-foreground/60 max-w-2xl">
          Track your Stellar payment routes and execution history.
        </p>
      </div>

      {isLoading ? (
        <div className="animate-pulse space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-28 bg-surface border border-border rounded-xl" />
            ))}
          </div>
          <div className="h-96 bg-surface border border-border rounded-xl" />
        </div>
      ) : (
        <>
          {summary && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <TransactionSummaryCard
                title="Total Transactions"
                value={summary.totalTransactions}
                icon={<Activity size={18} />}
              />
              <TransactionSummaryCard
                title="Successful Routes"
                value={summary.successfulRoutes}
                icon={<CheckCircle2 size={18} />}
                trend={{ value: 2.4, isPositive: true }}
              />
              <TransactionSummaryCard
                title="Volume Routed"
                value={summary.totalVolumeRouted}
                icon={<RefreshCcw size={18} />}
              />
              <TransactionSummaryCard
                title="Average Efficiency"
                value={`${summary.averageEfficiency}%`}
                icon={<Zap size={18} />}
                trend={{ value: 0.2, isPositive: true }}
              />
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-lg font-heading font-bold mb-4 text-foreground">Activity History</h2>
            <TransactionTable transactions={transactions} />
          </div>
        </>
      )}
    </main>
  );
}
