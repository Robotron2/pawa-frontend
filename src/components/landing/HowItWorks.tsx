// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Search, SlidersHorizontal, Zap, CheckCircle2 } from "lucide-react";

// const steps = [
//   {
//     icon: Search,
//     title: "Discover",
//     description: "Real-time scanning of the Stellar network to find all available liquidity paths for your required asset pair.",
//     color: "text-accent",
//     bg: "bg-accent/10",
//   },
//   {
//     icon: SlidersHorizontal,
//     title: "Optimize",
//     description: "Compare available routes by evaluating total output, network fees, and overall path efficiency.",
//     color: "text-primary",
//     bg: "bg-primary/10",
//   },
//   {
//     icon: Zap,
//     title: "Execute",
//     description: "Perform seamless atomic multi-hop swaps via Soroban smart contracts. It succeeds completely or reverts safely.",
//     color: "text-yellow-500",
//     bg: "bg-yellow-500/10",
//   },
//   {
//     icon: CheckCircle2,
//     title: "Confirm",
//     description: "Track your transaction completion instantly with verifiable on-chain execution receipts.",
//     color: "text-success",
//     bg: "bg-success/10",
//   }
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
// };

// export const HowItWorks = () => {
//   return (
//     <section className="py-24 bg-surface relative overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
//               How Pawa works
//             </h2>
//             <p className="text-lg text-foreground/70">
//               A transparent, reliable process to ensure your payments always find their optimal path.
//             </p>
//           </motion.div>
//         </div>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {steps.map((step, index) => {
//             const Icon = step.icon;
//             return (
//               <motion.div 
//                 key={index} 
//                 className="relative bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow group z-10"
//                 variants={itemVariants}
//               >
//                 {/* Connection Line (hidden on last item, and adjusting for mobile) */}
//                 {index < steps.length - 1 && (
//                   <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-border border-t border-dashed -z-10" />
//                 )}
                
//                 <div className={`w-12 h-12 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                   <Icon size={24} />
//                 </div>
                
//                 <h3 className="text-xl font-heading font-bold text-foreground mb-3 flex items-center gap-2">
//                   <span className="text-foreground/30 text-sm">{index + 1}.</span> {step.title}
//                 </h3>
                
//                 <p className="text-foreground/70 text-sm leading-relaxed">
//                   {step.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Search, SlidersHorizontal, Zap, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

const steps = [
  {
    icon: Search,
    label: "Discover",
    title: "Discover all paths",
    description:
      "Pawa scans the Stellar network in real-time, surfacing every available liquidity route for your asset pair — AMM pools, order books, and multi-hop corridors included.",
    color: "text-blue-200",
    activeColor: "#bfdbfe",
    bg: "bg-blue-200/10",
    iconBg: "bg-blue-200",
    trackColor: "bg-blue-200",
    accent: "border-blue-200",
    details: [
      { label: "Network", value: "Stellar Mainnet" },
      { label: "Scan time", value: "< 200ms" },
      { label: "Route types", value: "AMM + Order book" },
      { label: "Hop limit", value: "Up to 6 hops" },
    ],
  },
  {
    icon: SlidersHorizontal,
    label: "Optimize",
    title: "Find the optimal route",
    description:
      "Every discovered path is scored by total output, slippage, and cumulative fees. The winning route maximises what lands in your wallet.",
    color: "text-blue-300",
    activeColor: "#93c5fd",
    bg: "bg-blue-300/10",
    iconBg: "bg-blue-300",
    trackColor: "bg-blue-300",
    accent: "border-blue-300",
    details: [
      { label: "Criteria", value: "Output + fees + slippage" },
      { label: "Comparison", value: "All routes scored" },
      { label: "Slippage cap", value: "User-defined" },
      { label: "Latency", value: "< 50ms" },
    ],
  },
  {
    icon: Zap,
    label: "Execute",
    title: "Atomic execution",
    description:
      "A Soroban smart contract fires the multi-hop swap atomically. Either the entire route completes at the quoted price — or the transaction reverts entirely. No partial fills.",
    color: "text-blue-400",
    activeColor: "#60a5fa",
    bg: "bg-blue-400/10",
    iconBg: "bg-blue-400",
    trackColor: "bg-blue-400",
    accent: "border-blue-400",
    details: [
      { label: "Contract", value: "Soroban (WASM)" },
      { label: "Guarantee", value: "All-or-nothing" },
      { label: "MEV protection", value: "Enabled" },
      { label: "Gas model", value: "Stellar Lumens" },
    ],
  },
  {
    icon: CheckCircle2,
    label: "Confirm",
    title: "Verifiable confirmation",
    description:
      "Your transaction settles on-chain with a cryptographic receipt. Track the ledger entry, output amount, and full path — all publicly verifiable.",
    color: "text-blue-500",
    activeColor: "#3b82f6",
    bg: "bg-blue-500/10",
    iconBg: "bg-blue-500",
    trackColor: "bg-blue-500",
    accent: "border-blue-500",
    details: [
      { label: "Settlement", value: "~5 sec (1 ledger)" },
      { label: "Receipt", value: "On-chain hash" },
      { label: "Explorer", value: "Stellar Expert" },
      { label: "Finality", value: "Instant" },
    ],
  },
];

