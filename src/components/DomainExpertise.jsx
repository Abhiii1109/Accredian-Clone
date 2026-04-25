'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Briefcase, ShoppingCart, Settings, Cpu, HeartPulse, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const domains = [
  { name: 'Pharmaceuticals', icon: <Globe size={28} />, desc: 'Regulatory excellence and bio-informatics upskilling for life science enterprises.' },
  { name: 'BFSI', icon: <Briefcase size={28} />, desc: 'Risk modeling, algorithmic finance, and regulatory compliance mastery.' },
  { name: 'Retail & E-Commerce', icon: <ShoppingCart size={28} />, desc: 'Demand forecasting, CX personalization, and supply chain intelligence.' },
  { name: 'Manufacturing', icon: <Settings size={28} />, desc: 'Industry 4.0 readiness, predictive maintenance, and smart automation.' },
  { name: 'IT Services', icon: <Cpu size={28} />, desc: 'Full-stack delivery, cloud-native engineering, and agile transformation.' },
  { name: 'Healthcare', icon: <HeartPulse size={28} />, desc: 'Digital health, medical AI, and operational analytics for clinical teams.' },
];

export default function DomainExpertise() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;
    gsap.fromTo(Array.from(cards), { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#0c0c0c] text-white overflow-hidden" id="domains">
      <div className="container-custom mb-16 md:mb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.4em] text-[#ff4a1c] font-bold mb-4 md:mb-6">Sector Expertise</div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85]" style={{ fontFamily: 'var(--font-display)' }}>
              DOMAIN <br/><span className="text-outline">COVERAGE.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/40 font-light leading-relaxed text-sm md:text-base border-l border-white/10 pl-8">
            Deep industry-specific expertise across the most critical verticals driving global transformation.
          </p>
        </div>
      </div>

      <div ref={cardsRef} className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {domains.map((d, i) => (
          <div 
            key={i} 
            className="group relative p-10 md:p-14 border border-white/5 hover:border-white/20 transition-all duration-700 cursor-default overflow-hidden"
          >
            {/* Hover Gradient Reveal */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4a1c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-12">
                <div className="text-[#ff4a1c] p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-[#ff4a1c] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                  {d.icon}
                </div>
                <div className="text-xs font-mono text-white/20 group-hover:text-[#ff4a1c] transition-colors duration-500">
                  SEC_{i + 1}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                {d.name}
              </h3>
              <p className="text-sm md:text-base text-white/40 font-light leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                {d.desc}
              </p>
              
              <div className="mt-12 flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-white/20 group-hover:text-[#ff4a1c] transition-all duration-500">
                <span>Explore Domain</span>
                <ArrowUpRight size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            {/* Corner Decorative Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent transform translate-x-12 -translate-y-12 rotate-45 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
