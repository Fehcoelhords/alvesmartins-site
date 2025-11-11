import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonials";
import { BlogPreview } from "../components/BlogPreview"; // Importado M4
import { ContactForm } from "../components/ContactForm"; // Importado M4

export const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <BlogPreview /> {/* Adicionado M4 */}
      <ContactForm /> {/* Adicionado M4 */}
    </main>
  );
};
