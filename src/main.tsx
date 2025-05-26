import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./app/components/Router/Router.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/features/store.ts";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById("root")!).render(
  <div className="bg-[#000000ea]">
    <StrictMode>
      <Toaster position="top-center" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router}></RouterProvider>
        </PersistGate>
      </Provider>
    </StrictMode>
    ,
  </div>
);
