import { AppSidebar } from "@/features/dashboard/components/AppSidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex bg-primary-foreground">
      <AppSidebar />

      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};
