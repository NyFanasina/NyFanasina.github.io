export default function Footer() {
  return (
    <div className="flex justify-between border-t border-slate-800 container mx-auto p-5">
      <ul className="flex max-sm:flex-col gap-4">
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
      <p className="text-center ">Ny Fanasina Jaonasitera</p>
    </div>
  );
}
