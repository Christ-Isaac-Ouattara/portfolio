interface Project {
  name: string;
  link: string;
  image: string;
  range: string;
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

export const projects: Project[] = [
  {
    name: "Site réparation automobile et multiservice",
    link: "https://ivoire-diesel-plus.vercel.app//",
    image: "/img/idp.png",
    range: "Juin 2025",
    description:
      "Un site web de réparation automobile et multiservice pour un garage qui propose des services de réparation et de maintenance, de sous traitance minière, de locations d'engins et de vehicule, et travaux publics.",
    technologies: ["TypeScript", "React", "Next.js"],
  },
  {
    name: "Portfolio React",
    link: "https://kriscode.tech/",
    image: "/img/portfolio.png",
    range: "Mai 2025",
    description:
      "Un portfolio moderne construit avec React et Next.js. Comprend des transitions de page fluides et des animations légères mais subtiles inspiré de brittany Chiang.",
    technologies: ["TypeScript", "React", "Next.js", "Motion"],
  },
  {
    name: "Refonte de site web de restauration",
    link: "https://lekemet.vercel.app/",
    image: "/img/kemet.png",
    range: "Mai 2025",
    description:
      "Un site web de restauration pour un restaurateur qui propose des menus de plats africains en france.",
    technologies: ["TypeScript", "React", "Next.js"],
  },
  {
    name: "Site web e-commerce",
    link: "https://snobstore.shop/",
    image: "/img/snob.png",
    range: "Avril 2025 - Present",
    description:
      "Un site web e-commerce qui permet aux utilisateurs de parcourir et d'acheter des produits en ligne.",
    technologies: ["TypeScript", "React", "Next.js", "Resend"],
  },
  {
    name: "Application immobilière",
    link: "https://olympe-zeta.vercel.app/",
    image: "/img/olympe.png",
    range: "Mars 2025 - Present",
    description:
      "Une application qui permet aux utilisateurs de rechercher des propriétés immobilières, de voir les détails de chaque propriété et de contacter le propriétaire.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "MongoDB",
      "PostgreSQL",
      "Express.js",
      "Node.js",
    ],
  },
  {
    name: "Application de santé en ligne",
    link: "https://santeplus.vercel.app/",
    image: "/img/santeplus.png",
    range: "Mars 2025 - Present",
    description:
      "Une application de santé qui permet de faire des consultations préliminaire en ligne, de recevoir des ordonnance digitales en ligne et de pouvoir commander ses medicaments et les recevoir chez soi rapidement et en sécurité.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "MongoDB",
      "PostgreSQL",
      "Express.js",
      "Node.js",
    ],
  },
  {
    name: "Site web de contruction",
    link: "https://groupe-sicab.com/",
    image: "/img/sicab.png",
    range: "Aout 2024",
    description:
      "Un site web pour une entreprise de contruction, d'agriculture et de commerce qui permet aux utilisateurs de parcourir les différents services de l'entreprise et de renseigner un formulaire pour un devis préliminaire gratuit.",
    technologies: ["HTML", "CSS", "JS"],
  },
];
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
        image: "/img/finteck.png",
        range: "Mars 2025 - Present",
        description:
          "Mise en place d’une plateforme de transfert sécurisé avec un wallet numérique permettant aussi l’achat de pass internet et crédit d’appel.",
        technologies: ["TypeScript", "React.js", "Node.js", "Adonis.js", "SQL"],
      },
      {
        name: "Demande d’actes d’état civil",
        link: "https://www.finteck.aigle.fr/",
        image: "/img/finteck.png",
        range: "Mars 2025 - Present",
        description:
          "Conception du frontend d’un site facilitant la demande et le suivi des actes administratifs auprès des mairies en Côte d’Ivoire.",
        technologies: ["Javascript", "React.js"],
      },
      {
        name: "Gestion des comptes bancaires et crédits",
        link: "https://www.finteck.aigle.fr/",
        image: "/img/finteck.png",
        range: "Mars 2025 - Present",
        description:
          "Création d'un portail pour l'ouverture de comptes et la demande de crédits avec suivi des dossiers en temps réel.",
        technologies: [
          "Javascript",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
      },
      {
        name: "Gestion des églises et dons",
        link: "https://www.finteck.aigle.fr/",
        image: "/img/finteck.png",
        range: "Mars 2025 - Present",
        description:
          "Développement d’un site pour la gestion des dons, événements et annonces d’églises, avec paiement en ligne intégré.",
        technologies: [
          "Javascript",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
      },
      {
        name: "Plateforme E-commerce",
        link: "https://www.finteck.aigle.fr/",
        image: "/img/finteck.png",
        range: "Mars 2025 - Present",
        description:
          "Développement d'un site permettant aux commerçants de créer et gérer leur boutique en ligne avec intégration des paiements en ligne locaux.",
        technologies: [
          "Javascript",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
        ],
      },
    ],
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
