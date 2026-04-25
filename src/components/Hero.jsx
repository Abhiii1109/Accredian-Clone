'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Initial Reveal
    const tl = gsap.timeline();
    tl.to(bgRef.current, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 2, ease: 'power4.inOut' });
    tl.fromTo('.hero-title-line', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, stagger: 0.1, ease: 'power4.out' }, "-=1");
    tl.fromTo('.hero-fade', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out', stagger: 0.2 }, "-=1");

    // Parallax
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to(textRef.current, {
      yPercent: 50,
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true }
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100vh] w-full overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-12 lg:px-24" id="hero">
      {/* Background Image with Clip Path Reveal */}
      <div className="absolute inset-0 w-full h-full -z-20 bg-[#0c0c0c]">
        <div ref={bgRef} className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop" alt="Abstract Tech Architecture" className="w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
        </div>
      </div>

      <div ref={textRef} className="relative z-10 max-w-7xl">
        <div className="hero-fade inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
          <div className="w-2 h-2 rounded-full bg-[#ff4a1c] animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest font-semibold text-white/80">Next-Gen Upskilling Engine</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase mb-8" style={{ fontFamily: 'var(--font-display)' }}>
          <div className="overflow-hidden"><div className="hero-title-line">NEXT-GEN</div></div>
          <div className="overflow-hidden"><div className="hero-title-line text-outline">EXPERTISE.</div></div>
        </h1>
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 hero-fade">
          <p className="text-base md:text-xl text-white/60 font-light max-w-lg leading-relaxed">
            For Your Enterprise. Transform your workforce with elite technological training and domain mastery.
          </p>
          <a href="#programs" className="btn-hero shrink-0">
            <span>Explore Hubs</span>
          </a>
        </div>
      </div>
    </section>
  );
}
