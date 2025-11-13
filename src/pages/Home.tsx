import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonials";
import { BlogPreview } from "../components/BlogPreview";
import { ContactForm } from "../components/ContactForm";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <ContactForm />
    </main>
  );
};
