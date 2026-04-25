'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: 'WHAT TYPES OF CORPORATE TRAINING PROGRAMS DO YOU OFFER?', a: 'We offer specialized programs across Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, and Fintech Innovation Labs.' },
  { q: 'CAN THE COURSES BE CUSTOMIZED FOR SPECIFIC TEAMS?', a: 'Yes, our delivery model allows for deep customization so that the syllabus directly maps to your industry requirements and internal technology stacks.' },
  { q: 'WHO ARE THE INSTRUCTORS FOR THESE PROGRAMS?', a: 'Instructors include elite engineering leaders, C-suite executives from top global technology firms, and esteemed faculty from institutions like IIT & IIM.' },
  { q: 'WHAT IS THE IDEAL TEAM SIZE FOR CORPORATE TRAINING?', a: 'We cater to a variety of team sizes. Whether you are upskilling a specialized pod of 10 engineers or transforming an entire department of 500+, we scale the delivery to fit.' },
];

export default function FAQ() {
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(0);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }});
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 bg-[#0c0c0c] text-white" id="faqs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#ff4a1c] mb-6">Database</div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: 'var(--font-display)' }}>Query <br/> Engine.</h2>
        </div>
        <div className="md:w-2/3 border-t border-white/20">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-white/20">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex justify-between items-center py-10 text-left group">
                <span className="text-2xl md:text-3xl font-bold tracking-tighter uppercase group-hover:text-[#ff4a1c] transition-colors duration-500" style={{ fontFamily: 'var(--font-display)' }}>{f.q}</span>
                <span className="text-3xl font-light text-white/30 group-hover:text-white transition-colors">{open === i ? '-' : '+'}</span>
              </button>
              <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: open === i ? '200px' : '0', opacity: open === i ? 1 : 0 }}>
                <p className="pb-10 text-white/60 font-light leading-relaxed max-w-xl">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
