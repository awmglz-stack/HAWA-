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
      if (containerRef.current) containerRef.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`
      if (warpRef.current) warpRef.current.style.transform = `translate(-50%, -50%) scale(${1 + Math.abs(x) / 25})`
      if (rippleRef.current) rippleRef.current.style.background = `radial-gradient(circle at ${event.clientX}px ${event.clientY}px, rgba(0,255,255,.4), transparent 40%)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="ultra-container">
      <div className="hud-overlay" aria-hidden="true" />
      <div className="nebula nebula-one" aria-hidden="true" />
      <div className="nebula nebula-two" aria-hidden="true" />
      <div ref={rippleRef} className="ripple-layer" aria-hidden="true" />
      <div className="laser-ring" aria-hidden="true" />
      <div ref={warpRef} className="warp-core" aria-hidden="true" />
      <section className="content">
        <p className="eyebrow">WELCOME TO THE FUTURE</p>
        <h1>HAWA ULTRA 🚀</h1>
        <p className="subtitle">ULTRA GODMODE+++ — أقوى إصدار مرئي ممكن لصفحة هبوط نيون ثلاثية الأبعاد.</p>
        <button type="button" className="warp-button">ENTER ULTRA DIMENSION</button>
      </section>
      <style jsx>{`
        .ultra-container{min-height:100vh;position:relative;isolation:isolate;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:40px 20px;color:#dfffff;background:radial-gradient(circle at 50% 45%,#063d4a 0%,#020b18 45%,#01030a 100%);font-family:Arial,sans-serif;text-align:center;perspective:3000px;transition:transform .2s ease-out}.hud-overlay,.nebula,.ripple-layer,.laser-ring,.warp-core{position:absolute;pointer-events:none}.hud-overlay{inset:0;z-index:-1;background:radial-gradient(circle at center,rgba(0,255,255,.14),transparent 70%)}.nebula{inset:-20%;z-index:-3;opacity:.24;background:radial-gradient(ellipse at 30% 40%,#00ffff55,transparent 30%),radial-gradient(ellipse at 70% 60%,#7c3cff55,transparent 28%);filter:blur(28px)}.nebula-one{animation:nebulaFlow 35s linear infinite}.nebula-two{opacity:.14;animation:nebulaFlow 50s linear infinite reverse}.ripple-layer{inset:0;z-index:-1;transition:background .1s}.laser-ring{z-index:-2;width:min(800px,130vw);height:min(800px,130vw);border:4px solid rgba(0,255,255,.4);border-radius:50%;box-shadow:0 0 90px #0ff;animation:circleSpin 12s linear infinite}.warp-core{z-index:-2;top:50%;left:50%;width:min(450px,70vw);height:min(450px,70vw);border-radius:50%;background:radial-gradient(circle,rgba(0,255,255,.85),rgba(0,0,0,.9));box-shadow:0 0 120px #0ff,inset 0 0 120px #0ff;transform:translate(-50%,-50%);animation:warpPulse 2s infinite}.content{max-width:1000px;z-index:1}.eyebrow{color:#8fffff;letter-spacing:.35em;font-size:14px}h1{margin:10px 0 20px;color:#bfffff;font-size:clamp(46px,11vw,120px);text-shadow:0 0 70px #0ff,0 0 150px #0ff;animation:titlePulse 2s infinite}.subtitle{max-width:850px;margin:auto;font-size:clamp(20px,3vw,36px);line-height:1.7;animation:fadeIn 2s ease}.warp-button{margin-top:55px;padding:20px 34px;border:3px solid #0ff;border-radius:14px;color:#dfffff;background:rgba(0,20,30,.45);font-size:clamp(18px,3vw,30px);cursor:pointer;box-shadow:0 0 45px #0ff,inset 0 0 35px #0ff;animation:warpPulse 1.5s infinite}.warp-button:hover{background:rgba(0,255,255,.2);transform:scale(1.04)}@keyframes titlePulse{0%,100%{text-shadow:0 0 70px #0ff}50%{text-shadow:0 0 160px #0ff}}@keyframes warpPulse{0%,100%{box-shadow:0 0 70px #0ff,inset 0 0 70px #0ff}50%{box-shadow:0 0 160px #0ff,inset 0 0 160px #0ff}}@keyframes fadeIn{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:translateY(0)}}@keyframes circleSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes nebulaFlow{from{transform:translate(0,0) scale(1)}to{transform:translate(10%,10%) scale(1.15)}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
      `}</style>
    </div>
  )
}
