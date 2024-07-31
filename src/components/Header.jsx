export default function Header() {
    return (
        <div className="p-4 border-b-2 border-slate-800">
            <ul className="max-w-[400px] ms-auto flex justify-around">
                <li><a href="#about">Á propos</a></li>
                <li><a href="#projects">Projets</a></li>
                <li><a href="#tech">Tech</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
