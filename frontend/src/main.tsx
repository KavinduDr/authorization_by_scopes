import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AsgardeoProvider } from "@asgardeo/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="a6Sf_moAUbIPX2JZ440djfunA94a"
      baseUrl="https://api.asgardeo.io/t/starkindustriesdemo"
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
);
