import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// Dados mock (podem ser os mesmos ou expandidos)
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
  // (Poderíamos adicionar mais posts aqui)
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const BlogPage = () => {
  return (
    <div className="bg-white">
      {/* Hero da Página */}
      <section className="py-40 bg-secondary">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Blog Técnico</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Conhecimento e análises do setor de engenharia.
          </p>
        </motion.div>
      </section>

      {/* Grid de Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // 0.1 para grids grandes
            transition={{ staggerChildren: 0.2 }}
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden group flex flex-col"
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
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <Link
                    to={post.link}
                    className="font-medium text-accent hover:text-primary transition-colors mt-auto"
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
