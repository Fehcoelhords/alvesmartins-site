import { motion, Variants } from "framer-motion";
import { BuildingIcon } from "../assets/icons/BuildingIcon";
import { RulerIcon } from "../assets/icons/RulerIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

// Definição dos serviços
const servicesList = [
  {
    icon: <RulerIcon />,
    title: "Perícia Avaliatória de Imóveis",
    description:
      "Avaliações técnicas precisas para determinar o valor de mercado de imóveis urbanos e rurais.",
  },
  {
    icon: <BuildingIcon />,
    title: "Inspeção Predial",
    description:
      "Diagnóstico completo da edificação, analisando sistemas construtivos, segurança e manutenção.",
  },
  {
    icon: <SearchIcon />,
    title: "Perícia em Manifestações Patológicas",
    description:
      "Investigação de falhas construtivas (fissuras, infiltrações) para identificar causas e soluções.",
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
      {" "}
      {/* Fundo cinza claro */}
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants} // Usando itemVariants para o título
        >
          <h4 className="text-lg font-semibold text-primary mb-2">
            Nossas Soluções
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">
            Serviços Especializados
          </h2>
        </motion.div>

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
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
              variants={itemVariants} // Animação individual
              whileHover={{ scale: 1.03 }} // Efeito de hover sutil
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-accent mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
