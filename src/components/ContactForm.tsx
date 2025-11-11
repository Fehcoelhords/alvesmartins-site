import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Ícone de Email
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-12 h-12 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

export const ContactForm = () => {
  // Este é apenas um "Call to Action" (CTA) na Homepage.
  // O formulário real estará na página /contato.

  return (
    <section className="py-20 bg-accent text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full">
              <MailIcon />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Iniciar seu Projeto?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Entre em contato conosco para um diagnóstico preciso ou uma
            avaliação técnica. Nossa equipe está pronta para atendê-lo.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contato"
              className="bg-white text-primary text-lg font-semibold px-10 py-4 rounded-lg shadow-xl hover:bg-gray-200 transition-all duration-300"
            >
              Solicitar um Orçamento
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
