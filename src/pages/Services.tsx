import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Serviços | Alves Martins Engenharia";
  }, []);

  const services = [
    {
      title: "Avaliação de Imóveis",
      desc: "Laudos técnicos de avaliação mercadológica seguindo a NBR 14.653.",
      path: "/servicos/avaliacao-de-imoveis",
      icon: "🏙️",
    },
    {
      title: "Inspeção Predial",
      desc: "Check-up completo da edificação para gestão de manutenção.",
      path: "/servicos/inspecao-predial",
      icon: "🔍",
    },
    {
      title: "Patologia das Construções",
      desc: "Diagnóstico e terapia para fissuras, infiltrações e corrosão.",
      path: "/servicos/patologia-das-construcoes",
      icon: "🏗️",
    },
    {
      title: "Laudos Técnicos",
      desc: "Pareceres técnicos de engenharia para fins judiciais e extrajudiciais.",
      path: "/servicos/laudos-tecnicos",
      icon: "📋",
    },
  ];

  return (
    <div className="pt-20 bg-light">
      <header className="bg-primary py-24 text-center">
        <h1 className="text-4xl font-heading font-bold text-white mb-4">
          Nossos Serviços
        </h1>
        <p className="text-blue-100">Excelência em cada detalhe técnico.</p>
      </header>

      <div className="container max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="group bg-white p-8 rounded-xl shadow-card hover:shadow-neon transition-all hover:-translate-y-1 border border-transparent hover:border-accent/30"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServicesPage;
