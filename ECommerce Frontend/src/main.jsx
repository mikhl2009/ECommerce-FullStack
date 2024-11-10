import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import HomePage from "./routes/HomePage.jsx";
import Navbar from "./routes/Navbar.jsx";
import "./index.css";
import "./styles/css_reset.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
