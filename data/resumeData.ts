interface Project {
  name: string;
  link: string;
  description: string;
  technologies: string[];
}

interface Experience {
  period: string;
  position: string;
  company: string;
  companyLink: string;
  projects: Project[];
}

export const experiences: Experience[] = [
  {
    period: "Juin 2024 — Décembre 2024",
    position: "Developer Fullstack",
    company: "Finteck Aigle",
    companyLink: "https://www.finteck.aigle.fr/",
    projects: [
      {
        name: "Transfert d’argent inter Mobile Money et entre pays africains",
        link: "https://www.finteck.aigle.fr/",
        description: "Mise en place d’une plateforme de transfert sécurisé avec un wallet numérique permettant aussi l’achat de pass internet et crédit d’appel.",
        technologies: ["TypeScript", "React.js", "Node.js", "Adonis.js", "SQL"]
      },
      {
        name: "Demande d’actes d’état civil",
        link: "https://www.finteck.aigle.fr/",
        description: "Conception du frontend d’un site facilitant la demande et le suivi des actes administratifs auprès des mairies en Côte d’Ivoire.",
        technologies: ["Javascript", "React.js"]
      },
      {
        name: "Gestion des comptes bancaires et crédits",
        link: "https://www.finteck.aigle.fr/",
        description: "Création d'un portail pour l'ouverture de comptes et la demande de crédits avec suivi des dossiers en temps réel.",
        technologies: ["Javascript", "React.js", "Node.js", "Express.js", "MongoDB"]
      },
      
      {
        name: "Gestion des églises et dons",
        link: "https://www.finteck.aigle.fr/",
        description: "Développement d’un site pour la gestion des dons, événements et annonces d’églises, avec paiement en ligne intégré.",
        technologies: ["Javascript", "React.js", "Node.js", "Express.js", "MongoDB"]
      },
      {
        name: "Plateforme E-commerce",
        link: "https://www.finteck.aigle.fr/",
        description: "Développement d'un site permettant aux commerçants de créer et gérer leur boutique en ligne avec intégration des paiements en ligne locaux.",
        technologies: ["Javascript", "React.js", "Node.js", "Express.js", "MongoDB"]
      },
    ]
  },
  // Vous pouvez ajouter d'autres expériences ici
  // {
  //   period: "Janvier 2023 — Mai 2024",
  //   position: "Frontend Developer",
  //   company: "TechInnovate",
  //   companyLink: "https://www.techinnovate.fr/",
  //   projects: [
  //     {
  //       name: "Tableau de bord analytique",
  //       link: "https://www.techinnovate.fr/projects/dashboard",
  //       description: "Développement d'une interface utilisateur interactive pour visualiser les données analytiques en temps réel.",
  //       technologies: ["TypeScript", "React.js", "D3.js"]
  //     }
  //   ]
  // }
];
