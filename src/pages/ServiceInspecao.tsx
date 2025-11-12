import { motion } from "framer-motion";

// Página dedicada para Inspeção Predial
export const ServiceInspecao = () => {
  return (
    <div className="bg-white pt-20">
      {/* Hero da Página (Placeholder) */}
      <section className="py-40 bg-secondary">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-primary mb-4">
            Inspeção Predial
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Diagnóstico completo da edificação para garantir segurança e
            conformidade.
          </p>
        </motion.div>
      </section>

      {/* Conteúdo (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-dark mb-6">
            Detalhes do Serviço
          </h2>
          <p className="text-gray-600 leading-relaxed">
            O conteúdo detalhado sobre Inspeção Predial, criado pelo cliente,
            entrará aqui. Vamos estilizar esta página com alto padrão.
          </p>
        </div>
      </section>
    </div>
  );
};
