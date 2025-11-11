import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Imagem placeholder (mantida)
const aboutImageUrl =
  "https://via.placeholder.com/800x600/f4f6f8/1a1a1a?text=Alves+Martins+Engenharia";

export const About = () => {
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem (Animada) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <img
              src={aboutImageUrl}
              alt="Engenharia e Construção"
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-video"
            />
          </motion.div>

          {/* Coluna do Texto (Animada e ATUALIZADA) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <h4 className="text-lg font-semibold text-primary mb-2">
              Quem Somos
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Engenharia Diagnóstica com Rigor Técnico
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A Alves Martins Engenharia é uma empresa especializada em
              avaliação de imóveis urbanos, perícia em manifestações patológicas
              da [cite_start]construção e inspeção predial[cite: 20].
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              [cite_start]Com mais de 10 anos de atuação em Engenharia
              Civil[cite: 22, 36], conduzimos nossos trabalhos com total
              conformidade às normas técnicas da ABNT e [cite_start]às boas
              práticas do IBAPE[cite: 20].
            </p>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/sobre"
                className="bg-accent text-white font-medium px-8 py-3 rounded-md shadow-lg hover:bg-primary transition-all duration-300"
              >
                Conheça o Fundador
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
