import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { FaClipboardCheck, FaImage } from "react-icons/fa";
import { BiRadar } from "react-icons/bi";

const ServiceInspecao: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Inspeção Predial | Alves Martins Engenharia";
  }, []);

  // --- DADOS PROVISÓRIOS ---
  const cmsData = {
    heroTitle: "Título Principal da Inspeção Predial",
    heroSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    introTitle: "Sobre o Diagnóstico Predial",
    introText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    benefits: [
      {
        title: "Benefício 1",
        text: "Descrição curta do benefício gerado pelo serviço.",
      },
      {
        title: "Benefício 2",
        text: "Descrição curta do benefício gerado pelo serviço.",
      },
      {
        title: "Benefício 3",
        text: "Descrição curta do benefício gerado pelo serviço.",
      },
      {
        title: "Benefício 4",
        text: "Descrição curta do benefício gerado pelo serviço.",
      },
    ],
  };

  return (
    <div className="bg-white font-body">
      {/* HERO SECTION */}
      <header className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-[#051A30]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051A30] via-[#0A2B4D]/80 to-[#051A30]" />

          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-accent-cyan/50 shadow-[0_0_20px_rgba(0,212,255,0.8)] z-0"
          />
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-accent-cyan font-bold tracking-widest uppercase text-sm mb-4">
              <BiRadar className="text-xl" /> Categoria Técnica
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
              {cmsData.heroTitle}
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              {cmsData.heroSubtitle}
            </p>
          </motion.div>

          {/* PLACEHOLDER DE IMAGEM */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-72 h-72 border-2 border-dashed border-white/30 rounded-full flex flex-col items-center justify-center bg-white/5 text-white/50">
              <FaImage className="text-4xl mb-2" />
              <span className="text-xs font-bold uppercase text-center px-6">
                Imagem/Ícone do Cliente
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              {cmsData.introTitle}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {cmsData.introText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cmsData.benefits.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-light p-8 rounded-2xl border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  <FaClipboardCheck />
                </div>
                <h3 className="font-bold text-primary text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServiceInspecao;
