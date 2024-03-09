import { CodeEditor } from "@/components/shared/CodeEditor";
import React from "react";

export const Dashboard = () => {
  return (
    <div className="px-4 py-4">
      <h2>Dashboard</h2>

      <div className="mt-4">
        <CodeEditor />
      </div>
    </div>
  );
};
