'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo('.cta-word', { y: '100%', opacity: 0 }, {
      y: '0%', opacity: 1, duration: 1.5, stagger: 0.1, ease: 'power4.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
    });
    gsap.fromTo(lineRef.current, { scaleX: 0 }, {
      scaleX: 1, duration: 2, ease: 'power3.inOut',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
    });
    gsap.fromTo('.cta-sub', { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0c0c0c] text-white overflow-hidden" id="execute">
      <div ref={lineRef} className="h-[1px] bg-white/20 w-full mb-16 md:mb-24 origin-left" />

      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 md:gap-16">
        <div className="overflow-hidden">
          <h2 className="text-[clamp(3.5rem,12vw,12rem)] font-bold tracking-tighter uppercase leading-[0.85]" style={{ fontFamily: 'var(--font-display)' }}>
            {['READY', 'TO', 'EXECUTE?'].map((word, i) => (
              <div key={i} className="overflow-hidden block">
                <span className="cta-word inline-block">{word}</span>
              </div>
            ))}
          </h2>
        </div>

        <div className="cta-sub flex flex-col gap-6 md:gap-8 max-w-sm pb-4">
          <p className="text-white/50 font-light leading-relaxed text-base md:text-lg">
            Partner with Accredian to build a workforce that is future-ready. Let's architect your upskilling strategy together.
          </p>
          <a href="#contact" className="btn-hero self-start">
            <span>Initiate Conversation</span>
          </a>
        </div>
      </div>

      <div className="h-[1px] bg-white/20 w-full mt-16 md:mt-24" />
    </section>
  );
}
