import { useEffect, useRef, type ReactNode } from "react";

const pointerMediaQuery = "(hover: hover) and (pointer: fine)";

export function MouseFollow({
  children,
  className = "",
  maxOffset = 16,
}: {
  children: ReactNode;
  className?: string;
  maxOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    const image = container?.querySelector<HTMLElement>("img");
    const mediaQuery = window.matchMedia(pointerMediaQuery);
    if (!container || !image || !mediaQuery.matches) return;

    const reset = () => {
      image.style.transition = "transform 360ms ease-out";
      image.style.transform = "translate3d(0, 0, 0)";
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      const offsetX = x * maxOffset;
      const offsetY = y * maxOffset;

      image.style.transition = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1)";
      image.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    };

    image.style.transition = "transform 240ms cubic-bezier(0.2, 0.8, 0.2, 1)";
    container.addEventListener("pointermove", handlePointerMove);
    container.addEventListener("pointerleave", reset);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", reset);
      image.style.transition = "";
      image.style.transform = "";
    };
  }, [maxOffset]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
