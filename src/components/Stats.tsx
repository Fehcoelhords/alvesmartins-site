import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// --- CORREÇÃO 1: Definir a "forma" (Interface) dos nossos dados ---
interface StatItem {
  value: number;
  label: string;
}

// --- CORREÇÃO 2: Aplicar a forma ao nosso array de estatísticas ---
const stats: StatItem[] = [
  { value: 10, label: "Anos de Atuação" }, // Dado real do PDF
  { value: 200, label: "Projetos Entregues" }, // Mock
  { value: 98, label: "Clientes Satisfeitos (%)" }, // Mock
  { value: 500, label: "Laudos Emitidos" }, // Mock
];

// Componente reutilizável SOMENTE para o NÚMERO animado
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

export const Stats = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {/* --- CORREÇÃO 3: Dizer ao .map() qual é o tipo de "stat" --- */}
          {stats.map((stat: StatItem) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {/* Agora stat.value não dará erro */}
                <AnimatedCounter toValue={stat.value} />

                {/* Agora stat.label não dará erro */}
                {stat.label.includes("Anos") && <span>+</span>}
                {stat.label.includes("%") && <span>%</span>}
              </div>

              {/* Agora stat.label não dará erro */}
              <p className="text-lg text-gray-200">
                {stat.label.replace(" (%)", "")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
