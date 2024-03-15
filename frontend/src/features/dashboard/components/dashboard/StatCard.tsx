import { APP_ICONS } from "@/components/shared/AppIcons";
import React from "react";

interface Props {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
}

export const StatCard = ({
  title,
  value,
  icon = APP_ICONS.HOME({ size: 24 }),
}: Props) => {
  return (
    <div className="hover:shadow px-4 py-4 rounded flex items-start gap-4 bg-background">
      <div className=" flex items-center justify-center">{icon}</div>
      <div className="-mt-1">
        <p>{title}</p>
        <h2 className="font-medium text-3xl mt-1">{value}</h2>
      </div>
    </div>
  );
};
