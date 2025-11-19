import { useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useScrollAnimation = (
  variants: Variants,
  triggerOnce = true,
  threshold = 0.1
) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, variants };
};
