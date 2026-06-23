"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Cpu, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

const tabs = [
  {
    id: "api",
    label: "REST API",
    icon: Terminal,
    code: `curl -X POST https://api.pawaprotocol.com/v1/routes \\
  -H "Content-Type: application/json" \\
  -d '{
    "source_asset": "native",
    "destination_asset": "USDC",
    "amount": "100"
  }'`
  },
  {
    id: "sdk",
    label: "TypeScript SDK",
    icon: Code,
    code: `import { PawaClient } from '@pawaprotocol/sdk';

const pawa = new PawaClient({ network: 'TESTNET' });

const route = await pawa.routing.getBestPath({
  source: 'XLM',
  destination: 'USDC',
  amount: '100'
});

await pawa.execute(route, userKeypair);`
  },
  {
    id: "soroban",
    label: "Soroban SDK",
    icon: Cpu,
    code: `use pawa_sdk::PawaClient;
use soroban_sdk::{Env, Address, token};

pub fn swap(env: Env, user: Address, amount: i128) {
    user.require_auth();
    
    let router = PawaClient::new(&env);
    let path = router.find_path(asset_in, asset_out, amount);
    
    router.execute(&user, &path);
}`
  }
];

export const DeveloperSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[1].id);

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Build payment experiences without rebuilding routing logic.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Integrate PawaProtocol natively into your wallets, exchanges, or merchant flows. Whether you prefer interacting via our high-speed REST API, typed SDKs, or directly on-chain via Soroban smart contracts, we&apos;ve got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2">
                View Documentation <ExternalLink size={16} />
              </Button>
              <Button variant="outline" size="lg" className="bg-white">
                GitHub Repository
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            {/* Documentation-style interactive terminal */}
            <div className="bg-[#0B1220] rounded-xl shadow-2xl overflow-hidden border border-white/10">
              
              {/* Terminal Header Tabs */}
              <div className="flex border-b border-white/10 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                        isActive ? "border-primary text-primary bg-white/5" : "border-transparent text-white/50 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon size={16} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              
              {/* Terminal Code Window */}
              <div className="p-6 relative bg-[#050810]">
                {tabs.map((tab) => (
                  <div 
                    key={tab.id} 
                    className={activeTab === tab.id ? "block" : "hidden"}
                  >
                    <pre className="text-sm text-blue-300/80 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed">
                      <code>{tab.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
