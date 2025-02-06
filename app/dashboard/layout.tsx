"use client";

// import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
// import { NavigationProvider } from "@/lib/context/navigation";
import { Authenticated } from "convex/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <NavigationProvider>
      <div className="flex h-screen">
        <Authenticated>

         {/* Sidebar */}
        <div className="w-64 bg-gray-100 border-r border-gray-200 p-4">
          <p className="text-3xl">Sidebar</p>
        </div>
        </Authenticated>
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    // </NavigationProvider>
  );
}