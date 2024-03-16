import { Skeleton } from "@/components/ui/skeleton";
import { useUserStore } from "@/features/auth/hooks/useUserStore";
import { AppHeader } from "@/features/dashboard/components/AppHeader";
import { AppSidebar } from "@/features/dashboard/components/AppSidebar";
import { Navigate, Outlet } from "react-router-dom";

export const AppLayout = () => {
  const { user, isUserLoggedIn } = useUserStore();

  // if (!user) {
  // if (isUserLoggedIn) {

  if (isUserLoggedIn && !user) {
    return (
      <div className="w-screen h-screen px-4 py-4 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="hidden md:block md:col-span-3">
            <Skeleton className="w-full h-screen rounded" />
          </div>
          <div className="col-span-12 md:col-span-9">
            <Skeleton className="w-full h-screen rounded" />
          </div>
        </div>
      </div>
    );
  }

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
