import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AsgardeoProvider } from "@asgardeo/react";

// const config = {
//   signInRedirectURL: "http://localhost:5173",
//   signOutRedirectURL: "http://localhost:5173",
//   clientID: "<a6Sf_moAUbIPX2JZ440djfunA94a>",
//   baseUrl: "https://api.asgardeo.io/t/starkindustriesdemo",
//   scope: [
//     "openid",
//     "profile",    // <-- This gets name, picture, etc.
//     "email"       // <-- This gets email
//   ]
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="a6Sf_moAUbIPX2JZ440djfunA94a"
      baseUrl="https://api.asgardeo.io/t/starkindustriesdemo"
      scope={["openid", "profile"]}
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
);
