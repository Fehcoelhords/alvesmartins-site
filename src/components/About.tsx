import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TechBuildingIllustration from "./TechBuildingIllustration";
import { FaRegBuilding, FaSearchPlus, FaFileSignature } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section
      id="quem-somos"
      className="py-24 bg-[#051A30] relative overflow-hidden"
    >
      {/* Background Tech Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-cyan to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent-cyan to-transparent delay-1000"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* COLUNA 1: Texto e Informação */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-10"
          >
            <div>
              <span className="text-accent-cyan font-bold tracking-[0.2em] uppercase text-sm mb-2 block">
                Sobre a Empresa
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                Engenharia além do <span className="text-accent">papel</span>.
              </h2>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              A <strong>Alves Martins Engenharia</strong> não é apenas uma
              empresa de laudos. Somos uma consultoria técnica dedicada a
              traduzir a complexidade das patologias construtivas em
              diagnósticos claros, precisos e juridicamente robustos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-accent-cyan/50 transition-colors group">
                <FaRegBuilding className="text-3xl text-accent mb-2 group-hover:text-accent-cyan transition-colors" />
                <h4 className="text-white font-bold text-sm">
                  Gestão Patrimonial
                </h4>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-accent-cyan/50 transition-colors group">
                <FaSearchPlus className="text-3xl text-accent mb-2 group-hover:text-accent-cyan transition-colors" />
                <h4 className="text-white font-bold text-sm">
                  Inspeção Detalhada
                </h4>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-accent-cyan/50 transition-colors group">
                <FaFileSignature className="text-3xl text-accent mb-2 group-hover:text-accent-cyan transition-colors" />
                <h4 className="text-white font-bold text-sm">Laudos NBR</h4>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/quem-somos"
                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-wide border-b-2 border-accent-cyan pb-1 hover:text-accent-cyan hover:border-white transition-all"
              >
                Conheça nossa História <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* COLUNA 2: Animação Tecnológica (Substitui a Foto) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Card de Vidro Fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10 w-full max-w-md">
              <TechBuildingIllustration />
            </div>

            {/* Stats Flutuantes */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 right-0 md:right-10 bg-white p-6 rounded-2xl shadow-neon border border-accent-cyan/20 z-20"
            >
              <p className="text-4xl font-heading font-extrabold text-primary">
                100%
              </p>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                Conformidade Técnica
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
