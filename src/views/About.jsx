import { FaReact, FaGitAlt, FaPhp, FaLaravel, FaMobileAlt, FaBootstrap, FaDocker, FaNodeJs, FaGithub, FaGitlab } from "react-icons/fa";
import { GiBearFace, GiPalmTree } from "react-icons/gi";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress, SiTypeorm, SiRadixui, SiPrisma, SiRedux } from "react-icons/si";

export default function About() {
  const skills = [
    // { icon: <FaJsSquare size={50} />, label: "JavaScript" },
    { icon: <SiTypescript size={50} />, label: "TypeScript" },
    { icon: <FaReact size={50} />, label: "React.js" },
    { icon: <SiNextdotjs size={50} />, label: "Next.js" },
    { icon: <FaMobileAlt size={50} />, label: "React Native" },
    { icon: <SiTailwindcss size={50} />, label: "Tailwind CSS" },
    { icon: <FaBootstrap size={50} />, label: "Bootstrap" },
    // { icon: <SiRadixui size={50} />, label: "shadcn/ui" },
    { icon: <FaPhp size={50} />, label: "PHP" },
    { icon: <FaLaravel size={50} />, label: "Laravel" },
    { icon: <FaNodeJs size={50} />, label: "Node.js" },
    { icon: <SiExpress size={50} />, label: "Express.js" },
    { icon: <SiRedux size={50} />, label: "Redux" },
    { icon: <GiBearFace size={50} />, label: "Zustand" },
    {
      icon: <GiPalmTree size={50} />,
      label: "Tanstack",
    },
    { icon: <SiTypeorm size={50} />, label: "TypeORM" },
    // { icon: <SiPrisma size={50} />, label: "Prisma" },
    { icon: <FaGitAlt size={50} />, label: "Git" },
    { icon: <FaGithub size={50} />, label: "GitHub" },
    { icon: <FaGitlab size={50} />, label: "GitLab" },
    { icon: <FaDocker size={50} />, label: "Docker" },
  ];

  return (
    <div className="sm:py-20 py-10 text-center mt-5" id="about">
      <div>
        <h1 className="text-3xl p-2">Je me présente,</h1>
        <p>Moi, c'est Ny Fanasina, étudiant en Master informatique et développeur logiciel spécialisé dans le développement web et mobile.</p>
        <p>
          J'ai une passion pour la création des solutions innovantes et performantes, et j'excelle particulièrement dans les environnements
          JavaScript et PHP.
        </p>
      </div>

      <div className="grid grid-cols-3 min-[480px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-9 gap-6 place-items-center mt-20">
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
