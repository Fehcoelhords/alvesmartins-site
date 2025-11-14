import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { CallToAction } from "../components/CallToAction"; // Importa o CTA
import { RulerIcon } from "../assets/icons/RulerIcon"; // Importa o Ícone

// Ícone de Check
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-primary mr-3 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

// Placeholder de conteúdo (baseado no PDF)
const service = {
  title: "Perícia em Avaliação de Imóveis",
  subtitle:
    "Determinando o valor justo do seu patrimônio com precisão técnica.",
  description:
    "Nossas avaliações seguem rigorosamente as normas da ABNT (NBR 14.653) para determinar o valor de mercado, o valor de liquidação forçada ou o valor de aluguel de propriedades. Essencial para processos judiciais, garantias, inventários e transações comerciais.",
  items: [
    "Avaliação para fins judiciais (desapropriações, partilhas).",
    "Definição de valor para compra e venda.",
    "Garantias bancárias e financiamentos.",
  ],
  image:
    "https://via.placeholder.com/600x400/0056b3/ffffff?text=Avaliação+de+Imóveis",
};

export const ServiceAvaliacao = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // --- Animação Parallax do Hero ---
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  // --- Animação "Sircle" do Conteúdo ---
  const { scrollYProgress: contentScroll } = useScroll({
    target: contentRef,
    offset: ["start end", "center center"],
    once: true,
  });
  const contentX = useTransform(contentScroll, [0, 1], ["-50px", "0px"]);
  const contentOpacity = useTransform(contentScroll, [0, 1], [0.3, 1]);

  return (
    <div className="bg-theme-dark text-white">
      {/* 1. Hero da Página (com Parallax) */}
      <section ref={heroRef} className="relative py-40 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/page-service-fundo.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-sm z-10"></div>
        <motion.div
          className="container mx-auto px-6 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </motion.div>
      </section>

      {/* 2. Conteúdo do Serviço (Animado) */}
      <section ref={contentRef} className="py-20 bg-theme-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            style={{ x: contentX, opacity: contentOpacity }}
          >
            {/* Coluna Principal: Texto e Itens */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Sobre este Serviço
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                {service.description}
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">
                Principais Atividades:
              </h3>
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <motion.li
                    key={item}
                    className="flex items-center text-gray-200 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Coluna Lateral: Card "Glass" */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10">
                <div className="text-primary">
                  <RulerIcon />
                </div>
                <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                  Serviço de Precisão
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossos laudos são fundamentados nas normas ABNT e práticas do
                  IBAPE.
                </p>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/contato"
                    className="block w-full text-center bg-primary text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-accent transition-colors"
                  >
                    Solicitar Orçamento
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CTA Reutilizado */}
      <CallToAction />
    </div>
  );
};
