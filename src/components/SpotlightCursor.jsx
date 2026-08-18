import { useEffect, useState } from "react";

export default function SpotlightCursor() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only active on desktop devices with fine pointers
    if (window.matchMedia("(pointer: fine)").matches) {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      };

      const handleMouseLeave = () => setIsVisible(false);
      const handleMouseEnter = () => setIsVisible(true);

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
        document.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(192, 132, 252, 0.03) 45%, transparent 70%)",
          filter: "blur(20px)",
          willChange: "transform, top, left",
        }}
      />
    </div>
  );
}
