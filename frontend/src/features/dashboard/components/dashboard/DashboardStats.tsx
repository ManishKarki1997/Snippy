import React from "react";
import { StatCard } from "./StatCard";
import { Space } from "@/components/shared/Space";

export const DashboardStats = () => {
  return (
    <div>
      <Space h={10} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 rounded">
        <StatCard title="Collections" value={13} />
        <StatCard title="Snippets" value={21} />
        <StatCard title="Publicly Shared Collections" value={7} />
        <StatCard title="Publicly Shared Snippets" value={29} />
      </div>
    </div>
  );
};