const panelVariants: Variants = {
  enter: { opacity: 0, y: 12 },
  center: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const Icon = step.icon;

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + steps.length) % steps.length);
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold tracking-widest text-foreground/40 uppercase mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Four steps. One atomic swap.
          </h2>
          <p className="text-base text-foreground/60 max-w-xl mx-auto">
            Pawa routes your payment across Stellar to find the best path — every time.
          </p>
        </motion.div>

        {/* Pipeline Nav */}
        <motion.div
          className="flex items-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {steps.map((s, i) => {
            const StepIcon = s.icon;
            const isDone = i < active;
            const isActive = i === active;

            return (
              <React.Fragment key={i}>
                <button
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-2 group flex-shrink-0 outline-none focus:outline-none focus-visible:outline-none"
                >
                  <div
                    className={`
                      w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300
                      ${isActive
                        ? `${s.iconBg} border-transparent shadow-lg`
                        : isDone
                        ? `bg-white dark:bg-surface border-current ${s.color}`
                        : "bg-white dark:bg-surface border-border"
                      }
                    `}
                    style={
                      isActive
                        ? { boxShadow: `0 0 0 5px ${s.activeColor}22` }
                        : undefined
                    }
                  >
                    <StepIcon
                      size={18}
                      className={
                        isActive
                          ? "text-white"
                          : isDone
                          ? s.color
                          : "text-foreground/30"
                      }
                    />
                  </div>
                  <span
                    className={`text-[11px] font-semibold tracking-wide transition-colors duration-200 ${
                      isActive
                        ? s.color
                        : isDone
                        ? "text-foreground/50"
                        : "text-foreground/30"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>

                {/* Track segment */}
                {i < steps.length - 1 && (
                  <div className="flex-1 h-[2px] bg-border mx-2 mb-5 rounded-full overflow-hidden relative">
                    <motion.div
                      className={`h-full ${steps[i].trackColor} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={{ width: i < active ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    />
                    {/* Pulse dot when this segment is the "active edge" */}
                    {i === active - 1 && (
                      <motion.div
                        className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${steps[i].trackColor}`}
                        initial={{ left: "90%", opacity: 0 }}
                        animate={{ left: ["90%", "95%", "100%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>

        {/* Content Panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white dark:bg-surface rounded-2xl border border-border overflow-hidden shadow-sm"
            >
              {/* Accent bar */}
              <div
                className="h-[3px] w-full transition-colors duration-300"
                style={{ background: step.activeColor }}
              />

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl ${step.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 font-medium mb-0.5">
                      Step {active + 1} of {steps.length}
                    </p>
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-foreground/65 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Detail grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {step.details.map((d, i) => (
                    <motion.div
                      key={d.label}
                      className={`rounded-xl p-3.5 ${step.bg}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06, duration: 0.25 }}
                    >
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-foreground/40 mb-1">
                        {d.label}
                      </p>
                      <p className={`text-sm font-semibold ${step.color}`}>
                        {d.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-5 px-1">
          <button
            onClick={() => go(-1)}
            disabled={active === 0}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/50 hover:text-foreground disabled:opacity-25 disabled:cursor-not-allowed transition-colors px-3 py-2 rounded-lg hover:bg-surface border border-transparent hover:border-border outline-none focus:outline-none focus-visible:outline-none"
          >
            <ChevronLeft size={15} />
            Back
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {steps.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300 rounded-full outline-none focus:outline-none focus-visible:outline-none"
                style={{
                  width: i === active ? 20 : 6,
                  height: 6,
                  background: i === active ? s.activeColor : "var(--border)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-white outline-none focus:outline-none focus-visible:outline-none`}
            style={{ background: step.activeColor }}
          >
            {active === steps.length - 1 ? "Start over" : "Continue"}
            <ChevronRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
};
