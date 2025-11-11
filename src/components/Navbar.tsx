import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion"; // <-- IMPORTADO 'Variants'

// Ícones SVG embutidos para evitar dependências
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Sobre", path: "/sobre" },
    { title: "Serviços", path: "/servicos" },
    { title: "Blog", path: "/blog" },
    { title: "Contato", path: "/contato" },
  ];

  // Variantes para animação do menu mobile
  // ADICIONADO A TIPAGEM ': Variants'
  const mobileMenuVariants: Variants = {
    open: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.3 } },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { ease: "easeIn", duration: 0.3 },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-primary hover:text-accent transition-colors"
        >
          ALVES MARTINS
          <span className="block text-xs font-normal tracking-wider">
            Engenharia & Construção
          </span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <motion.div key={link.title} whileHover={{ scale: 1.05 }}>
              <Link
                to={link.path}
                className="text-dark font-medium hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contato"
              className="bg-primary text-white px-5 py-2 rounded-md font-medium shadow-lg hover:bg-accent transition-all duration-300"
            >
              Orçamento
            </Link>
          </motion.div>
        </div>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Animado) */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants} // Esta linha não deve mais dar erro
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className="text-dark font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contato"
            className="bg-primary text-white text-center px-5 py-2 rounded-md font-medium shadow-lg hover:bg-accent transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Orçamento
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};
