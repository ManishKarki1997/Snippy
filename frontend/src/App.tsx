import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "./utils/supabase";
import { useUserStore } from "./features/auth/hooks/useUserStore";

function App() {
  const { setUser } = useUserStore();

  React.useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session?.user);
      } else if (event === "SIGNED_OUT") {
        setUser(session?.user);
        localStorage.removeItem("isSnippetUserLoggedIn");
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, [setUser]);

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={createBrowserRouter(MainRoutes)} />
    </>
  );
}

export default App;
