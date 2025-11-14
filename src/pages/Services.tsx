import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { CallToAction } from "../components/CallToAction"; // <-- IMPORTADO O CTA

// --- Ícones (Sem alteração) ---
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
const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 mb-4 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3.75v16.5h15V3.75M8.25 3.75h7.5v16.5h-7.5V3.75Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5h.008v.008H12v-.008Zm0-3h.008v.008H12v-.008Zm0-3h.008v.008H12V10.5Zm0-3h.008v.008H12V7.5Z"
    />
  </svg>
);
const RulerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 mb-4 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 3.75v16.5M19.5 3.75v16.5M8.25 3.75h7.5m-7.5 4.5h7.5m-7.5 4.5h7.5m-7.5 4.5h7.5"
    />
  </svg>
);
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 mb-4 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5v6m3-3h-6" />
  </svg>
);

// --- Tipos e Dados (Sem alteração) ---
interface ServiceItem {
  icon: JSX.Element;
  title: string;
  description: string;
  items: string[];
  path: string;
  image: string;
}
const detailedServices: ServiceItem[] = [
  {
    icon: <RulerIcon />,
    title: "Perícia em Avaliação de Imóveis",
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
    icon: <BuildingIcon />,
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
    icon: <SearchIcon />,
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

// --- Sub-componente: ServiceCard (Sem alteração) ---
const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
    once: true,
  });
  const xFrom = index % 2 === 0 ? "-50px" : "50px";
  const x = useTransform(scrollYProgress, [0, 1], [xFrom, "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center 
                 p-8 rounded-2xl shadow-2xl
                 bg-white/10 backdrop-blur-lg 
                 border border-white/10 
                 transition-all duration-300 hover:border-primary"
      style={{ x, opacity }}
      whileHover={{ y: -8 }}
    >
      <div
        className={`w-full ${
          index % 2 === 1 ? "lg:order-last" : ""
        } overflow-hidden rounded-lg`}
      >
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-auto object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="w-full">
        {service.icon}
        <h2 className="text-3xl font-bold text-white mb-4 mt-2">
          {service.title}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          {service.description}
        </p>
        <ul className="space-y-3 mb-8">
          {service.items.map((item) => (
            <li key={item} className="flex items-center text-gray-200">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <motion.div whileHover={{ x: 5 }}>
          <Link
            to={service.path}
            className="text-white font-semibold text-lg transition-all hover:text-primary"
          >
            Ver Detalhes do Serviço <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- REMOVIDO: Sub-componente CTA movido para arquivo próprio ---

export const ServicesPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="bg-theme-dark text-white">
      {/* 1. Hero da Página (com Parallax) */}
      <section ref={ref} className="relative py-40 overflow-hidden">
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
            Nossas Especialidades
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Diagnósticos precisos para a integridade da sua construção.
          </p>
        </motion.div>
      </section>

      {/* 2. Lista de Serviços */}
      <section className="py-20 bg-theme-dark overflow-hidden">
        <div className="container mx-auto px-6 space-y-16">
          {detailedServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* --- 3. CTA Importado --- */}
      <CallToAction />
    </div>
  );
};
