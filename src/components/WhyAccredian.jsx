'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { 
    title: 'Core Foundation (C)', 
    desc: 'Building essential knowledge bases tailored specifically to your organization\'s strategic needs and tech stack.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop'
  },
  { 
    title: 'Applied Learning (A)', 
    desc: 'Real-world application and hands-on projects designed to simulate your actual production environments.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop'
  },
  { 
    title: 'Targeted Coaching (T)', 
    desc: 'Personalized mentorship and guidance from elite industry veterans to ensure continuous individual proficiency delta.',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2940&auto=format&fit=crop'
  }
];

export default function WhyAccredian() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    gsap.fromTo(Array.from(cards), { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power4.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
    });

    const images = gsap.utils.toArray('.feature-img');
    images.forEach(img => {
      gsap.fromTo(img, { scale: 1.2 }, {
        scale: 1, duration: 2, ease: 'power3.out',
        scrollTrigger: { trigger: img, start: 'top 80%' }
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-4 md:px-12 lg:px-24 bg-[#0c0c0c] text-white" id="why-accredian">
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 text-center">
        <div className="inline-block px-4 py-2 border border-[#ff4a1c]/30 text-[#ff4a1c] text-[10px] uppercase tracking-widest font-bold rounded-full mb-6 md:mb-8">The Foundation</div>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: 'var(--font-display)' }}>
          BUILT FOR <br/>ABSOLUTE SCALE.
        </h2>
      </div>

      <div ref={cardsRef} className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        {features.map((f, i) => (
          <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 lg:gap-24 group`}>
            <div className="w-full md:w-1/2 h-[35vh] md:h-[50vh] overflow-hidden rounded-2xl md:rounded-[2rem] relative">
              <div className="absolute inset-0 bg-[#0c0c0c]/40 z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img src={f.img} alt={f.title} className="feature-img w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#ff4a1c] mb-4 md:mb-6">0{i+1}.</div>
              <h3 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase mb-4 md:mb-6 leading-[0.9]" style={{ fontFamily: 'var(--font-display)' }}>{f.title}</h3>
              <p className="text-base md:text-lg text-white/70 font-light max-w-md leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
