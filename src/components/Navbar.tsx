import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { AnimatedHamburgerIcon } from "./AnimatedHamburgerIcon";
import React from "react";

import { BuildingIcon } from "../assets/icons/BuildingIcon";
import { RulerIcon } from "../assets/icons/RulerIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

// Ícone seta com mais estilo
const CaretDownIcon = ({ isOpen }: { isOpen?: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.15 : 1 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="w-5 h-5 ml-1 text-dark group-hover:text-primary drop-shadow-md"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
      clipRule="evenodd"
    />
  </motion.svg>
);

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
      title: "Laudos Técnicos",
      description: "Análises profundas e investigação.",
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

  // 👉 ANIMAÇÃO EXAGERADA DO DROPDOWN — MUITO LUXO
  const dropdownVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      filter: "blur(6px)",
      pointerEvents: "none",
      transition: { duration: 0.35, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      pointerEvents: "auto",
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1], // curva mais luxuosa
      },
    },
  };

  // 👉 MOBILE MENU – animação bem suave
  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const closeAllMenus = () => setIsMobileOpen(false);

  return (
    <nav className="sticky top-4 z-[9999] w-full px-6">
      <div className="container mx-auto relative">
        {/* NAVBAR — VIDRO FOSCO LUXUOSO */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            w-full flex justify-between items-center 
            py-3 px-6 rounded-2xl shadow-2xl 
            bg-white/20 backdrop-blur-xl 
            border border-white/40 
            ring-1 ring-white/10
          "
          style={{
            WebkitBackdropFilter: "blur(14px)",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={closeAllMenus}
          >
            <img src="/logotipo.png" className="h-12 drop-shadow-lg" />

            <div className="leading-5">
              <span className="block text-xl font-bold text-dark drop-shadow-sm">
                Alves Martins
              </span>
              <span className="block text-xs text-blue-500 tracking-wide">
                Engenharia & Construção
              </span>
            </div>
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex flex-1 justify-center space-x-8 items-center">
            {navLinks.map((link) => (
              <div
                key={link.title}
                className="relative group text-dark hover:text-primary transition-colors"
              >
                {/* TRIGGER — NÃO FECHA SOZINHO */}
                <div
                  onMouseEnter={() =>
                    link.title === "Serviços" && setIsDesktopServicesOpen(true)
                  }
                >
                  <Link
                    to={link.path}
                    className="font-medium flex items-center"
                  >
                    {link.title}
                    {link.title === "Serviços" && (
                      <CaretDownIcon isOpen={isDesktopServicesOpen} />
                    )}
                  </Link>
                </div>

                {/* HOVER BRIDGE — ESSA PARTE EVITA QUE O DROPDOWN SUMA RÁPIDO */}
                {link.title === "Serviços" && (
                  <div
                    className="absolute left-0 top-full w-full h-6"
                    onMouseEnter={() => setIsDesktopServicesOpen(true)}
                    onMouseLeave={() => setIsDesktopServicesOpen(false)}
                  />
                )}

                {/* DROPDOWN PREMIUM */}
                {link.title === "Serviços" && (
                  <AnimatePresence>
                    {isDesktopServicesOpen && (
                      <motion.div
                        className="absolute top-[calc(100%+6px)] left-1/2 -translate-x-1/2 w-96 
                         bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl 
                         overflow-hidden"
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            duration: 0.25,
                            ease: "easeOut",
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                          scale: 0.97,
                          transition: {
                            duration: 0.2,
                            ease: "easeIn",
                          },
                        }}
                        onMouseEnter={() => setIsDesktopServicesOpen(true)}
                        onMouseLeave={() => setIsDesktopServicesOpen(false)}
                      >
                        <div className="p-3">
                          {premiumServicesLinks.map((service, i) => (
                            <motion.div
                              key={service.title}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: i * 0.08 },
                              }}
                            >
                              <Link
                                to={service.path}
                                className="flex items-center p-4 rounded-xl 
                                 hover:bg-gray-100 transition-all"
                              >
                                <div className="text-primary">
                                  {service.icon}
                                </div>
                                <div className="ml-3">
                                  <p className="font-semibold text-sm">
                                    {service.title}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* BOTÃO ORÇAMENTO */}
          <motion.div
            className="hidden md:flex"
            whileHover={{ scale: 1.07, y: -2 }}
          >
            <Link
              to="/contato"
              className="
                flex items-center bg-primary text-white px-6 py-3 rounded-xl font-semibold
                shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-all
              "
            >
              Orçamento →
            </Link>
          </motion.div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
              <AnimatedHamburgerIcon isOpen={isMobileOpen} isDark={true} />
            </button>
          </div>
        </motion.div>

        {/* MOBILE MENU */}
        <motion.div
          initial="closed"
          animate={isMobileOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          className="
            md:hidden absolute top-full w-full shadow-xl 
            bg-white/90 backdrop-blur-xl mt-2 rounded-xl 
            overflow-hidden border border-white/40
          "
        >
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                onClick={closeAllMenus}
                className="text-dark font-medium hover:text-primary py-3 text-lg"
              >
                {link.title}
              </Link>
            ))}

            <Link
              to="/contato"
              onClick={closeAllMenus}
              className="
                bg-gradient-to-r from-primary to-accent text-white 
                text-center mt-4 px-6 py-3 rounded-xl font-semibold
              "
            >
              Orçamento →
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
