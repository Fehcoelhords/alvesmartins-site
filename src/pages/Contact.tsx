import React from "react";
import { motion } from "framer-motion";

// PÁGINA DE CONTATO (VISUAL) - DADOS ATUALIZADOS
// A lógica de envio (EmailJS) será adicionada posteriormente.

export const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de envio (EmailJS) será implementada aqui.
    alert("Layout do formulário pronto. A lógica de envio será conectada.");
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-40 bg-secondary">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Estamos prontos para analisar sua demanda.
          </p>
        </motion.div>
      </section>

      {/* Seção do Formulário e Informações */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Coluna 1: Formulário (Visual) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-dark mb-6">
              Envie sua Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  placeholder="Inspeção, Avaliação, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  placeholder="Descreva sua necessidade..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-accent transition-all duration-300"
                >
                  Enviar Mensagem (Visual)
                </button>
              </div>
            </form>
          </motion.div>

          {/* Coluna 2: Informações de Contato (ATUALIZADO) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-dark mb-6">Informações</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-dark">
                    Localização
                  </h4>
                  [cite_start]
                  <p className="text-gray-600">
                    Penha, São Paulo/SP [cite: 12]
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0119 15.22V19a2 2 0 01-2 2h-1C6.04 21 3 17.96 3 14V5z"
                  />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-dark">Telefone</h4>
                  [cite_start]
                  <p className="text-gray-600">(11) 94788-4165 [cite: 8, 32]</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4 className="text-xl font-semibold text-dark">E-mail</h4>
                  [cite_start]
                  <p className="text-gray-600">
                    engdanilogmartins@gmail.com [cite: 10, 33]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
