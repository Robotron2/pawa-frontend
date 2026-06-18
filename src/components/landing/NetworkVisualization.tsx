"use client";

import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const routes = [
  {
    id: 1,
    path: "M 80 150 L 160 220 L 200 150 L 320 150",
    activeNodes: [2, 3], // Indices of nodes array below
    label: "> SRC: XLM | DST: USDC"
  },
  {
    id: 2,
    path: "M 80 150 L 160 80 L 240 80 L 320 150",
    activeNodes: [1, 4],
    label: "> SRC: USDC | DST: PAWA"
  },
  {
    id: 3,
    path: "M 80 150 L 200 150 L 320 150",
    activeNodes: [3],
    label: "> SRC: BTC | DST: ETH"
  },
  {
    id: 4,
    path: "M 80 150 L 160 220 L 240 220 L 320 150",
    activeNodes: [2, 5],
    label: "> SRC: XLM | DST: yXLM"
  }
];

export const NetworkVisualization = () => {
  const [activeRouteIndex, setActiveRouteIndex] = useState(0);

  useEffect(() => {
    // Change route every 4 seconds to match the animation duration
    const interval = setInterval(() => {
      setActiveRouteIndex((prev) => (prev + 1) % routes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentRoute = routes[activeRouteIndex];

  const nodes = [
    { id: 0, cx: 80, cy: 150, r: 6, isEndpoint: true, color: "var(--color-primary)" },
    { id: 1, cx: 160, cy: 80, r: 4 },
    { id: 2, cx: 160, cy: 220, r: 5 },
    { id: 3, cx: 200, cy: 150, r: 5 },
    { id: 4, cx: 240, cy: 80, r: 4 },
    { id: 5, cx: 240, cy: 220, r: 4 },
    { id: 6, cx: 320, cy: 150, r: 8, isEndpoint: true, color: "var(--color-accent)" },
  ];

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
                  15% { opacity: 1; }
                  85% { stroke-dashoffset: 0; opacity: 1; }
                  100% { stroke-dashoffset: 0; opacity: 0; }
                }
                @keyframes pulseNode {
                  0% { transform: scale(1); opacity: 0.5; }
                  50% { transform: scale(1.3); opacity: 1; }
                  100% { transform: scale(1); opacity: 0.5; }
                }
                .anim-path {
                  stroke-dasharray: 1000;
                  stroke-dashoffset: 1000;
                  animation: dash 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
                .node-pulse {
                  transform-origin: center;
                  animation: pulseNode 2s infinite;
                }
                .fade-transition {
                  transition: all 0.5s ease-in-out;
                }
              `}
            </style>
          </defs>

          {/* Background Grid Lines */}
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--color-border)" strokeWidth="0.5" strokeDasharray="2 2" />
          </pattern>
          <rect width="400" height="300" fill="url(#grid)" />

          {/* Inactive Edges (All possible connections) */}
          <g stroke="var(--color-border)" strokeWidth="1" opacity="0.6">
            <line x1="80" y1="150" x2="160" y2="80" />
            <line x1="80" y1="150" x2="160" y2="220" />
            <line x1="80" y1="150" x2="200" y2="150" />
            
            <line x1="160" y1="80" x2="240" y2="80" />
            <line x1="160" y1="220" x2="240" y2="220" />
            
            <line x1="160" y1="80" x2="200" y2="150" />
            <line x1="160" y1="220" x2="200" y2="150" />
            <line x1="240" y1="80" x2="200" y2="150" />
            <line x1="240" y1="220" x2="200" y2="150" />
            
            <line x1="240" y1="80" x2="320" y2="150" />
            <line x1="240" y1="220" x2="320" y2="150" />
            <line x1="200" y1="150" x2="320" y2="150" />
          </g>

          {/* Animated Active Route - keys force re-render to restart CSS animation */}
          <path
            key={`route-anim-${currentRoute.id}`}
            d={currentRoute.path}
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="3"
            className="anim-path"
          />

          {/* Nodes */}
          <g fill="var(--color-surface)" strokeWidth="2">
            {nodes.map((node) => {
              const isActive = currentRoute.activeNodes.includes(node.id);
              return (
                <circle
                  key={node.id}
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  className={cn(
                    "fade-transition",
                    isActive && !node.isEndpoint ? "node-pulse" : ""
                  )}
                  style={{
                    animationDelay: isActive ? `${node.id * 0.5}s` : "0s",
                    transformBox: "fill-box",
                    transformOrigin: "center"
                  }}
                  stroke={
                    node.isEndpoint 
                      ? node.color 
                      : isActive 
                        ? "var(--color-primary)" 
                        : "var(--color-border)"
                  }
                />
              );
            })}
          </g>
        </svg>
      </div>

      {/* Bottom Badge - animates text change slightly */}
      <div className="absolute bottom-4 left-4">
        <Badge 
          key={`badge-${currentRoute.id}`}
          variant="secondary" 
          className="font-mono text-[10px] tracking-wider uppercase bg-gray-100 text-gray-500 border border-border animate-in fade-in duration-500"
        >
          {currentRoute.label}
        </Badge>
      </div>
    </div>
  );
};
