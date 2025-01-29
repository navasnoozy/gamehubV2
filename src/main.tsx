import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <ErrorBoundary>
      <App></App>
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
