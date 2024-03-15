import React from "react";
import { useUserStore } from "../hooks/useUserStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AuthUserAvatar = () => {
  const { user } = useUserStore();

  if (!user) return;
  return (
    <div>
      <Avatar>
        <AvatarImage
          src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${user?.email}`}
        />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
    </div>
  );
};
