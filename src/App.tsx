import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { BlogPage } from "./pages/Blog"; // Importado M4
import { ContactPage } from "./pages/Contact"; // Importado M4
import { useEffect } from "react";

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
      <ScrollToTop /> {/* Adicionado para rolar ao topo */}
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} /> {/* Atualizado M4 */}
          <Route path="/contato" element={<ContactPage />} />{" "}
          {/* Atualizado M4 */}
          {/* Rotas de posts (placeholder) */}
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
