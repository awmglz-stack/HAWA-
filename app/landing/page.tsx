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
        rippleRef.current.style.background = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, rgba(0,255,255,0.4), transparent 40%)`
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
        <h1>HAWA ULTRA</h1>
        <p>ULTRA GODMODE+++ — أقوى إصدار مرئي ممكن لصفحة هبوط نيون 3D.</p>
        <button type="button">ENTER ULTRA DIMENSION</button>
      </section>

      <style jsx>{`
        .ultra-container{min-height:100vh;background:url('https://i.imgur.com/7fF0p8T.jpeg') center/cover no-repeat;color:#0ff;display:flex;justify-content:center;align-items:center;font-family:Arial,sans-serif;text-align:center;padding:40px;overflow:hidden;position:relative;transition:.2s;perspective:3000px}
        .hud-overlay,.nebula,.ripple-layer,.laser-ring,.warp-core{position:absolute;pointer-events:none}
        .hud-overlay{inset:0;background:radial-gradient(circle at center,rgba(0,255,255,.12),transparent 80%)}
        .nebula{inset:0;background:url('https://i.imgur.com/8fK4h6v.png') center/cover;opacity:.25}
        .nebula-one{animation:nebulaFlow 35s linear infinite}.nebula-two{background-image:url('https://i.imgur.com/7fF0p8T.jpeg');opacity:.15;animation:nebulaFlow2 50s linear infinite}
        .ripple-layer{inset:0;transition:.1s}.laser-ring{top:50%;left:50%;width:min(800px,120vw);height:min(800px,120vw);border:4px solid rgba(0,255,255,.4);border-radius:50%;box-shadow:0 0 90px #0ff;transform:translate(-50%,-50%);animation:circleSpin 12s linear infinite}.warp-core{top:50%;left:50%;width:min(450px,70vw);height:min(450px,70vw);border-radius:50%;background:radial-gradient(circle,rgba(0,255,255,.85),rgba(0,0,0,.9));box-shadow:0 0 120px #0ff,inset 0 0 120px #0ff;transform:translate(-50%,-50%);animation:warpPulse 2s infinite}.content{z-index:1}.content h1{font-size:clamp(52px,12vw,120px);margin:0 0 20px;text-shadow:0 0 70px #0ff,0 0 150px #0ff;animation:titlePulse 2s infinite}.content p{font-size:clamp(20px,3vw,36px);max-width:1000px;line-height:1.7;opacity:.95;animation:fadeIn 2s ease}.content button{margin-top:50px;padding:24px 55px;border:4px solid #0ff;border-radius:22px;font-size:clamp(18px,3vw,34px);color:#0ff;background:transparent;cursor:pointer;box-shadow:0 0 70px #0ff,inset 0 0 70px #0ff;animation:warpPulse 1.5s infinite}.content button:hover{background:rgba(0,255,255,.18)}
        @keyframes titlePulse{0%,100%{text-shadow:0 0 70px #0ff}50%{text-shadow:0 0 160px #0ff}}@keyframes warpPulse{0%,100%{box-shadow:0 0 70px #0ff,inset 0 0 70px #0ff}50%{box-shadow:0 0 160px #0ff,inset 0 0 160px #0ff}}@keyframes fadeIn{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:translateY(0)}}@keyframes circleSpin{from{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}@keyframes nebulaFlow{from{background-position:0 0}to{background-position:1400px 1400px}}@keyframes nebulaFlow2{from{background-position:0 0}to{background-position:-1400px -1400px}}
        @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important}}
      `}</style>
    </main>
  )
}
