import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Loader from "./components/Loader/Loader.jsx";
import ChatProvider from "./context/index.jsx";
import { ReactLenis } from "@studio-freight/react-lenis";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root>
      <ChatProvider>
        <Loader />
        <App />
      </ChatProvider>
    </ReactLenis>
  </React.StrictMode>
);
