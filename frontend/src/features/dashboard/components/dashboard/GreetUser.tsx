import { useUserStore } from "@/features/auth/hooks/useUserStore";
import React from "react";

export const GreetUser = () => {
  const { user } = useUserStore();

  return (
    <div className="bg-background rounded px-4 py-4 ">
      <h2 className="font-medium text-2xl">
        Hello, {user?.email?.split("@")[0]}
      </h2>

      <div className="my-1">
        <p>
          You have <strong>21</strong> snippets in <strong>13</strong> different
          collections
        </p>
      </div>
    </div>
  );
};
