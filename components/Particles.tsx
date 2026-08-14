'use client';

import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const context: CanvasRenderingContext2D = ctx;

    const FRICTION = 0.95;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSpeedY: number;
      drift: number;
      opacity: number;
      pulse: number;
      depth: number;
    }[] = [];
    let lastScrollY = window.scrollY;
    let particleCount = 0;
    let rafId = 0;

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const depth = Math.random();
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: 0,
          vy: 0,
          size: (Math.random() * 2 + 0.5) * (0.5 + depth * 0.5),
          baseSpeedY: Math.random() * 0.2 + 0.05,
          drift: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.4 + 0.1,
          pulse: Math.random() * Math.PI * 2,
          depth: depth
        });
      }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = Math.floor((window.innerWidth * window.innerHeight) / 800);
      initParticles();
    }

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      const isLight = document.documentElement.dataset.theme === 'light';
      canvas.style.mixBlendMode = isLight ? 'multiply' : 'screen';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= FRICTION;
        p.vy *= FRICTION;

        const parallaxY = scrollDelta * p.depth * 0.5;
        p.y -= p.baseSpeedY + parallaxY;
        p.x += p.drift;
        p.pulse += 0.02;

        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;

        const currentSize = p.size + Math.sin(p.pulse) * 0.2;
        context.beginPath();
        context.arc(p.x, p.y, Math.max(0, currentSize), 0, Math.PI * 2);
        context.fillStyle = isLight
          ? 'rgba(120, 108, 90, ' + p.opacity * (0.5 + p.depth * 0.5) + ')'
          : 'rgba(200, 210, 220, ' + p.opacity * (0.5 + p.depth * 0.5) + ')';
        context.fill();
      });

      rafId = requestAnimationFrame(animate);
    }

    function handleGlobalClick(e: MouseEvent) {
      if (window.scrollY > window.innerHeight) return;
      const clickX = e.clientX;
      const clickY = e.clientY;
      const vicinityRadius = Math.max(window.innerWidth, window.innerHeight) * 0.4;
      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < vicinityRadius && Math.random() > 0.5) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - dist / vicinityRadius) * 25;
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        }
      });
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousedown', handleGlobalClick);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousedown', handleGlobalClick);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}