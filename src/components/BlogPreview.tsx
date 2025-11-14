import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

// --- ATUALIZADO: Imagem Real ---
const blogPreviewImage = "/blog_image.jpg";

export const BlogPreview = () => {
  const ref = useRef(null);

  // --- HOOKS DE ANIMAÇÃO (Sircle) ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Animação do Container Flutuante (Zoom e Fade)
  const containerScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  // --- FIM HOOKS ---

  return (
    <section
      ref={ref}
      id="blog-preview"
      className="py-20 bg-theme-dark overflow-hidden" // Fundo cinza-claro
    >
      <div className="container mx-auto px-6">
        {/* Container Flutuante (Estilo Pipely) */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          style={{
            scale: containerScale,
            opacity: containerOpacity,
          }}
        >
          {/* Grid de 2 colunas: [Texto] [Imagem] */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Coluna 1: Texto e Botão */}
            <div>
              <p className="text-base font-medium text-gray-500 mb-2">
                // Nosso Conhecimento
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                Artigos Técnicos e Novidades
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Acompanhe nossas análises e estudos de caso sobre o setor de
                engenharia diagnóstica, perícias e inspeções.
              </p>

              <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
                <Link
                  to="/blog"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-accent transition-all duration-300"
                >
                  Ver Todos os Artigos
                </Link>
              </motion.div>
            </div>

            {/* Coluna 2: Imagem Grande */}
            <div className="w-full h-full">
              <img
                src={blogPreviewImage} // <-- SUA IMAGEM ESTÁ AQUI
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
