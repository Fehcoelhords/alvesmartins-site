import {
  motion,
  useInView,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Interface de tipagem
interface StatItem {
  value: number;
  label: string;
}

// Dados das estatísticas
const stats: StatItem[] = [
  { value: 10, label: "Anos de Atuação" },
  { value: 200, label: "Projetos Entregues" },
  { value: 98, label: "Clientes Satisfeitos (%)" },
  { value: 500, label: "Laudos Emitidos" },
];

// Componente reutilizável para o NÚMERO animado
function AnimatedCounter({ toValue }: { toValue: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, toValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          ref.current!.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, toValue]);

  return <span ref={ref}>0</span>;
}

// URL da Imagem de Fundo
const statsBgImageUrl = "/fundo-stats.jpg";

export const Stats = () => {
  const ref = useRef(null);

  // Lógica de Posição Responsiva
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const backgroundPosition = isMobile ? "left center" : "center";

  // Hooks de Animação (Parallax e Fade)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.6], ["30px", "0px"]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-dark text-white overflow-hidden"
    >
      {/* Imagem de Fundo (com Posição Dinâmica) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${statsBgImageUrl})`,
          backgroundPosition: backgroundPosition,
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      {/* --- ATUALIZADO: Overlay mais suave (60%) --- */}
      <div className="absolute inset-0 bg-theme-dark/60 backdrop-blur-sm z-10"></div>

      {/* Container dos Números */}
      <motion.div
        className="container mx-auto px-6 relative z-20"
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          {stats.map((stat: StatItem, index: number) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center p-4
                          ${
                            index > 0 ? "sm:border-l sm:border-gray-700/50" : ""
                          }
                         `}
            >
              {/* --- ATUALIZADO: Números em 'text-white' sólido --- */}
              <div className="text-6xl md:text-7xl font-bold mb-2 text-white">
                <AnimatedCounter toValue={stat.value} />
                {stat.label.includes("Anos") && <span>+</span>}
                {stat.label.includes("%") && <span>%</span>}
              </div>
              {/* --- ATUALIZADO: Rótulo mais claro --- */}
              <p className="text-lg text-gray-200">
                {stat.label.replace(" (%)", "")}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
