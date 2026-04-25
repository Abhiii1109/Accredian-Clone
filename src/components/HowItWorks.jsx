'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '01', title: 'Needs Assessment', desc: 'We conduct a thorough diagnostic of your team\'s current skill baseline, strategic gaps, and business objectives.' },
  { num: '02', title: 'Program Design', desc: 'Our expert architects co-design a fully customized curriculum mapped to your specific tech stack, industry, and goals.' },
  { num: '03', title: 'Cohort Delivery', desc: 'Programs are delivered through your chosen mode — online, blended, or offline — with live expert sessions and hands-on projects.' },
  { num: '04', title: 'Impact Reporting', desc: 'Track learner progress and organizational ROI through our real-time analytics dashboard and periodic review reports.' },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;
    gsap.fromTo(Array.from(cards), { opacity: 0, y: 100 }, {
      opacity: 1, y: 0, duration: 1.5, stagger: 0.15, ease: 'power4.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0c0c0c] text-white overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-24 gap-8 md:gap-12">
        <h2 className="text-5xl md:text-8xl lg:text-[7vw] font-bold tracking-tighter uppercase leading-[0.85]" style={{ fontFamily: 'var(--font-display)' }}>
          THE <br/> <span className="text-outline">PROCESS.</span>
        </h2>
        <p className="max-w-xs text-white/50 font-light leading-relaxed text-sm md:text-base">A proven 4-step framework for transforming your workforce at scale.</p>
      </div>

      <div ref={cardsRef} className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {steps.map((s, i) => (
          <div key={i} className="group flex flex-col pt-6 md:pt-8 border-t border-white/20 hover:border-[#ff4a1c] transition-colors duration-500">
            <div className="text-5xl md:text-6xl font-bold tracking-tighter text-white/20 group-hover:text-[#ff4a1c] transition-colors duration-500 mb-6 md:mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              {s.num}
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight uppercase mb-4" style={{ fontFamily: 'var(--font-display)' }}>{s.title}</h3>
            <p className="text-sm text-white/60 font-light leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
