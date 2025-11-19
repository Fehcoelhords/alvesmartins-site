import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051A30] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white">
              ALVES MARTINS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engenharia Diagnóstica com excelência técnica. Laudos, inspeções e
              avaliações pautados na ética e normas vigentes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold text-accent-cyan mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-white transition">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="hover:text-white transition">
                  Quem Somos
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
            <h4 className="text-lg font-bold text-accent-cyan mb-4">
              Serviços
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/servicos/avaliacao-de-imoveis"
                  className="hover:text-white transition"
                >
                  Avaliação de Imóveis
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/inspecao-predial"
                  className="hover:text-white transition"
                >
                  Inspeção Predial
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/patologia-das-construcoes"
                  className="hover:text-white transition"
                >
                  Patologia das Construções
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/laudos-tecnicos"
                  className="hover:text-white transition"
                >
                  Laudos Técnicos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold text-accent-cyan mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>São Paulo - SP</li>
              <li>(11) 94788-4185</li>
              <li>engdanilogmartins@gmail.com</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-accent-cyan text-xl transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-cyan text-xl transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-cyan text-xl transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {currentYear} Alves Martins Engenharia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
