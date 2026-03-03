import { FaReact, FaGitAlt, FaPhp, FaLaravel, FaMobileAlt, FaBootstrap, FaDocker, FaNodeJs, FaGithub, FaGitlab, FaPython } from "react-icons/fa";
import { GiBearFace, GiPalmTree } from "react-icons/gi";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTypeorm,
  SiRadixui,
  SiPrisma,
  SiRedux,
  SiOdoo,
  SiZod,
  SiExpo,
} from "react-icons/si";

export default function About() {
  const skills = [
    // { icon: <FaJsSquare size={40} />, label: "JavaScript" },
    { icon: <SiTypescript size={40} />, label: "TypeScript" },
    { icon: <FaReact size={40} />, label: "React.js" },
    { icon: <SiNextdotjs size={40} />, label: "Next.js" },
    { icon: <FaMobileAlt size={40} />, label: "React Native" },
    { icon: <SiExpo size={40} />, label: "Expo" },
    // { icon: <SiRadixui size={40} />, label: "shadcn/ui" },
    { icon: <FaPhp size={40} />, label: "PHP" },
    { icon: <FaLaravel size={40} />, label: "Laravel" },
    { icon: <FaNodeJs size={40} />, label: "Node.js" },
    { icon: <SiExpress size={40} />, label: "Express.js" },
    { icon: <SiTailwindcss size={40} />, label: "Tailwind CSS" },
    { icon: <SiRedux size={40} />, label: "Redux" },
    { icon: <GiBearFace size={40} />, label: "Zustand" },
    {
      icon: <GiPalmTree size={40} className="ms-3" />,
      label: `Tanstack`,
    },
    { icon: <SiTypeorm size={40} />, label: "TypeORM" },
    { icon: <SiPrisma size={40} />, label: "Prisma" },
    { icon: <SiZod size={40} />, label: "Zod" },
    { icon: <FaGitAlt size={40} />, label: "Git" },
    // { icon: <FaGithub size={40} />, label: "GitHub" },
    // { icon: <FaGitlab size={40} />, label: "GitLab" },
    { icon: <FaDocker size={40} />, label: "Docker" },
  ];

  return (
    <div className="sm:py-20 py-10 text-center mt-5" id="about">
      <div>
        <h1 className="text-3xl p-2">Je me présente,</h1>
        <p>Moi, c'est Ny Fanasina, développeur logiciel spécialisé dans le web et mobile.</p>
        <p>
          J’ accompagne les entreprises et professionnels à créer ensemble des solutions numériques efficaces et performantes, en mettant
          l’accent sur l’expérience utilisateur et la qualité du code. J' excelle particulièrement dans les environnements JavaScript et PHP.
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto grid grid-cols-3 min-[480px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-9 gap-6 place-items-center mt-20">
        {skills.map(({ icon, label }, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] min-[370px]:w-28 min-[370px]:h-28 flex flex-col items-center justify-center gap-3  bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl text-white shadow-md transition-all duration-300 hover:scale-105 hover:text-cyan-400 hover:shadow-[0_0_15px_#06b6d4]"
          >
            <span className="text-2xl transition-transform duration-200 hover:scale-125">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
