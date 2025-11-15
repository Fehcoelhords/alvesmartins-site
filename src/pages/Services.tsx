import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { CallToAction } from "../components/CallToAction";

/* =========================================================
   ÍCONES
========================================================= */
const CheckIcon = () => (
  <motion.svg
    className="w-5 h-5 text-white mr-3 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </motion.svg>
);

const BuildingIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 mb-4 text-white"
    initial={{ rotate: -10, opacity: 0 }}
    whileInView={{ rotate: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
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
  </motion.svg>
);

const RulerIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 mb-4 text-white"
    initial={{ rotate: 10, opacity: 0 }}
    whileInView={{ rotate: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 3.75v16.5M19.5 3.75v16.5M8.25 3.75h7.5m-7.5 4.5h7.5m-7.5 4.5h7.5m-7.5 4.5h7.5"
    />
  </motion.svg>
);

const SearchIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-16 h-16 mb-4 text-white"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5v6m3-3h-6" />
  </motion.svg>
);

/* =========================================================
   DADOS DOS SERVIÇOS
========================================================= */
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
    title: "Perícia Avaliatória de Imóveis",
    description:
      "Nossas avaliações seguem rigorosamente as normas da ABNT para determinar o valor de mercado, valor de liquidação forçada ou valor de aluguel.",
    items: [
      "Avaliação para fins judiciais",
      "Definição de valor para compra e venda",
      "Garantias bancárias e financiamentos",
    ],
    path: "/servicos/avaliacao-de-imoveis",
    image:
      "https://faculdadesaomarcos.com.br/wp-content/uploads/2025/01/avaliador-imobiliario-pode-atuar-como-perito-judicial-800x500-1.jpg",
  },
  {
    icon: <BuildingIcon />,
    title: "Inspeção Predial",
    description:
      "Vistoria técnica completa para avaliar conservação, funcionamento, riscos e anomalias da edificação.",
    items: [
      "Análise de sistemas estruturais",
      "Segurança e acessibilidade",
      "Laudo de Inspeção (LIP)",
    ],
    path: "/servicos/inspecao-predial",
    image: "https://carluc.com.br/wp-content/uploads/Inspecao-Predial.jpg",
  },
  {
    icon: <SearchIcon />,
    title: "Perícia em Manifestações Patológicas",
    description:
      "Investigação técnica para identificar origem, causas e mecanismos de falhas construtivas como infiltrações, trincas e umidade.",
    items: ["Vícios construtivos", "Infiltrações", "Laudos estruturais"],
    path: "/servicos/pericia-manifestacoes-patologicas",
    image:
      "https://cdn.prod.website-files.com/5eea5dfef03bd29ec5cd9a27/64023fbda8950b68a93eb1a9_patologias-na-constru%C3%A7%C3%A3o-civil-12.webp",
  },
];

/* =========================================================
   CARD PREMIUM
========================================================= */
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
  });

  const xFrom = index % 2 === 0 ? "-120px" : "120px";
  const x = useTransform(scrollYProgress, [0, 1], [xFrom, "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={ref}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center p-10 rounded-3xl shadow-2xl"
      style={{ x, opacity, scale, backgroundColor: "rgb(11,30,74)" }}
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div
        className={`w-full overflow-hidden rounded-2xl ${
          index % 2 === 1 ? "lg:order-last" : ""
        }`}
      >
        <motion.img
          src={service.image}
          alt={service.title}
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="w-full text-white space-y-6">
        {service.icon}
        <h2 className="text-3xl md:text-4xl font-extrabold">{service.title}</h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.items.map((item) => (
            <li key={item} className="flex items-center text-gray-200">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <motion.div whileHover={{ x: 6 }}>
          <Link
            to={service.path}
            className="text-white font-semibold text-lg border-b-2 border-white/50 hover:border-white transition-all"
          >
            Ver Detalhes do Serviço →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* =========================================================
   PÁGINA SERVICES — PREMIUM
========================================================= */
export const ServicesPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="bg-white text-white overflow-x-hidden">
      {/* HERO */}
      <section ref={ref} className="relative pt-[180px] pb-40 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/page-service-fundo.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: backgroundY,
            filter: "brightness(0.5) contrast(1.1)",
          }}
        />
        <motion.div
          initial={{ y: 120, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="container mx-auto px-6 text-center relative z-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Nossas Especialidades
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow">
            Diagnósticos precisos e soluções técnicas para a integridade da sua
            construção.
          </p>
        </motion.div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 space-y-20">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.25,
                ease: "easeOut",
              }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CallToAction />
    </div>
  );
};
