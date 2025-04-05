import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Wait for DOMContentLoaded to ensure Puppeteer sees full render
document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
});
