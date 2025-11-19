import React from "react";
import { motion, Variants } from "framer-motion";

// Variantes de animação para o container (pai)
const containerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

// Variantes de animação para os itens (filhos)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/hero-fundo.png')" }}
      />

      {/* ================================================================== */}
      {/* CAMADAS DE EFEITOS E GRADIENTES */}
      {/* ================================================================== */}

      {/* 1. Overlay Azul Escuro Geral (Para escurecer a imagem e dar tom azulado) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#051A30] via-[#0A2B4D]/90 to-[#0A2B4D]/60 z-10 mix-blend-multiply" />

      {/* 2. Textura Tecnológica (Opcional) */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10 z-10" />

      {/* 3. DEGRADÊ DE TRANSIÇÃO PARA O BRANCO (O EFEITO PEDIDO) */}
      {/* Isso cria a fusão suave entre o Hero e a seção de Serviços */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F8FAFC] z-20 pointer-events-none" />

      {/* ================================================================== */}
      {/* CONTEÚDO */}
      {/* ================================================================== */}
      <div className="relative z-20 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm"
          >
            Engenharia Diagnóstica de Alta Precisão
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            Soluções Técnicas para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-accent-cyan">
              Garantir seu Patrimônio
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-blue-100 font-light mb-10 max-w-2xl leading-relaxed"
          >
            Especialistas em Laudos, Avaliações e Patologia das Construções.
            Unimos rigor técnico, normas ABNT e tecnologia para diagnósticos
            incontestáveis.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="/contato"
              className="px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(46,109,164,0.4)] hover:shadow-neon hover:-translate-y-1"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-lg backdrop-blur-sm transition-all"
            >
              Nossos Serviços
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de Scroll (Posicionado para não ser engolido pelo degradê branco) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-cyan to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
