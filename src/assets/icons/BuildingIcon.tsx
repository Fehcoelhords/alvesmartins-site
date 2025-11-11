import { IconBase } from "./IconBase";

// Ícone para Inspeção Predial
export const BuildingIcon = ({ className }: { className?: string }) => (
  <IconBase className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3.75v16.5h15V3.75M8.25 3.75h7.5v16.5h-7.5V3.75Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5h.008v.008H12v-.008Zm0-3h.008v.008H12v-.008Zm0-3h.008v.008H12V10.5Zm0-3h.008v.008H12V7.5Z"
    />
  </IconBase>
);
