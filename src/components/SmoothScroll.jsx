import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    // Only enable on desktop for smooth high-refresh scrolling
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      const animId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animId);
        lenis.destroy();
      };
    }
  }, []);

  return null;
}
