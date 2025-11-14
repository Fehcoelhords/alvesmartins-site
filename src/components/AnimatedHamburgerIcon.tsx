import { motion, type Variants } from "framer-motion";

interface Props {
  isOpen: boolean;
  isDark: boolean;
}

const topVariants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 8.5 },
};

const middleVariants: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const bottomVariants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -8.5 },
};

export const AnimatedHamburgerIcon = ({ isOpen, isDark }: Props) => {
  const colorClass = isDark ? "bg-dark" : "bg-white";

  return (
    <div className="w-6 h-5 flex flex-col justify-between">
      <motion.div
        className={`h-0.5 w-full ${colorClass} rounded-sm`}
        variants={topVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={`h-0.5 w-full ${colorClass} rounded-sm`}
        variants={middleVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className={`h-0.5 w-full ${colorClass} rounded-sm`}
        variants={bottomVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
