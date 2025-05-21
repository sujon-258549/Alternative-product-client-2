import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./app/components/Router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="bg-[#000000ea]">
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
    ,
  </div>
);
