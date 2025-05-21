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
    company: "Freelance",
    url: "#",
    title: "Developer Fullstack Freelance",
    range: "Janvier 2025 - Présent",
    duties: [
      "Création d’un site de vente en ligne avec gestion des stocks, des commandes et intégration des paiements en ligne avec React, Typescript, Node.js, Next.js, MongoDB",
      "Site vitrine avec demande de devis pour une entreprise de construction : Développement d’un site permettant de présenter les services de l’entreprise et de faciliter les demandes de devis en ligne avec HTML, CSS, Javascript",
      "Création d'un site d'une agence web de création d'application web et mobile avec React, Typescript, Node.js, Next.js, MongoDB",
      "Leadership au sein du département d'ingénierie par une collaboration étroite, des partages de connaissances et du mentorat"
    ]
  },
  {
    company: "Finteck Aigle",
    url: "#",
    title: "Developer Fullstack",
    range: "Juin 2024 — Décembre 2024",
    duties: [
      "Mise en place d’une plateforme de transfert sécurisé avec un wallet numérique permettant aussi l’achat de pass internet et crédit d’appel avec TypeScript React.js, Node.js, Adonis.js, SQL",
      "Conception du frontend d’un site facilitant la demande et le suivi des actes administratifs auprès des mairies en Côte d’Ivoire avec React et Javascript",
      "Création d'un portail pour l'ouverture de comptes et la demande de crédits avec suivi des dossiers en temps réel avec React, Javascript, Node.js, Express.js, MongoDB",
      "Développement d’un site pour la gestion des dons, événements et annonces d’églises, avec paiement en ligne intégré avec React, Javascript, Node.js, Express.js, MongoDB",
      "Développement d'un site permettant aux commerçants de créer et gérer leur boutique en ligne avec intégration des paiements en ligne locaux avec React, Javascript, Node.js, Express.js, MongoDB",
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
                      @ <a href={job.url} className="link-underline transition-all">{job.company}</a>
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
