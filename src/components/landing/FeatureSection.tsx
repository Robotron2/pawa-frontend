"use client";

import React from "react";
import { motion } from "framer-motion";
import { Network, Waves, Code2 } from "lucide-react";

export const FeatureSection = () => {
  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Infrastructure that scales with you
            </h2>
            <p className="text-lg text-foreground/70">
              Built natively on Stellar and Soroban, Pawa provides the robust capabilities needed for the next generation of decentralized finance.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          
          {/* Feature 1: Intelligent Routing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Network size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                Intelligent Routing
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Our core pathfinding algorithm automatically discovers and computes the most efficient routes across fragmented liquidity pools. It evaluates hundreds of potential multi-hop permutations in milliseconds to guarantee you the maximum output for your input.
              </p>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2 bg-white border border-border rounded-2xl p-8 shadow-sm h-72 flex items-center justify-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
               {/* Abstract Routing Visual */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,141,255,0.05)_0%,transparent_70%)]" />
               <div className="relative w-full max-w-sm aspect-video flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 bg-white shadow-sm flex items-center justify-center font-bold relative z-10">
                    A
                  </div>
                  
                  {/* Paths */}
                  <div className="flex-1 relative h-32 -mx-1 flex flex-col justify-between py-2 z-0">
                    <div className="w-full h-px border-t border-dashed border-border absolute top-1/2 left-0 -translate-y-1/2" />
                    
                    {/* Background Static Paths */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 128" preserveAspectRatio="none">
                      <path d="M 0,64 Q 50,-44 100,64" fill="none" stroke="rgba(74,141,255,0.15)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      <path d="M 0,64 Q 50,172 100,64" fill="none" stroke="rgba(74,141,255,0.15)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    </svg>

                    {/* Animated Path 1: Top (Accent) */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 128" preserveAspectRatio="none">
                      <motion.path 
                        d="M 0,64 Q 50,-44 100,64" 
                        fill="none" 
                        stroke="var(--color-accent)" 
                        strokeWidth="2" 
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                      />
                    </svg>

                    {/* Animated Path 2: Middle (Success) */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 128" preserveAspectRatio="none">
                      <motion.path 
                        d="M 0,64 L 100,64" 
                        fill="none" 
                        stroke="var(--color-success)" 
                        strokeWidth="2.5" 
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      />
                    </svg>

                    {/* Animated Path 3: Bottom (Primary) */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 128" preserveAspectRatio="none">
                      <motion.path 
                        d="M 0,64 Q 50,172 100,64" 
                        fill="none" 
                        stroke="var(--color-primary)" 
                        strokeWidth="2" 
                        vectorEffect="non-scaling-stroke"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                      />
                    </svg>
                    
                    {/* Nodes */}
                    <motion.div 
                      className="absolute top-[10px] -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-accent shadow-sm z-10 flex items-center justify-center"
                      animate={{ boxShadow: ["0 0 0px rgba(45,212,191,0)", "0 0 15px rgba(45,212,191,0.6)", "0 0 0px rgba(45,212,191,0)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </motion.div>

                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-success shadow-sm z-10 flex items-center justify-center"
                      animate={{ boxShadow: ["0 0 0px rgba(74,222,128,0)", "0 0 15px rgba(74,222,128,0.6)", "0 0 0px rgba(74,222,128,0)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-success" />
                    </motion.div>

                    <motion.div 
                      className="absolute top-[118px] -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-primary shadow-sm z-10 flex items-center justify-center"
                      animate={{ boxShadow: ["0 0 0px rgba(74,141,255,0)", "0 0 15px rgba(74,141,255,0.6)", "0 0 0px rgba(74,141,255,0)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </motion.div>
                  </div>

                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary/5 shadow-[0_0_15px_rgba(74,141,255,0.2)] flex items-center justify-center font-bold text-primary relative z-10">
                    B
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Feature 2: Liquidity Awareness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="order-1 lg:order-1 bg-white border border-border rounded-2xl p-8 shadow-sm h-72 flex items-end justify-around relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
               {/* Abstract Pools Visual */}
               <div className="w-16 h-[80%] bg-gray-100 rounded-t-lg relative flex flex-col justify-end group">
                 <motion.div 
                   className="w-full bg-accent/40 rounded-t-lg"
                   initial={{ height: "0%" }}
                   whileInView={{ height: "40%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.2 }}
                 />
               </div>
               <div className="w-16 h-[80%] bg-gray-100 rounded-t-lg relative flex flex-col justify-end">
                 <motion.div 
                   className="w-full bg-primary/60 rounded-t-lg shadow-[0_-5px_15px_rgba(74,141,255,0.2)]"
                   initial={{ height: "0%" }}
                   whileInView={{ height: "85%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.4 }}
                 />
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-md opacity-0 animate-[fadeIn_0.3s_1.4s_forwards]">
                    Optimal
                 </div>
               </div>
               <div className="w-16 h-[80%] bg-gray-100 rounded-t-lg relative flex flex-col justify-end">
                 <motion.div 
                   className="w-full bg-accent/40 rounded-t-lg"
                   initial={{ height: "0%" }}
                   whileInView={{ height: "60%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: 0.6 }}
                 />
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-2"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Waves size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                Liquidity Awareness
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Pawa constantly monitors on-chain AMMs, order books, and liquidity pools. By analyzing depth and spread in real-time, it guarantees high-volume swaps execute against the deepest available markets, significantly reducing slippage.
              </p>
            </motion.div>
          </div>

          {/* Feature 3: Developer Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-6 shadow-md">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                Developer Infrastructure
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Abstract away routing complexity from your dApp. With direct smart contract integration on Soroban and easy-to-use SDKs, integrating optimized global payments takes lines of code, not months of engineering.
              </p>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2 bg-[#0B1220] rounded-2xl p-6 shadow-xl h-72 flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-success/80" />
                <span className="text-white/40 text-xs font-mono ml-2">pawa_router.rs</span>
              </div>
              <div className="font-mono text-sm leading-relaxed text-blue-300/80">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <span className="text-purple-400">let</span> route = <span className="text-yellow-200">PawaRouter::get_best_path</span>(
                </motion.div>
                <motion.div
                  className="pl-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  asset_in, <br />
                  asset_out, <br />
                  amount_in,
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  );
                </motion.div>
                <br />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <span className="text-purple-400">let</span> receipt = <span className="text-yellow-200">PawaRouter::execute</span>(route);
                </motion.div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
