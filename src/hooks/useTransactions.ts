"use client";

import { useState, useEffect } from "react";
import { Transaction, TransactionSummary } from "@/types/transactions";

const mockTransactions: Transaction[] = [
  {
    id: "tx_8f9a2b3c4d5e",
    status: "completed",
    route: ["XLM", "USDC"],
    inputAsset: "XLM",
    outputAsset: "USDC",
    inputAmount: "100.00",
    outputAmount: "95.50",
    fees: "0.05",
    efficiency: 99.8,
    hops: 1,
    timestamp: "2026-06-20T14:30:00Z"
  },
  {
    id: "tx_1a2b3c4d5e6f",
    status: "pending",
    route: ["USDC", "ETH", "PAWA"],
    inputAsset: "USDC",
    outputAsset: "PAWA",
    inputAmount: "5000.00",
    outputAmount: "12400.00",
    fees: "2.50",
    efficiency: 96.4,
    hops: 2,
    timestamp: "2026-06-20T14:28:15Z"
  },
  {
    id: "tx_9f8e7d6c5b4a",
    status: "failed",
    route: ["PAWA", "XLM"],
    inputAsset: "PAWA",
    outputAsset: "XLM",
    inputAmount: "1000.00",
    outputAmount: "0.00",
    fees: "0.01",
    efficiency: 0,
    hops: 1,
    timestamp: "2026-06-20T14:15:00Z"
  },
  {
    id: "tx_5e6f7a8b9c0d",
    status: "completed",
    route: ["BTC", "USDC", "XLM"],
    inputAsset: "BTC",
    outputAsset: "XLM",
    inputAmount: "0.05",
    outputAmount: "3450.00",
    fees: "5.00",
    efficiency: 98.2,
    hops: 2,
    timestamp: "2026-06-19T09:45:22Z"
  },
  {
    id: "tx_112233445566",
    status: "completed",
    route: ["EURC", "USDC"],
    inputAsset: "EURC",
    outputAsset: "USDC",
    inputAmount: "1000.00",
    outputAmount: "1080.50",
    fees: "0.10",
    efficiency: 99.9,
    hops: 1,
    timestamp: "2026-06-19T08:12:05Z"
  }
];

const mockSummary: TransactionSummary = {
  totalTransactions: 128,
  successfulRoutes: 124,
  totalVolumeRouted: "24,500 XLM",
  averageEfficiency: 96.4
};

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [summary, setSummary] = useState<TransactionSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate network delay
    const timer = setTimeout(() => {
      setTransactions(mockTransactions);
      setSummary(mockSummary);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return { transactions, summary, isLoading };
};
