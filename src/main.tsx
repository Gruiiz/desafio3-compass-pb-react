import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ClerkProvider } from '@clerk/clerk-react'; // Adicione esta importação

// Corrija a obtenção da chave
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <App />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </ClerkProvider>
  </StrictMode>
);