"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.fromTo(
      ".contact-title",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );

    tl.fromTo(
      ".contact-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );

    tl.fromTo(
      ".contact-text",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );

    tl.fromTo(
      ".contact-button",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );

    tl.fromTo(
      ".contact-info-item",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.1 }
    );

    // Animation des éléments décoratifs
    tl.fromTo(
      ".decoration-element",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 0.6,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding py-32  relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="decoration-element absolute top-0 right-0 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="decoration-element absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="decoration-element absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-cyan-500/20 blur-xl"></div>
      {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-cyan-500/5"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-indigo-500/5 via-cyan-500/5 to-indigo-500/5"></div> */}

      <div className="section-content max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="numbered-heading inline-block pr-1 px-4 py-1 text-white rounded-full text-lg font-mono mb-4">
            À propos
          </span>{" "}
          <h2 className="contact-title text-4xl md:text-5xl font-bold text-white mb-4">
            Et Maintenant ?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mb-8"></div>
          <h3 className="contact-subtitle text-3xl font-bold text-white mb-6">
            Prenons Contact
          </h3>
          <p className="contact-text text-white/80 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Je suis actuellement à la recherche de nouvelles opportunités. Que
            vous ayez une question ou simplement envie de dire bonjour, je ferai
            de mon mieux pour vous répondre rapidement !
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
          <div className="contact-info-item flex items-center gap-3 text-white/80 hover:text-cyan-300 transition-colors group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <Mail className="text-cyan-400" size={20} />
            </div>
            <a href="mailto:hello@example.com" className="hover:underline">
              hello@example.com
            </a>
          </div>

          <div className="contact-info-item flex items-center gap-3 text-white/80 hover:text-cyan-300 transition-colors group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <Phone className="text-cyan-400" size={20} />
            </div>
            <a href="tel:+2250100978715" className="hover:underline">
              +225 01 00 97 87 15
            </a>
          </div>

          <div className="contact-info-item flex items-center gap-3 text-white/80 hover:text-cyan-300 transition-colors group">
            <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
              <MapPin className="text-cyan-400" size={20} />
            </div>
            <span>Partout</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="contact-button bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white border-none rounded-full px-8 py-6 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 group"
            size="lg"
            asChild
          >
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2"
            >
              Envoyez-moi un message
              <Send
                size={18}
                className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
