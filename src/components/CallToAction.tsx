import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// 🚨 AQUI ESTÁ A CORREÇÃO: Usamos 'lucide-react' em vez de 'react-icons'
import { ArrowRight, Home, ClipboardCheck, HardHat } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#020F1F]">
      {/* BACKGROUND ANIMADO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020F1F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2B4D] via-[#004e92] to-[#000428] opacity-60 bg-[length:200%_200%] animate-gradient-xy mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* ======================================================== */}
        {/* ÍCONES FLUTUANTES (ELEMENTOS BRANCOS DE ENGENHARIA)      */}
        {/* ======================================================== */}

        {/* Ícone Casa (Esquerda) */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 left-0 md:-left-12 text-white/10 md:text-white/20 z-0"
        >
          <Home size={120} strokeWidth={1.5} />
        </motion.div>

        {/* Ícone Prancheta (Direita) */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-12 right-0 md:-right-12 text-white/10 md:text-white/20 z-0"
        >
          <ClipboardCheck size={140} strokeWidth={1.5} />
        </motion.div>

        {/* Ícone Capacete (Topo Direita - Pequeno) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-0 right-20 text-accent-cyan/30 blur-sm"
        >
          <HardHat size={60} strokeWidth={2} />
        </motion.div>

        {/* CARD PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative z-10
            bg-[#0A2B4D]/40 backdrop-blur-2xl 
            border border-white/20 border-t-white/40
            rounded-3xl p-12 md:p-20 shadow-2xl 
            overflow-hidden group
          "
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center py-1.5 px-5 rounded-full border border-white/30 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-8"
          >
            <span className="text-white font-bold uppercase tracking-widest text-xs flex items-center gap-2">
              <span className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></span>
              Engenharia de Excelência
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
            Pronto para elevar a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-accent-cyan">
              segurança do seu imóvel?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Não deixe para depois. Conecte-se com nossa tecnologia e obtenha
            laudos técnicos com precisão absoluta e agilidade.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contato"
              className="
                relative inline-flex items-center gap-4 px-12 py-5 
                bg-white text-[#0A2B4D] 
                font-heading font-extrabold text-lg rounded-xl 
                shadow-[0_0_30px_rgba(255,255,255,0.3)] 
                hover:shadow-[0_0_50px_rgba(0,212,255,0.5)]
                transition-all duration-300
                group/btn
              "
            >
              <span className="relative z-10">Falar com um Engenheiro</span>
              <ArrowRight className="relative z-10 text-xl transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
