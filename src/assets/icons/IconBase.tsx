import React from "react";

// Um wrapper base para todos os ícones, facilitando a estilização
interface IconProps {
  className?: string;
  children: React.ReactNode;
}

export const IconBase = ({ className = "", children }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-12 h-12 text-primary ${className}`} // Estilo padrão
  >
    {children}
  </svg>
);
