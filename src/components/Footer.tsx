import { Link } from "react-router-dom";

// Placeholder para ícones de redes sociais (serão finalizados no M4)
const SocialIcon = ({ label }: { label: string }) => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600">
    {label}
  </div>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Descrição */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">ALVES MARTINS</h3>
            <p className="text-sm text-gray-400 mb-4">
              Engenharia & Construção. Soluções técnicas para um futuro sólido.
            </p>
            <div className="flex space-x-3">
              {/* Placeholders M1 */}
              <SocialIcon label="FB" />
              <SocialIcon label="IN" />
              <SocialIcon label="LI" />
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

          {/* Coluna 3: Serviços (Placeholder) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Perícia Avaliatória</li>
              <li>Inspeção Predial</li>
              <li>Manifestações Patológicas</li>
            </ul>
          </div>

          {/* Coluna 4: Contato (Placeholder) */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>(XX) 9XXXX-XXXX</li>
              <li>contato@alvesmartins.com</li>
              <li>Endereço Físico, Cidade - UF</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} Alves Martins Construtora e Engenharia. Todos
            os direitos reservados.
          </p>
          <p className="mt-1">
            Desenvolvido por{" "}
            <a
              href="https://orbit-ia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Orbit IA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
