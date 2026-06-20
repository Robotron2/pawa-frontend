"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { NetworkVisualization } from "./NetworkVisualization";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 border-b border-border">
      {/* Animated Editorial Grid Background */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0, backgroundPositionY: "20px" }}
        animate={{ opacity: 0.03, backgroundPositionY: "0px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
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
            
            
            <h1 className="text-5xl sm:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-[1.1] mb-6 overflow-hidden">
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Payments find
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                their path.
              </motion.span>
            </h1>
            
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed font-sans max-w-lg">
              Decentralized routing infrastructure that discovers optimal Stellar payment paths across liquidity pools.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button size="lg" className="w-full gap-2 hover:-translate-y-0.5 transition-transform">
                  Connect Wallet <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/routes" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full bg-white hover:-translate-y-0.5 transition-transform">
                  Explore Protocol
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 text-xs font-medium text-foreground/60">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(0,200,235,0.8)]" />
                Stellar Native
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-foreground/60">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Multi-hop Routing
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-foreground/60">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                Atomic Execution
              </div>
            </motion.div>
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
