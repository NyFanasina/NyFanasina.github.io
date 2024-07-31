import {
    BiLogoTypescript, BiLogoJavascript, BiLogoReact, BiLogoVuejs, BiLogoTailwindCss, BiLogoBootstrap, BiLogoNodejs, BiLogoPhp, BiLogoGit, BiLogoGithub,
} from "react-icons/bi"
import { SiExpress, SiLaravel, SiInsomnia } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

export default function About() {
    return (
        <div className="border py-28 text-center">
            <div>
                <h1 className="text-3xl p-2">Je me présente,</h1>
                <p>
                    Moi, c'est Ny Fanasina,  étudiant en informatique et développeur logiciel spécialisé dans le développement web et mobile.
                </p>
                <p>J'ai une passion pour la création de solutions innovantes et performantes, et j'excelle particulièrement dans les environnements JavaScript et PHP.</p>
            </div>
            <div className="py-10 flex justify-around *:min-w-[400px]  flex-wrap *:*:flex *:*:justify-center *:*:items-center *:*:space-x-2">
                <div>
                    <h3>Languages de programations</h3>
                    <div>
                        <BiLogoJavascript color="yellow" size={49} title="Javascript" />
                        <BiLogoTypescript color="#0076c6" size={49} title="TypeScript" />
                        <BiLogoPhp color="#7277ad" size={49} title="Php" />
                    </div>
                </div>
                <div>
                    <h3>Frameworks et Librairies</h3>
                    <div>
                        <BiLogoReact color="#61d9ee" size={49} title="Reactjs" />
                        <TbBrandReactNative color="#4c76af" size={45} title="ReactNative" />
                        {/* <RiNextjsFill size={49} color="#eeeeee" title="NextJs" /> */}
                        <SiExpress color="#eeeeee" size={51} title="Expressjs" />
                        <SiLaravel color="red" size={38} title="Laravel" />
                    </div>
                </div>
                <div>
                    <h3>Frameworks Css</h3>
                    <div>
                        <BiLogoTailwindCss color="#05b0ce" size={49} title="Tailwind ui" />
                        <BiLogoBootstrap color="#613f8e" size={49} title="Bootstrap" />
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3>Outils</h3>
                <div className="flex justify-center">
                    <BiLogoGit color="#fe2521" size={49} />
                    <BiLogoGithub size={49} />
                    <SiInsomnia color="blue" size={46} />
                </div>
            </div>
        </div>
    )
}
