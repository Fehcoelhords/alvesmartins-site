import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      const subject = encodeURIComponent("Contato via Site - Alves Martins");
      const body = encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`
      );
      window.location.href = `mailto:engdanilogmartins@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const inputClasses =
    "w-full bg-light border-b-2 border-gray-200 px-4 py-4 text-primary font-medium focus:border-accent-cyan focus:bg-blue-50/50 transition-all outline-none placeholder-gray-400 rounded-t-lg";

  return (
    <div className="bg-white h-full rounded-[20px] p-8 md:p-10">
      <h2 className="text-3xl font-heading font-bold text-primary mb-2">
        Envie uma Mensagem
      </h2>
      <p className="text-gray-500 mb-8">
        Preencha o formulário abaixo e entraremos em contato rapidamente.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="group">
          <label
            htmlFor="name"
            className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 group-focus-within:text-accent-cyan transition-colors"
          >
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Ex: João Silva"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label
              htmlFor="email"
              className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 group-focus-within:text-accent-cyan transition-colors"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
              placeholder="joao@email.com"
            />
          </div>

          <div className="group">
            <label
              htmlFor="phone"
              className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 group-focus-within:text-accent-cyan transition-colors"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClasses}
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        <div className="group">
          <label
            htmlFor="message"
            className="block text-xs font-bold text-accent uppercase tracking-wider mb-1 group-focus-within:text-accent-cyan transition-colors"
          >
            Sua Necessidade
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className={`${inputClasses} resize-none`}
            placeholder="Descreva brevemente o serviço que você precisa..."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={status === "loading"}
          className="w-full py-5 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-neon transition-all disabled:opacity-70 mt-4"
        >
          {status === "loading" ? "Processando..." : "Enviar Solicitação"}
        </motion.button>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-100 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium text-sm"
          >
            Mensagem preparada! Abrindo seu e-mail...
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
