import React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: i * 0.5, type: "spring", duration: 2, bounce: 0 },
      opacity: { delay: i * 0.5, duration: 0.01 },
    },
  }),
};

const pulse = {
  hidden: { scale: 0.8, opacity: 0.5 },
  visible: {
    scale: [0.8, 1.2, 0.8],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const TechBuildingIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Círculo de Fundo "Radar" */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[350px] h-[350px] border border-accent-cyan/20 rounded-full border-dashed"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-[250px] h-[250px] bg-accent/10 rounded-full blur-2xl"
        />
      </div>

      {/* SVG do Prédio Abstrato */}
      <motion.svg
        width="300"
        height="400"
        viewBox="0 0 200 300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]"
      >
        {/* Estrutura Principal */}
        <motion.path
          d="M50 280 L50 80 L100 40 L150 80 L150 280 Z"
          stroke="#00D4FF"
          strokeWidth="2"
          fill="rgba(10, 43, 77, 0.8)"
          variants={draw}
          custom={0}
        />

        {/* Linhas Internas (Andares) */}
        <motion.path
          d="M50 120 L150 120"
          stroke="#2E6DA4"
          strokeWidth="1"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M50 160 L150 160"
          stroke="#2E6DA4"
          strokeWidth="1"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M50 200 L150 200"
          stroke="#2E6DA4"
          strokeWidth="1"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M50 240 L150 240"
          stroke="#2E6DA4"
          strokeWidth="1"
          variants={draw}
          custom={2.5}
        />

        {/* Pontos de "Inspeção" (Anomalias Detectadas) */}
        <motion.circle cx="70" cy="100" r="3" fill="#ff4d4d" variants={pulse} />
        <motion.circle
          cx="130"
          cy="180"
          r="3"
          fill="#00D4FF"
          variants={pulse}
        />
        <motion.circle cx="90" cy="220" r="3" fill="#00D4FF" variants={pulse} />

        {/* Scanner Line Animada */}
        <motion.line
          x1="40"
          y1="40"
          x2="160"
          y2="40"
          stroke="#00D4FF"
          strokeWidth="2"
          animate={{ y: [0, 240, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {/* Labels Flutuantes */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="absolute top-20 left-0 bg-primary/90 border border-accent-cyan/50 px-3 py-1 rounded text-[10px] text-accent-cyan uppercase tracking-widest shadow-neon"
      >
        Análise Estrutural
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-20 right-0 bg-primary/90 border border-accent/50 px-3 py-1 rounded text-[10px] text-white uppercase tracking-widest"
      >
        Patologia Detectada
      </motion.div>
    </div>
  );
};

export default TechBuildingIllustration;
