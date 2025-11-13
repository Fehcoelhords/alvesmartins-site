import { motion, Variants, useScroll, useTransform } from "framer-motion"; // <-- Importado useScroll/useTransform
import { Link } from "react-router-dom";
import { useRef } from "react"; // <-- Importado useRef

// Dados mock do blog (sem alteração)
const blogPosts = [
  {
    id: 1,
    image: "https://via.placeholder.com/800x500/f4f6f8/1a1a1a?text=Infiltração",
    category: "Manifestações Patológicas",
    title: "5 Sinais de Infiltração que Você Não Pode Ignorar",
    link: "/blog/post-1",
  },
  {
    id: 2,
    image:
      "https://via.placeholder.com/800x500/f4f6f8/1a1a1a?text=Inspeção+Predial",
    category: "Inspeção Predial",
    title: "A Importância da Inspeção Predial Preventiva",
    link: "/blog/post-2",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/800x500/f4f6f8/1a1a1a?text=Avaliação",
    category: "Avaliação de Imóveis",
    title: "Como é Feita uma Avaliação Técnica de Imóvel?",
    link: "/blog/post-3",
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

export const BlogPreview = () => {
  const ref = useRef(null); // Referência para a seção

  // --- NOVOS HOOKS DE ANIMAÇÃO (Sircle) ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // Começa quando a seção entra na tela
  });

  // Animação do Cabeçalho (Fade e Slide)
  const headerY = useTransform(scrollYProgress, [0, 1], ["30px", "0px"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Animação da Grade de Cards (Fade e Slide)
  const gridY = useTransform(scrollYProgress, [0.1, 1], ["50px", "0px"]);
  const gridOpacity = useTransform(scrollYProgress, [0.1, 1], [0, 1]);
  // --- FIM DOS NOVOS HOOKS ---

  return (
    <section
      ref={ref} // Aplicando a referência
      className="py-20 bg-theme-dark overflow-hidden" // Adicionado overflow-hidden
    >
      <div className="container mx-auto px-6">
        {/* --- Títulos (Animados pelo Scroll) --- */}
        <motion.div
          className="text-center mb-12"
          style={{
            // Aplicando animações de scroll
            y: headerY,
            opacity: headerOpacity,
          }}
        >
          <h4 className="text-lg font-semibold text-primary mb-2">
            Nosso Blog
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Artigos Técnicos e Novidades
          </h2>
        </motion.div>

        {/* --- Cards (Animados pelo Scroll + Stagger) --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Dispara a animação 'visible' do stagger
          viewport={{ once: true, amount: 0.3 }}
          style={{
            // Aplicando animações de scroll
            y: gridY,
            opacity: gridOpacity,
          }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-accent rounded-lg shadow-xl overflow-hidden group"
              variants={cardVariants} // Cards animam (stagger)
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-primary mb-2">
                  {post.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <Link
                  to={post.link}
                  className="font-medium text-primary hover:text-gray-300 transition-colors"
                >
                  Ler Artigo &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
