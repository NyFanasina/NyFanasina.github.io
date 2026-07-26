import clsx from "clsx";
import { FaReact, FaGitAlt, FaMobileAlt, FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { GiBearFace, GiPalmTree } from "react-icons/gi";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiTypeorm,
  SiPrisma,
  SiRedux,
  SiZod,
  SiExpo,
  SiFastapi,
} from "react-icons/si";

const COL3_WIDTH = 480;

export default function About() {
  const skills = [
    { icon: <SiTypescript size={40} />, label: "TypeScript" },
    { icon: <FaReact size={40} />, label: "React.js" },
    { icon: <SiNextdotjs size={40} />, label: "Next.js" },
    { icon: <FaMobileAlt size={40} />, label: "React Native" },
    { icon: <SiExpo size={40} />, label: "Expo" },
    { icon: <FaPython size={40} />, label: "Python" },
    { icon: <SiFastapi size={40} />, label: "FastApi" },
    { icon: <FaNodeJs size={40} />, label: "Node.js" },
    { icon: <SiExpress size={40} />, label: "Express.js" },
    { icon: <SiTailwindcss size={40} />, label: "Tailwind CSS" },
    { icon: <SiRedux size={40} />, label: "Redux", autoHide: true },
    { icon: <GiBearFace size={40} />, label: "Zustand" },
    {
      icon: <GiPalmTree size={40} className="ms-3" />,
      label: `Tanstack`,
    },
    { icon: <SiTypeorm size={40} />, label: "TypeORM" },
    { icon: <SiPrisma size={40} />, label: "Prisma", autoHide: true },
    { icon: <SiZod size={40} />, label: "Zod", autoHide: true },
    { icon: <FaGitAlt size={40} />, label: "Git" },
    { icon: <FaDocker size={40} />, label: "Docker" },
  ];

  return (
    <div className="sm:py-20 py-10 text-center mt-5" id="about">
      <div>
        <h1 className="text-3xl p-2">Je me présente,</h1>
        <p>
          Moi, c&apos;est Ny Fanasina,{" "}
          <strong>
            développeur logiciel spécialisé dans le web et le mobile, avec plus d&apos;un an d&apos;expérience
          </strong>{" "}
          dans les écosystèmes Python et Javascript.
        </p>
        <p>
          Je développe des logiciels avec une conviction simple : un bon produit commence par une architecture solide.
          J&apos;accorde autant d&apos;importance à la qualité du code qu&apos;à l&apos;expérience utilisateur, en
          privilégiant des solutions fiables, évolutives et pensées pour durer.
        </p>
      </div>

      <div
        className={`max-w-[1300px] mx-auto grid grid-cols-3 min-[${COL3_WIDTH}px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-9 gap-6 place-items-center mt-20`}
      >
        {skills.map(({ icon, label, autoHide }, index) => (
          <div
            key={index}
            className={clsx(
              "w-[100px] h-[100px] min-[370px]:w-28 min-[370px]:h-28 flex flex-col items-center justify-center gap-3 \
              bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl text-white shadow-md \
              transition-all duration-300 hover:scale-105 hover:text-cyan-400 hover:shadow-[0_0_15px_#06b6d4]",
              { "max-sm:hidden": autoHide },
            )}
          >
            <span className="text-2xl transition-transform duration-200 hover:scale-125">{icon}</span>
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
