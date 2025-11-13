import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Ícone de Email
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-12 h-12 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

export const CallToAction = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section ref={ref} className="py-20 bg-theme-dark overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="bg-accent p-12 rounded-lg shadow-xl"
          style={{ scale: cardScale, opacity: cardOpacity }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full">
              <MailIcon />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para Iniciar seu Projeto?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Entre em contato conosco para um diagnóstico preciso ou uma
            avaliação técnica. Nossa equipe está pronta para atendê-lo.
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contato"
              className="flex items-center justify-center w-max mx-auto bg-gradient-to-r from-primary to-accent text-white 
                         px-6 py-3 rounded-lg font-semibold shadow-lg 
                         hover:shadow-xl hover:from-accent hover:to-primary 
                         transition-all duration-300 transform"
            >
              Solicitar um Orçamento
              <span aria-hidden="true" className="ml-1.5">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
