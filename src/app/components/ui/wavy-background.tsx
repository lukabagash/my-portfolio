"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = (): number => {
    return speed === "slow" ? 0.001 : 0.002;
  };

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;

    ctx = canvas.getContext("2d");
    if (!ctx) return;

    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.onresize = () => {
      w = ctx!.canvas.width = window.innerWidth;
      h = ctx!.canvas.height = window.innerHeight;
      ctx!.filter = `blur(${blur}px)`;
    };

    render();
  };

  const waveColors = colors ?? ["#222", "#444", "#666", "#888", "#AAA"];

  const drawWave = (n: number) => {
    if (!ctx) return;

    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 60;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      ctx.globalAlpha = waveOpacity;

      for (x = 0; x < w; x += 5) {
        const y = noise(x / 50, 0.2 * i, nt) * 150; 
        ctx.lineTo(x, y + h * (0.3 + i * 0.1)); 
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;

  const render = () => {
    if (!ctx) return;

    ctx.fillStyle = backgroundFill || "#111";
    ctx.fillRect(0, 0, w, h);
    drawWave(7);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
