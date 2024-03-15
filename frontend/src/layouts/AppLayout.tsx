import { useUserStore } from "@/features/auth/hooks/useUserStore";
import { AppHeader } from "@/features/dashboard/components/AppHeader";
import { AppSidebar } from "@/features/dashboard/components/AppSidebar";
import { Navigate, Outlet } from "react-router-dom";

export const AppLayout = () => {
  const { user } = useUserStore();

  if (!user) {
    return (
      <Navigate to={"/login"} replace state={{ path: location.pathname }} />
    );
  }

  return (
    <div className="min-h-screen flex bg-primary-foreground">
      <AppSidebar />

      <main className="w-full min-h-screen">
        <AppHeader />

        <div
          style={{
            minHeight: "calc(100vh - 64px)",
          }}
          className="bg-secondary"
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};
