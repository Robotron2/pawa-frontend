import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { NetworkVisualization } from "./NetworkVisualization";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 border-b border-border">
      {/* Editorial Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Copy */}
          <div className="max-w-xl">
            <Badge variant="outline" className="mb-6 rounded-md bg-white border-primary/20 text-primary">
              <span className="mr-2">⚡</span> PAWAPROTOCOL V2.0 LIVE
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-[1.1] mb-6">
              Payments find <br /> their path.
            </h1>
            
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed font-sans max-w-lg">
              Decentralized routing infrastructure that discovers optimal Stellar payment paths across liquidity pools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Build with Pawa <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white">
                Explore Paths
              </Button>
            </div>
          </div>

          {/* Right Column: Visualization */}
          <div className="flex justify-center lg:justify-end">
            <NetworkVisualization />
          </div>
        </div>
      </Container>
    </section>
  );
};
