'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { val: '10K+', label: 'PROFESSIONALS TRAINED' },
  { val: '200+', label: 'SESSIONS DELIVERED' },
  { val: '5K+', label: 'ACTIVE LEARNERS' },
];

export default function ImpactStats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lines = gsap.utils.toArray('.stat-line');
    gsap.fromTo(lines, { width: 0 }, {
      width: '100%', duration: 1.5, ease: 'power3.inOut', stagger: 0.2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
    });
    
    gsap.fromTo('.stat-val', { y: 100 }, {
      y: 0, duration: 1, ease: 'power4.out', stagger: 0.2,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#0c0c0c] text-[#f2f2f2] overflow-hidden">
      <div className="border-t border-white/10">
        <div className="container-custom pt-16 pb-8">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#ff4a1c] font-bold">Global Impact</h2>
        </div>
        
        <div className="flex flex-col">
          {stats.map((s, i) => (
            <div key={i} className="relative py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between group cursor-default container-custom border-t border-white/10 hover:bg-white/[0.02] transition-colors duration-500">
              <div className="overflow-hidden">
                <div className="stat-val text-[clamp(4rem,10vw,12rem)] font-bold tracking-tighter uppercase leading-[1] group-hover:text-[#ff4a1c] transition-colors duration-500" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.val}
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mt-2 md:mt-0">
                {s.label}
              </div>
            </div>
          ))}
          <div className="h-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
}
