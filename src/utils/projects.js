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
    title: "Site web officiel de WhyNotLinux",
    content: "Un site web dédié à la diffusion des programmes et activités de WNL. \nLien: https://github.com/WhyNotLinuxMG/whynotlinuxmg",
    image: wnl,
    technos: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Baiboly Mg 1865 (Projet personnel)",
    content: "Une application mobile multiplateforme (Android & iOS) dédiée à la lecture de la Bible en malgache. Elle intègre une recherche rapide par référence (ex: Mat 7:7), un assistant IA pour l'explication des versets, ainsi que des fonctionnalités de favoris et de partage.",
    image: bible,
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
