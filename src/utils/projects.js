import bible from "../assets/bible_mg.png";
import wnl from "../assets/wnl.png";
import dolibarr from "../assets/dolibarr.png";
import mzk from "../assets/mzk.png";

export const projects = [
  {
    title: "Générateur d'États",
    content:
      "Une application qui génère des rapports personnalisés à partir de la base de données Sage 100, optimisant l'accès aux informations et facilitant la prise de décision chez Miezaka.",
    image: mzk,
    technos: ["Next.js", "TypeScript", "Tailwind CSS", "SQL Server"],
  },
  {
    title: "Site web de WhyNotLinux – 2ᵉ édition",
    content:
      "C'est un site web événementiel autour de Linux et de l’open source à Madagascar. J’ai contribué à son développement pour présenter l’événement et promouvoir les logiciels libres.",
    image: wnl,
    links: [
      {
        name: "View on GitHub",
        url: "https://github.com/NyFanasina/whynotlinuxmg.github.io",
      },
    ],
    technos: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Baiboly Mg 1865 (Projet personnel)",
    content:
      "Une application mobile multiplateforme (Android & iOS) dédiée à la lecture de la Bible en malgache. Elle intègre une recherche rapide par référence (ex: Mat 7:7), un assistant IA pour l'explication des versets, ainsi que des fonctionnalités de favoris et de partage.",
    image: bible,
    links: [
      {
        name: "View preview",
        url: "https://expo.dev/accounts/nyfanasina/projects/bible-malagasy-1865/builds/011c82fc-b5b1-4b46-8ca7-033720832423",
      },
      {
        name: "View on GitHub",
        url: "https://github.com/NyFanasina/bible-mg-1865",
      },
    ],

    technos: ["Expo", "React Native", "Google Gemini API", "Nativewind", "Zustand"],
  },
  {
    title: "Module de Gestion de caisse",
    content:
      "Un module Dolibarr pour la gestion de caisse, permettant de suivre toutes les transactions : brouillard de caisse, dépôts, retraits et historique des opérations.",
    image: dolibarr,
    technos: ["PHP", "JavaScript", "MySQL"],
  },
];
