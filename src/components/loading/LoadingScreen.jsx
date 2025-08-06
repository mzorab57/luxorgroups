import React, { useState, useEffect } from "react";
import logo from "/logo-removebg.png";

const LoadingScreen = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3); // Cycle through 3 animation phases
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getLogoClasses = () => {
    const baseClasses = "w-32 md:w-48 transition-all duration-1000 ease-in-out";
    
    switch (animationPhase) {
      case 0:
        return `${baseClasses} scale-100 opacity-100 rotate-0`;
      case 1:
        return `${baseClasses} scale-110 opacity-80 rotate-3`;
      case 2:
        return `${baseClasses} scale-105 opacity-90 rotate-[-3deg]`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-t from-[#19160f] via-[#19160f]/90 to-[#19160f]/90 flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-40 md:w-56 h-40 md:h-56 rounded-full bg-gradient-to-r from-yellow-500/20 to-teal-500/20 blur-xl transition-all duration-2000 ${
            animationPhase === 1 ? 'scale-125 opacity-60' : 'scale-100 opacity-30'
          }`}></div>
        </div>
        
        {/* Logo in center */}
        <div className="relative flex items-center justify-center">
          <img
            src={logo}
            alt="Tawela Logo"
            className={getLogoClasses()}
            style={{
              filter: `drop-shadow(0 0 20px rgba(234, 179, 8, ${animationPhase === 1 ? '0.4' : '0.2'}))`
            }}
          />
        </div>
        
        {/* Floating particles effect */}
        {/* <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse`}
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default LoadingScreen;
