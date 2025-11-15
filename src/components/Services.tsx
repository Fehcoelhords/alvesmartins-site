import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const servicesList = [
  {
    title: "Perícia em Avaliação de imóveis",
    path: "/servicos/avaliacao-de-imoveis",
    image:
      "https://faculdadesaomarcos.com.br/wp-content/uploads/2025/01/avaliador-imobiliario-pode-atuar-como-perito-judicial-800x500-1.jpg",
  },
  {
    title: "Laudos técnicos",
    path: "/servicos/pericia-manifestacoes-patologicas",
    image:
      "https://www.bhgengenharia.com/wp-content/uploads/2024/03/Elaboracao-de-Laudo-Tecnico-BHG-Engenharia-3.webp",
  },
  {
    title: "Inspeção Predial",
    path: "/servicos/inspecao-predial",
    image: "https://carluc.com.br/wp-content/uploads/Inspecao-Predial.jpg",
  },
];

export const Services = () => {
  const headerRef = useScrollAnimation("fadeInDown");
  const gridRef = useScrollAnimation("fadeInUp");

  return (
    <section id="services-1354" className="py-24 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start gap-16">
        {/* Cabeçalho */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "6px" }}
            animate={{ opacity: 1, letterSpacing: "1px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1"
          >
            Nossas Soluções
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-dark max-w-2xl leading-tight"
          >
            Serviços Especializados para{" "}
            <span className="text-primary">Engenharia Diagnóstica</span>
          </motion.h2>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.45, delay: i * 0.15 },
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                rotateX: 8,
                rotateY: -8,
                transition: { type: "spring", stiffness: 150, damping: 10 },
              }}
              className="group h-80 rounded-2xl overflow-hidden shadow-xl relative z-10 
                        hover:shadow-2xl hover:shadow-primary/20 
                        transition-all duration-500"
            >
              {/* Link clicável */}
              <Link
                to={service.path}
                className="absolute inset-0 z-20 flex justify-center items-center p-6 text-center"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ letterSpacing: "1px", scale: 1.05 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-2xl font-bold text-white drop-shadow-lg"
                >
                  {service.title}
                </motion.h3>
              </Link>

              {/* Overlay premium */}
              <div
                className="absolute inset-0 z-10 
                              bg-gradient-to-t from-black/70 via-black/40 to-transparent
                              group-hover:from-primary/80 
                              group-hover:via-primary/50 
                              transition-all duration-500"
              />

              {/* Imagem com animação */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="absolute inset-0 z-0 h-full w-full object-cover 
                           group-hover:scale-125 group-hover:rotate-1
                           transition-transform duration-[900ms] ease-out"
              />

              {/* Glow ao redor */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl 
                              opacity-0 group-hover:opacity-40 
                              transition-all duration-500 
                              shadow-[0_0_30px_10px_rgba(0,115,230,0.5)]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
