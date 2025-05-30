"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function SocialSidebar() {
  useEffect(() => {
    // Animate social icons on mount
    gsap.fromTo(
      ".social-icon",
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.3, 
        stagger: 0.1, 
        ease: "power3.out",
        delay: 1.2
      }
    );
  }, []);

  return (
    <div className="fixed bottom-0 left-6 md:left-12 z-10 hidden md:block">
      <ul className="flex flex-col items-center space-y-6 after:content-[''] after:w-px after:h-24 after:bg-foreground/30 after:mx-auto">
        <li className="social-icon">
          <a
            href="https://github.com/Christ-Isaac-Ouattara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </li>
        <li className="social-icon">
          <a
            href="https://www.linkedin.com/in/nafiralo-christ-isaac-konan-ouattara-87a907213/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        {/* <li className="social-icon">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </li> */}
        <li className="social-icon">
          <a
            href="https://www.instagram.com/kris_wathara/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
}