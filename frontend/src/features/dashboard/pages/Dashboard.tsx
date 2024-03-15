import { GreetUser } from "../components/dashboard/GreetUser";
import { DashboardStats } from "../components/dashboard/DashboardStats";
import { Space } from "@/components/shared/Space";

export const Dashboard = () => {
  return (
    <div className="px-4 py-4">
      <GreetUser />

      <Space h={40} />

      <DashboardStats />
    </div>
  );
};
