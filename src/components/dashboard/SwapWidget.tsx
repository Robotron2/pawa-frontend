import React from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ArrowUpDown, Search } from "lucide-react";

export const SwapWidget = () => {
  return (
    <Card className="p-6 max-w-xl mx-auto border-border">
      <div className="space-y-4 relative">
        {/* From Asset */}
        <div className="bg-gray-50 border border-border rounded-xl p-4">
          <p className="text-xs text-foreground/60 font-medium mb-3">From Asset</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-2 flex-shrink-0 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">X</div>
              <span className="text-sm font-semibold">XLM</span>
              <span className="text-gray-400 text-xs ml-1">▼</span>
            </div>
            <input 
              type="text" 
              className="bg-transparent border-none text-right flex-1 text-2xl font-semibold focus:outline-none focus:ring-0 w-full"
              defaultValue="1000.00"
            />
          </div>
          <div className="flex justify-between items-center mt-3 text-xs">
            <span className="text-foreground/60">Balance: 4,520.00 XLM</span>
            <button className="text-primary font-medium hover:underline">Max</button>
          </div>
        </div>

        {/* Swap Icon */}
        <div className="absolute left-1/2 top-[105px] -translate-x-1/2 -translate-y-1/2 z-10">
          <button className="w-8 h-8 bg-white border border-border rounded-full flex items-center justify-center shadow-sm text-foreground/60 hover:text-primary transition-colors">
            <ArrowUpDown size={14} />
          </button>
        </div>

        {/* To Asset */}
        <div className="bg-gray-50 border border-border rounded-xl p-4">
          <p className="text-xs text-foreground/60 font-medium mb-3">To Asset</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-2 flex-shrink-0 cursor-pointer">
              <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold">$</div>
              <span className="text-sm font-semibold">USDC</span>
              <span className="text-gray-400 text-xs ml-1">▼</span>
            </div>
            <input 
              type="text" 
              className="bg-transparent border-none text-right flex-1 text-2xl font-semibold focus:outline-none focus:ring-0 w-full"
              defaultValue="95.50"
              readOnly
            />
          </div>
        </div>

        <Button className="w-full h-12 text-base mt-2" variant="primary">
          <Search size={18} className="mr-2" /> Find Best Route
        </Button>
      </div>
    </Card>
  );
};
