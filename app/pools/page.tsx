import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { PoolCard } from "@/components/pools/PoolCard";
import { usePools } from "@/hooks/usePools";
import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";

export default function PoolsPage() {
  const { pools } = usePools();

  return (
    <main className="p-12 relative min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Pool Explorer</h1>
            <p className="text-foreground/60 max-w-xl">
              Monitor real-time liquidity channels, volume metrics, and operational status across the protocol infrastructure.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-64">
              <Input 
                placeholder="Search pool addresses..." 
                icon={<Search size={16} />} 
                className="bg-white"
              />
            </div>
            <Button variant="outline" className="bg-white gap-2">
              <SlidersHorizontal size={16} /> Filter
            </Button>
          </div>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 border-border">
            <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-wider mb-2">Total Network Liquidity</p>
            <p className="text-2xl font-bold font-heading">$1,452,890,200.00</p>
          </Card>
          <Card className="p-6 border-border">
            <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-wider mb-2">24H Volume</p>
            <p className="text-2xl font-bold font-heading">$345,120,500.00</p>
          </Card>
          <Card className="p-6 border-border">
            <p className="text-[10px] text-foreground/50 uppercase font-bold tracking-wider mb-2">Active Pools</p>
            <div className="flex items-center gap-3">
              <p className="text-2xl font-bold font-heading">1,024</p>
              <div className="flex items-center text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                <ArrowUpRight size={12} className="mr-1" /> 12 today
              </div>
            </div>
          </Card>
        </div>

        {/* Pool Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>
      </div>
    </main>
  );
}
