import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contato | Alves Martins Engenharia";
  }, []);

  return (
    <div className="bg-[#051A30] min-h-screen flex flex-col text-white font-body">
      {/* HEADER SURREAL */}
      <header className="relative py-24 lg:py-32 overflow-hidden">
        {/* Fundo Animado */}
        <div className="absolute inset-0 bg-surreal-gradient bg-[length:400%_400%] animate-gradient-xy" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-2xl"
          >
            Vamos Iniciar seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-white">
              Diagnóstico Técnico
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Canais diretos para orçamentos, dúvidas e consultorias. Sua obra e
            seu patrimônio em mãos especializadas.
          </motion.p>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="flex-grow container max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* COLUNA DA ESQUERDA: Infos (Glass Card Escuro) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 bg-[#0A2B4D]/80 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-accent-cyan mb-8 border-b border-white/10 pb-4">
                Informações de Contato
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="p-4 bg-accent/20 rounded-xl text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all duration-300">
                    <FiPhone className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
                      Ligue Agora
                    </p>
                    <p className="text-xl font-medium text-white">
                      (11) 94788-4185
                    </p>
                    <p className="text-sm text-accent-cyan mt-1">
                      WhatsApp Disponível
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-4 bg-accent/20 rounded-xl text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all duration-300">
                    <FiMail className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
                      E-mail Oficial
                    </p>
                    <p className="text-lg font-medium text-white break-all">
                      engdanilogmartins@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-4 bg-accent/20 rounded-xl text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all duration-300">
                    <FiMapPin className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
                      Localização
                    </p>
                    <p className="text-lg font-medium text-white">
                      Penha — São Paulo/SP
                    </p>
                    <p className="text-sm text-gray-400">
                      Atendemos toda a capital e região.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-4 bg-accent/20 rounded-xl text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all duration-300">
                    <FiClock className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wide">
                      Horário
                    </p>
                    <p className="text-lg font-medium text-white">
                      Seg - Sex: 08h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Nosso time técnico analisa cada solicitação com rigor para
                fornecer o orçamento mais adequado à sua necessidade.
              </p>
            </div>
          </motion.div>

          {/* COLUNA DA DIREITA: Formulário (Glass Card Claro) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-7 bg-white rounded-3xl shadow-2xl p-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
