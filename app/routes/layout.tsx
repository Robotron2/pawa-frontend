import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50/50">
        <Sidebar />
        <div className="lg:ml-64 pt-16 lg:pt-0 flex-1">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}
