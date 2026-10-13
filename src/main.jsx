import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRedirect from "./AppRedirect.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRedirect />
  </StrictMode>,
);
