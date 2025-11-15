import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Mail } from "lucide-react";

export default function PremiumContactSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={ref} className="relative py-28 bg-white overflow-hidden">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ scale: cardScale, opacity: cardOpacity, y: cardY }}
          className="max-w-3xl mx-auto backdrop-blur-xl bg-white/80 border border-white/30 p-12 rounded-3xl shadow-2xl"
        >
          {/* ICON */}
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full bg-gradient-to-br from-primary to-accent shadow-xl">
              <Mail className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Pronto para Iniciar Seu Projeto?
          </h2>

          {/* SUBTEXT */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Entre em contato e receba uma análise profissional e detalhada.
            Nossa equipe está pronta para transformar sua ideia em realidade com
            excelência e precisão.
          </p>

          {/* CTA BUTTON */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/contato"
              className="flex items-center gap-2 justify-center w-max mx-auto px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-xl bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
            >
              Solicitar Orçamento
              <span className="text-2xl">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
