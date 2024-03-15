import React from "react";
import { HomeHeader } from "@/features/home/components/HomeHeader";
import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <div>
      <HomeHeader />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
