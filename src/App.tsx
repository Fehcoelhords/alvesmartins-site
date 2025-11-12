import { Routes, Route, useLocation } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { BlogPage } from "./pages/Blog";
import { ContactPage } from "./pages/Contact";
import { useEffect } from "react"; // Mantido para ScrollToTop

import { ServiceAvaliacao } from "./pages/ServiceAvaliacao";
import { ServiceInspecao } from "./pages/ServiceInspecao";
import { ServicePatologia } from "./pages/ServicePatologia";

// --- LÓGICA DE SCROLL REMOVIDA DAQUI ---

// Componente para rolar a página para o topo ao navegar
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      {/* --- SIMPLIFICADO --- */}
      <TopBar />
      <Navbar />

      <div className="flex-grow">
        <Routes>
          {/* ... (Rotas) ... */}
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route
            path="/servicos/avaliacao-de-imoveis"
            element={<ServiceAvaliacao />}
          />
          <Route
            path="/servicos/inspecao-predial"
            element={<ServiceInspecao />}
          />
          <Route
            path="/servicos/pericia-manifestacoes-patologicas"
            element={<ServicePatologia />}
          />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route
            path="/blog/:postId"
            element={
              <div className="pt-20 h-screen flex items-center justify-center">
                Página de Post (Futuro CMS)
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
