"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface TransactionSummaryCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const TransactionSummaryCard = ({
  title,
  value,
  icon,
  trend,
  className
}: TransactionSummaryCardProps) => {
  return (
    <Card className={cn("p-6 flex flex-col justify-between h-full", className)}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-foreground/60">{title}</h3>
        {icon && (
          <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-foreground/50 shrink-0">
            {icon}
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between">
        <p className="text-2xl font-heading font-bold text-foreground">
          {value}
        </p>
        
        {trend && (
          <div className={cn(
            "flex items-center text-xs font-bold gap-1",
            trend.isPositive ? "text-success" : "text-red-500"
          )}>
            {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
          </div>
        )}
      </div>
    </Card>
  );
};
