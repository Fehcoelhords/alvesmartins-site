import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { FaMicroscope, FaImage } from "react-icons/fa";
import { MdBrokenImage } from "react-icons/md";

const ServicePatologia: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Patologia das Construções | Alves Martins Engenharia";
  }, []);

  // --- DADOS PROVISÓRIOS ---
  const cmsData = {
    heroTitle: "Título Principal da Patologia de Construções",
    heroSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    problemsTitle: "Problemas que Resolvemos",
    problems: [
      {
        title: "Problema Exemplo 1",
        desc: "Descrição breve do problema (ex: Fissuras).",
      },
      {
        title: "Problema Exemplo 2",
        desc: "Descrição breve do problema (ex: Infiltrações).",
      },
      {
        title: "Problema Exemplo 3",
        desc: "Descrição breve do problema (ex: Corrosão).",
      },
      {
        title: "Problema Exemplo 4",
        desc: "Descrição breve do problema (ex: Fachadas).",
      },
    ],
    ctaText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.",
  };

  return (
    <div className="bg-white font-body">
      {/* HERO SECTION */}
      <header className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-primary-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020F1F] to-[#0A2B4D]/90" />
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-accent-cyan font-bold tracking-widest uppercase text-sm mb-4">
              <FaMicroscope className="text-lg" /> Categoria do Serviço
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              {cmsData.heroTitle}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {cmsData.heroSubtitle}
            </p>
          </motion.div>

          {/* PLACEHOLDER DE IMAGEM */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block relative"
          >
            <div className="w-full aspect-square bg-white/5 backdrop-blur-md border-2 border-dashed border-white/30 rounded-2xl flex flex-col items-center justify-center text-white/50 hover:bg-white/10 transition-colors">
              <FaImage className="text-6xl mb-4" />
              <span className="text-sm font-bold uppercase tracking-widest">
                Imagem Ilustrativa
              </span>
              <span className="text-xs mt-1">
                (Ex: Foto de Fissura ou Diagrama)
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lista de Problemas */}
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary mb-8">
                {cmsData.problemsTitle}
              </h2>
              <div className="space-y-6">
                {cmsData.problems.map((prob, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1">
                      <MdBrokenImage className="text-2xl text-gray-400 group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {prob.title}
                      </h4>
                      <p className="text-gray-600">{prob.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bloco de Destaque / CTA Intermediário */}
            <div className="bg-light p-10 rounded-3xl border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Solução Técnica
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {cmsData.ctaText}
              </p>
              <a
                href="/contato"
                className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-accent transition-colors shadow-lg"
              >
                Solicitar Diagnóstico
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServicePatologia;
