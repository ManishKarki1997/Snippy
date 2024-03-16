import React from "react";
import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";
import { Toaster } from "@/components/ui/sonner";
import { supabase } from "./utils/supabase";
import { useUserStore } from "./features/auth/hooks/useUserStore";
import { store } from "./store/store";

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
      <ReduxProvider store={store}>
        <RouterProvider router={createBrowserRouter(MainRoutes)} />
      </ReduxProvider>
    </>
  );
}

export default App;
