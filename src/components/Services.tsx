import React, { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// --- Ícones (Removidos, pois este template não os usa) ---
// import { BuildingIcon } from "../assets/icons/BuildingIcon";
// import { RulerIcon } from "../assets/icons/RulerIcon";
// import { SearchIcon } from "../assets/icons/SearchIcon";

// --- ATUALIZADO: Lista de Serviços com novas imagens ---
const servicesList = [
  {
    title: "Perícia em Avaliação de imóveis",
    path: "/servicos/avaliacao-de-imoveis",
    image:
      "https://faculdadesaomarcos.com.br/wp-content/uploads/2025/01/avaliador-imobiliario-pode-atuar-como-perito-judicial-800x500-1.jpg", // Foto de plantas/blueprints
  },
  {
    title: "Laudos técnicos",
    path: "/servicos/pericia-manifestacoes-patologicas",
    image:
      "https://www.bhgengenharia.com/wp-content/uploads/2024/03/Elaboracao-de-Laudo-Tecnico-BHG-Engenharia-3.webp", // Foto de prancheta/checklist
  },
  {
    title: "Inspeção Predial",
    path: "/servicos/inspecao-predial",
    image: "https://carluc.com.br/wp-content/uploads/Inspecao-Predial.jpg", // Foto de engenheiro inspecionando
  },
];

// Animação dos itens
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animação do container (Stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const Services = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["30px", "0px"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const gridY = useTransform(scrollYProgress, [0.1, 1], ["50px", "0px"]);
  const gridOpacity = useTransform(scrollYProgress, [0.1, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="services-1354"
      className="py-20 bg-secondary overflow-hidden" // Fundo cinza-claro
    >
      <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start gap-12">
        {/* Cabeçalho */}
        <motion.div
          className="text-center md:text-left"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <p className="text-base font-medium text-gray-500 mb-1">
            // Nossas Soluções
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark max-w-2xl">
            Serviços Especializados para
            <span className="text-primary"> Engenharia Diagnóstica</span>
          </h2>
        </motion.div>

        {/* Grade de Cards (Estilo do seu CSS) */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ y: gridY, opacity: gridOpacity }}
        >
          {servicesList.map((service) => (
            // Card Item
            <div
              key={service.title}
              className="group h-80 rounded-2xl overflow-hidden shadow-xl relative z-10"
            >
              {/* Link (Cobre o card todo) */}
              <Link
                to={service.path}
                className="absolute inset-0 z-20 flex justify-center items-center p-6 text-center"
              >
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </Link>

              {/* Overlay (Muda de cor no hover) */}
              <div
                className="absolute inset-0 z-10 bg-black opacity-40 
                           group-hover:bg-primary group-hover:opacity-80 
                           transition-all duration-300"
              />

              {/* Imagem de Fundo (Dá zoom no hover) */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 z-0 h-full w-full object-cover 
                           group-hover:scale-110 
                           transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
