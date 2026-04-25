'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Quicksetter for the precise dot
    const xSetCursor = gsap.quickSetter(cursor, "x", "px");
    const ySetCursor = gsap.quickSetter(cursor, "y", "px");

    // Quicksetter for the trailing follower
    const xSetFollower = gsap.quickSetter(follower, "x", "px");
    const ySetFollower = gsap.quickSetter(follower, "y", "px");

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Dot follows instantly
      xSetCursor(e.clientX);
      ySetCursor(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Ticker for the trailing effect (interpolation)
    const updateFollower = () => {
      // Linear interpolation (lerp)
      const dt = 0.15; // Speed of trailing (lower = more lag)
      delayedMouse.current.x += (mouse.current.x - delayedMouse.current.x) * dt;
      delayedMouse.current.y += (mouse.current.y - delayedMouse.current.y) * dt;

      xSetFollower(delayedMouse.current.x);
      ySetFollower(delayedMouse.current.y);
    };

    gsap.ticker.add(updateFollower);

    // Hover effects
    const handleMouseEnter = () => {
      gsap.to(follower, {
        scale: 2.5,
        backgroundColor: 'rgba(255, 74, 28, 0.15)',
        borderColor: '#ff4a1c',
        duration: 0.4,
        ease: 'power3.out'
      });
      gsap.to(cursor, { scale: 0, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        duration: 0.4,
        ease: 'power3.out'
      });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    const interactives = document.querySelectorAll('a, button, .group, .mode-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(updateFollower);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#ff4a1c] rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
    </>
  );
}
