'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "The program transformed how our data team operates. The Gen-AI Mastery hub gave us a working internal model within 3 months of program completion.",
    name: "Rajiv Menon",
    title: "Chief Data Officer, Bayer India",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
  },
  {
    quote: "Accredian's blended delivery model was perfect for our 400-person distributed team. Completion rates were 94% — the highest we've ever seen.",
    name: "Anjali Sharma",
    title: "VP of L&D, Novartis APAC",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
  },
  {
    quote: "The ROI from Leadership Elevation was immediate. Retention of senior engineers improved by 40% within two quarters of program launch.",
    name: "Kevin D'souza",
    title: "Head of Engineering, Amazon Pay",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, duration: 1,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
    });

    const interval = setInterval(() => setActive(prev => (prev + 1) % testimonials.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="section-padding bg-[#f2f2f2] text-[#0c0c0c] overflow-hidden" id="testimonials">
      <div className="container-custom">
        <div className="mb-12 md:mb-20">
          <div className="text-[10px] uppercase tracking-[0.4em] text-[#ff4a1c] font-bold mb-4 md:mb-6">Client Stories</div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: 'var(--font-display)' }}>
            WHAT THEY <br/>SAY.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Selector Tabs */}
          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            {testimonials.map((test, i) => (
              <button 
                key={i} 
                onClick={() => setActive(i)}
                className={`flex-shrink-0 px-6 py-4 rounded-xl text-left border transition-all duration-500 whitespace-nowrap lg:whitespace-normal ${active === i ? 'bg-[#0c0c0c] text-white border-transparent' : 'bg-transparent border-black/10 hover:border-black/30'}`}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest">{test.name}</div>
              </button>
            ))}
          </div>

          {/* Testimonial Card */}
          <div className="w-full lg:w-3/4 bg-[#0c0c0c] text-white rounded-3xl overflow-hidden min-h-[400px]">
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-1 p-8 md:p-14 lg:p-16 flex flex-col justify-between">
                <Quote size={40} className="text-[#ff4a1c] mb-8 opacity-60" strokeWidth={1} />
                <div>
                  <p className="text-lg md:text-2xl lg:text-3xl font-light leading-[1.4] mb-10 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>{t.name}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff4a1c] mt-2">{t.title}</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <img 
                  key={active} 
                  src={t.img} 
                  alt={t.name} 
                  className="w-full h-full object-cover grayscale brightness-90 animate-fade-in" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent md:bg-gradient-to-l" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
