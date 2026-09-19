'use client'

import { useEffect, useRef } from 'react'

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const warpRef = useRef<HTMLDivElement>(null)
  const rippleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 40
      const y = (event.clientY / window.innerHeight - 0.5) * 40

      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`
      }

      if (warpRef.current) {
        warpRef.current.style.transform = `translate(-50%, -50%) scale(${1 + Math.abs(x) / 25})`
      }

      if (rippleRef.current) {
        rippleRef.current.style.background = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, rgba(0,255,255,0.42), transparent 38%)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main ref={containerRef} className="ultra-container">
      <div className="hud-overlay" aria-hidden="true" />
      <div className="nebula nebula-one" aria-hidden="true" />
      <div className="nebula nebula-two" aria-hidden="true" />
      <div ref={rippleRef} className="ripple-layer" aria-hidden="true" />
      <div className="laser-ring" aria-hidden="true" />
      <div ref={warpRef} className="warp-core" aria-hidden="true" />

      <section className="content">
        <div className="logo-tag">HAWA // SYSTEM</div>
        <h1>HAWA ULTRA</h1>
        <p>ULTRA GODMODE+++ — أقوى إصدار مرئي ممكن لصفحة هبوط نيون 3D.</p>
        <button type="button" aria-label="Enter Ultra Dimension">
          ENTER ULTRA DIMENSION
        </button>
      </section>

      <style jsx>{`
        :global(html, body) {
          margin: 0;
          padding: 0;
          background: #020812;
        }

        .ultra-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: #7af6ff;
          background:
            linear-gradient(rgba(3, 14, 21, 0.2), rgba(3, 14, 21, 0.52)),
            url('https://i.imgur.com/7fF0p8T.jpeg') center/cover no-repeat;
          font-family: Arial, Helvetica, sans-serif;
          perspective: 1400px;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
        }

        .hud-overlay,
        .nebula,
        .ripple-layer,
        .laser-ring,
        .warp-core {
          position: absolute;
          pointer-events: none;
        }

        .hud-overlay {
          inset: 0;
          background: radial-gradient(circle at center, rgba(0,255,255,0.16), transparent 76%);
        }

        .nebula {
          inset: -10%;
          background-size: cover;
          background-position: center;
          opacity: 0.3;
          filter: blur(4px);
        }

        .nebula-one {
          background-image: url('https://i.imgur.com/8fK4h6v.png');
          animation: nebulaFlow 35s linear infinite;
        }

        .nebula-two {
          background-image: url('https://i.imgur.com/7fF0p8T.jpeg');
          opacity: 0.18;
          animation: nebulaFlow2 50s linear infinite;
        }

        .ripple-layer {
          inset: 0;
          transition: background 0.1s linear;
        }

        .laser-ring {
          top: 50%;
          left: 50%;
          width: min(820px, 120vw);
          height: min(820px, 120vw);
          transform: translate(-50%, -50%);
          border: 3px solid rgba(0,255,255,0.42);
          border-radius: 50%;
          box-shadow:
            0 0 80px rgba(0,255,255,0.9),
            inset 0 0 70px rgba(0,255,255,0.18);
          animation: ringPulse 6s ease-in-out infinite;
        }

        .warp-core {
          top: 50%;
          left: 50%;
          width: min(360px, 55vw);
          height: min(360px, 55vw);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,255,0.95), rgba(0,255,255,0.22) 36%, transparent 72%);
          box-shadow:
            0 0 70px rgba(0,255,255,0.9),
            inset 0 0 80px rgba(0,255,255,0.8);
          animation: warpPulse 4.5s ease-in-out infinite;
        }

        .content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 720px;
          padding: 32px 24px;
          transform: translateZ(90px);
        }

        .logo-tag {
          display: inline-block;
          letter-spacing: 0.42rem;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: rgba(122, 246, 255, 0.8);
          border: 1px solid rgba(122, 246, 255, 0.42);
          border-radius: 999px;
          padding: 10px 18px;
          background: rgba(9, 28, 33, 0.28);
          box-shadow: 0 0 24px rgba(0,255,255,0.1);
          margin-bottom: 18px;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.6rem, 7vw, 7rem);
          line-height: 0.9;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #dffcff;
          text-shadow: 0 0 35px rgba(0,255,255,0.8), 0 0 90px rgba(0,255,255,0.5);
          animation: titlePulse 3s ease-in-out infinite;
        }

        p {
          margin: 24px auto 0;
          max-width: 620px;
          font-size: clamp(1rem, 2vw, 1.4rem);
          line-height: 1.8;
          color: rgba(203, 247, 255, 0.9);
          text-shadow: 0 0 18px rgba(0,255,255,0.35);
        }

        button {
          margin-top: 30px;
          padding: 18px 34px;
          border: 1px solid rgba(122, 246, 255, 0.65);
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(0,255,255,0.12), rgba(0,255,255,0.02));
          color: #dffcff;
          font-size: 0.95rem;
          letter-spacing: 0.18rem;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 0 25px rgba(0,255,255,0.24), inset 0 0 18px rgba(0,255,255,0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 0 30px rgba(0,255,255,0.42), inset 0 0 18px rgba(0,255,255,0.18);
          border-color: rgba(122, 246, 255, 1);
        }

        @keyframes nebulaFlow {
          0% { transform: translate3d(0, 0, 0) scale(1.05); }
          50% { transform: translate3d(-3%, 2%, 0) scale(1.12); }
          100% { transform: translate3d(0, 0, 0) scale(1.05); }
        }

        @keyframes nebulaFlow2 {
          0% { transform: translate3d(0, 0, 0) scale(1.08); }
          50% { transform: translate3d(4%, -2%, 0) scale(1.15); }
          100% { transform: translate3d(0, 0, 0) scale(1.08); }
        }

        @keyframes ringPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; }
          50% { transform: translate(-50%, -50%) scale(1.06); opacity: 1; }
        }

        @keyframes titlePulse {
          0%, 100% { text-shadow: 0 0 30px rgba(0,255,255,0.8), 0 0 90px rgba(0,255,255,0.5); }
          50% { text-shadow: 0 0 55px rgba(0,255,255,1), 0 0 150px rgba(0,255,255,0.8); }
        }

        @keyframes warpPulse {
          0%, 100% {
            box-shadow: 0 0 70px rgba(0,255,255,0.85), inset 0 0 70px rgba(0,255,255,0.7);
            opacity: 0.9;
          }
          50% {
            box-shadow: 0 0 140px rgba(0,255,255,1), inset 0 0 120px rgba(0,255,255,0.9);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .ultra-container {
            padding: 24px 16px;
          }

          .content {
            max-width: 100%;
            padding: 20px 12px;
          }

          .logo-tag {
            letter-spacing: 0.2rem;
            font-size: 0.62rem;
            padding: 8px 12px;
          }

          p {
            line-height: 1.6;
          }

          button {
            width: 100%;
            max-width: 360px;
            letter-spacing: 0.11rem;
            padding: 16px 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  )
}
