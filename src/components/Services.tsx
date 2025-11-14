import React, { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

import { BuildingIcon } from "../assets/icons/BuildingIcon";
import { RulerIcon } from "../assets/icons/RulerIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

// Lista de Serviços
const servicesList = [
  {
    icon: <RulerIcon />,
    title: "Perícia Avaliatória de Imóveis",
    description:
      "Avaliações técnicas precisas para determinar o valor de mercado de imóveis.",
    path: "/servicos/avaliacao-de-imoveis",
  },
  {
    icon: <BuildingIcon />,
    title: "Inspeção Predial",
    description:
      "Diagnóstico completo da edificação, analisando sistemas construtivos e segurança.",
    path: "/servicos/inspecao-predial",
  },
  {
    icon: <SearchIcon />,
    title: "Perícia em Manifestações Patológicas",
    description:
      "Investigação de falhas construtivas para identificar causas e soluções.",
    path: "/servicos/pericia-manifestacoes-patologicas",
  },
];

// Animação dos itens (Stagger)
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
      delayChildren: 0.3, // Atraso para os cards aparecerem
    },
  },
};

export const Services = () => {
  const ref = useRef(null);

  // --- HOOKS DE ANIMAÇÃO (Sircle) ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 60%"], // Animação começa e termina mais rápido
  });

  // --- ATUALIZADO: Animação "Exagerada" ---
  // Em vez de 'scale', agora usamos 'y' (vertical) e 'opacity'
  const containerY = useTransform(scrollYProgress, [0, 1], ["80px", "0px"]); // Move 80px
  const containerOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade-in completo
  // --- FIM DA ATUALIZAÇÃO ---

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 bg-secondary overflow-hidden" // Fundo cinza-claro
    >
      <div className="container mx-auto px-6">
        {/* Container Flutuante (Estilo Pipely) */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          style={{
            y: containerY, // <-- Aplicando animação Y
            opacity: containerOpacity, // <-- Aplicando animação Opacity
          }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <p className="text-base font-medium text-gray-500 mb-1">
                // Nossas Soluções
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark">
                Serviços Especializados para
                <span className="block text-primary">
                  Engenharia Diagnóstica
                </span>
              </h2>
            </div>

            <motion.div
              className="mt-4 md:mt-0 md:ml-4 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/servicos"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-accent transition-all duration-300"
              >
                Ver Todos os Serviços
              </Link>
            </motion.div>
          </div>

          {/* Cards (Stagger) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {servicesList.map((service) => (
              <motion.div
                key={service.title}
                className="group"
                variants={itemVariants}
              >
                <Link to={service.path} className="block h-full">
                  <div
                    className="bg-secondary p-8 rounded-lg h-full
                               transition-all duration-300 
                               hover:shadow-lg hover:scale-105"
                  >
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-primary text-white">
                        {React.cloneElement(service.icon, {
                          className: "h-8 w-8 text-white",
                        })}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-dark mt-6 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="text-primary font-semibold">
                      Saiba Mais <span aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
