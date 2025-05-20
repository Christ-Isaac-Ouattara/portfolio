"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, Mail, MapPin, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Définition des sections du CV
const sections = [
  { id: "summary", title: "Summary" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Compétences" },
  { id: "education", title: "Education" },
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Bouton retour - fixe en haut */}
      <div className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-sm z-30 p-4 md:p-6 shadow-sm">
        <Button variant="ghost" size="sm" className="hover:text-accent" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
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
          </nav>
        </div>

        {/* Navigation mobile - visible uniquement sur mobile */}
        <div className="md:hidden fixed top-16 left-0 w-full z-20 bg-background/90 backdrop-blur-sm border-b overflow-x-auto">
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
        </div>

        {/* Contenu principal */}
        <div
          ref={mainContentRef}
          className="md:ml-[25%] lg:ml-[20%] md:w-3/4 lg:w-4/5 p-6 md:p-12 pt-8 md:pt-0"
        >
          {/* Header du CV */}
          <header className="resume-header space-y-4 mb-12">
            <h1 className="heading-xl">OUATTARA ISAAC</h1>
            <h2 className="text-xl text-muted-foreground">Développeur Web</h2>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <span className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Abidjan, Côte d&apos;Ivoire
              </span>
              <span className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a
                  href="mailto:ouattaranafiralopro@gmail.com"
                  className="hover:text-accent"
                >
                  ouattaranafiralopro@gmail.com
                </a>
              </span>
              <span className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:+2250100978715" className="hover:text-accent">
                  +225 01 00 97 87 15
                </a>
                {" "}
                /
                {" "}
                <a href="tel:+2250702265970" className="hover:text-accent">
                  +225 07 02 26 59 70
                </a>
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
              <h2 className="heading-sm mb-4 sticky top-[72px] md:top-6 bg-background/90 backdrop-blur-sm py-2 z-10">
                Summary
              </h2>
              <p className="text-muted-foreground">
                Software Engineer specializing in building exceptional digital
                experiences. Currently focused on building accessible,
                human-centered products at Upstatement. Proficient in
                JavaScript, TypeScript, React, and Node.js with a strong
                foundation in web technologies and user experience design.
              </p>
            </section>

            {/* Experience */}
            <section
              id="experience"
              ref={(el) => (sectionRefs.current.experience = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-6 sticky top-[72px] md:top-6 bg-background/90 backdrop-blur-sm py-2 z-10">
                Experience
              </h2>
              <div className="space-y-8">
                <div className="grid gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Lead Engineer @ Upstatement</h3>
                    <span className="text-muted-foreground text-sm">
                      2022 - Present
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      Lead the development of high-impact web applications for
                      clients including Harvard Business School and Evenbrite
                    </li>
                    <li>
                      Architect and implement scalable technical solutions that
                      meet business requirements
                    </li>
                    <li>
                      Mentor junior developers and contribute to team knowledge
                      sharing initiatives
                    </li>
                  </ul>
                </div>

                <div className="grid gap-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">UI Engineer @ Apple</h3>
                    <span className="text-muted-foreground text-sm">
                      2020 - 2021
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      Developed interactive web applications for Apple Music
                      using Ember and SCSS
                    </li>
                    <li>
                      Built and shipped the Apple Music Extension for Facebook
                      Messenger
                    </li>
                    <li>
                      Contributed to MusicKit JS, enabling Apple Music streaming
                      in web apps
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section
              id="skills"
              ref={(el) => (sectionRefs.current.skills = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[72px] md:top-6 bg-background/90 backdrop-blur-sm py-2 z-10">
                Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Languages</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>JavaScript (ES6+)</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS/Sass</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Frameworks</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>WordPress</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Tools</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>Git & GitHub</li>
                    <li>Chrome DevTools</li>
                    <li>Postman</li>
                    <li>MongoDB</li>
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
              <h2 className="heading-sm mb-6 sticky top-[72px] md:top-6 bg-background/90 backdrop-blur-sm py-2 z-10">
                Education
              </h2>
              <div className="grid gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">Northeastern University</h3>
                  <span className="text-muted-foreground text-sm">
                    2016 - 2020
                  </span>
                </div>
                <p className="text-muted-foreground">BS in Computer Science</p>
              </div>
            </section>

            {/* Awards & Recognition */}
            <section
              id="awards"
              ref={(el) => (sectionRefs.current.awards = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[72px] md:top-6 bg-background/90 backdrop-blur-sm py-2 z-10">
                Awards & Recognition
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Dean's List - All Semesters</li>
                <li>Winner of Northeastern's Entrepreneurship Competition</li>
                <li>1st Place - HackBeanpot 2019</li>
              </ul>
            </section>

            {/**Projects */}

            <section
              id="projects"
              ref={(el) => (sectionRefs.current.projects = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[72px] md:top-6 bg-background/90 backdrop-blur-sm py-2 z-10">
                {" "}
                Projects{" "}
              </h2>

              <div className="grid gap-2">
                <div className="flex justify-between items-start">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Project 2"
                    className="w-52 h-20 rounded-md object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="ml-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">Project 1</h3>
                      <span className="text-muted-foreground text-sm">
                        2022 - Present
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque in pretium turpis. Nullam eget metus eu erat
                      feugiat aliquet.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Project 1"
                    className="w-52 h-20 rounded-md object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="ml-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Project 2</h3>
                    <span className="text-muted-foreground text-sm">
                      2022 - Present
                    </span>
                    </div>                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque in pretium turpis. Nullam eget metus eu erat
                      feugiat aliquet.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Other Noteworthy Projects */}
            <section
              id="other-projects"
              ref={(el) => (sectionRefs.current.otherProjects = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[72px] md:top-6 bg-background/90 backdrop-blur-sm py-2 z-10">
                Other Noteworthy Projects
              </h2>
              <div className="grid gap-2">
                <div className="flex justify-between items-start">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="Project 3"
                    className="w-52 h-20 rounded-md object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="ml-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Project 3</h3>
                    <span className="text-muted-foreground text-sm">
                      2022 - Present
                    </span>
                    </div>                    <p className="text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque in pretium turpis. Nullam eget metus eu erat
                      feugiat aliquet.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact */}
            <section
              id="contact"
              ref={(el) => (sectionRefs.current.contact = el)}
              className="scroll-mt-24"
            >
              <h2 className="heading-sm mb-4 sticky top-[72px] md:top-6 bg-background/90 backdrop-blur-sm py-2 z-10">
                Contact
              </h2>
              <div className="grid gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">Email</h3>
                  <span className="text-muted-foreground text-sm">
                    ouattaranafiralopro@gmail.com
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Email address for general inquiries
                </p>
              </div>

              <div className="grid gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">Phone</h3>
                  <span className="text-muted-foreground text-sm">
                    (123) 456-7890
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Phone number for emergencies
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
