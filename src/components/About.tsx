import { motion, Variants, useScroll, useTransform } from "framer-motion"; // <-- Importado useScroll/useTransform
import { Link } from "react-router-dom";
import { useRef } from "react"; // <-- Importado useRef

// Imagem placeholder
const aboutImageUrl =
  "https://via.placeholder.com/800x600/f4f6f8/1a1a1a?text=Alves+Martins+Engenharia";

export const About = () => {
  const ref = useRef(null); // Referência para a seção

  // --- NOVOS HOOKS DE ANIMAÇÃO (Sircle) ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // Começa quando a seção entra na tela
  });

  // Animação da Imagem (Parallax)
  // Move de -30px para 30px
  const imageY = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  // Animação do Bloco de Texto (Fade e Slide)
  const textX = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // --- FIM DOS NOVOS HOOKS ---

  return (
    <section
      ref={ref} // Aplicando a referência
      id="about"
      className="py-20 bg-theme-dark overflow-hidden" // Adicionado overflow-hidden
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem (Animada) */}
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <motion.img
              src={aboutImageUrl}
              alt="Engenharia e Construção"
              className="w-full h-auto object-cover aspect-video"
              style={{ y: imageY }} // <-- Aplicando Parallax
            />
          </div>

          {/* Coluna do Texto (Animada) */}
          <motion.div
            style={{
              // <-- Aplicando animações de scroll
              x: textX,
              opacity: textOpacity,
            }}
          >
            <h4 className="text-lg font-semibold text-primary mb-2">
              Quem Somos
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Engenharia Diagnóstica com Rigor Técnico
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              A Alves Martins Engenharia é uma empresa especializada em
              avaliação de imóveis urbanos, perícia em manifestações patológicas
              da construção e inspeção predial.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Com mais de 10 anos de atuação em Engenharia Civil, conduzimos
              nossos trabalhos com total conformidade às normas técnicas da ABNT
              e às boas práticas do IBAPE.
            </p>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/sobre"
                className="bg-primary text-white font-medium px-8 py-3 rounded-md shadow-lg hover:bg-accent transition-all duration-300"
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
