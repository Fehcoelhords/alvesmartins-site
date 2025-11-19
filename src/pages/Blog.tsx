import React, { useEffect } from "react";
import BlogPreview from "../components/BlogPreview";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const BlogPage: React.FC = () => {
  useEffect(() => {
    // Definimos o título como "Portfólio" conforme a intenção do projeto
    document.title = "Portfólio de Projetos | Alves Martins Engenharia";
  }, []);

  return (
    <div className="pt-24 bg-light min-h-screen">
      <header className="bg-primary py-12">
        <h1 className="text-4xl text-white font-heading font-bold text-center">
          Portfólio de Projetos
        </h1>
      </header>

      <BlogPreview />
      <CallToAction />
      <Footer />
    </div>
  );
};

// 🚨 CORREÇÃO FINAL: Garante a exportação padrão para que App.tsx possa importá-lo.
export default BlogPage;
