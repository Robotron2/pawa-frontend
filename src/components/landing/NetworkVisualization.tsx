import React from "react";
import { Badge } from "@/components/ui/Badge";

export const NetworkVisualization = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto bg-surface border border-border rounded-xl shadow-sm overflow-hidden p-8">
      {/* SVG Animation Canvas */}
      <div className="relative aspect-[4/3] w-full bg-white flex items-center justify-center">
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
            <style>
              {`
                @keyframes dash {
                  0% { stroke-dashoffset: 1000; opacity: 0; }
                  20% { opacity: 1; }
                  80% { stroke-dashoffset: 0; opacity: 1; }
                  100% { stroke-dashoffset: 0; opacity: 0; }
                }
                @keyframes pulseNode {
                  0% { transform: scale(1); opacity: 0.5; }
                  50% { transform: scale(1.2); opacity: 1; }
                  100% { transform: scale(1); opacity: 0.5; }
                }
                .anim-path {
                  stroke-dasharray: 1000;
                  stroke-dashoffset: 1000;
                  animation: dash 4s ease-in-out infinite;
                }
                .node-pulse {
                  transform-origin: center;
                  animation: pulseNode 2s infinite;
                }
              `}
            </style>
          </defs>

          {/* Background Grid Lines (Subtle) */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="2 2" />
          </pattern>
          <rect width="400" height="300" fill="url(#grid)" />

          {/* Inactive Edges */}
          <g stroke="var(--color-border)" strokeWidth="1" opacity="0.6">
            <line x1="80" y1="150" x2="160" y2="80" />
            <line x1="80" y1="150" x2="160" y2="220" />
            <line x1="160" y1="80" x2="240" y2="80" />
            <line x1="160" y1="220" x2="240" y2="220" />
            <line x1="160" y1="80" x2="200" y2="150" />
            <line x1="160" y1="220" x2="200" y2="150" />
            <line x1="240" y1="80" x2="320" y2="150" />
            <line x1="240" y1="220" x2="320" y2="150" />
            <line x1="200" y1="150" x2="320" y2="150" />
          </g>

          {/* Animated Active Route */}
          <path
            d="M 80 150 L 160 220 L 200 150 L 320 150"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="3"
            className="anim-path"
          />

          {/* Nodes */}
          <g fill="var(--color-surface)" strokeWidth="2">
            {/* Start Node */}
            <circle cx="80" cy="150" r="6" stroke="var(--color-primary)" />
            {/* Middle Nodes */}
            <circle cx="160" cy="80" r="4" stroke="var(--color-border)" />
            <circle cx="160" cy="220" r="5" stroke="var(--color-primary)" className="node-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="200" cy="150" r="5" stroke="var(--color-accent)" className="node-pulse" style={{ animationDelay: '2s' }} />
            <circle cx="240" cy="80" r="4" stroke="var(--color-border)" />
            <circle cx="240" cy="220" r="4" stroke="var(--color-border)" />
            {/* End Node */}
            <circle cx="320" cy="150" r="8" stroke="var(--color-accent)" />
          </g>
        </svg>
      </div>

      {/* Bottom Badge */}
      <div className="absolute bottom-4 left-4">
        <Badge variant="secondary" className="font-mono text-[10px] tracking-wider uppercase bg-gray-100 text-gray-500 border border-border">
          {">"} SRC: XLM | DST: USDC
        </Badge>
      </div>
    </div>
  );
};
