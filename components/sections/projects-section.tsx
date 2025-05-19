"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Folder, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "Thème Halcyon",
    description:
      "Un thème minimaliste bleu foncé pour VS Code, Sublime Text, Atom, iTerm et plus. Disponible sur Visual Studio Marketplace, Package Control, Atom Package Manager et npm.",
    tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    github: "#",
    external: "#",
    image:
      "https://images.pexels.com/photos/11125185/pexels-photo-11125185.jpeg",
  },
  {
    title: "Profil Spotify",
    description:
      "Une application web pour visualiser vos données Spotify personnalisées. Consultez vos artistes préférés, vos titres les plus écoutés, vos pistes récemment jouées et des informations audio détaillées sur chaque titre.",
    tech: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
    github: "#",
    external: "#",
    image: "https://images.pexels.com/photos/8539548/pexels-photo-8539548.jpeg",
  },
  {
    title: "Guide API Spotify",
    description:
      "Un guide complet pour construire une application web avec l'API Spotify. Le guide couvre tout, de la configuration d'un environnement de développement au déploiement sur Heroku ou Netlify.",
    tech: ["React", "Express", "Spotify API", "Styled Components"],
    github: "#",
    external: "#",
    image: "https://images.pexels.com/photos/6693855/pexels-photo-6693855.jpeg",
  },
];

const otherProjects = [
  {
    title: "Boilerplate WordPress Multisite",
    description:
      "Un modèle WordPress multisite avec des plugins personnalisés, optimisé pour l'efficacité de déploiement et la simplicité de maintenance.",
    tech: ["WordPress", "PHP", "SCSS", "JavaScript"],
    github: "#",
    external: "#",
  },
  {
    title: "Portfolio React",
    description:
      "Un portfolio moderne construit avec React et Styled Components. Comprend des transitions de page fluides et des animations avancées.",
    tech: ["React", "TypeScript", "Styled Components", "Framer Motion"],
    github: "#",
    external: "#",
  },
  {
    title: "Application de Notes Markdown",
    description:
      "Une application de prise de notes Markdown avec aperçu en temps réel, tags et intégration du stockage local.",
    tech: ["React", "TypeScript", "Redux", "Marked"],
    github: "#",
    external: "#",
  },
  {
    title: "Application Météo",
    description:
      "Une application météo minimaliste présentant les conditions actuelles et les prévisions sur 5 jours utilisant l'API OpenWeather.",
    tech: ["JavaScript", "CSS", "HTML", "OpenWeather API"],
    github: "#",
    external: "#",
  },
  {
    title: "App de Reconnaissance Faciale",
    description:
      "Une application qui détecte les visages dans les images téléchargées en utilisant des API d'apprentissage automatique.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Clarifai API"],
    github: "#",
    external: "#",
  },
  {
    title: "Portfolio de Photographie",
    description:
      "Un site portfolio minimaliste pour présenter des travaux photographiques avec un accent sur l'affichage d'images et la performance.",
    tech: ["Next.js", "GSAP", "Tailwind CSS", "Cloudinary"],
    github: "#",
    external: "#",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate featured projects
    gsap.utils
      .toArray<HTMLElement>(".featured-project")
      .forEach((project, i) => {
        gsap.fromTo(
          project,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

    // Animate other projects
    gsap.utils.toArray<HTMLElement>(".other-project").forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: ".other-projects-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding py-32  relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      {/* <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-violet-500/10"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-indigo-500/10"></div> */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-violet-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl"></div>

      <div className="section-content max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="numbered-heading inline-block pr-1 px-4 py-1 text-white rounded-full text-lg font-mono mb-4">
            Projets
          </span>{" "}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Créations Récentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-40">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              className={`featured-project relative md:grid grid-cols-12 items-center gap-4 ${
                i % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              <div
                className={`relative col-span-12 row-span-full md:col-span-7 h-full ${
                  i % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl">
                  <Link
                    href={project.external || project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-indigo-900/70 z-10 transition-opacity duration-300 hover:opacity-0" />
                    <div
                      className="h-80 md:h-72 lg:h-96 bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </Link>
                </div>
              </div>

              <div
                className={`col-span-12 row-span-full md:col-span-7 z-10 ${
                  i % 2 === 0
                    ? "md:col-start-6 md:text-right"
                    : "md:col-start-1 md:text-left"
                }`}
              >
                <div className="p-6 md:p-0">
                  <p className="text-violet-400 font-mono mb-2">
                    Projet à la Une
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    <Link
                      href={project.external || project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-violet-300 transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <div className="relative p-6 rounded-xl bg-white/10 backdrop-blur-md text-white/80 mb-6 shadow-xl">
                    <p className="leading-relaxed">{project.description}</p>
                  </div>

                  <ul
                    className={`flex flex-wrap gap-x-4 gap-y-2 mb-6 ${
                      i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="text-sm font-mono text-violet-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`flex gap-4 ${
                      i % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-violet-400 transition-colors transform hover:scale-110 duration-300"
                        aria-label="GitHub Repository"
                      >
                        <Github size={22} />
                      </Link>
                    )}

                    {project.external && (
                      <Link
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-violet-400 transition-colors transform hover:scale-110 duration-300"
                        aria-label="External Link"
                      >
                        <ExternalLink size={22} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Noteworthy Projects */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-2">
              Autres Projets Intéressants
            </h3>
            <a
              href="#"
              className="inline-block text-violet-400 mb-10 border-b border-violet-400/30 hover:border-violet-400 transition-colors font-mono"
            >
              voir les archives
            </a>
          </div>

          <div className="other-projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, i) => (
              <Card
                key={i}
                className="other-project bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-3 transition-all duration-300 rounded-xl overflow-hidden shadow-xl group"
              >
                <CardHeader className="p-6 pb-0">
                  <div className="flex justify-between items-center mb-6">
                    <Folder
                      className="text-violet-400 group-hover:text-violet-300 transition-colors"
                      size={36}
                    />
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-violet-400 transition-colors transform hover:scale-110 duration-300"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                      )}

                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-violet-400 transition-colors transform hover:scale-110 duration-300"
                          aria-label="External Link"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-violet-300 transition-colors">
                    <a
                      href={project.external || project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                </CardHeader>

                <CardContent className="p-6 pt-2">
                  <p className="text-white/70 mb-6">{project.description}</p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-mono text-violet-300/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Button
              className="bg-transparent hover:bg-violet-500/10 text-violet-400 border-2 border-violet-400 rounded-full px-8 py-6 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-1"
              asChild
            >
              <a href="#">Voir Plus de Projets</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
