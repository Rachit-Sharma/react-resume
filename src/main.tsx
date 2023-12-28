import App from "App";
import ErrorBoundary from "ErrorBoundary";
import HeadProvider from "organisms/HeadProvider/HeadProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HeadProvider>
        <App />
      </HeadProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
