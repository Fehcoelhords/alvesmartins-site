import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { AnimatedHamburgerIcon } from "./AnimatedHamburgerIcon";
import React from "react";

// --- Ícones (Seta e Dropdown) ---
import { BuildingIcon } from "../assets/icons/BuildingIcon";
import { RulerIcon } from "../assets/icons/RulerIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

const CaretDownIcon = ({
  isOpen,
  isScrolled,
}: {
  isOpen?: boolean;
  isScrolled: boolean;
}) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`w-5 h-5 ml-1 ${
      isScrolled ? "text-dark" : "text-white/80"
    } group-hover:text-primary`}
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

const HamburgerSwitcher = ({
  isOpen,
  isScrolled,
}: {
  isOpen: boolean;
  isScrolled: boolean;
}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  if (isOpen) {
    return <AnimatedHamburgerIcon isOpen={true} isDark={true} />;
  }
  return <AnimatedHamburgerIcon isOpen={false} isDark={isScrolled} />;
};
// --- Fim Ícones ---

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Sobre", path: "/sobre" },
    { title: "Serviços", path: "/servicos" },
    { title: "Blog", path: "/blog" },
  ];

  const premiumServicesLinks = [
    {
      title: "Perícia em Avaliação de imóveis",
      description: "Avaliações técnicas e precisas.",
      icon: <RulerIcon />,
      path: "/servicos/avaliacao-de-imoveis",
    },
    {
      title: "Laudos técnicos",
      description: "Investigação de falhas construtivas.",
      icon: <SearchIcon />,
      path: "/servicos/pericia-manifestacoes-patologicas",
    },
    {
      title: "Inspeção Predial",
      description: "Diagnóstico completo da edificação.",
      icon: <BuildingIcon />,
      path: "/servicos/inspecao-predial",
    },
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

  const closeAllMenus = () => setIsMobileOpen(false);

  const linkColor = isScrolled ? "text-dark" : "text-white";
  const linkHoverColor = isScrolled
    ? "hover:text-primary"
    : "hover:text-gray-300";

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out"
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0)",
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
          : "none",
      }}
    >
      {/* --- ATUALIZADO: py-4 para acomodar logo h-24 --- */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* --- ATUALIZADO: Logo com h-24 (96px) --- */}
        <div className="flex-shrink-0 z-10">
          <Link to="/" className="block" onClick={() => closeAllMenus()}>
            <img
              src="/logotipo.png"
              alt="Alves Martins Engenharia & Construção"
              className="h-24 w-auto rounded-lg" // <-- MUDANÇA AQUI
            />
          </Link>
        </div>

        {/* Links Desktop (Centro) */}
        <div className="hidden md:flex justify-center flex-grow space-x-8 items-center">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className={`relative group ${linkColor} ${linkHoverColor} transition-colors`}
              onMouseEnter={() =>
                link.title === "Serviços" && setIsDesktopServicesOpen(true)
              }
              onMouseLeave={() =>
                link.title === "Serviços" && setIsDesktopServicesOpen(false)
              }
            >
              <Link to={link.path} className="font-medium flex items-center">
                {link.title}
                {link.title === "Serviços" && (
                  <CaretDownIcon
                    isOpen={isDesktopServicesOpen}
                    isScrolled={isScrolled}
                  />
                )}
              </Link>

              {link.title === "Serviços" && (
                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-md shadow-lg overflow-hidden"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                    >
                      <div className="p-2">
                        {premiumServicesLinks.map((service) => (
                          <Link
                            key={service.title}
                            to={service.path}
                            className="flex items-center p-4 rounded-lg text-dark hover:bg-secondary transition-colors duration-200"
                            onClick={() => setIsDesktopServicesOpen(false)}
                          >
                            <div className="flex-shrink-0 text-primary">
                              {React.cloneElement(service.icon, {
                                className: "h-6 w-6",
                              })}
                            </div>
                            <div className="ml-4">
                              <p className="font-semibold text-sm text-dark">
                                {service.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Botão "Orçamento" (Direita) */}
        <div className="hidden md:flex flex-shrink-0 z-10">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contato"
              className={`flex items-center px-6 py-3 rounded-lg font-semibold shadow-lg 
                            transition-all duration-300 transform 
                            ${
                              isScrolled
                                ? "bg-primary text-white hover:bg-accent"
                                : "bg-white text-primary hover:bg-gray-200"
                            }`}
            >
              Orçamento
              <span aria-hidden="true" className="ml-1.5">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Botão Mobile (Lógica de cor simplificada) */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Abrir menu"
            className="p-1"
          >
            <AnimatedHamburgerIcon
              isOpen={isMobileOpen}
              isDark={isScrolled || isMobileOpen}
            />
          </button>
        </div>
      </div>

      {/* Menu Mobile (Animação Corrigida) */}
      <motion.div
        initial="closed"
        animate={isMobileOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ duration: 0.3 }}
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
            className="flex items-center justify-center bg-gradient-to-r from-primary to-accent 
                           text-white text-center mt-4 px-6 py-3 rounded-lg 
                           font-semibold shadow-lg"
            onClick={() => closeAllMenus()}
          >
            Orçamento
            <span aria-hidden="true" className="ml-1.5">
              &rarr;
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};
