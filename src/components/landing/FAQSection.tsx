"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is payment routing?",
    answer: "Payment routing is the process of finding the most efficient path to swap one asset for another. Instead of a direct trade which might suffer from low liquidity and high slippage, routing breaks the trade into multiple intermediate steps (e.g., Asset A -> Asset B -> Asset C) to ensure you receive the maximum possible output."
  },
  {
    question: "Which assets are supported by PawaProtocol?",
    answer: "PawaProtocol supports all Stellar native assets, including XLM, USDC, EURC, and any custom tokens that have established liquidity pools or order book depth on the Stellar network."
  },
  {
    question: "How much does it cost to use?",
    answer: "PawaProtocol charges a minimal protocol fee of 0.1% on successful routes to maintain the infrastructure. You will always see the exact estimated output, network fees, and protocol fees before you confirm a transaction."
  },
  {
    question: "Can I test my integration on Testnet?",
    answer: "Absolutely. Our entire infrastructure, including the Soroban smart contracts, REST APIs, and SDKs, are fully deployed and operational on the Stellar Testnet for you to build and test securely."
  },
  {
    question: "Do I need to hold XLM to pay for transaction fees?",
    answer: "Yes, standard Stellar network fees still apply. You will need a small amount of XLM in your wallet to cover the base transaction fee for the atomic multi-hop swap."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/70">
              Everything you need to know about the protocol.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`text-foreground/50 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                    size={20} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-foreground/70 text-sm leading-relaxed border-t border-border/50 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
