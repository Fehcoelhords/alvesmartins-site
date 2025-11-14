import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

// Imagem do engenheiro (do seu código anterior)
const aboutImageUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQFZc0hd4GbkgQ/profile-displayphoto-shrink_400_400/B4DZWK8zamGkAg-/0/1741792950880?e=1764806400&v=beta&t=Bb9fT4J1hw8LG4RbDrG34K0EZdLKMXpLv5Bn0dcgZnE";

export const About = () => {
  const ref = useRef(null);

  // --- HOOKS DE ANIMAÇÃO (Sircle) ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // --- ANIMAÇÃO "SWING-IN" (Exagerada) ---
  // Traduzido do seu CSS: rotateX(-100deg) para rotateX(0deg)
  const imageRotateX = useTransform(scrollYProgress, [0.3, 1], [-100, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  // --- FIM DA ANIMAÇÃO "SWING-IN" ---

  // Animação do Bloco de Texto (Fade e Slide) - Mantida
  const textX = useTransform(scrollYProgress, [0, 1], ["50px", "0px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 bg-secondary overflow-hidden" // Fundo Cinza-Claro
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Coluna da Imagem (Animada) */}
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <motion.img
              src={aboutImageUrl}
              alt="Engenheiro Danilo Martins"
              className="w-full h-full object-cover aspect-square"
              // --- APLICANDO ANIMAÇÃO "SWING-IN" ---
              style={{
                rotateX: imageRotateX,
                opacity: imageOpacity,
                transformOrigin: "top", // <-- Essencial (do seu CSS)
              }}
            />
          </div>

          {/* Coluna do Texto (Animada) */}
          <motion.div
            style={{
              x: textX,
              opacity: textOpacity,
            }}
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
              da construção e inspeção predial.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
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
