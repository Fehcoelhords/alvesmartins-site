import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Imagem do engenheiro
const aboutImageUrl =
  "https://media.licdn.com/dms/image/v2/D4D03AQFZc0hd4GbkgQ/profile-displayphoto-shrink_400_400/B4DZWK8zamGkAg-/0/1741792950880?e=1764806400&v=beta&t=Bb9fT4J1hw8LG4RbDrG34K0EZdLKMXpLv5Bn0dcgZnE";

export const About = () => {
  const ref = useRef(null);

  // Scroll progress para animações
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Imagem "Swing-In" exagerada
  const imageRotateX = useTransform(scrollYProgress, [0.3, 1], [-100, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  // Texto com fade e slide exagerado
  const textX = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 bg-gray-50 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Imagem animada */}
        <motion.div
          className="overflow-hidden rounded-xl shadow-2xl relative cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <motion.img
            src={aboutImageUrl}
            alt="Engenheiro Danilo Martins"
            className="w-full h-full object-cover aspect-square"
            style={{
              rotateX: imageRotateX,
              opacity: imageOpacity,
              scale: imageScale,
              transformOrigin: "top",
            }}
          />
          {/* Overlay de engenharia */}
          <motion.div
            className="absolute inset-0 border-2 border-dashed border-primary opacity-50 pointer-events-none"
            animate={{
              rotate: [0, 10, -10, 0],
              transition: { repeat: Infinity, duration: 8, ease: "easeInOut" },
            }}
          />
        </motion.div>

        {/* Texto animado */}
        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className="space-y-6"
        >
          <h4 className="text-lg font-semibold text-primary tracking-wide">
            Quem Somos
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-snug">
            Engenharia Diagnóstica com{" "}
            <span className="text-primary">Rigor Técnico</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A Alves Martins Engenharia é especializada em avaliação de imóveis
            urbanos, perícia em manifestações patológicas da construção e
            inspeção predial.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Com mais de 10 anos de experiência em Engenharia Civil, conduzimos
            nossos trabalhos com total conformidade às normas ABNT e boas
            práticas do IBAPE.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/sobre"
              className="bg-primary text-white font-semibold px-8 py-3 rounded-md shadow-xl hover:bg-accent transition-all duration-300"
            >
              Conheça o Fundador
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
