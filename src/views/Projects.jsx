import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../utils/projects";

export default function Projects() {
    return (
        <div className="py-5" id="projects">
            <h1 className="text-center p-5 text-3xl">Quelques extraits de mes projets</h1>
            <div className="flex justify-around flex-wrap gap-5 ">
                {
                    projects.map((project, i) => <ProjectCard key={i} project={project} />)
                }
            </div>
        </div>
    )
}
