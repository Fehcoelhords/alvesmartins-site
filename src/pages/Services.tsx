import { motion } from "framer-motion";
import { BuildingIcon } from "../assets/icons/BuildingIcon";
import { RulerIcon } from "../assets/icons/RulerIcon";
import { SearchIcon } from "../assets/icons/SearchIcon";

// Conteúdo expandido dos serviços
const detailedServices = [
  {
    icon: <RulerIcon className="w-16 h-16 mb-4" />,
    title: "Perícia Avaliatória de Imóveis",
    description:
      "Nossas avaliações seguem rigorosamente as normas da ABNT (NBR 14.653) para determinar o valor de mercado, o valor de liquidação forçada ou o valor de aluguel de propriedades. Essencial para processos judiciais, garantias, inventários e transações comerciais.",
    items: [
      "Avaliação para fins judiciais (desapropriações, partilhas).",
      "Definição de valor para compra e venda.",
      "Garantias bancárias e financiamentos.",
    ],
  },
  {
    icon: <BuildingIcon className="w-16 h-16 mb-4" />,
    title: "Inspeção Predial",
    description:
      "Realizamos uma vistoria técnica completa para avaliar o estado de conservação e funcionamento da edificação. O objetivo é identificar anomalias, avaliar riscos e fornecer um plano de manutenção preventiva, garantindo a segurança e a conformidade legal.",
    items: [
      "Análise de sistemas estruturais, elétricos e hidráulicos.",
      "Verificação de acessibilidade e segurança contra incêndio.",
      "Elaboração de Laudo de Inspeção Predial (LIP).",
    ],
  },
  {
    icon: <SearchIcon className="w-16 h-16 mb-4" />,
    title: "Perícia em Manifestações Patológicas",
    description:
      "Investigação técnica aprofundada para identificar a origem, causas e mecanismos de falhas construtivas como fissuras, trincas, infiltrações, umidade e deslocamentos. Elaboramos laudos periciais detalhados com as soluções corretivas necessárias.",
    items: [
      "Diagnóstico de vícios construtivos.",
      "Análise de infiltrações e problemas de impermeabilização.",
      "Laudos para recuperação estrutural.",
    ],
  },
];

export const ServicesPage = () => {
  return (
    <div className="bg-white">
      {/* 1. Hero da Página Serviços */}
      <section className="py-40 bg-secondary">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-primary mb-4">
            Nossas Especialidades
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Diagnósticos precisos para a integridade da sua construção.
          </p>
        </motion.div>
      </section>

      {/* 2. Lista Detalhada de Serviços */}
      <section className="py-20">
        <div className="container mx-auto px-6 space-y-16">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.title}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`} // Alterna o layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              {/* Ícone e Título (coluna 1) */}
              <div className="md:w-1/3 text-center md:text-left flex flex-col items-center md:items-start">
                {service.icon}
                <h2 className="text-3xl font-bold text-accent mb-4">
                  {service.title}
                </h2>
              </div>

              {/* Descrição e Itens (coluna 2) */}
              <div className="md:w-2/3">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center">
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
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
