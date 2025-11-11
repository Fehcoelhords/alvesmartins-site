import { Hero } from "../components/Hero";
// Importaremos os outros componentes (Services, About, etc.) aqui nos próximos milestones

export const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Services />
        <About />
        <Stats />
        <Testimonials />
        <BlogPreview />
        <ContactForm /> 
      */}
      <div className="h-96 bg-white flex items-center justify-center">
        <h2 className="text-3xl text-gray-400">
          Conteúdo (Milestones 2-4) virá aqui.
        </h2>
      </div>
    </main>
  );
};
