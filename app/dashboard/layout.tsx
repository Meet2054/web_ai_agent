"use client";

// import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { NavigationProvider } from "@/lib/context/NavigationProvider";
import { Authenticated } from "convex/react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isAuthenticated, isLoading } = useConvexAuth();

  // if (isLoading || !isAuthenticated) return null;

  return (
    <NavigationProvider>
      <div className="flex h-screen">
        <Authenticated>
        <Sidebar/>
        </Authenticated>

        <div className="flex-1 ">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </NavigationProvider>
  );
}