'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  { title: 'PRODUCT & INNOVATION HUB', duration: '9 Months', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop' },
  { title: 'GEN-AI MASTERY', duration: '6 Months', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop' },
  { title: 'LEADERSHIP ELEVATION', duration: '12 Months', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop' },
  { title: 'TECH & DATA INSIGHTS', duration: '11 Months', img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2747&auto=format&fit=crop' },
  { title: 'FINTECH LAB', duration: '8 Months', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop' },
];

export default function Programs() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const pinWrap = scrollRef.current;
      if (!pinWrap) return;

      const pinWrapWidth = pinWrap.scrollWidth;
      const horizontalScrollLength = pinWrapWidth - window.innerWidth;

      gsap.to(pinWrap, {
        x: -horizontalScrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${horizontalScrollLength}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0c0c0c] text-white overflow-hidden" id="programs">
      <div 
        ref={scrollRef} 
        className="flex flex-nowrap h-screen items-center container-custom gap-12 md:gap-24 w-max"
      >
        {/* Large Intro Header Card */}
        <div className="w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#ff4a1c] font-bold mb-6">Expertise Hubs</div>
          <h2 className="text-6xl md:text-[8vw] font-bold tracking-tighter uppercase leading-[0.85] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            CHOOSE YOUR <br/> <span className="text-outline">VECTOR.</span>
          </h2>
          <p className="text-white/40 max-w-sm font-light leading-relaxed">
            Specialized engineering and leadership hubs designed for organizational transformation at the edge of innovation.
          </p>
        </div>

        {/* Program Cards */}
        {programs.map((p, i) => (
          <div 
            key={i} 
            className="group relative w-[80vw] md:w-[45vw] lg:w-[35vw] h-[60vh] md:h-[65vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden cursor-pointer flex-shrink-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
            <img 
              src={p.img} 
              alt={p.title} 
              className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0" 
            />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12">
              <div className="flex justify-between items-start">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold border border-white/20">
                  {p.duration}
                </span>
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-[0.9] group-hover:translate-x-4 transition-transform duration-500" style={{ fontFamily: 'var(--font-display)' }}>
                {p.title.split(' ').map((word, j) => (
                  <span key={j} className="block">{word}</span>
                ))}
              </h3>
            </div>
          </div>
        ))}
        
        {/* End Spacer */}
        <div className="w-[10vw] md:w-[20vw] flex-shrink-0"></div>
      </div>
    </section>
  );
}
