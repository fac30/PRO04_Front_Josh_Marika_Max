import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CartProvider } from "./Context/Cart.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
        <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);




