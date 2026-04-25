'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const modes = [
  {
    mode: 'Online',
    badge: '100% Remote',
    desc: 'Fully asynchronous and live-virtual delivery. Ideal for globally distributed teams.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2938&auto=format&fit=crop'
  },
  {
    mode: 'Blended',
    badge: 'Hybrid Delivery',
    desc: 'Combine online cohort sessions with periodic on-site immersions for maximum retention.',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    mode: 'Offline',
    badge: 'On-Campus Intensive',
    desc: 'Full-immersion, on-site delivery at your facility or one of our partner campuses.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop'
  },
];

export default function DeliveryModes() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray('.mode-card');
    gsap.fromTo(cards, { opacity: 0, scale: 0.92 }, {
      opacity: 1, scale: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#f2f2f2] text-[#0c0c0c]" id="delivery">
      <div className="container-custom mb-16 md:mb-24 text-center">
        <div className="text-[10px] uppercase tracking-[0.4em] text-[#ff4a1c] font-bold mb-6 md:mb-8">Flexible Delivery</div>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: 'var(--font-display)' }}>
          LEARN ON <br/>YOUR TERMS.
        </h2>
      </div>

      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {modes.map((m, i) => (
          <div key={i} className="mode-card group relative overflow-hidden rounded-3xl h-[50vh] md:h-[60vh] cursor-default">
            <div className="absolute inset-0 bg-[#0c0c0c]/50 z-10 group-hover:bg-[#0c0c0c]/30 transition-colors duration-700" />
            <img src={m.img} alt={m.mode} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700" />
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-10 text-white">
              <span className="self-start px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-bold">
                {m.badge}
              </span>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2 md:mb-4" style={{ fontFamily: 'var(--font-display)' }}>{m.mode}</h3>
                <p className="text-sm text-white/70 font-light leading-relaxed max-w-xs">{m.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
