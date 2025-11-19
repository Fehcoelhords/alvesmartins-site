import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { GiSettingsKnobs, GiCheckMark, GiCalculator } from "react-icons/gi";
import { FaImage } from "react-icons/fa"; // Ícone para representar o placeholder

const ServiceAvaliacao: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Avaliação de Imóveis | Alves Martins Engenharia";
  }, []);

  // --- DADOS PROVISÓRIOS (PLACEHOLDER) ---
  const cmsData = {
    heroTitle: "Título Principal do Serviço de Avaliação",
    heroSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    introTitle: "Subtítulo Explicativo sobre o Serviço",
    introText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.",
    methodologyTitle: "Metodologia Aplicada",
    methodologyText:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
    applications: [
      "Aplicação ou Benefício 1",
      "Aplicação ou Benefício 2",
      "Aplicação ou Benefício 3",
      "Aplicação ou Benefício 4",
      "Aplicação ou Benefício 5",
    ],
  };

  return (
    <div className="bg-white font-body">
      {/* HERO SECTION */}
      <header className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-[#0A2B4D]">
        {/* Background Animado */}
        <div className="absolute inset-0">
          {/* Imagem de fundo Genérica */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2B4D] via-[#0A2B4D]/90 to-[#0A2B4D]/60" />
        </div>

        <div className="relative z-10 container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-accent-cyan font-bold tracking-widest uppercase text-sm mb-4">
              <GiSettingsKnobs className="text-lg" /> Categoria do Serviço
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              {cmsData.heroTitle}
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed border-l-4 border-accent pl-4">
              {cmsData.heroSubtitle}
            </p>
          </motion.div>

          {/* PLACEHOLDER DE IMAGEM (Substituindo o gráfico) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center items-center"
          >
            {/* Esta div representa o espaço onde o cliente colocará a imagem/arte dele */}
            <div className="w-full max-w-md aspect-[4/3] bg-white/5 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-2xl flex flex-col items-center justify-center text-white/50 hover:bg-white/10 transition-colors cursor-default">
              <FaImage className="text-5xl mb-4" />
              <span className="text-sm font-bold uppercase tracking-widest">
                Espaço para Imagem do Cliente
              </span>
              <span className="text-xs mt-2 opacity-70">
                (Ex: Gráfico, Foto ou Ilustração)
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Texto Descritivo */}
            <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary mb-4">
                  {cmsData.introTitle}
                </h2>
                <p>{cmsData.introText}</p>
                <p className="mt-4">
                  Donec id elit non mi porta gravida at eget metus. Aenean
                  lacinia bibendum nulla sed consectetur. Maecenas sed diam eget
                  risus varius blandit sit amet non magna.
                </p>
              </div>

              <div className="bg-light p-8 rounded-xl border-l-4 border-accent shadow-sm">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {cmsData.methodologyTitle}
                </h3>
                <p className="text-base">{cmsData.methodologyText}</p>
              </div>
            </div>

            {/* Lista de Aplicações */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-8">
                Aplicações / Benefícios
              </h3>
              <div className="space-y-4">
                {cmsData.applications.map((app, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-accent/30 group"
                  >
                    <div className="bg-accent/10 p-2 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <GiCheckMark />
                    </div>
                    <span className="font-medium text-gray-700">{app}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServiceAvaliacao;
