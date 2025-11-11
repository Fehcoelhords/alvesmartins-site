import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Dados mock do blog
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

// Animação para os cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const BlogPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg font-semibold text-primary mb-2">
            Nosso Blog
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Artigos Técnicos e Novidades
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden group"
              variants={cardVariants}
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
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <Link
                  to={post.link} // Note: Esses links levarão a um 404 por enquanto
                  className="font-medium text-accent hover:text-primary transition-colors"
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
