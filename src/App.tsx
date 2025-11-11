import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

// Placeholders para as páginas futuras
const AboutPage = () => (
  <div className="pt-20 h-screen flex items-center justify-center">
    Página Sobre (M2)
  </div>
);
const ServicesPage = () => (
  <div className="pt-20 h-screen flex items-center justify-center">
    Página Serviços (M2)
  </div>
);
const BlogPage = () => (
  <div className="pt-20 h-screen flex items-center justify-center">
    Página Blog (M4)
  </div>
);
const ContactPage = () => (
  <div className="pt-20 h-screen flex items-center justify-center">
    Página Contato (M4)
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contato" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
