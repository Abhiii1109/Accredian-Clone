'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const navLinks = [
  { label: 'Hubs', href: '#programs' },
  { label: 'Domains', href: '#domains' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'Impact', href: '#testimonials' },
];

// Number of stair panels
const STAIRS = 6;

function HamburgerIcon({ isOpen }) {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(line2.current, { scaleX: 0, opacity: 0, duration: 0.2, ease: 'power2.in' });
      gsap.to(line1.current, { y: 9, rotate: 45, duration: 0.4, ease: 'power3.inOut', delay: 0.1 });
      gsap.to(line3.current, { y: -9, rotate: -45, duration: 0.4, ease: 'power3.inOut', delay: 0.1 });
    } else {
      gsap.to(line2.current, { scaleX: 1, opacity: 1, duration: 0.3, ease: 'power2.out', delay: 0.15 });
      gsap.to(line1.current, { y: 0, rotate: 0, duration: 0.4, ease: 'power3.inOut' });
      gsap.to(line3.current, { y: 0, rotate: 0, duration: 0.4, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col justify-center gap-[7px] w-8 h-8 cursor-pointer">
      <span ref={line1} className="block h-[2px] w-full rounded-full" style={{ backgroundColor: '#f2f2f2', transformOrigin: 'center' }} />
      <span ref={line2} className="block h-[2px] w-full rounded-full" style={{ backgroundColor: '#ff4a1c', transformOrigin: 'center' }} />
      <span ref={line3} className="block h-[2px] w-full rounded-full" style={{ backgroundColor: '#f2f2f2', transformOrigin: 'center' }} />
    </div>
  );
}

export default function Navbar() {
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const stairsRefs = useRef([]);
  const menuLinksRef = useRef([]);
  const menuContentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    gsap.fromTo(navRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      // Show overlay first
      gsap.set(overlayRef.current, { display: 'block' });
      gsap.set(menuContentRef.current, { opacity: 0 });

      // Stair panels: each panel slides from left (translateX: -100% → 0), staggered top-to-bottom
      gsap.fromTo(
        stairsRefs.current,
        { xPercent: -100 },
        {
          xPercent: 0,
          duration: 0.6,
          ease: 'power4.inOut',
          stagger: 0.06,
          onComplete: () => {
            // After stairs are in, slide them out to the right together
            gsap.to(stairsRefs.current, {
              xPercent: 100,
              duration: 0.5,
              ease: 'power4.inOut',
              stagger: 0.05,
              onComplete: () => {
                // Reset stairs position
                gsap.set(stairsRefs.current, { xPercent: -100 });
              }
            });
            // Reveal menu content
            gsap.to(menuContentRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' });
            // Stagger links from below
            gsap.fromTo(
              menuLinksRef.current,
              { y: 80, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power4.out', delay: 0.1 }
            );
          }
        }
      );
    } else {
      // Close: fade content out then hide overlay
      gsap.to(menuContentRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in' });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(overlayRef.current, { display: 'none', opacity: 1 });
        }
      });
    }
  }, [isOpen, mounted]);

  const handleToggle = () => setIsOpen(prev => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="absolute inset-0 bg-[#0c0c0c]/80 backdrop-blur-xl transition-opacity duration-700 -z-10" style={{ opacity: scrolled ? 1 : 0 }} />
        <div className="w-full px-4 md:px-12 lg:px-24 flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tight text-[#f2f2f2] relative z-[60]" style={{ fontFamily: 'var(--font-display)' }}>
            ACCREDIAN<span className="text-[#ff4a1c]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-12 bg-[#1a1a1a]/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="hover-line text-[11px] uppercase tracking-widest text-[#f2f2f2]/80 hover:text-white font-medium">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="btn-hero">
              <span>Initiate Project</span>
            </a>
          </div>

          {/* Hamburger */}
          <button className="md:hidden flex items-center justify-center p-1 relative z-[60]" onClick={handleToggle} aria-label="Toggle menu">
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </nav>

      {/* Full-Screen Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[55] hidden"
        style={{ display: 'none' }}
      >
        {/* Stair Panels */}
        {Array.from({ length: STAIRS }).map((_, i) => (
          <div
            key={i}
            ref={el => stairsRefs.current[i] = el}
            className="absolute left-0 w-full"
            style={{
              top: `${(i / STAIRS) * 100}%`,
              height: `${100 / STAIRS}%`,
              backgroundColor: i % 2 === 0 ? '#111111' : '#0c0c0c',
              transform: 'translateX(-100%)',
              zIndex: 56,
            }}
          />
        ))}

        {/* Dark overlay behind content */}
        <div className="absolute inset-0 bg-[#0c0c0c] z-[57]" />

        {/* Menu Content */}
        <div ref={menuContentRef} className="relative z-[58] h-full flex flex-col justify-between px-8 py-24">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <div key={link.label} className="overflow-hidden border-b border-white/10 pb-4">
                <a
                  ref={el => menuLinksRef.current[i] = el}
                  href={link.href}
                  className="block text-5xl font-bold tracking-tighter text-white hover:text-[#ff4a1c] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-display)' }}
                  onClick={handleClose}
                >
                  {link.label}
                </a>
              </div>
            ))}
            <div className="overflow-hidden pt-4">
              <a
                ref={el => menuLinksRef.current[navLinks.length] = el}
                href="#contact"
                className="block text-5xl font-bold tracking-tighter text-[#ff4a1c]"
                style={{ fontFamily: 'var(--font-display)' }}
                onClick={handleClose}
              >
                Initiate Project →
              </a>
            </div>
          </div>

          {/* Footer info inside menu */}
          <div
            ref={el => menuLinksRef.current[navLinks.length + 1] = el}
            className="text-xs uppercase tracking-[0.3em] text-white/30 font-bold"
          >
            © {new Date().getFullYear()} Accredian Enterprise
          </div>
        </div>
      </div>
    </>
  );
}
