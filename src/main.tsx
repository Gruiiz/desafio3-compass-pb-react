import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Shop from "./pages/Shop.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>
      <Header />
    </header>
    
    <section>
      <Shop />
    </section>

    <footer>
      <Footer />
    </footer>
  </StrictMode>
);
