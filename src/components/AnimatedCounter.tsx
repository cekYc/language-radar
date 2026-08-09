import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedCounter({ target, duration = 2_000, suffix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        const startTime = Date.now();

        const animate = () => {
          const progress = Math.min((Date.now() - startTime) / duration, 1);
          const easeOut = 1 - (1 - progress) ** 3;
          setCount(Math.floor(target * easeOut));
          if (progress < 1) requestAnimationFrame(animate);
        };

        animate();
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, target]);

  return <span ref={elementRef} className="stat-number">{count}{suffix}</span>;
}

