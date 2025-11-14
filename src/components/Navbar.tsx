import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { AnimatedHamburgerIcon } from "./AnimatedHamburgerIcon";
import React from "react";

// --- Ícones (Seta e Dropdown) ---
import { BuildingIcon } from "../assets/icons/BuildingIcon";
import { RulerIcon } from "../assets/icons/RulerIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

// --- Ícone Caret (Seta) ---
const CaretDownIcon = ({ isOpen }: { isOpen?: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 ml-1 text-dark group-hover:text-primary"
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
// --- FIM Ícones ---

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

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
    open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    closed: {
      opacity: 0,
      y: "-10px",
      transition: { duration: 0.3, ease: "easeIn" },
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

  const linkColor = "text-dark";
  const linkHoverColor = "hover:text-primary";

  return (
    <nav className="sticky top-4 z-50 w-full px-6">
      <div className="container mx-auto relative">
        {/* Card 1: O Navbar visível */}
        <div
          className="w-full flex justify-between items-center 
                     py-3 px-6 rounded-lg shadow-lg 
                     bg-white/80 backdrop-blur-lg border border-white/30"
        >
          {/* --- ATUALIZADO: COLUNA 1: Logo (Ícone + Texto) --- */}
          <div className="flex-shrink-0 z-10">
            <Link
              to="/"
              className="flex items-center gap-3"
              onClick={() => closeAllMenus()}
            >
              <img
                src="/logotipo.png"
                alt="Alves Martins Logo"
                className="h-12 w-auto" // h-12 (48px)
              />
              {/* Texto ao lado do logo */}
              <div>
                <span className="block text-xl font-bold text-dark leading-tight">
                  Alves Martins
                </span>
                <span className="block text-xs font-medium text-gray-500 leading-tight">
                  Engenharia & Construção
                </span>
              </div>
            </Link>
          </div>

          {/* COLUNA 2: Links (Centro) */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
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
                    <CaretDownIcon isOpen={isDesktopServicesOpen} />
                  )}
                </Link>

                {link.title === "Serviços" && (
                  <AnimatePresence>
                    {isDesktopServicesOpen && (
                      <motion.div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-md shadow-lg overflow-hidden"
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

          {/* COLUNA 3: Botões (Direita) */}
          <div className="flex-shrink-0 z-50">
            <motion.div
              className="hidden md:flex"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/contato"
                className="flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold 
                           shadow-lg hover:shadow-xl hover:bg-accent 
                           transition-all duration-300 transform"
              >
                Orçamento
                <span aria-hidden="true" className="ml-1.5">
                  &rarr;
                </span>
              </Link>
            </motion.div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Abrir menu"
                className="p-1"
              >
                <AnimatedHamburgerIcon isOpen={isMobileOpen} isDark={true} />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: O Menu Mobile */}
        <motion.div
          initial="closed"
          animate={isMobileOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          className="md:hidden absolute top-full w-full shadow-xl overflow-hidden bg-white mt-2 rounded-lg"
        >
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className="text-dark font-medium hover:text-primary transition-colors py-2 text-lg"
                onClick={() => closeAllMenus()}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/contato"
              className="flex items-center justify-center bg-gradient-to-r from-primary to-accent 
                         text-white text-center mt-4 px-6 py-3 rounded-lg 
                         font-semibold shadow-lg text-lg"
              onClick={() => closeAllMenus()}
            >
              Orçamento
              <span aria-hidden="true" className="ml-1.5">
                &rarr;
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
