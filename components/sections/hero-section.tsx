"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".hero-1", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.3, ease: "power3.out", delay: 0.6 }
    );
    
    tl.fromTo(
      ".hero-2", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
    );
    
    tl.fromTo(
      ".hero-3", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
    );
    
    tl.fromTo(
      ".hero-4", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
    );
    
    tl.fromTo(
      ".hero-button", 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
    );

    // Animation des éléments décoratifs
    tl.fromTo(
      ".decoration-circle",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.6, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding md:!pt-20 min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden "
    >
      {/* Éléments décoratifs */}
      {/* <div className="decoration-circle absolute top-20 right-[20%] w-32 h-32 rounded-full bg-purple-500/20 blur-xl"></div>
      <div className="decoration-circle absolute bottom-40 left-[10%] w-48 h-48 rounded-full bg-blue-500/20 blur-xl"></div>
      <div className="decoration-circle absolute top-1/3 left-[5%] w-24 h-24 rounded-full bg-violet-500/20 blur-xl"></div> */}

      <div className="section-content max-w-5xl mx-auto px-2 md:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div className="text-center">
            <h1 className="flex flex-col items-center">
              <span className="hero-1 text-violet-400 mb-4 font-mono text-sm md:text-base border border-violet-400/30 px-4 py-1 rounded-full">
                Développeur Web Créatif
              </span>
              <span className="hero-2 heading-xl mb-2 text-white font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight">
                Isaac Ouattara
              </span>
              <span className="hero-3 heading-xl text-violet-200/80 font-medium text-2xl md:text-3xl lg:text-4xl mt-2">
                Architecte d&apos;Expériences Numériques
              </span>
            </h1>

            <p className="hero-4 mt-8 max-w-2xl mx-auto text-slate-300 body-lg leading-relaxed text-lg">
              Passionné par la création d&apos;interfaces élégantes et
              performantes, je transforme des idées en expériences web
              immersives. Actuellement, je développe des solutions innovantes
              chez{" "}
              <a
                href="#"
                className="text-violet-400 hover:text-violet-300 font-medium transition-colors border-b border-violet-400/30 hover:border-violet-300"
              >
                Studio Numérique
              </a>
              .
            </p>

            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <Button
                className="hero-button bg-violet-500 hover:bg-violet-400 text-slate-900 font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-violet-500/30 rounded-full px-8"
                size="lg"
                asChild
              >
                <a href="#projects">Découvrir mes projets</a>
              </Button>

              <Button
                className="hero-button bg-transparent hover:bg-white/10 text-white border-2 border-white/30 rounded-full font-medium transition-all duration-300 hover:translate-y-[-2px] hover:border-white/60 px-8"
                size="lg"
                asChild
                variant="outline"
              >
                <a href="#contact">Me contacter</a>
              </Button>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="flex items-center gap-2 text-slate-400 animate-bounce">
                <span className="text-sm">Défiler pour explorer</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
