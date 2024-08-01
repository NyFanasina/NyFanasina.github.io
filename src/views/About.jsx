import {
    BiLogoTypescript, BiLogoJavascript, BiLogoReact, BiLogoVuejs, BiLogoTailwindCss, BiLogoBootstrap, BiLogoNodejs, BiLogoPhp, BiLogoGit, BiLogoGithub,
} from "react-icons/bi"
import { SiExpress, SiLaravel, SiInsomnia } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import TechItemAbout from "../components/TechItemAbout";

export default function About() {
    return (
        <div className="sm:py-20 py-10 text-center" id="about">
            <div>
                <h1 className="text-3xl p-2">Je me présente,</h1>
                <p>
                    Moi, c'est Ny Fanasina,  étudiant en informatique et développeur logiciel spécialisé dans le développement web et mobile.
                </p>
                <p>J'ai une passion pour la création de solutions innovantes et performantes, et j'excelle particulièrement dans les environnements JavaScript et PHP.</p>
            </div>
            <div className="py-10 justify-around flex-wrap">
                <TechItemAbout title="Langages de programmation">
                    <BiLogoJavascript color="yellow" size={49} tooltip="Javascript" />
                    <BiLogoTypescript color="#0076c6" size={49} tooltip="TypeScript" />
                    <BiLogoPhp color="#7277ad" size={49} tooltip="Php" />
                </TechItemAbout>
                <TechItemAbout title="Frameworks et Librairies">
                    <BiLogoReact color="#61d9ee" size={49} tooltip="Reactjs" />
                    <TbBrandReactNative color="#4c76af" size={45} tooltip="React Native" />
                    {/* <RiNextjsFill size={49} color="#eeeeee" tooltip="NextJs" /> */}
                    <SiExpress color="#eeeeee" size={51} tooltip="ExpresJs" />
                    <SiLaravel color="red" size={40} tooltip="Laravel" />
                </TechItemAbout>
                <TechItemAbout title="Frameworks Css">
                    <BiLogoTailwindCss color="#05b0ce" size={49} tooltip="Tailwind Css" />
                    <BiLogoBootstrap color="#613f8e" size={49} tooltip="Bootstrap" />
                </TechItemAbout>
                <TechItemAbout title="Outils">
                    <BiLogoGit color="#fe2521" size={49} tooltip="Git" />
                    <BiLogoGithub size={49} tooltip="Github" />
                    <SiInsomnia color="blue" size={46} tooltip="Insomnia" />
                </TechItemAbout>
            </div>
        </div >
    )
}
