import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { AnimatedHamburgerIcon } from "./AnimatedHamburgerIcon";

const CaretDownIcon = ({ isOpen }: { isOpen?: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 ml-1"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </motion.svg>
);

// --- REMOVIDO: Props de posicionamento ---
export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  // REMOVIDO: Lógica de scroll, isMobile, e topValue

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Sobre", path: "/sobre" },
    { title: "Serviços", path: "/servicos" },
    { title: "Blog", path: "/blog" },
    { title: "Contato", path: "/contato" },
  ];

  const servicesDropdownLinks = [
    {
      title: "Perito Avaliador de Imóveis",
      path: "/servicos/avaliacao-de-imoveis",
    },
    {
      title: "Perícia em Manifestações Patológicas",
      path: "/servicos/pericia-manifestacoes-patologicas",
    },
    { title: "Inspeção Predial", path: "/servicos/inspecao-predial" },
  ];

  const mobileMenuVariants: Variants = {
    open: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.3 } },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { ease: "easeIn", duration: 0.3 },
    },
  };
  const dropdownVariants: Variants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
      transitionEnd: { display: "none" },
    },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 }, display: "block" },
  };

  const closeAllMenus = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-white shadow-md" // <-- z-50 (Na frente)
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo (Esquerda) */}
        <div className="flex-shrink-0 z-10">
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:text-accent transition-colors"
            onClick={() => closeAllMenus()}
          >
            ALVES MARTINS
            <span className="block text-xs font-normal tracking-wider">
              Engenharia & Construção
            </span>
          </Link>
        </div>

        {/* Links Desktop (Centro) */}
        <div className="hidden md:flex justify-center flex-grow space-x-8 items-center">
          {navLinks.map((link) =>
            link.title === "Serviços" ? (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
              >
                <Link
                  to={link.path}
                  className="text-dark font-medium hover:text-primary transition-colors flex items-center"
                  aria-expanded={isDesktopServicesOpen}
                >
                  {link.title}
                  <CaretDownIcon />
                </Link>
                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-md shadow-lg overflow-hidden"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                    >
                      {servicesDropdownLinks.map((service) => (
                        <Link
                          key={service.title}
                          to={service.path}
                          className="block px-5 py-3 text-sm text-dark hover:bg-primary hover:text-white transition-all duration-200"
                          onClick={() => setIsDesktopServicesOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div key={link.title} whileHover={{ scale: 1.05 }}>
                <Link
                  to={link.path}
                  className="text-dark font-medium hover:text-primary transition-colors"
                >
                  {link.title}
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* Botão "Orçamento" (Direita) */}
        <div className="hidden md:flex flex-shrink-0 z-10">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contato"
              className="bg-primary text-white px-5 py-3 rounded-lg font-medium shadow-lg hover:bg-accent transition-all duration-300"
            >
              Orçamento
            </Link>
          </motion.div>
        </div>

        {/* Botão Mobile */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Abrir menu"
            className="p-1"
          >
            <AnimatedHamburgerIcon isOpen={isMobileOpen} />
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <motion.div
        initial="closed"
        animate={isMobileOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="md:hidden absolute top-full left-0 w-full shadow-xl overflow-hidden bg-white"
      >
        <div className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="text-dark font-medium hover:text-primary transition-colors py-2"
              onClick={() => closeAllMenus()}
            >
              {link.title}
            </Link>
          ))}

          <Link
            to="/contato"
            className="bg-primary text-white text-center mt-4 px-5 py-2 rounded-md font-medium shadow-lg hover:bg-accent transition-all duration-300"
            onClick={() => closeAllMenus()}
          >
            Orçamento
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};
