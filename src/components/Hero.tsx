import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const heroBgImageUrl = "/hero-fundo.png";

export const Hero = () => {
  const h1Ref = useScrollAnimation("fadeInDown");
  const h2Ref = useScrollAnimation("fadeInUp");
  const pRef = useScrollAnimation("fadeInUp");
  const btnRef = useScrollAnimation("bounceIn");

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBgImageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center -20px",
        }}
      />

      {/* Overlay azul escuro para engenharia */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>

      {/* Fade-out suave para o próximo bloco */}
      <div className="absolute bottom-0 left-0 w-full h-48 z-10 bg-gradient-to-t from-white to-transparent" />

      {/* Conteúdo */}
      <div className="container mx-auto px-6 text-left z-20">
        <h1
          ref={h1Ref}
          className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl"
        >
          Engenharia de Precisão
        </h1>

        <h2
          ref={h2Ref}
          className="text-xl md:text-3xl font-semibold text-blue-300 mt-2 mb-6 drop-shadow-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Soluções Técnicas para Construções Seguras
        </h2>

        <p
          ref={pRef}
          className="text-base md:text-xl text-white/90 max-w-3xl leading-relaxed mb-10"
          style={{ animationDelay: "0.4s" }}
        >
          Perícias, avaliações e diagnósticos completos para garantir a
          integridade, segurança e o valor real do seu patrimônio.
        </p>

        <div ref={btnRef} style={{ animationDelay: "0.6s" }}>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/servicos"
              className="bg-blue-600 text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all"
            >
              Conheça Nossos Serviços
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
