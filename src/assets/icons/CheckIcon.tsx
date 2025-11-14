import React from "react";

// Um wrapper base (ajustado para ícones menores)
const IconBase = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-6 h-6 ${className}`} // Tamanho padrão 6
  >
    {children}
  </svg>
);

export const CheckIcon = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </IconBase>
);
