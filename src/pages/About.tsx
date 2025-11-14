import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import { CallToAction } from "../components/CallToAction";

// Placeholders para as imagens (coloque na pasta /public/)
const aboutHeroImage =
  "https://via.placeholder.com/800x800/1e3a8a/ffffff?text=Danilo+G.+A.+Martins";
const profileImg1 =
  "https://via.placeholder.com/150x150/0056b3/ffffff?text=Cliente+1";
const profileImg2 =
  "https://via.placeholder.com/150x150/1e3a8a/ffffff?text=Cliente+2";
const profileImg3 =
  "https://via.placeholder.com/150x150/0056b3/ffffff?text=Cliente+3";

// --- NOVAS VARIANTES DE ANIMAÇÃO ---

// 1. Animação "Tracking-in-Contract-Bck-Top" (para o H1)
// Traduzido do seu CSS
const trackingVariant: Variants = {
  hidden: {
    letterSpacing: "1em", // <-- ATUALIZADO
    transform: "translateZ(400px) translateY(-300px)", // <-- ATUALIZADO
    opacity: 0,
  },
  visible: {
    letterSpacing: "0em", // <-- ATUALIZADO
    transform: "translateZ(0px) translateY(0px)", // <-- ATUALIZADO
    opacity: 1,
    transition: { duration: 1.2, ease: [0.1, 0.7, 0.3, 1], delay: 0.2 }, // Duração ajustada
  },
};

// 2. Animação "Slide-in" (para o resto do conteúdo)
const slideInVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
// --- FIM DAS VARIANTES ---

export const AboutPage = () => {
  return (
    <>
      {/* 1. Seção Hero (Traduzida do seu código) */}
      <section className="relative pt-44 pb-20 bg-white dark:bg-darklight">
        <div className="container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-8 relative z-10">
          {/* Coluna da Esquerda: Texto */}
          <motion.div
            className="md:col-span-6 col-span-12 space-y-6 flex flex-col items-start justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* topper */}
            <motion.div
              className="flex gap-2 items-center"
              variants={slideInVariant}
            >
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="font-medium text-dark text-sm">
                Engenheiro Civil | CREA-SP: 5069948539
              </span>
            </motion.div>

            {/* Título H1 com a nova animação */}
            <motion.h1
              className="text-dark font-bold text-4xl md:text-5xl md:leading-[1.15]"
              variants={trackingVariant} // <-- APLICADO AQUI
            >
              Danilo G. A. Martins: Mais de 10 Anos de Atuação
            </motion.h1>

            {/* Parágrafo */}
            <motion.p
              className="text-gray-600 text-xl font-semibold"
              variants={slideInVariant}
            >
              Engenharia Diagnóstica com Rigor Técnico.
            </motion.p>

            {/* Botão */}
            <motion.div variants={slideInVariant}>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Link
                  to="/servicos"
                  className="py-3 bg-primary text-white rounded-md hover:bg-accent transition duration-300 px-8 font-semibold"
                >
                  Conheça os Serviços
                </Link>
              </motion.div>
            </motion.div>

            {/* Grupo de Avatares */}
            <motion.div
              className="flex items-center mt-12 gap-4"
              variants={slideInVariant}
            >
              <div className="flex items-center">
                <img
                  src={profileImg1}
                  alt="Cliente 1"
                  className="w-10 h-10 rounded-full border-2 border-solid border-white -ml-0 shadow-md"
                />
                <img
                  src={profileImg2}
                  alt="Cliente 2"
                  className="w-10 h-10 rounded-full border-2 border-solid border-white -ml-3 shadow-md"
                />
                <img
                  src={profileImg3}
                  alt="Cliente 3"
                  className="w-10 h-10 rounded-full border-2 border-solid border-white -ml-3 shadow-md"
                />
              </div>
              <div>
                <p className="text-sm font-normal text-gray-500 max-w-56">
                  Precisa de um laudo?{" "}
                  <Link
                    to="/contato"
                    className="text-primary hover:text-accent font-medium"
                  >
                    Fale com nossos especialistas
                  </Link>{" "}
                  e nos conte sobre seu projeto.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna da Direita: Imagem */}
          <motion.div
            className="md:col-span-6 col-span-12 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src={aboutHeroImage}
              alt="Danilo G. A. Martins - Engenheiro Civil"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Seção de CTA (Mantida) */}
      <CallToAction />
    </>
  );
};
