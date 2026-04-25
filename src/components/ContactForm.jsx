'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const sectionRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { 
      opacity: 1, 
      y: 0,
      duration: 1.5, 
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(formData) 
      });
      
      if (res.ok) { 
        setStatus('success'); 
        setFormData({ name: '', email: '', company: '' }); 
      } else {
        throw new Error('Failed to transmit');
      }
    } catch (error) { 
      console.error('Submission error:', error);
      setStatus('error'); 
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const inputClass = 'w-full bg-transparent border-b border-white/20 py-6 text-white placeholder-white/30 focus:outline-none focus:border-[#ff4a1c] transition-colors uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold';

  return (
    <section ref={sectionRef} className="section-padding bg-[#0c0c0c] text-white" id="contact">
      <div className="container-custom">
        <div className="bg-[#141414] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff4a1c]/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 relative z-10">
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#ff4a1c] mb-6 md:mb-8">Initiate Connection</div>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-6 md:mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                  ESTABLISH <br/> <span className="text-outline">PROTOCOL.</span>
                </h2>
                <p className="text-white/50 font-light text-base md:text-lg max-w-sm leading-relaxed">
                  Transmit your coordinates. An elite architect will establish a secure connection within 48 hours to blueprint your upskilling pipeline.
                </p>
              </div>
            </div>
            
            <div className="bg-[#0c0c0c]/50 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/5">
              {status === 'success' ? (
                <div className="py-12 md:py-20 text-center animate-fade-in">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-6 text-[#ff4a1c]" style={{ fontFamily: 'var(--font-display)' }}>TRANSMISSION RECEIVED.</h3>
                  <p className="text-white/50 font-light mb-12 text-sm md:text-base">Standby for incoming architect connection. We have established your uplink.</p>
                  <button onClick={() => setStatus('idle')} className="btn-hero w-full">Establish New Link</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div>
                    <input required placeholder="IDENTIFICATION (FULL NAME)" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={inputClass} />
                  </div>
                  <div>
                    <input required type="email" placeholder="SECURE COMMS (WORK EMAIL)" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={inputClass} />
                  </div>
                  <div>
                    <input required placeholder="ORGANIZATION DESIGNATION" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className={inputClass} />
                  </div>
                  <button type="submit" disabled={status === 'loading'} className="btn-hero w-full mt-8 md:mt-12 bg-white text-black border-none before:bg-[#ff4a1c]">
                    <span>{status === 'loading' ? 'TRANSMITTING...' : 'EXECUTE HANDSHAKE'}</span>
                  </button>
                  {status === 'error' && <p className="text-red-500 text-[10px] uppercase tracking-widest text-center mt-4">Protocol Error. Retrying...</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
