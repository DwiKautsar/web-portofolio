"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  // Don't render glow until mounted on client to prevent hydration mismatch
  if (!mounted || !resolvedTheme) return null;

  const isDark = resolvedTheme === "dark";
  const glowColor = isDark ? "rgba(96, 165, 250, 0.4)" : "rgba(30, 58, 138, 0.35)";

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
      }}
    />
  );
}
