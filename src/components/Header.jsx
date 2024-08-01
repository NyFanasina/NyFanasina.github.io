export default function Header() {
    return (
        <div className="py-4 mx-4 border-b-2 border-slate-800 font-Lato">
            <ul className="max-w-[400px] ms-auto flex justify-around">
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#contact">Contactes</a></li>
            </ul>
        </div>
    )
}
