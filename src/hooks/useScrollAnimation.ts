import { useEffect, useRef } from "react";

// Lista de classes de animação válidas
type AnimationClass =
  | "fadeIn"
  | "fadeInDown"
  | "fadeInUp"
  | "bounceIn"
  | "bounceInLeft"
  | "bounceInRight"
  | "moveUp"
  | "fadeBgColor"
  | "tracking-in-contract-bck-top";

export function useScrollAnimation(animationClass: AnimationClass) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function applyAnimation() {
      el.classList.add("animate", animationClass);
    }

    // 👉 1. Verifica se o elemento já está visível ao carregar a página
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      applyAnimation();
    }

    // 👉 2. Observa a entrada no viewport (scroll)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyAnimation();
            observer.unobserve(el); // anima apenas 1 vez
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animationClass]);

  return ref;
}
