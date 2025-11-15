import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Ícone de Email animado
const MailIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-12 h-12 text-white"
    whileHover={{ rotate: [0, 10, -10, 0], scale: 1.2 }}
    transition={{ duration: 1, repeat: Infinity }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </motion.svg>
);

export const CallToAction = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Efeitos de scroll: escala, opacidade e leve rotação
  const cardScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-3, 0]);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800"
    >
      {/* --- Background tecnológico animado --- */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ rotate: cardRotate, opacity: cardOpacity }}
      >
        {/* Linhas e grids sutis */}
        <div className="w-full h-full bg-grid-pattern opacity-20" />
        <motion.div
          className="absolute w-full h-full bg-gradient-to-tr from-primary/10 to-accent/10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          className="bg-gradient-to-r from-primary to-accent p-14 rounded-3xl shadow-2xl shadow-accent/40 border border-white/10"
          style={{ scale: cardScale, opacity: cardOpacity }}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-5 bg-white/10 backdrop-blur-md rounded-full shadow-lg">
              <MailIcon />
            </div>
          </div>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pronto para Iniciar seu Projeto?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Entre em contato conosco para um diagnóstico preciso ou uma
            avaliação técnica. Nossa equipe está pronta para atendê-lo com
            excelência e tecnologia de ponta.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contato"
              className="flex items-center justify-center w-max mx-auto bg-gradient-to-r from-white/90 to-white/70 text-primary px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-accent hover:to-primary transition-all duration-300 transform text-lg md:text-xl"
            >
              Solicitar um Orçamento
              <span aria-hidden="true" className="ml-2 text-2xl">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
