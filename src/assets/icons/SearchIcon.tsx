import { IconBase } from "./IconBase";

// Ícone para Manifestações Patológicas (Investigação)
export const SearchIcon = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 7.5v6m3-3h-6" />
  </IconBase>
);
