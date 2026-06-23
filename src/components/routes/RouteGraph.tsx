import React from "react";

export type PathNode = {
  type: "token" | "pool";
  label: string;
  symbol?: string;
  color?: string;
};

export const RouteGraph = ({ nodes }: { nodes: PathNode[] }) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar pb-2 -mx-1 px-1 mt-4">
      <div className="flex items-center justify-between min-w-max md:min-w-0 w-full relative py-2 gap-4">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary/20 -translate-y-1/2 z-0" />
        
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            {node.type === "token" ? (
              <div className="bg-white px-2.5 py-1.5 rounded-lg border border-border shadow-sm flex items-center gap-2 relative z-10 shrink-0">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                  style={{ backgroundColor: node.color || "var(--color-primary)" }}
                >
                  {node.symbol}
                </div>
                <span className="text-xs font-bold tracking-tight">{node.label}</span>
              </div>
            ) : (
              <div className="bg-primary px-3 py-1.5 rounded-full text-[10px] font-bold text-white shadow-sm relative z-10 shrink-0 tracking-wider">
                {node.label}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
