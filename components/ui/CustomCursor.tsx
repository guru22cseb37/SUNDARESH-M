"use client";

import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition();
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Smooth ring follow
    let ringX = x;
    let ringY = y;
    let animId: number;

    const animate = () => {
      ringX += (x - ringX) * 0.12;
      ringY += (y - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    return () => cancelAnimationFrame(animId);
  }, [x, y]);

  useEffect(() => {
    const handleHover = () => setHovering(true);
    const handleLeave = () => setHovering(false);
    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor-hover], input, textarea, select"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${hovering ? "hovering" : ""} ${clicking ? "scale-50" : ""}`}
        style={{
          left: x,
          top: y,
          transform: `translate(-50%, -50%) scale(${clicking ? 0.5 : 1})`,
          transition: clicking ? "transform 0.1s" : "transform 0.2s",
        }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovering ? "hovering" : ""}`}
        style={{
          transform: `translate(-50%, -50%) scale(${clicking ? 0.8 : 1})`,
        }}
      />
    </>
  );
}
