'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
  'ADP', 'BAYER', 'NOVARTIS', 'SAMSUNG', 'AMAZON', 'IBM'
];

export default function Partners() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Reveal section
    gsap.fromTo(sectionRef.current, { opacity: 0 }, {
      opacity: 1, duration: 2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 90%' },
    });

    // GSAP Marquee
    const marquee = marqueeRef.current;
    const scrollWidth = marquee.scrollWidth / 3;

    const loop = gsap.to(marquee, {
      x: -scrollWidth,
      duration: 25,
      ease: 'none',
      repeat: -1,
    });

    // Slow down/speed up marquee on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        gsap.to(loop, { timeScale: 1 + self.getVelocity() / 1000, duration: 0.5 });
      }
    });

    return () => loop.kill();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 border-y border-white/10 overflow-hidden bg-[#0c0c0c] relative z-10" id="partners">
      <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <div key={i} className="flex-shrink-0 px-16 md:px-24 flex items-center">
            <span className="text-3xl md:text-5xl font-bold tracking-tighter text-outline select-none" style={{ fontFamily: 'var(--font-display)' }}>{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
