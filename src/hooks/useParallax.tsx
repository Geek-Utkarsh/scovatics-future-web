import { useEffect, useState } from "react";

interface UseParallaxOptions {
  speed?: number;
  enabled?: boolean;
}

export const useParallax = ({ speed = 0.5, enabled = true }: UseParallaxOptions = {}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, enabled]);

  return offset;
};
