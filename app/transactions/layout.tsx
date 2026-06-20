import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";

export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Sidebar />
      <div className="lg:ml-64 pt-16 lg:pt-0 flex-1">
        {children}
      </div>
    </div>
  );
}
