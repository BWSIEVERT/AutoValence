import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import "./index.css";
import App from "./App.jsx";

const clerkPublishableKey =
  "pk_test_YWJzb2x1dGUtaWJleC03Mi5jbGVyay5hY2NvdW50cy5kZXYk";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      appearance={{ baseTheme: dark }}
      publishableKey={clerkPublishableKey}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
