import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { RouteGraph, PathNode } from "./RouteGraph";
import { Star } from "lucide-react";

interface RouteExplorerCardProps {
  title: string;
  subtitle: string;
  expectedOutput: string;
  nodes: PathNode[];
  poolsUsed: number;
  routeFee: string;
  efficiencyScore: number;
  isBest?: boolean;
}

export const RouteExplorerCard = ({
  title,
  subtitle,
  expectedOutput,
  nodes,
  poolsUsed,
  routeFee,
  efficiencyScore,
  isBest,
}: RouteExplorerCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all",
      isBest ? "border-primary/50 shadow-md shadow-primary/5" : "border-border"
    )}>
      {isBest && (
        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 flex items-center gap-1 rounded-bl-lg">
          <Star size={10} fill="currentColor" /> Best Route
        </div>
      )}
      
      <div className="p-5 border-b border-border">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-heading font-bold text-lg text-foreground">{title}</h3>
          <div className="text-right">
            <span className="text-xs text-foreground/60 block">Expected Output</span>
            <span className={cn("font-bold text-lg", isBest ? "text-primary" : "text-foreground")}>
              {expectedOutput}
            </span>
          </div>
        </div>
        <p className="text-xs text-foreground/60">{subtitle}</p>
        
        <RouteGraph nodes={nodes} />
      </div>

      <div className="p-4 bg-gray-50/50 flex justify-between items-center text-sm">
        <div>
          <p className="text-xs text-foreground/60 mb-1">Pools Used</p>
          <p className="font-semibold">{poolsUsed}</p>
        </div>
        <div>
          <p className="text-xs text-foreground/60 mb-1">Route Fee</p>
          <p className="font-semibold">{routeFee}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-foreground/60 mb-1">Efficiency Score</p>
          <p className={cn("font-semibold flex items-center justify-end gap-1", efficiencyScore > 98 ? "text-success" : "text-foreground")}>
            {efficiencyScore}%
            {efficiencyScore > 98 && <span className="w-1.5 h-1.5 rounded-full bg-success inline-block ml-1" />}
          </p>
        </div>
      </div>
    </Card>
  );
};
