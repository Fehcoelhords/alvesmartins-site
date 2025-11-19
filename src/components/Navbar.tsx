import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHamburgerIcon from "./AnimatedHamburgerIcon";
import { FaChevronDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Para Desktop Hover
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false); // Para Mobile Click

  const location = useLocation();
  const navigate = useNavigate();

  // Detectar Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileSubmenuOpen(false);
  }, [location]);

  // Função para scroll suave até a seção
  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const services = [
    { name: "Avaliação de Imóveis", path: "/servicos/avaliacao-de-imoveis" },
    { name: "Inspeção Predial", path: "/servicos/inspecao-predial" },
    {
      name: "Patologia das Construções",
      path: "/servicos/patologia-das-construcoes",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-[#0A2B4D]/95 backdrop-blur-lg shadow-lg py-3 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group z-50 relative">
          <img
            src="/logotipo.png"
            alt="Alves Martins"
            className="h-10 md:h-12 w-auto brightness-0 invert transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col text-white">
            <span className="font-heading font-bold text-lg leading-none tracking-wide">
              ALVES MARTINS
            </span>
            <span className="font-body text-[10px] font-medium tracking-[0.3em] text-accent-cyan uppercase">
              Engenharia
            </span>
          </div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Link Home */}
          <Link
            to="/"
            className="text-sm font-bold text-white uppercase tracking-wider hover:text-accent-cyan transition-colors"
          >
            Home
          </Link>

          {/* Dropdown Serviços */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => handleScrollToSection("services")}
              className="flex items-center gap-1 text-sm font-bold text-white uppercase tracking-wider hover:text-accent-cyan transition-colors py-4"
            >
              Serviços{" "}
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-[-50px] w-64 pt-2"
                >
                  <div className="bg-[#051A30]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-neon overflow-hidden p-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-white hover:bg-accent/20 hover:text-accent-cyan rounded-lg transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Link Sobre */}
          <Link
            to="/quem-somos"
            className="text-sm font-bold text-white uppercase tracking-wider hover:text-accent-cyan transition-colors"
          >
            Sobre Nós
          </Link>

          {/* Botão CTA */}
          <Link
            to="/contato"
            className="ml-4 px-6 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-sm uppercase tracking-wide transition-all shadow-neon hover:shadow-lg hover:-translate-y-0.5"
          >
            Orçamento
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <div className="lg:hidden z-50 relative">
          <AnimatedHamburgerIcon
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          />
        </div>

        {/* ================= MOBILE MENU OVERLAY ================= */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed inset-0 bg-[#051A30] z-40 flex flex-col pt-28 px-8 overflow-y-auto h-screen"
            >
              <div className="flex flex-col space-y-6">
                <Link
                  to="/"
                  className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Dropdown Logic */}
                <div>
                  <button
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    className="w-full flex justify-between items-center text-2xl font-heading font-bold text-white border-b border-white/10 pb-4"
                  >
                    Serviços{" "}
                    <FaChevronDown
                      className={`text-lg transition-transform ${
                        mobileSubmenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileSubmenuOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white/5 rounded-b-xl"
                      >
                        <div className="flex flex-col p-4 space-y-4">
                          <button
                            onClick={() => handleScrollToSection("services")}
                            className="text-left text-accent-cyan font-bold uppercase text-sm tracking-wider"
                          >
                            Ver Todos na Home
                          </button>
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="text-white/80 hover:text-white text-lg"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/quem-somos"
                  className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nós
                </Link>

                <Link
                  to="/contato"
                  className="mt-8 w-full py-4 text-center rounded-xl bg-accent text-white font-bold text-xl shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
