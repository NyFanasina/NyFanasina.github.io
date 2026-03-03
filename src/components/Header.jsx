import clsx from "clsx";
import { useEffect } from "react";
import { useState, useLayoutEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const navigation = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Projets", href: "#projects" },
  { name: "Mon CV", href: "#cv" },
  { name: "Contacts", href: "#contact" },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useLayoutEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  const menu = navigation.map(({ name, href }) => (
    <li key={name} className="hover:text-cyan-400 transition-colors duration-300">
      <a href={href}>{name}</a>
    </li>
  ));

  return (
    <header
      className={clsx("sticky top-0 z-10 font-semibold sm:py-4 font-Lato max-sm:opacity-90", {
        "shadow shadow-white/20": scrollY > 25,
        "bg-[#02061a]": scrollY < 800,
        "bg-[#020624]": scrollY > 800,
      })}
    >
      <div className="sm:hidden flex flex-col">
        <button className="sm:hidden self-end mx-3 p-2 z-50" onClick={() => setOpen(!isOpen)}>
          <GiHamburgerMenu size={25} />
        </button>
        {isOpen && <ul className="flex flex-col items-center gap-4 pb-3">{menu}</ul>}
      </div>
      <ul className="max-sm:hidden max-w-[400px] ms-auto flex justify-around max-md:mx-auto">{menu}</ul>
    </header>
  );
}
