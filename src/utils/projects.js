import twoBla from "../assets/2BLA.png";
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
    title: "2Bla : Mini-reseau-sociaux (Projet personnel)",
    content: "Une application mobile offrant aux utilisateurs un espace d’échange où ils peuvent publier, aimer, commenter et discuter en messagerie privée.",
    image: twoBla,
    technos: ["React Native", "TypeScript", "Express.js", "PostgreSQL"],
  },
  {
    title: "Module de Gestion de caisse",
    content:
      "Un module Dolibarr pour la gestion de caisse, permettant de suivre toutes les transactions : brouillard de caisse, dépôts, retraits et historique des opérations.",
    image: dolibarr,
    technos: ["PHP", "JavaScript", "MySQL"],
  },
];
