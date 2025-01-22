import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App></App>
    </Provider>
  </StrictMode>
);
