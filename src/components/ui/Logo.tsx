import React from "react";
import { cn } from "@/lib/utils";

export const Logo = ({ className, showText = true, inverted = false }: { className?: string, showText?: boolean, inverted?: boolean }) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden",
        inverted ? "bg-white text-primary" : "bg-primary text-white"
      )}>
        {/* Creative PAWA SVG - A bold 'P' integrating a routing node */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 relative z-10">
          <path d="M7 21V3h7.5a4.5 4.5 0 0 1 0 9H7" />
          <circle cx="14.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
        
        {/* Subtle background flair to represent the 'accent' glow */}
        <div className={cn(
          "absolute -bottom-2 -right-2 w-5 h-5 rounded-full blur-[3px]",
          inverted ? "bg-primary/20" : "bg-accent/80"
        )} />
      </div>
      {showText && (
        <span className={cn(
          "font-heading font-extrabold text-xl tracking-tight",
          inverted ? "text-white" : "text-foreground"
        )}>
          Pawa<span className={inverted ? "text-white/80" : "text-primary"}>Protocol</span>
        </span>
      )}
    </div>
  );
};
