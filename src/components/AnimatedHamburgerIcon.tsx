import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimatedHamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const top: Variants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: 45, translateY: 8 },
};

const middle: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const bottom: Variants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: -45, translateY: -8 },
};

const AnimatedHamburgerIcon: React.FC<AnimatedHamburgerIconProps> = ({
  isOpen,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`p-2 focus:outline-none ${className}`}
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <motion.svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.line x1="3" y1="6" x2="21" y2="6" variants={top} />
        <motion.line x1="3" y1="12" x2="21" y2="12" variants={middle} />
        <motion.line x1="3" y1="18" x2="21" y2="18" variants={bottom} />
      </motion.svg>
    </button>
  );
};

export default AnimatedHamburgerIcon;
