"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TransactionStatus } from "@/types/transactions";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface TransactionStatusBadgeProps {
  status: TransactionStatus;
  className?: string;
}

export const TransactionStatusBadge = ({ status, className }: TransactionStatusBadgeProps) => {
  const config = {
    completed: {
      label: "Completed",
      icon: CheckCircle2,
      styles: "bg-success/10 text-success border-success/20",
    },
    pending: {
      label: "Pending",
      icon: Clock,
      styles: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    },
    failed: {
      label: "Failed",
      icon: AlertCircle,
      styles: "bg-red-500/10 text-red-600 border-red-500/20",
    },
  };

  const { label, icon: Icon, styles } = config[status];

  return (
    <div className={cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium", styles, className)}>
      <Icon size={14} />
      {label}
    </div>
  );
};
