import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'; // Adicione esta importação
import { store } from './store/store.ts'; // Ajuste o caminho conforme sua estrutura

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Envolva toda a aplicação com o Provider */}
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
  </StrictMode>
);