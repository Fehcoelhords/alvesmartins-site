import React, { useRef } from "react";
import { About } from "../components/About";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutPage = () => {
  // --- Scroll Hooks para seções adicionais ---
  const missionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: missionProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "center center"],
  });

  const scaleMission = useTransform(missionProgress, [0, 1], [0.8, 1]);
  const opacityMission = useTransform(missionProgress, [0, 1], [0, 1]);
  const xMission = useTransform(missionProgress, [0, 1], ["-50px", "0px"]);

  return (
    <main className="flex flex-col flex-grow bg-gray-50 overflow-hidden">
      {/* --- Seção principal: About animado --- */}
      <About />

      {/* --- Seção Missão, Visão e Valores (Animada) --- */}
      <motion.section
        ref={missionRef}
        style={{ scale: scaleMission, opacity: opacityMission, x: xMission }}
        className="py-20 bg-gray-50 relative overflow-hidden"
      >
        {/* Linhas técnicas de background (efeito engenharia) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-grid-pattern opacity-10" />
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Missão</h3>
            <p className="text-gray-600">
              Fornecer soluções de engenharia diagnóstica precisas e confiáveis,
              garantindo segurança e eficiência em cada projeto.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Visão</h3>
            <p className="text-gray-600">
              Ser referência nacional em perícias, inspeções prediais e
              avaliações técnicas, reconhecida pela qualidade e inovação.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Valores</h3>
            <p className="text-gray-600">
              Ética, transparência, inovação e compromisso com a excelência em
              cada serviço prestado.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Seção Diferenciais (Com efeitos exagerados) --- */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            initial={{ rotate: 45, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-1/2 h-1/2 border-t-4 border-r-4 border-primary opacity-20 absolute top-0 left-1/3"
          />
          <motion.div
            initial={{ rotate: -45, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            className="w-1/2 h-1/2 border-b-4 border-l-4 border-primary opacity-20 absolute bottom-0 right-1/3"
          />
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Nossos Diferenciais
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Equipe altamente qualificada e certificada</li>
              <li>✔ Tecnologias modernas e equipamentos de ponta</li>
              <li>✔ Relatórios detalhados e fundamentados em normas ABNT</li>
              <li>✔ Atendimento personalizado e consultivo</li>
              <li>✔ Mais de 10 anos de experiência no mercado</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581092795366-07c5b510b6c4?auto=format&fit=crop&w=800&q=80"
              alt="Diferenciais Alves Martins"
              className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* --- Call to Action animada --- */}
      <motion.section
        className="py-20 bg-primary text-white text-center overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pronto para iniciar seu projeto?
        </motion.h2>
        <motion.p
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Entre em contato com nossa equipe especializada e receba um orçamento
          detalhado.
        </motion.p>
        <motion.a
          href="/contato"
          className="bg-white text-primary font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300 inline-block"
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          Solicitar Orçamento
        </motion.a>
      </motion.section>
    </main>
  );
};

export default AboutPage;
