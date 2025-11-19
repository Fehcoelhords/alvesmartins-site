import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import ServiceAvaliacao from "./pages/ServiceAvaliacao";

// Placeholder para as outras páginas de serviço
const ServiceInspecao = () => <ServiceAvaliacao />;
const ServicePatologia = () => <ServiceAvaliacao />;

function App() {
  return (
    <div className="bg-white font-body text-primary antialiased selection:bg-accent selection:text-white">
      <ScrollToTop />

      {/* Navbar Global: Fixo, funciona em todas as páginas */}
      <Navbar />

      <main className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<AboutPage />} />

          {/* Rotas de Serviços */}
          <Route
            path="/servicos/avaliacao-de-imoveis"
            element={<ServiceAvaliacao />}
          />
          <Route
            path="/servicos/inspecao-predial"
            element={<ServiceInspecao />}
          />
          <Route
            path="/servicos/patologia-das-construcoes"
            element={<ServicePatologia />}
          />

          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
