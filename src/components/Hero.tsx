import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Imagem de fundo real (usando o caminho raiz /)
const heroBgImageUrl = "../hero-fundo.jpg";

export const Hero = () => {
  const ref = useRef(null);

  // --- ANIMAÇÃO PARALLAX (SÓ DA IMAGEM) ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // --- FIM PARALLAX ---

  // --- ANIMAÇÕES "GUINDASTE" (Stagger) ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso entre cada item "caindo"
        delayChildren: 0.3, // Atraso inicial
      },
    },
  };

  // Animação "Premium" (Cair do topo)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -30 }, // Começa 30px acima
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9], // Curva de ease "premium"
      },
    },
  };
  // --- FIM NOVAS ANIMAÇÕES ---

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center 
                 overflow-hidden"
    >
      {/* Imagem de Fundo (com Parallax) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBgImageUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      {/* Overlay (Garante o contraste do texto) */}
      <div className="absolute inset-0 z-10 bg-black/30"></div>

      {/* Efeito Degradê (Fade-out) */}
      <div
        className="absolute bottom-0 left-0 w-full h-48 z-10 
                   bg-gradient-to-t from-theme-dark to-transparent"
      />

      {/* Conteúdo (Layout Esquerda + Animação "Guindaste") */}
      <motion.div
        className="container mx-auto px-6 text-left z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          variants={itemVariants}
        >
          Engenharia de Precisão
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6"
          variants={itemVariants}
        >
          Para Construções Sólidas
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10"
          variants={itemVariants}
        >
          Da perícia em manifestações patológicas à avaliação de imóveis,
          entregamos soluções técnicas e inovadoras para o seu projeto.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/servicos"
              className="bg-primary text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-xl hover:bg-accent transition-all duration-300 transform"
            >
              Conheça Nossos Serviços
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
