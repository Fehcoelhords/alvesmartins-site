import { Link } from "react-router-dom";

// Ícones SVG para Redes Sociais
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
    className="text-gray-400 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

// MANTIDO Facebook e Instagram (Mock)
const IconFacebook = () => (
  <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path>
  </svg>
);
const IconInstagram = () => (
  <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.229-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.264-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.646-.07-4.849s.012-3.584.07-4.85c.149-3.229 1.664-4.771 4.919-4.919 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.268.195-6.379 2.3-6.574 6.574-.058 1.279-.072 1.688-.072 4.947s.014 3.668.072 4.947c.195 4.27 2.305 6.379 6.574 6.574 1.279.058 1.688.072 4.947.072s3.668-.014 4.947-.072c4.27-.195 6.379-2.305 6.574-6.574.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.195-4.27-2.305-6.379-6.574-6.574-1.279-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z"></path>
  </svg>
);
// ATUALIZADO (Linkedin)
const IconLinkedin = () => (
  <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Social (ATUALIZADO) */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">ALVES MARTINS</h3>
            <p className="text-sm text-gray-400 mb-4">
              [cite_start]Engenharia & Construção. [cite: 1]
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com">
                {" "}
                {/* Mock */}
                <IconFacebook />
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                {" "}
                {/* Mock */}
                <IconInstagram />
              </SocialIcon>
              [cite_start]
              <SocialIcon href="https://abrir.link/pICSK">
                {" "}
                {/* Real [cite: 14] */}
                <IconLinkedin />
              </SocialIcon>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços (ATUALIZADO) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              [cite_start]
              <li>
                <Link
                  to="/servicos"
                  className="hover:text-white transition-colors"
                >
                  Avaliação de Imóveis Urbanos [cite: 20]
                </Link>
              </li>
              [cite_start]
              <li>
                <Link
                  to="/servicos"
                  className="hover:text-white transition-colors"
                >
                  Inspeção Predial [cite: 20]
                </Link>
              </li>
              [cite_start]
              <li>
                <Link
                  to="/servicos"
                  className="hover:text-white transition-colors"
                >
                  Manifestações Patológicas [cite: 20]
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Contato (ATUALIZADO) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              [cite_start]<li>(11) 94788-4165 [cite: 8, 32]</li>
              [cite_start]<li>engdanilogmartins@gmail.com [cite: 10, 33]</li>
              [cite_start]<li>Penha, São Paulo/SP [cite: 12]</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; [cite_start]{currentYear} Alves Martins Engenharia e
            Construtora Ltda. [cite: 28] Todos os direitos reservados.
          </p>
          <p className="mt-1">
            Desenvolvido por{" "}
            <a
              href="https://orbit-ia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white font-semibold"
            >
              Orbit IA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
