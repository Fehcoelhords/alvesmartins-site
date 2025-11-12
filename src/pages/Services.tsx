import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Ícone de Check para os itens de serviço
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

// Dados dos serviços (com placeholders de imagem)
const detailedServices = [
  {
    title: "Perícia Avaliatória de Imóveis",
    description:
      "Nossas avaliações seguem rigorosamente as normas da ABNT para determinar o valor de mercado, o valor de liquidação forçada ou o valor de aluguel de propriedades.",
    items: [
      "Avaliação para fins judiciais",
      "Definição de valor para compra e venda",
      "Garantias bancárias e financiamentos",
    ],
    path: "/servicos/avaliacao-de-imoveis",
    image:
      "https://via.placeholder.com/600x400/0056b3/ffffff?text=Avaliação+de+Imóveis",
  },
  {
    title: "Inspeção Predial",
    description:
      "Realizamos uma vistoria técnica completa para avaliar o estado de conservação e funcionamento da edificação, identificando anomalias e avaliando riscos.",
    items: [
      "Análise de sistemas estruturais",
      "Verificação de segurança e acessibilidade",
      "Elaboração de Laudo de Inspeção (LIP)",
    ],
    path: "/servicos/inspecao-predial",
    image:
      "https://via.placeholder.com/600x400/0056b3/ffffff?text=Inspeção+Predial",
  },
  {
    title: "Perícia em Manifestações Patológicas",
    description:
      "Investigação técnica aprofundada para identificar a origem, causas e mecanismos de falhas construtivas como fissuras, trincas, infiltrações e umidade.",
    items: [
      "Diagnóstico de vícios construtivos",
      "Análise de infiltrações",
      "Laudos para recuperação estrutural",
    ],
    path: "/servicos/pericia-manifestacoes-patologicas",
    image:
      "https://via.placeholder.com/600x400/0056b3/ffffff?text=Manifestações+Patológicas",
  },
];

// Animação para os cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const ServicesPage = () => {
  return (
    // Fundo escuro para a página
    <div className="bg-dark text-white">
      {/* 1. Hero da Página (adaptado para o fundo escuro) */}
      <section className="py-40 bg-dark">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Nossas Especialidades
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Diagnósticos precisos para a integridade da sua construção.
          </p>
        </motion.div>
      </section>

      {/* 2. Lista de Serviços (Layout da Imagem) */}
      <section className="py-20" style={{ backgroundColor: "#1e3a8a" }}>
        {" "}
        {/* Nosso 'accent' (azul escuro) */}
        <div className="container mx-auto px-6 space-y-16">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center 
                         bg-primary p-8 rounded-2xl shadow-2xl" // Card com nosso 'primary' (azul mais claro)
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Coluna 1: Imagem (Ordem alterna) */}
              <div
                className={`w-full ${index % 2 === 1 ? "lg:order-last" : ""}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Coluna 2: Texto */}
              <div className="w-full">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Itens (como na imagem) */}
                <ul className="space-y-3 mb-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-200">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Link (estilo "Learn More") */}
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to={service.path}
                    className="text-white font-semibold text-lg transition-all"
                  >
                    Ver Detalhes do Serviço{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
