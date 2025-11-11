import { motion, Variants } from "framer-motion"; // <-- IMPORTADO 'Variants'
import { Link } from "react-router-dom";

// Placeholder para a imagem de fundo do Hero.
// Recomendo uma imagem técnica de alta qualidade em /public/hero-bg.jpg
const heroBgStyle = {
  // Descomente e ajuste quando a imagem estiver disponível
  // backgroundImage: 'url(/hero-bg.jpg)',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
};

export const Hero = () => {
  // Animações
  // ADICIONADO A TIPAGEM ': Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Anima os filhos em sequência
      },
    },
  };

  // ADICIONADO A TIPAGEM ': Variants'
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center pt-20 bg-secondary" // pt-20 para compensar a navbar fixa
      style={heroBgStyle}
    >
      {/* Overlay (caso use imagem de fundo) */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

      <motion.div
        className="container mx-auto px-6 text-center z-10"
        variants={containerVariants} // Esta linha não deve mais dar erro
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-primary mb-4"
          variants={itemVariants}
        >
          Engenharia de Precisão
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-accent mb-6"
          variants={itemVariants}
        >
          Para Construções Sólidas
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-dark max-w-3xl mx-auto mb-10"
          variants={itemVariants}
        >
          Da perícia em manifestações patológicas à avaliação de imóveis,
          entregamos soluções técnicas e inovadoras para o seu projeto.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
