"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type JobExperience = {
  company: string;
  url: string;
  title: string;
  range: string;
  duties: string[];
};

const experiences: JobExperience[] = [
  {
    company: "Upstatement",
    url: "#",
    title: "Ingénieur Principal",
    range: "Janvier 2022 - Présent",
    duties: [
      "Livraison de code de production de haute qualité et robuste pour divers projets clients incluant Harvard Business School, Eventbrite, Mailchimp, Spartan Race, et plus",
      "Collaboration avec les directeurs créatifs pour diriger la recherche, le développement et l'architecture de solutions techniques répondant aux exigences métier",
      "Travail avec les designers, chefs de projet et autres ingénieurs pour transformer des concepts créatifs en sites web et applications pleinement fonctionnels",
      "Leadership au sein du département d'ingénierie par une collaboration étroite, des partages de connaissances et du mentorat"
    ]
  },
  {
    company: "Apple",
    url: "#",
    title: "Ingénieur UI",
    range: "Juillet 2020 - Décembre 2021",
    duties: [
      "Développement et stylisation d'applications web interactives pour Apple Music en utilisant Ember et SCSS",
      "Construction et déploiement de l'extension Apple Music pour Facebook Messenger en exploitant des API tierces et internes",
      "Architecture et implémentation de l'interface utilisateur du portail employé d'Apple avec React, TypeScript, GraphQL et Apollo",
      "Contribution extensive à la création de MusicKit JS, un framework JavaScript permettant aux développeurs d'ajouter des capacités de streaming Apple Music à leurs applications web"
    ]
  },
  // {
  //   company: "Scout Studio",
  //   url: "#",
  //   title: "Développeur",
  //   range: "Janvier 2018 - Décembre 2019",
  //   duties: [
  //     "Collaboration avec des designers et autres développeurs pour créer des sites web de marketing et de marque pour les clients",
  //     "Interaction régulière avec les clients, fournissant expertise technique et solutions créatives pour répondre à leurs besoins",
  //     "Travail en équipe, gestion de plusieurs projets et respect de délais serrés",
  //     "Utilisation d'une variété de langages, plateformes et frameworks tels que JavaScript, TypeScript, React, WordPress, Prismic et Netlify"
  //   ]
  // },
  // {
  //   company: "Starry",
  //   url: "#",
  //   title: "Ingénieur Logiciel Co-op",
  //   range: "Juillet 2017 - Décembre 2017",
  //   duties: [
  //     "Conception et maintenance de fonctionnalités majeures de l'application web client de Starry en utilisant ES6, Handlebars, Backbone, Marionette et CSS",
  //     "Proposition et implémentation de solutions évolutives aux problèmes identifiés avec les services cloud et applications responsables de la communication avec Starry Station",
  //     "Collaboration avec les designers d'expérience utilisateur et autres développeurs pour assurer des expériences utilisateur cohérentes sur les applications iOS et web de Starry",
  //     "Participation aux revues de code et fourniture de feedback constructif aux autres ingénieurs"
  //   ]
  // },
  // {
  //   company: "MullenLowe",
  //   url: "#",
  //   title: "Technologue Créatif Co-op",
  //   range: "Juillet 2016 - Décembre 2016",
  //   duties: [
  //     "Développement et maintenance de code pour des sites web internes et clients principalement en utilisant HTML, CSS, Sass, JavaScript et jQuery",
  //     "Test manuel des sites sur différents navigateurs et appareils mobiles pour assurer la compatibilité cross-browser et la responsivité",
  //     "Clients incluant JetBlue, Lovesac, U.S. Cellular, Département de la Défense des États-Unis, et plus",
  //     "Collaboration étroite avec l'équipe de design créatif pour implémenter des expériences numériques innovantes"
  //   ]
  // }
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("0");
  
  return (
    <section id="experience" className="section-padding py-32 relative overflow-hidden ">
      {/* Éléments décoratifs */}
      {/* <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-violet-500/10 rounded-full blur-xl"></div> */}
      
      <div className="section-content max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1  text-white rounded-full text-lg font-mono mb-4 numbered-heading">Expérience</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Mon Parcours Professionnel</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto"></div>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto  p-8 ">
          <Tabs 
            defaultValue="0" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="flex flex-col sm:flex-row gap-8"
          >
            <TabsList className="h-auto flex sm:flex-col overflow-x-auto sm:overflow-visible bg-transparent p-0 border-b sm:border-b-0 sm:border-r border-indigo-500/20">
              {experiences.map((job, i) => (
                <TabsTrigger
                  key={i}
                  value={String(i)}
                  className="data-[state=active]:text-violet-400 rounded-r-none data-[state=active]:border-b-2 sm:data-[state=active]:border-b-0 sm:data-[state=active]:border-r-2 data-[state=active]:border-violet-400 px-4 py-3 w-full whitespace-nowrap text-start justify-start text-white/70 hover:text-white/90 transition-colors"
                >
                  {job.company}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1">
              {experiences.map((job, i) => (
                <TabsContent 
                  key={i} 
                  value={String(i)}
                  className="mt-0 data-[state=active]:animate-fadeIn"
                >
                  <h3 className="text-xl font-medium mb-1 text-white">
                    {job.title}{" "}
                    <span className="text-violet-400">
                      @ <a href={job.url} className="hover:underline transition-all">{job.company}</a>
                    </span>
                  </h3>
                  <p className="text-sm text-white/60 mb-6 font-mono">
                    {job.range}
                  </p>
                  <ul className="space-y-4">
                    {job.duties.map((duty, index) => (
                      <li 
                        key={index} 
                        className="flex text-white/80 before:content-['▹'] before:text-violet-400 before:mr-3 before:mt-1 before:text-lg"
                      >
                        {duty}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
