import twoBla from '../assets/2BLA.png'
import wnl from '../assets/wnl.png'
import dolibarr from '../assets/dolibarr.png'

export const projects = [
    {
        title: "2Bla : Mini-reseau-sociaux",
        content: "Une application mobile qui permet aux utilisateurs de poster, liker, commenter et d'envoyer des messages.",
        image: twoBla,
        technos: ['React Native', 'TypeScript', 'express.js', 'postgreSQL']
    },
    {
        title: "Site web official du WhyNotLinux",
        content: "Le site qui fournit les programmes et activités du WNL \nLien: https://github.com/WhyNotLinuxMG/whynotlinuxmg",
        image: wnl,
        technos: ['Reactjs', 'tailwindCss']
    },
    {
        title: "Module de Gestion de caisse",
        content: "Un module de dolibarr permettant de suivre toutes les transactions au niveau de la caisse: brouillard de caisse, dépot,retrait, historique de transaction.",
        image: dolibarr,
        technos: ['php', 'javascript', 'mysql']
    }
]