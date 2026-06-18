import React from "react";
import { cn } from "@/lib/utils";

export type PathNode = {
  type: "token" | "pool";
  label: string;
  symbol?: string;
  color?: string;
};

export const RouteGraph = ({ nodes }: { nodes: PathNode[] }) => {
  return (
    <div className="flex items-center w-full my-6 py-4 px-2 relative">
      {/* Background Line */}
      <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-primary/20 -translate-y-1/2 z-0" />
      
      <div className="flex items-center justify-between w-full relative z-10">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            {node.type === "token" ? (
              <div className="bg-white px-2 py-1 rounded-md border border-border shadow-sm flex items-center gap-2">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: node.color || "var(--color-primary)" }}
                >
                  {node.symbol}
                </div>
                <span className="text-xs font-bold">{node.label}</span>
              </div>
            ) : (
              <div className="bg-primary px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-sm">
                {node.label}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
