"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div 
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-16 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight">
            Ready to optimize your Stellar payments?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the ecosystem of builders and users leveraging PawaProtocol for the most efficient, transparent, and atomic routing infrastructure on Soroban.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-gray-50 hover:-translate-y-0.5 transition-transform gap-2 font-bold shadow-lg">
                Connect Wallet <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/docs" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:-translate-y-0.5 transition-transform gap-2">
                <BookOpen size={18} /> Read Documentation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
