import React from "react";
import { Card } from "@/components/ui/Card";
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
      
      <div className="p-4 sm:p-5 border-b border-border">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-3 sm:gap-0 mt-4 sm:mt-0">
          <div className="pr-0 sm:pr-4">
            <h3 className="font-heading font-bold text-lg text-foreground">{title}</h3>
            <p className="text-xs text-foreground/60 mt-0.5">{subtitle}</p>
          </div>
          <div className="text-left sm:text-right w-full sm:w-auto bg-gray-50/50 sm:bg-transparent p-3 sm:p-0 rounded-lg sm:rounded-none">
            <span className="text-xs text-foreground/60 block mb-1">Expected Output</span>
            <span className={cn("font-bold text-xl sm:text-lg leading-none block", isBest ? "text-primary" : "text-foreground")}>
              {expectedOutput}
            </span>
          </div>
        </div>
        
        <RouteGraph nodes={nodes} />
      </div>

      <div className="p-4 bg-gray-50/50 flex flex-wrap sm:flex-nowrap justify-between items-center text-sm gap-y-4">
        <div className="w-1/2 sm:w-auto">
          <p className="text-xs text-foreground/60 mb-1">Pools Used</p>
          <p className="font-semibold">{poolsUsed}</p>
        </div>
        <div className="w-1/2 sm:w-auto text-right sm:text-left">
          <p className="text-xs text-foreground/60 mb-1">Route Fee</p>
          <p className="font-semibold">{routeFee}</p>
        </div>
        <div className="w-full sm:w-auto text-left sm:text-right border-t border-border sm:border-0 pt-3 sm:pt-0 mt-1 sm:mt-0">
          <p className="text-xs text-foreground/60 mb-1">Efficiency Score</p>
          <p className={cn("font-semibold flex items-center justify-start sm:justify-end gap-1.5", efficiencyScore > 98 ? "text-success" : "text-foreground")}>
            {efficiencyScore}%
            {efficiencyScore > 98 && <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />}
          </p>
        </div>
      </div>
    </Card>
  );
};
