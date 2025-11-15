import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

// Imagem de preview do blog
const blogPreviewImage = "/blog_image.jpg";

export const BlogPreview = () => {
  const ref = useRef(null);

  // Hooks de animação ao rolar
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Animação do container (zoom e fade)
  const containerScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section
      ref={ref}
      id="blog-preview"
      className="py-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Container Flutuante */}
        <motion.div
          className="bg-blue-950 rounded-2xl shadow-xl p-8 md:p-12"
          style={{
            scale: containerScale,
            opacity: containerOpacity,
          }}
        >
          {/* Grid: Texto à esquerda, Imagem à direita */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Coluna 1: Texto e Botão */}
            <div>
              <p className="text-base font-medium text-white mb-2">
                Nosso Conhecimento
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Artigos Técnicos e Novidades
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Acompanhe nossas análises e estudos de caso sobre o setor de
                engenharia diagnóstica, perícias e inspeções.
              </p>

              <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
                <Link
                  to="/blog"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Ver Todos os Artigos
                </Link>
              </motion.div>
            </div>

            {/* Coluna 2: Imagem */}
            <div className="w-full h-full">
              <img
                src={blogPreviewImage}
                alt="Blog Técnico Alves Martins"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
