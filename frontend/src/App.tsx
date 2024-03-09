import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(MainRoutes)} />
    </>
  );
}

export default App;
