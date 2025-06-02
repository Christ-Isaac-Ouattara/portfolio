"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { experiences, projects } from "@/data/resumeData";
// Définition des sections du CV
const sections = [
  { id: "summary", title: "A propos " },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Compétences" },
  { id: "education", title: "Scolarité" },
  // { id: "awards", title: "Awards" },
  { id: "projects", title: "Projets" },
  // { id: "contact", title: "Contact" },
];

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState("summary");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Vérifier si on est sur mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Enregistrer GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animation initiale
    const tl = gsap.timeline();

    tl.fromTo(
      ".resume-header",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
    );

    tl.fromTo(
      ".resume-nav-item",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: "power3.out" }
    );

    // Créer des ScrollTriggers pour chaque section
    sections.forEach((section) => {
      if (sectionRefs.current[section.id]) {
        ScrollTrigger.create({
          trigger: sectionRefs.current[section.id],
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(section.id),
          onEnterBack: () => setActiveSection(section.id),
        });

        // Animation de révélation pour chaque section
        gsap.fromTo(
          `#${section.id} > *`,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRefs.current[section.id],
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    // Nettoyage
    return () => {
      window.removeEventListener("resize", checkMobile);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Fonction pour scroller vers une section
  const scrollToSection = (id: string) => {
    if (sectionRefs.current[id]) {
      const yOffset = isMobile ? -70 : -20; // Ajustement pour le header fixe sur mobile
      const element = sectionRefs.current[id];
      const y =
        element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const gradientRef = useRef<HTMLDivElement>(null);

  // Animation du gradient qui suit le curseur
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gradientRef.current) return;

      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      gradientRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(79, 70, 229, 0.15) 0%, rgba(0, 0, 0, 0) 50%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        ref={gradientRef}
        className="fixed inset-0 z-0 pointer-events-none"
      ></div>
      {/* Bouton retour - fixe en haut */}
      <div className="fixed top-0 left-0 w-full  bg-background/90 backdrop-blur-sm md:z-30 z-40 p-4 md:p-6 shadow-sm">
        <Button variant="ghost" size="sm" className="" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au Portfolio
          </Link>
        </Button>
      </div>

      <div className="pt-24 md:flex md:min-h-screen">
        {/* Navigation latérale - fixe sur desktop, cachée sur mobile */}
        <div className="hidden md:block md:w-1/4 lg:w-1/5 fixed top-24 bottom-0 left-0 p-6 overflow-auto">
          <nav className="space-y-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "resume-nav-item flex items-center w-full text-left px-4 py-2 rounded-md transition-colors",
                  activeSection === section.id
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-muted-foreground hover:bg-accent/5 hover:text-accent"
                )}
              >
                <span className="mr-2 text-xs font-mono opacity-70">
                  0{index + 1}.
                </span>
                {section.title}
                {activeSection === section.id && (
                  <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </button>
            ))}
            <ul className="flex space-x-6 px-4">
              <li className="social-icon">
                <a
                  href="https://github.com/"
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
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Navigation mobile - visible uniquement sur mobile */}
        {/* <div className="md:hidden fixed top-16 left-0 w-full z-20 md:bg-transparent bg-background/90 backdrop-blur-sm border-b overflow-x-auto">
          <div className="flex p-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "whitespace-nowrap px-4 py-2 mx-1 rounded-md text-sm transition-colors",
                  activeSection === section.id
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-muted-foreground"
                )}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div> */}

        {/* Contenu principal */}
        <div
          ref={mainContentRef}
          className="md:ml-[25%] lg:ml-[20%] md:w-3/4 lg:w-4/5 p-6 md:p-12 pt-8 md:pt-0"
        >
          {/* Header du CV */}
          <header className="resume-header space-y-4 mb-12">
            <h1 className="heading-xl">OUATTARA ISAAC</h1>
            <h2 className="text-xl text-muted-foreground">
              Développeur FullStack
            </h2>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <span className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Abidjan, Côte d&apos;Ivoire
              </span>
              <span className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a
                  href="mailto:ouattaraisaacpro@gmail.com"
                  className="hover:text-accent"
                >
                  ouattaraisaacpro@gmail.com
                </a>
              </span>
              <span className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:+2250100978715" className="hover:text-accent">
                  +225 01 00 97 87 15
                </a>
                {/* {" "}
                /{" "}
                <a href="tel:+2250702265970" className="hover:text-accent">
                  +225 07 02 26 59 70
                </a> */}
              </span>
            </div>
          </header>

          {/* Sections du CV */}
          <div className="space-y-16">
            {/* Summary */}
            <section
              id="summary"
              ref={(el) => (sectionRefs.current.summary = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[65px] md:top-6   md:bg-transparent bg-background/90 backdrop-blur-sm py-2 z-30">
                A propos de moi
              </h2>
              <p className="text-muted-foreground">
                Développeur web fullstack passionné et créatif, je conçois des
                sites et applications web accessibles, performants et centrés
                sur l’utilisateur. Fort d’une solide expérience en développement
                frontend et backend, je maîtrise les technologies modernes
                telles que JavaScript, TypeScript, Node.js et React. Je porte
                une attention particulière à la conception d’interfaces
                intuitives et à l’optimisation de l’expérience utilisateur.
                Curieux et rigoureux, j’ai la capacité d’intégrer rapidement de
                nouveaux outils et frameworks pour répondre efficacement aux
                besoins des projets.
              </p>
            </section>

            {/* Experience */}
            <section
              id="experience"
              ref={(el) => (sectionRefs.current.experience = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-6 sticky top-[65px] md:top-6 md:bg-transparent bg-background/90 backdrop-blur-sm py-2 z-30">
                Expérience professionnelle
              </h2>
              <div className="space-y-8">
                <div className="grid gap-2 ">
                  {experiences.map((experience, index) => (
                    <div
                      key={index}
                      className="flex w-full flex-col md:flex-row justify-between items-start mb-12"
                    >
                      <span className="text-muted-foreground text-sm md:w-[20%]">
                        {experience.period}
                      </span>
                      <div className="md:ml-4 w-full md:w-[80%]">
                        <h3 className="font-medium">
                          <a
                            href={experience.companyLink}
                            className="hover:text-accent"
                          >
                            {experience.position} · @{experience.company}
                          </a>
                        </h3>

                        {experience.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="mb-6">
                            <p className="text-muted-foreground before:content-['▹'] before:text-accent before:mr-2">
                              <span className="font-mono text-lg">
                                <a
                                  href={project.link}
                                  className="hover:text-accent"
                                >
                                  {project.name}
                                </a>
                              </span>{" "}
                              <br />
                              <span className="">{project.description}</span>
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="text-violet-400 py-1 px-2 rounded-full bg-violet-400/40 font-mono text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Skills */}
            <section
              id="skills"
              ref={(el) => (sectionRefs.current.skills = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[65px] md:top-6 md:bg-transparent bg-background/90 backdrop-blur-sm py-2 z-30">
                Compétences
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Langage de programmation</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li> HTML & CSS</li>
                    <li>PHP</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    Librairiies et frameworks
                  </h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Adonis.js</li>
                    <li>WordPress</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Outils et plateformes</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Git & GitHub</li>
                    <li>Chrome DevTools</li>
                    <li>Postman & Insomnia</li>
                    <li>Heroku & Hostinger</li>
                    <li>Netlify & Vercel</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section
              id="education"
              ref={(el) => (sectionRefs.current.education = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-6 sticky top-[65px] md:top-6 md:bg-transparent bg-background/90 backdrop-blur-sm py-2 z-30">
                Scolarité
              </h2>
              <div className="grid gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">
                    Institut Universitaire d’Abidjan
                  </h3>
                  <span className="text-muted-foreground text-sm">
                    2020 — 2023
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Licence en Méthode Informatique Appliquée à la Gestion
                  d’Entreprise
                </p>
              </div>
            </section>

            {/* Awards & Recognition */}
            {/* <section
              id="awards"
              ref={(el) => (sectionRefs.current.awards = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[65px] md:top-6 md:bg-transparent bg-background/90 backdrop-blur-sm py-2 z-30">
                Awards & Recognition
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Dean's List - All Semesters</li>
                <li>Winner of Northeastern's Entrepreneurship Competition</li>
                <li>1st Place - HackBeanpot 2019</li>
              </ul>
            </section> */}

            {/**Projects */}

            <section
              id="projects"
              ref={(el) => (sectionRefs.current.projects = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[65px] md:top-6 md:bg-transparent bg-background/90 backdrop-blur-sm py-2 z-30">
                {" "}
                Projects{" "}
              </h2>

              <div className="grid gap-2">
                {projects.slice(0, 6).map((project, index) => (
                  <div key={index} className="space-y-2 mb-4 flex flex-col lg:flex-row justify-between items-start">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h:64 lg:w-52 lg:h-20 rounded-md object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="lg:ml-4 space-y-2">
                      <div className="flex flex-col lg:flex-row justify-between items-start">
                        <h3 className="font-medium">{project.name}</h3>
                        <span className="text-muted-foreground text-sm">
                          {project.range}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
                {/* <div className="flex justify-between items-start">
                  <img
                    src="/img/santeplus.png"
                    alt="Project 2"
                    className="w-52 h-20 rounded-md object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="ml-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">
                        Application de santé en ligne
                      </h3>
                      <span className="text-muted-foreground text-sm">
                        Mars 2025 - Present
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      Une application de santé qui permet de faire des consultations préliminaire en ligne, de recevoir des ordonnance digitales en ligne et de pouvoir commander ses medicaments et les recevoir chez soi rapidement et en sécurité.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <img
                    src="/img/olympe.png"
                    alt="snob"
                    className="w-52 h-20 rounded-md object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="ml-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">
                        Application d&apos;annonce immobiliare
                      </h3>
                      <span className="text-muted-foreground text-sm">
                        Mars 2025 - Present
                      </span>
                    </div>{" "}
                    <p className="text-muted-foreground">
                      Une application qui permet aux utilisateurs de rechercher
                      des propriétés immobilières, de voir les détails de chaque
                      propriété, de pouvoir vendre ou louer leur bien, de
                      pouvoir acheter ou louer un bien, et de contacter le
                      propriétaire.
                    </p>
                  </div>
                </div> */}
              </div>
            </section>

            {/* Other Noteworthy Projects */}
            <section
              id="other-projects"
              ref={(el) => (sectionRefs.current.otherProjects = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[65px] md:top-6 md:bg-transparent bg-background/90 backdrop-blur-sm py-2 z-30">
                Autres Projets notables
              </h2>
              <div className="grid gap-2">
                <div className="space-y-2 mb-4 flex flex-col lg:flex-row justify-between items-start">
                  <img
                    src="/img/loragence.png"
                    alt="Project 3"
                    className="w-full h:64 lg:w-52 lg:h-20 rounded-md object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="lg:ml-4 space-y-2">
                    <div className="flex flex-col lg:flex-row justify-between items-start">
                      <h3 className="font-medium">
                        Agence de services digitaux
                      </h3>
                      <span className="text-muted-foreground text-sm">
                        Avril 2025
                      </span>
                    </div>{" "}
                    <p className="text-muted-foreground">
                      Une agence de services digitales qui propose la création
                      de sites web, la gestion de réseaux sociaux, la création
                      de contenu, la gestion de campagnes de marketing et la
                      création de stratégies de marketing.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
