import React, { useEffect } from "react";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaHardHat,
  FaMicroscope,
  FaHandshake,
} from "react-icons/fa";

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Quem Somos | Alves Martins Engenharia";
  }, []);

  const values = [
    {
      icon: <FaBalanceScale />,
      title: "Imparcialidade",
      desc: "Nossos laudos são documentos técnicos isentos, sem viés comercial, focados na verdade real do imóvel.",
    },
    {
      icon: <FaMicroscope />,
      title: "Rigor Científico",
      desc: "Utilizamos metodologia inferencial estatística e equipamentos de precisão para diagnósticos.",
    },
    {
      icon: <FaHardHat />,
      title: "Segurança",
      desc: "Identificamos riscos construtivos para proteger a integridade física dos usuários e o patrimônio.",
    },
    {
      icon: <FaHandshake />,
      title: "Transparência",
      desc: "Linguagem clara e acessível, traduzindo o 'engenheirês' para que o cliente tome decisões seguras.",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION ANIMADO */}
      <header className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Animado */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('/grid-pattern.png')] bg-repeat"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, ease: "linear", repeat: Infinity }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/80 to-white"></div>

        <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center pt-20">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent-cyan font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4 block"
          >
            Institucional
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-2xl"
          >
            Excelência em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-white">
              Engenharia Diagnóstica
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Uma empresa fundamentada na técnica, na norma e na ética.
          </motion.p>
        </div>
      </header>

      {/* MISSÃO E VISÃO - INTERATIVO */}
      <section className="py-24 container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <h2 className="text-3xl font-heading font-bold text-primary border-l-4 border-accent pl-4">
              Nossa Missão
            </h2>
            <p>
              A <strong>Alves Martins Engenharia</strong> surgiu para preencher
              uma lacuna no mercado: a necessidade de laudos técnicos que
              fossem, ao mesmo tempo, profundos tecnicamente e compreensíveis
              para quem precisa tomar a decisão.
            </p>
            <p>
              Atuamos como parceiros estratégicos de condomínios, empresas,
              advogados e investidores, fornecendo a base técnica necessária
              para a valorização e manutenção de ativos imobiliários.
            </p>
          </motion.div>

          {/* Card Flutuante Tech */}
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary to-primary-dark p-10 rounded-2xl shadow-2xl text-white overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-cyan/20 rounded-full blur-3xl group-hover:bg-accent-cyan/30 transition-all"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">
              Visão de Futuro
            </h3>
            <p className="opacity-90 relative z-10">
              Ser referência estadual em patologia das construções e avaliações
              imobiliárias, reconhecida pela precisão dos dados e pela inovação
              nos processos de vistoria.
            </p>
            <div className="mt-8 flex items-center gap-4 relative z-10">
              <div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent-cyan"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
              <span className="text-accent-cyan font-bold">
                Em constante evolução
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary">
              Pilares da Empresa
            </h2>
            <p className="text-gray-600 mt-4">
              Os valores inegociáveis que sustentam cada laudo emitido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/60 backdrop-blur-lg p-8 rounded-xl border border-white/50 shadow-card hover:shadow-neon transition-all duration-300 group"
              >
                <div className="text-4xl text-primary mb-6 group-hover:text-accent-cyan transition-colors group-hover:scale-110 transform duration-300 origin-left">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {val.desc}
                </p>
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

export default AboutPage;
