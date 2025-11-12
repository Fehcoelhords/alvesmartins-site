import { motion, Variants } from "framer-motion";

interface Props {
  isOpen: boolean;
}

// Variantes para a linha de CIMA (gira 45 graus)
const topVariants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: {
    rotate: 45,
    y: 8.5, // Ponto central (altura 5px / 2) + (espaçamento 6px) = 8.5
  },
};

// Variantes para a linha do MEIO (desaparece)
const middleVariants: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

// Variantes para a linha de BAIXO (gira -45 graus)
const bottomVariants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: {
    rotate: -45,
    y: -8.5, // Ponto central (altura 5px / 2) - (espaçamento 6px) = -8.5
  },
};

export const AnimatedHamburgerIcon = ({ isOpen }: Props) => {
  return (
    // Container com altura e largura definidas para as 3 linhas
    // h-5 (20px) = 3x linhas (1.5px) + 2x espaçamento (8.5px)
    <div className="w-6 h-5 flex flex-col justify-between">
      <motion.div
        className="h-0.5 w-full bg-dark rounded-sm" // Linha 1
        variants={topVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="h-0.5 w-full bg-dark rounded-sm" // Linha 2
        variants={middleVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="h-0.5 w-full bg-dark rounded-sm" // Linha 3
        variants={bottomVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
