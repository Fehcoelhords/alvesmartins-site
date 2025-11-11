import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Ícones SVG para navegação
const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

// Dados mock dos depoimentos
const testimonialsData = [
  {
    id: 1,
    quote:
      "A perícia da Alves Martins foi crucial para identificarmos a origem das infiltrações. O laudo foi técnico, detalhado e fundamental para a solução do problema.",
    name: "João Silva",
    company: "Síndico, Condomínio Edifício Central",
  },
  {
    id: 2,
    quote:
      "Profissionalismo exemplar na avaliação do nosso imóvel. A precisão técnica e o cumprimento do prazo nos deram total segurança no processo.",
    name: "Maria Oliveira",
    company: "Gerente de Ativos, Construtora XYZ",
  },
  {
    id: 3,
    quote:
      "Contratamos a inspeção predial e o resultado superou as expectativas. Um verdadeiro raio-x da edificação que nos permitiu criar um plano de manutenção eficaz.",
    name: "Carlos Souza",
    company: "Diretor, ABC Administradora",
  },
];

// Variantes da animação (slide)
const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100, // Entra pela direita ou esquerda
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100, // Sai para direita ou esquerda
    opacity: 0,
  }),
};

export const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]); // [índice, direção]

  // Garante que o índice sempre esteja dentro dos limites do array
  const activeIndex = page % testimonialsData.length;
  const testimonial =
    testimonialsData[
      activeIndex < 0 ? testimonialsData.length + activeIndex : activeIndex
    ];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h4 className="text-lg font-semibold text-primary mb-2">
          O que dizem nossos clientes
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10">
          Depoimentos
        </h2>

        <div className="relative flex items-center justify-center min-h-[300px] overflow-hidden">
          {/* Botão Anterior */}
          <motion.button
            className="absolute left-0 z-20 p-2 bg-white rounded-full shadow-md text-primary hover:bg-gray-100 transition-colors"
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft />
          </motion.button>

          {/* AnimatePresence para o Carrossel */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute w-full px-10" // Padding para não colar nos botões
            >
              <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </p>
              <p className="text-lg font-bold text-accent">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </motion.div>
          </AnimatePresence>

          {/* Botão Próximo */}
          <motion.button
            className="absolute right-0 z-20 p-2 bg-white rounded-full shadow-md text-primary hover:bg-gray-100 transition-colors"
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Próximo depoimento"
          >
            <ChevronRight />
          </motion.button>
        </div>

        {/* Indicadores (Pontos) */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonialsData.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i ===
                (activeIndex < 0
                  ? testimonialsData.length + activeIndex
                  : activeIndex)
                  ? "bg-primary"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
