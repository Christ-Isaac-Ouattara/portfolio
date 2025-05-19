"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollManagerProps {
  children: React.ReactNode;
}

export function ScrollManager({ children }: ScrollManagerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Initialize smooth scrolling
      const sections = gsap.utils.toArray<HTMLElement>('section');
      
      // Set up reveal animations for sections
      sections.forEach((section) => {
        gsap.fromTo(
          section.querySelector('.section-content'),
          { 
            y: 50, 
            opacity: 0 
          },
          { 
            y: 0, 
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "bottom 75%",
              toggleActions: "play none none none",
            }
          }
        );
      });
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
}