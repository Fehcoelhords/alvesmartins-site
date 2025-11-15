import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { CallToAction } from "../components/CallToAction";
import { SearchIcon } from "../assets/icons/SearchIcon";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-primary mr-3 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const service = {
  title: "Inspeção Predial e Diagnóstico Técnico",
  subtitle:
    "Analisamos, identificamos e classificamos as patologias construtivas com precisão técnica.",
  description:
    "A inspeção predial é um processo técnico essencial para avaliar as condições de segurança, estabilidade e funcionalidade de edificações. Nosso diagnóstico segue rigorosamente as normas da ABNT, com relatório detalhado, fotografias, classificações de risco e recomendações.",
  items: [
    "Identificação e classificação de patologias.",
    "Relatórios técnicos completos com recomendações.",
    "Análise de desempenho e vida útil da edificação.",
    "Classificação de riscos conforme ABNT NBR 16747.",
  ],
  image: "/page-service-inspecao.jpg",
};

export const ServiceInspecao = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  const { scrollYProgress: contentScroll } = useScroll({
    target: contentRef,
    offset: ["start end", "center center"],
    once: true,
  });

  const contentX = useTransform(contentScroll, [0, 1], ["-50px", "0px"]);
  const contentOpacity = useTransform(contentScroll, [0, 1], [0.3, 1]);

  return (
    <div className="bg-theme-dark text-white">
      {/* HERO PREMIUM PARALLAX */}
      <section ref={heroRef} className="relative py-40 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            y: backgroundY,
          }}
        />
        <div className="absolute inset-0 bg-theme-dark/70 backdrop-blur-sm z-10"></div>

        <motion.div
          className="container mx-auto px-6 text-center relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </motion.div>
      </section>

      {/* CONTEÚDO */}
      <section ref={contentRef} className="py-20 bg-theme-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            style={{ x: contentX, opacity: contentOpacity }}
          >
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Sobre este Serviço
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                {service.description}
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">
                O que avaliamos
              </h3>

              <ul className="space-y-4">
                {service.items.map((item) => (
                  <motion.li
                    key={item}
                    className="flex items-center text-gray-200 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <CheckIcon />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CARD LATERAL */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10">
                <div className="text-primary">
                  <SearchIcon />
                </div>

                <h3 className="text-2xl font-bold text-white mt-4 mb-4">
                  Diagnóstico Técnico Completo
                </h3>

                <p className="text-gray-300 mb-6">
                  Relatório detalhado, classificação de riscos e recomendações
                  técnicas conforme normas ABNT.
                </p>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    to="/contato"
                    className="block w-full text-center bg-primary text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-accent transition-colors"
                  >
                    Solicitar Orçamento
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="py-20 bg-theme-dark/70 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { n: "340+", t: "Inspeções realizadas" },
            { n: "10+", t: "Anos de experiência" },
            { n: "95%", t: "Casos resolvidos com precisão" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 + i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-bold text-primary">{item.n}</h3>
              <p className="text-gray-300 mt-2">{item.t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-20 bg-theme-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Galeria Técnica
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {["/insp1.jpg", "/insp2.jpg", "/insp3.jpg"].map((img) => (
              <motion.div
                key={img}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img src={img} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28 bg-theme-dark border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Processo de Inspeção
          </h2>

          <div className="space-y-12 max-w-3xl mx-auto">
            {[
              {
                title: "1. Vistoria Inicial",
                desc: "Identificação visual das anomalias construtivas.",
              },
              {
                title: "2. Testes e Ensaios",
                desc: "Medições, umidade, termografia, fissuras e outros ensaios.",
              },
              {
                title: "3. Diagnóstico Técnico",
                desc: "Classificação de riscos e identificação da origem das patologias.",
              },
              {
                title: "4. Relatório Final",
                desc: "Documento completo conforme ABNT com recomendações.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 + index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-primary">
                  {step.title}
                </h3>
                <p className="text-gray-300 mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <CallToAction />
    </div>
  );
};
