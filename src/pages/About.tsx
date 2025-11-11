import { motion, Variants } from "framer-motion";

// URLs de placeholder (mantidas)
const heroImageUrl =
  "https://via.placeholder.com/1920x600/0056b3/ffffff?text=Alves+Martins+Engenharia";
const founderImageUrl =
  "https://via.placeholder.com/800x600/1e3a8a/ffffff?text=Danilo+G.+A.+Martins";

// Ícone para certificação
const CertificateIcon = () => (
  <svg
    className="w-6 h-6 text-primary mr-3 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const AboutPage = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white">
      {/* 1. Hero da Página Sobre (ATUALIZADO) */}
      <section
        className="relative py-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Sobre a Alves Martins
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Precisão técnica, conformidade normativa e mais de 10 anos de
            experiência.
          </p>
        </motion.div>
      </section>

      {/* 2. Seção Fundador e Resp. Técnico (ATUALIZADA) */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <h4 className="text-lg font-semibold text-primary mb-2">
              Fundador e Responsável Técnico
            </h4>
            [cite_start]
            <h2 className="text-3xl font-bold text-dark mb-6">
              Danilo Guilherme Alves Martins [cite: 5, 30]
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              [cite_start]Engenheiro Civil com mais de 10 anos de
              experiência[cite: 22, 36], Danilo Martins é o fundador e
              responsável técnico pela Alves Martins Engenharia.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sua trajetória inclui especialização em planejamento, controle de
              cronogramas e [cite_start]gestão de contratos em obras públicas e
              privadas[cite: 38]. Com registro ativo no [cite_start]CREA-SP
              (5069948539)[cite: 16], atua na elaboração de laudos técnicos de
              patologias, [cite_start]inspeções prediais e avaliações de imóveis
              com inferência estatística[cite: 77].
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <img
              src={founderImageUrl} // Usando placeholder
              alt="Fundador Danilo Guilherme Alves Martins"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Seção Formação & Certificações (NOVA/ATUALIZADA) */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-dark">
              Formação e Certificações
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Formação */}
            <motion.div
              variants={textVariants}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Formação Acadêmica
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CertificateIcon />
                  [cite_start]
                  <span className="text-gray-700">
                    Cursando Pós-Graduação em Planejamento, Gestão e Controle de
                    Obras Civis (UFRJ) [cite: 37, 56]
                  </span>
                </li>
                <li className="flex items-start">
                  <CertificateIcon />
                  [cite_start]
                  <span className="text-gray-700">
                    Pós-Graduação em BIM Manager (PUC/MG) [cite: 36, 57]
                  </span>
                </li>
                <li className="flex items-start">
                  <CertificateIcon />
                  [cite_start]
                  <span className="text-gray-700">
                    Graduação em Engenharia Civil (Universidade Nove de
                    Julho/SP) [cite: 58]
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Certificações */}
            <motion.div
              variants={textVariants}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Certificações de Destaque
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CertificateIcon />
                  [cite_start]
                  <span className="text-gray-700">
                    Elite PRO: Formação em Engenharia de Avaliações com
                    Inferência Estatística Aplicada (Instituto de Engenharia de
                    Elite - 2025) [cite: 24, 62, 884]
                  </span>
                </li>
                <li className="flex items-start">
                  <CertificateIcon />
                  [cite_start]
                  <span className="text-gray-700">
                    Engenharia de Avaliação de Imóveis Urbanos (IBAPE - 2023)
                    [cite: 24, 63, 864]
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
