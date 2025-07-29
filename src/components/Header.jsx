import clsx from "clsx";
import { useState, useLayoutEffect } from "react";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <header
      className={clsx("sticky top-0 z-10 font-semibold py-4 font-Lato", {
        "shadow shadow-white/20": scrollY > 25,
        "bg-[#02061a]": scrollY < 800,
        "bg-[#020624]": scrollY > 800,
      })}
    >
      <ul className="max-w-[400px] ms-auto flex justify-around max-md:mx-auto">
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#cv">Mon CV</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
    </header>
  );
}
