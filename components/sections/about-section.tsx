"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const competences = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "MongoDb",
  "SQL",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    tl.fromTo(
      ".about-title",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );

    tl.fromTo(
      ".about-text",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    );

    tl.fromTo(
      ".about-skills",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );

    tl.fromTo(
      ".about-image-container",
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7 }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding  relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 opacity-30 transform -skew-y-3"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 opacity-30 transform skew-y-3"></div> */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="section-content max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="numbered-heading inline-block pr-1 px-4 py-1 text-white rounded-full text-lg font-mono mb-4">
            À propos
          </span>
          <h2 className="about-title text-4xl md:text-5xl font-bold text-white mb-4">
            Qui suis-je?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <div className=" relative group">
            <div className="relative w-full max-w-[300px] md:max-w-full aspect-square mx-auto md:mx-0">
              <div className="absolute inset-0 border-2 border-accent translate-x-4 translate-y-4 rounded transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="relative overflow-hidden rounded-lg border-4 border-white/20 shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg"
                  alt="Photo de profil"
                  width={500}
                  height={500}
                  className="object-cover w-full aspect-square filter grayscale hover:filter-none transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/40 to-indigo-500/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
              <p className="about-text text-white/90 leading-relaxed mb-6 ">
                Bonjour ! Je m&apos;appelle Isaac et je suis passionné par la
                création d&apos;applications web innovantes. Mon intérêt pour le
                développement web a commencé en 2012 lorsque j&apos;ai décidé de
                personnaliser des thèmes Tumblr — il s&apos;avère que créer un
                bouton de reblog personnalisé m&apos;a beaucoup appris sur HTML
                et CSS !
              </p>

              <p className="about-text text-white/90 leading-relaxed mb-6 ">
                Aujourd&apos;hui, j&apos;ai eu le privilège de travailler pour{" "}
                <a
                  href="#"
                  className="text-violet-300 font-medium hover:text-violet-200 link-underline border-violet-300/30 "
                >
                  une agence de publicité
                </a>
                ,{" "}
                <a
                  href="#"
                  className="text-violet-300 font-medium hover:text-violet-200 link-underline border-violet-300/30"
                >
                  une start-up
                </a>
                , et{" "}
                <a
                  href="#"
                  className="text-violet-300 font-medium hover:text-violet-200 link-underline border-violet-300/30"
                >
                  une grande entreprise
                </a>
                . Actuellement, je me concentre sur la création de produits
                accessibles chez{" "}
                <a
                  href="#"
                  className="text-violet-300 font-medium hover:text-violet-200 link-underline border-violet-300/30"
                >
                  Studio Numérique
                </a>
                .
              </p>

              <div className="about-skills mt-8">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <span className="inline-block w-6 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 mr-3"></span>
                  Mes compétences techniques
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {competences.map((competence, index) => (
                    <div
                      key={index}
                      className="bg-white/5 rounded-lg px-4 py-1 text-start hover:bg-white/10 transition-colors duration-300"
                    >
                      <span className="text-white/90 font-medium text-sm before:content-['▹'] before:text-accent before:mr-2">
                        {competence}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
