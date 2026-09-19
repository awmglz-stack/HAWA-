import { useEffect } from "react";

export default function Landing() {

  useEffect(() => {
    const container = document.querySelector(".ultra-container");
    const warp = document.querySelector(".warp-core");
    const ripple = document.querySelector(".ripple-layer");

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      container.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;

      warp.style.transform = `translate(-50%, -50%) scale(${1 + Math.abs(x) / 25})`;

      ripple.style.background = `
        radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
        rgba(0,255,255,0.4), transparent 40%)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="ultra-container" style={{
      minHeight: "100vh",
      background: "url('https://i.imgur.com/7fF0p8T.jpeg') center/cover no-repeat",
      color: "#0ff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "40px",
      overflow: "hidden",
      position: "relative",
      transition: "0.2s",
      perspective: "3000px"
    }}>

      {/* HUD Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at center, rgba(0,255,255,0.12), transparent 80%)",
        pointerEvents: "none"
      }} />

      {/* Nebula Layer 1 */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "url('https://i.imgur.com/8fK4h6v.png')",
        backgroundSize: "cover",
        opacity: 0.25,
        animation: "nebulaFlow 35s linear infinite"
      }} />

      {/* Nebula Layer 2 */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "url('https://i.imgur.com/7fF0p8T.jpeg')",
        backgroundSize: "cover",
        opacity: 0.15,
        animation: "nebulaFlow2 50s linear infinite"
      }} />

      {/* Ripple Layer */}
      <div className="ripple-layer" style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        transition: "0.1s"
      }} />

      {/* Circular Laser */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "800px",
        height: "800px",
        borderRadius: "50%",
        border: "4px solid rgba(0,255,255,0.4)",
        boxShadow: "0 0 90px #0ff",
        transform: "translate(-50%, -50%)",
        animation: "circleSpin 12s linear infinite"
      }} />

      {/* Warp Core */}
      <div className="warp-core" style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "450px",
        height: "450px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(0,255,255,0.85), rgba(0,0,0,0.9))",
        boxShadow: "0 0 120px #0ff, inset 0 0 120px #0ff",
        transform: "translate(-50%, -50%)",
        animation: "warpPulse 2s infinite"
      }} />

      {/* Title */}
      <h1 style={{
        fontSize: "120px",
        marginBottom: "20px",
        textShadow: "0 0 70px #0ff, 0 0 150px #0ff",
        animation: "titlePulse 2s infinite"
      }}>
        HAWA ULTRA
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: "36px",
        maxWidth: "1000px",
        lineHeight: "1.7",
        opacity: 0.95,
        animation: "fadeIn 2s ease"
      }}>
        ULTRA GODMODE+++ — أقوى إصدار مرئي ممكن لصفحة هبوط نيون 3D.
      </p>

      {/* Warp Button */}
      <div style={{
        marginTop: "90px",
        padding: "30px 80px",
        border: "4px solid #0ff",
        borderRadius: "22px",
        fontSize: "34px",
        cursor: "pointer",
        boxShadow: "0 0 70px #0ff, inset 0 0 70px #0ff",
        animation: "warpPulse 1.5s infinite"
      }}>
        ENTER ULTRA DIMENSION
      </div>

      {/* Animations */}
      <style>{`
        @keyframes titlePulse {
          0% { text-shadow: 0 0 70px #0ff; }
          50% { text-shadow: 0 0 160px #0ff; }
          100% { text-shadow: 0 0 70px #0ff; }
        }

        @keyframes warpPulse {
          0% { box-shadow: 0 0 70px #0ff, inset 0 0 70px #0ff; }
          50% { box-shadow: 0 0 160px #0ff, inset 0 0 160px #0ff; }
          100% { box-shadow: 0 0 70px #0ff, inset 0 0 70px #0ff; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes circleSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes nebulaFlow {
          from { background-position: 0 0; }
          to { background-position: 1400px 1400px; }
        }

        @keyframes nebulaFlow2 {
          from { background-position: 0 0; }
          to { background-position: -1400px -1400px; }
        }
      `}</style>

    </div>
  );
}
