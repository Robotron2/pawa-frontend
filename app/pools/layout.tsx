import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";

export default function PoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Sidebar />
      <div className="ml-64 flex-1">
        {children}
      </div>
    </div>
  );
}
