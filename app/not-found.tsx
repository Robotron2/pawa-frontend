"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home, ArrowRight, Unplug } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
          <svg width="100%" height="100%" className="absolute inset-0">
            <pattern id="grid-404" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-404)" />
          </svg>
          
          {/* Faded Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
          {/* Broken Node Icon */}
          <div className="w-24 h-24 rounded-3xl bg-white border border-border shadow-sm flex items-center justify-center mb-8 relative">
            <Unplug size={40} className="text-foreground/40" />
            
            {/* Status Dot */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
            
            {/* Disconnected Path Lines */}
            <div className="absolute top-1/2 -left-12 w-12 h-[2px] bg-border border-dashed border-2 border-transparent border-t-border" />
            <div className="absolute top-1/2 -right-12 w-12 h-[2px] bg-border border-dashed border-2 border-transparent border-t-border" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter text-foreground mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
            Dead End Reached
          </h2>
          <p className="text-foreground/60 mb-10 max-w-md mx-auto text-lg leading-relaxed">
            We couldn&apos;t discover an optimal route to this destination. The node you are looking for is offline, moved, or never existed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full gap-2 h-14 px-8 text-base shadow-md hover:shadow-lg transition-all">
                <Home size={18} /> Return to Origin
              </Button>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full gap-2 h-14 px-8 text-base bg-white border-border hover:bg-gray-50 transition-all">
                Network Node <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
