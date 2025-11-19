import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Ruler, HardHat, Building, PenTool } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const servicesList = [
  {
    title: "Avaliação de Imóveis",
    description:
      "Laudos com inferência estatística para garantir o valor real de mercado do seu patrimônio, seguindo a NBR 14.653.",
    path: "/servicos/avaliacao-de-imoveis",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Inspeção Predial",
    description:
      "Diagnóstico completo da saúde da edificação, identificando falhas, riscos e anomalias construtivas.",
    path: "/servicos/inspecao-predial",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Patologia das Construções",
    description:
      "Investigação técnica para descobrir as causas de fissuras, infiltrações e problemas estruturais.",
    path: "/servicos/patologia-das-construcoes",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

const Services: React.FC = () => {
  const { ref, controls, variants } = useScrollAnimation(
    containerVariants,
    true,
    0.1
  );

  return (
    <section
      id="services"
      className="py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* ======================================================== */}
      {/* DECORAÇÃO DE FUNDO (BLUEPRINT / MARCA D'ÁGUA)          */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Régua / Ferramenta (Canto Superior Esquerdo) */}
        <div className="absolute -top-10 -left-10 text-gray-300 opacity-30 rotate-12 transform">
          <Ruler size={400} strokeWidth={1} />
        </div>

        {/* Capacete (Canto Inferior Direito) */}
        <div className="absolute -bottom-20 -right-20 text-gray-300 opacity-30 -rotate-12 transform">
          <HardHat size={350} strokeWidth={1} />
        </div>

        {/* Prédio (Centro Fundo) */}
        <div className="absolute top-1/3 right-10 text-gray-300 opacity-20">
          <Building size={200} strokeWidth={1} />
        </div>

        {/* Caneta/Projeto (Esquerda Meio) */}
        <div className="absolute bottom-1/3 left-10 text-gray-300 opacity-20 rotate-45">
          <PenTool size={150} strokeWidth={1} />
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
            Excelência Técnica
          </span>
          {/* Título em Azul Escuro para contraste no fundo branco */}
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary drop-shadow-sm">
            Nossos Serviços Especializados
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Soluções completas para garantir a segurança e a valorização do seu
            patrimônio.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -12 }}
              // Os cards continuam escuros para manter a identidade "Tech", mas agora contrastam com o fundo branco
              className="group relative h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-primary border border-primary/10"
            >
              <Link to={service.path} className="block w-full h-full">
                {/* Imagem de Fundo */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Máscara Azul (Agora mais suave) */}
                <div className="absolute inset-0 bg-primary/90 mix-blend-multiply opacity-90 transition-opacity duration-300 group-hover:opacity-70" />

                {/* Gradiente inferior para leitura */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#051A30] via-transparent to-transparent" />

                {/* Conteúdo */}
                <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                  {/* Detalhe Branco Decorativo */}
                  <div className="w-16 h-1 bg-white mb-6 transition-all duration-300 group-hover:w-24 group-hover:bg-accent-cyan" />

                  <h3 className="text-2xl font-heading font-bold text-white mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-90 transform translate-y-0 transition-all duration-500">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-widest group-hover:bg-accent-cyan group-hover:border-accent-cyan group-hover:text-primary transition-all">
                    Ver Detalhes
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
