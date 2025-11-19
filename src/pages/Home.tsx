import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import BlogPreview from "../components/BlogPreview";

const Home: React.FC = () => {
  useEffect(() => {
    document.title =
      "Alves Martins Engenharia | Avaliação, Inspeção e Patologia";
  }, []);

  return (
    <>
      <Hero />

      {/* A seção Serviços agora tem ID='services' e fundo azul dentro do componente */}
      <Services />

      <About />
      <BlogPreview />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
