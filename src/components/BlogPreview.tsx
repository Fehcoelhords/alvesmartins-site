import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Variantes de animação
const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Base de imagens do portfólio
const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/portfolio-1.jpg",
    alt: "Inspeção estrutural de edifício comercial",
    category: "Inspeção",
  },
  {
    id: 2,
    src: "/portfolio-2.jpg",
    alt: "Laudo de avaliação de imóvel de alto padrão",
    category: "Avaliação",
  },
  {
    id: 3,
    src: "/portfolio-3.jpg",
    alt: "Análise de fissuras em laje com instrumentação",
    category: "Patologia",
  },
  {
    id: 4,
    src: "/portfolio-4.jpg",
    alt: "Vista da fachada após perícia de infiltração",
    category: "Patologia",
  },
  {
    id: 5,
    src: "/portfolio-5.jpg",
    alt: "Medição e levantamento para avaliação de terreno",
    category: "Avaliação",
  },
  {
    id: 6,
    src: "/portfolio-6.jpg",
    alt: "Drone inspecionando cobertura de galpão industrial",
    category: "Inspeção",
  },
];

// Controle para esconder o bloco enquanto não há conteúdo real
const shouldShowBlog = false;

const BlogPreview: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation(
    sectionVariants,
    true,
    0.1
  );
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Se não tiver conteúdo, bloco é ocultado
  if (!shouldShowBlog) return null;

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className="py-16 md:py-24 bg-primary text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-6">
          <p className="text-accent text-sm font-bold uppercase">
            Nosso Conhecimento
          </p>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold leading-tight text-white">
            Artigos Técnicos e Novidades
          </h2>

          <p className="text-lg opacity-80">
            Acompanhe nossas análises e estudos de caso sobre o setor de
            engenharia diagnóstica, perícias e inspeções.
          </p>

          <a
            href="/blog"
            className="mt-4 inline-block bg-dark-blue text-white font-heading font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200"
          >
            Ver Todos os Artigos
          </a>
        </div>

        {/* Imagem */}
        <div>
          <img
            src="/blog-placeholder.png"
            alt="Ilustração de Blog e Artigos Técnicos"
            loading="lazy"
            className="w-full h-auto object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-3xl w-full rounded-lg shadow-2xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default BlogPreview;
