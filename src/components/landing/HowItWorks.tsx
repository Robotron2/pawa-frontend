"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Real-time scanning of the Stellar network to find all available liquidity paths for your required asset pair.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: SlidersHorizontal,
    title: "Optimize",
    description: "Compare available routes by evaluating total output, network fees, and overall path efficiency.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Execute",
    description: "Perform seamless atomic multi-hop swaps via Soroban smart contracts. It succeeds completely or reverts safely.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: CheckCircle2,
    title: "Confirm",
    description: "Track your transaction completion instantly with verifiable on-chain execution receipts.",
    color: "text-success",
    bg: "bg-success/10",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              How Pawa works
            </h2>
            <p className="text-lg text-foreground/70">
              A transparent, reliable process to ensure your payments always find their optimal path.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="relative bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow group z-10"
                variants={itemVariants}
              >
                {/* Connection Line (hidden on last item, and adjusting for mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-border border-t border-dashed -z-10" />
                )}
                
                <div className={`w-12 h-12 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-foreground/30 text-sm">{index + 1}.</span> {step.title}
                </h3>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
