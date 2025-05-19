"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function EmailSidebar() {
  useEffect(() => {
    // Animate email on mount
    gsap.fromTo(
      ".email-link",
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.3, 
        ease: "power3.out",
        delay: 1.4
      }
    );
  }, []);

  return (
    <div className="fixed bottom-0 right-6 md:right-12 z-10 hidden md:block">
      <div className="flex flex-col items-center after:content-[''] after:w-px after:h-24 after:bg-foreground/30 after:mx-auto">
        <a
          href="mailto:hello@example.com"
          className="email-link vertical-text mb-6 text-muted-foreground hover:text-accent transition-colors"
          style={{ writingMode: "vertical-rl" }}
        >
          hello@example.com
        </a>
      </div>
    </div>
  );
}