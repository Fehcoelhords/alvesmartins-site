import { Link } from "react-router-dom";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/60 hover:text-primary transition-all duration-300 hover:scale-105 backdrop-blur-md"
  >
    {children}
  </a>
);

const IconLinkedin = () => (
  <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M4.98 3.5C3.87 3.5 3 4.38 3 5.48c0 1.09.87 1.98 1.98 1.98h.02c1.11 0 2-.89 2-1.98-.01-1.1-.9-1.98-2.02-1.98zM3.5 8.75H6.5v11.75H3.5V8.75zM9.5 8.75h2.86v1.61h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v6.14h-3v-5.44c0-1.3-.02-2.97-1.81-2.97-1.82 0-2.1 1.42-2.1 2.88v5.53h-3V8.75z"></path>
  </svg>
);

const IconInstagram = () => (
  <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M12 2c2.7 0 3.03.01 4.1.06 1.07.05 1.8.23 2.45.5.66.28 1.23.65 1.78 1.2.55.55.92 1.12 1.2 1.78.27.65.45 1.38.5 2.45.05 1.07.06 1.4.06 4.1s-.01 3.03-.06 4.1c-.05 1.07-.23 1.8-.5 2.45-.28.66-.65 1.23-1.2 1.78-.55.55-1.12.92-1.78 1.2-.65.27-1.38.45-2.45.5-1.07.05-1.4.06-4.1.06s-3.03-.01-4.1-.06c-1.07-.05-1.8-.23-2.45-.5-.66-.28-1.23-.65-1.78-1.2-.55-.55-.92-1.12-1.2-1.78-.27-.65-.45-1.38-.5-2.45C2.01 15.03 2 14.7 2 12s.01-3.03.06-4.1c.05-1.07.23-1.8.5-2.45.28-.66.65-1.23 1.2-1.78.55-.55 1.12-.92 1.78-1.2.65-.27 1.38-.45 2.45-.5C8.97 2.01 9.3 2 12 2zm0 3c-2.63 0-2.95.01-3.98.06-.96.05-1.48.21-1.82.35-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.14.34-.3.86-.35 1.82-.05 1.03-.06 1.35-.06 3.98s.01 2.95.06 3.98c.05.96.21 1.48.35 1.82.18.46.39.78.73 1.12.34.34.66.55 1.12.73.34.14.86.3 1.82.35 1.03.05 1.35.06 3.98.06s2.95-.01 3.98-.06c.96-.05 1.48-.21 1.82-.35.46-.18.78-.39 1.12-.73.34-.34.55-.66.73-1.12.14-.34.3-.86.35-1.82.05-1.03.06-1.35.06-3.98s-.01-2.95-.06-3.98c-.05-.96-.21-1.48-.35-1.82-.18-.46-.39-.78-.73-1.12-.34-.34-.66-.55-1.12-.73-.34-.14-.86-.3-1.82-.35C14.95 5.01 14.63 5 12 5zm0 2.8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm0 6.9a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4zm4.6-7.8a1 1 0 110-2 1 1 0 010 2z"></path>
  </svg>
);

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0e0e0f] text-gray-300 pt-20 pb-12 overflow-hidden">
      {/* Glow Premium */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Linha superior com logo + descrição */}
        <div className="pb-16 border-b border-white/10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            ALVES MARTINS ENGENHARIA
          </h2>
          <p className="mt-3 max-w-xl text-gray-400 text-lg">
            Engenharia Diagnóstica • Avaliações • Inspeções Prediais Soluções
            técnicas de alta performance com precisão e credibilidade.
          </p>
        </div>

        {/* GRID PREMIUM */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-14">
          {/* Navegação */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Institucional
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/sobre" className="hover:text-white transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-white transition">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/servicos" className="hover:text-white transition">
                  Avaliação de Imóveis
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition">
                  Inspeção Predial
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition">
                  Laudos Técnicos
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition">
                  Manifestações Patológicas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li>(11) 94788-4165</li>
              <li>engdanilogmartins@gmail.com</li>
              <li>Penha — São Paulo/SP</li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Redes Sociais
            </h4>
            <div className="flex items-center gap-4">
              <SocialIcon href="https://instagram.com">
                <IconInstagram />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <IconLinkedin />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-10 mt-10 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            &copy; {year} Alves Martins Engenharia. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">
            Desenvolvido por{" "}
            <a
              href="https://orbit-ia.com"
              target="_blank"
              className="text-gray-300 hover:text-white transition font-semibold"
            >
              Orbit IA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
