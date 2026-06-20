"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ArrowRightLeft } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Liquidity is fragmented.
            </h2>
            <p className="text-lg text-foreground/70">
              Users often need multiple intermediate swaps to reach their desired asset. Manual route selection is complex, inefficient, and prone to poor execution.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          
          {/* Before: Manual Swaps */}
          <motion.div 
            className="bg-white rounded-2xl border border-border p-8 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <h3 className="text-sm font-bold text-foreground/50 uppercase tracking-wider">Before: Manual Routing</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-gray-50/50">
                <span className="font-medium">Asset A</span>
                <ArrowRightLeft className="text-foreground/40" size={16} />
                <span className="font-medium text-foreground/60">Pool 1</span>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="text-foreground/30 rotate-90 sm:rotate-0" size={20} />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-gray-50/50">
                <span className="font-medium text-foreground/60">Pool 1</span>
                <ArrowRightLeft className="text-foreground/40" size={16} />
                <span className="font-medium text-foreground/60">Pool 2</span>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="text-foreground/30 rotate-90 sm:rotate-0" size={20} />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-gray-50/50">
                <span className="font-medium text-foreground/60">Pool 2</span>
                <ArrowRightLeft className="text-foreground/40" size={16} />
                <span className="font-medium text-primary">Asset B</span>
              </div>
            </div>
          </motion.div>

          {/* After: Pawa Routing */}
          <motion.div 
            className="bg-white rounded-2xl border border-primary/20 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-8 relative z-10">
              <div className="w-2 h-2 rounded-full bg-success" />
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider">After: PawaProtocol</h3>
            </div>

            <div className="flex flex-col items-center justify-center h-full min-h-[280px] relative z-10">
              <h4 className="text-2xl font-heading font-bold text-center mb-8">
                Pawa finds the optimal path automatically.
              </h4>
              
              <div className="flex items-center gap-4 w-full max-w-sm">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-border flex items-center justify-center font-bold text-lg shadow-sm">
                  A
                </div>
                
                <div className="flex-1 relative h-px bg-border">
                  <motion.div 
                    className="absolute inset-0 bg-primary"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(74,141,255,0.4)] text-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2, type: "spring" }}
                  >
                    <Zap size={14} className="fill-current" />
                  </motion.div>
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center font-bold text-lg text-primary shadow-sm">
                  B
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
