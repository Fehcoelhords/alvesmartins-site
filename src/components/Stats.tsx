import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

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

// URL da Imagem de Fundo (Placeholder)
const statsBgImageUrl =
  "https://via.placeholder.com/1920x400/1a1a1a/ffffff?text=Equipe+Alves+Martins";

export const Stats = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed text-white"
      style={{ backgroundImage: `url(${statsBgImageUrl})` }}
    >
      {/* Overlay "Tecnológico" */}
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- NOVO LAYOUT DE GRID (Mais profissional) --- */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12" // Mudado para 1, 2, e 4 colunas
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat: StatItem, index: number) => (
            <motion.div
              key={stat.label}
              className={`flex flex-col items-center justify-center p-4
                          ${
                            index > 0 ? "sm:border-l sm:border-gray-700/50" : ""
                          } // Linhas Divisórias
                         `}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }} // <-- EFEITO DE HOVER
            >
              {/* --- EFEITO DE GRADIENTE "PREMIUM" NO NÚMERO --- */}
              <div
                className="text-6xl md:text-7xl font-bold mb-2 text-transparent bg-clip-text 
                              bg-gradient-to-r from-gray-200 to-white"
              >
                <AnimatedCounter toValue={stat.value} />
                {stat.label.includes("Anos") && <span>+</span>}
                {stat.label.includes("%") && <span>%</span>}
              </div>
              <p className="text-lg text-gray-300">
                {stat.label.replace(" (%)", "")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
