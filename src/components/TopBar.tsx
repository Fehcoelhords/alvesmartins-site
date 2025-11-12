import React from "react";
import { Link } from "react-router-dom";

// --- Ícones (Sem alteração) ---
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.836-.184-5.253-2.6-5.438-5.438l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);
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
    className="text-white/70 hover:text-white transition-colors"
  >
    {children}
  </a>
);
const IconFacebook = () => (
  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path>
  </svg>
);
const IconInstagram = () => (
  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.229-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.264-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.646-.07-4.849s.012-3.584.07-4.85c.149-3.229 1.664-4.771 4.919-4.919 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.268.195-6.379 2.3-6.574 6.574-.058 1.279-.072 1.688-.072 4.947s.014 3.668.072 4.947c.195 4.27 2.305 6.379 6.574 6.574 1.279.058 1.688.072 4.947.072s3.668-.014 4.947-.072c4.27-.195 6.379-2.305 6.574-6.574.058-1.279.072-1.688.072-4.947s-.014-3.668-.072-4.947c-.195-4.27-2.305-6.379-6.574-6.574-1.279-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z"></path>
  </svg>
);
const IconLinkedin = () => (
  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

// --- ATUALIZADO: Removido 'ref' e 'isVisible'. ---
// --- ATUALIZADO: Classe 'hidden md:flex' reinstaurada. ---
export const TopBar = () => {
  return (
    <div
      className="hidden md:flex bg-dark text-white text-sm z-50" // z-50 para ficar acima de tudo
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Lado Esquerdo: Contatos */}
        <div className="flex space-x-6">
          <a
            href="tel:+5511947884165"
            className="flex items-center text-white/90 hover:text-white transition-colors py-1 md:py-0"
          >
            <PhoneIcon />
            <span>(11) 94788-4165</span>
          </a>
          <Link
            to="/contato"
            className="flex items-center text-white/90 hover:text-white transition-colors py-1 md:py-0"
          >
            <EmailIcon />
            <span>engdanilogmartins@gmail.com</span>
          </Link>
          <div className="flex items-center text-white/90 py-1 md:py-0">
            <LocationIcon />
            <span>Penha, São Paulo/SP</span>
          </div>
        </div>

        {/* Lado Direito: Ícones Sociais */}
        <div className="hidden md:flex space-x-4 items-center">
          <SocialIcon href="https://facebook.com">
            <IconFacebook />
          </SocialIcon>
          <SocialIcon href="https://instagram.com">
            <IconInstagram />
          </SocialIcon>
          <SocialIcon href="https://abrir.link/pICSK">
            <IconLinkedin />
          </SocialIcon>
        </div>
      </div>
    </div>
  );
};
