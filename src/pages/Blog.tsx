import { motion, Variants, useScroll, useTransform } from "framer-motion"; // Importado useScroll/useTransform
import { Link } from "react-router-dom";
import React, { useRef } from "react"; // Importado React e useRef

// Dados mock (sem alteração)
const blogPosts = [
  {
    id: 1,
    image: "https://via.placeholder.com/800x500/f4f6f8/1a1a1a?text=Infiltração",
    category: "Manifestações Patológicas",
    title: "5 Sinais de Infiltração que Você Não Pode Ignorar",
    link: "/blog/post-1",
    excerpt:
      "A infiltração é um dos problemas mais comuns e destrutivos em edificações...",
  },
  {
    id: 2,
    image:
      "https://via.placeholder.com/800x500/f4f6f8/1a1a1a?text=Inspeção+Predial",
    category: "Inspeção Predial",
    title: "A Importância da Inspeção Predial Preventiva",
    link: "/blog/post-2",
    excerpt:
      "Muitos proprietários só se lembram da manutenção quando o problema já está visível...",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x500/f4f6f8/1a1a1a?text=Avaliação",
    category: "Avaliação de Imóveis",
    title: "Como é Feita uma Avaliação Técnica de Imóvel?",
    link: "/blog/post-3",
    excerpt:
      "Determinar o valor de um imóvel exige mais do que uma simples pesquisa de mercado...",
  },
];

// Animação para os cards (Stagger)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animação para o container (Stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

// URL da Imagem de Fundo (Placeholder)
const blogBgImageUrl =
  "https://via.placeholder.com/1920x600/1a1a1a/ffffff?text=Blog+Técnico";

export const BlogPage = () => {
  const heroRef = useRef(null); // Referência para o Hero
  const gridRef = useRef(null); // Referência para a Grade

  // --- HOOKS DE ANIMAÇÃO (Sircle) ---
  // Parallax do Hero
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  // Animação da Grade
  const { scrollYProgress: gridScroll } = useScroll({
    target: gridRef,
    offset: ["start end", "center center"],
  });
  const gridY = useTransform(gridScroll, [0.1, 1], ["50px", "0px"]);
  const gridOpacity = useTransform(gridScroll, [0.1, 1], [0, 1]);
  // --- FIM HOOKS ---

  return (
    // --- ATUALIZADO: Fundo 'bg-theme-dark' ---
    <div className="bg-theme-dark">
      {/* Hero da Página (com Parallax) */}
      <section ref={heroRef} className="relative py-40 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${blogBgImageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-sm z-10"></div>

        <motion.div
          className="container mx-auto px-6 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">Blog Técnico</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Conhecimento e análises do setor de engenharia.
          </p>
        </motion.div>
      </section>

      {/* Grid de Posts (Dark Mode e Animação Sircle) */}
      <section ref={gridRef} className="py-20 bg-theme-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            style={{
              y: gridY,
              opacity: gridOpacity,
            }}
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-accent rounded-lg shadow-xl overflow-hidden group flex flex-col" // <-- Fundo 'bg-accent'
                variants={cardVariants}
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-medium text-primary mb-2">
                    {post.category}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {" "}
                    {/* Texto 'white' */}
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">{post.excerpt}</p>{" "}
                  {/* Texto 'gray-300' */}
                  <Link
                    to={post.link}
                    className="font-medium text-primary hover:text-gray-300 transition-colors mt-auto" // Link 'primary'
                  >
                    Ler Artigo &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
