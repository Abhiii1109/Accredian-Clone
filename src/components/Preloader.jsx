'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const words = [
  "PROTOCOL", "BLUEPRINT", "SYNCHRONIZE", "ARCHITECT", "ENGINEERING", "INNOVATION", "CALIBRATE", "ACCREDIAN"
];

export default function Preloader() {
  const containerRef = useRef(null);
  const wordRef = useRef(null);
  const barRef = useRef(null);
  const shutterRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto';
      }
    });

    // Word Shuffle Animation
    const shuffleInterval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 150);

    // Initial State
    gsap.set('.preloader-panel', { yPercent: 0 });

    // Progress bar animation
    tl.to(barRef.current, {
      width: '100%',
      duration: 3,
      ease: 'power4.inOut'
    });

    // Fade out words
    tl.to([wordRef.current, barRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power4.inOut'
    }, "-=0.2");

    // Luxury Shutter Reveal (Multi-panel slide)
    tl.to('.preloader-panel', {
      yPercent: -100,
      duration: 1.4,
      stagger: {
        amount: 0.3,
        from: "center"
      },
      ease: 'expo.inOut'
    });

    // Hide container after animation
    tl.set(containerRef.current, { display: 'none' });

    return () => {
      clearInterval(shuffleInterval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Panels (The Shutter) */}
      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="preloader-panel flex-1 bg-[#0c0c0c] border-r border-white/5 last:border-none h-full"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden mb-4 px-4 text-center">
          <div 
            ref={wordRef}
            className="text-[clamp(1.25rem,6vw,2.5rem)] font-bold tracking-[0.4em] md:tracking-[0.6em] uppercase text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {words[index]}
          </div>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-64 md:w-96 h-[1px] bg-white/10 relative overflow-hidden">
          <div 
            ref={barRef}
            className="absolute top-0 left-0 h-full w-0 bg-[#ff4a1c]"
          />
        </div>

        {/* Status Text */}
        <div className="mt-8 flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff4a1c] animate-pulse" />
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-bold">Establishing Secure Uplink</span>
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-10">
        <div className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
          Accredian <br/> Systems.
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold text-right">
          Ver 2.4.0 <br/> Protocol.
        </div>
      </div>
    </div>
  );
}
