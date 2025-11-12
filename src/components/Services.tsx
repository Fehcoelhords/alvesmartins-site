import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { BuildingIcon } from "../assets/icons/BuildingIcon";
import { RulerIcon } from "../assets/icons/RulerIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

// Dados dos serviços com os links dedicados
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

// Animação para o container (stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Anima cada filho com 0.2s de diferença
    },
  },
};

// Animação para os itens (fade in e subir)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* --- Cabeçalho (Layout da Imagem) --- */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          {/* Títulos */}
          <div>
            <p className="text-base font-medium text-gray-500 mb-1">
              // Nossas Soluções
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Serviços Especializados para
              <span className="block text-primary">Engenharia Diagnóstica</span>
            </h2>
          </div>

          {/* Botão "Ver Todos" */}
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
        </motion.div>

        {/* --- Cards (Layout da Imagem) --- */}
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
              className="group" // Adicionado 'group'
              variants={itemVariants}
            >
              {/* O Link agora envolve o card inteiro para melhor UX */}
              <Link to={service.path} className="block h-full">
                <div
                  className="bg-white p-8 rounded-lg shadow-lg h-full
                                border-b-4 border-transparent 
                                group-hover:border-primary transition-colors duration-300"
                >
                  {/* Ícone Quadrado */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-primary text-white">
                      {/* Força o ícone a ter w-8, h-8 e cor branca */}
                      {React.cloneElement(service.icon, {
                        className: "h-8 w-8 text-white",
                      })}
                    </div>
                  </div>

                  {/* Conteúdo de Texto */}
                  <h3 className="text-xl font-bold text-dark mt-6 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Link "Saiba Mais" (Sempre visível) */}
                  <div className="text-primary font-semibold">
                    Saiba Mais <span aria-hidden="true">&rarr;</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
