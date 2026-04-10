import { Card } from "flowbite-react";
import CardButton from "./CardButton";

export function ProjectCard({ project }) {
  const buttons = project.technos && project.technos.map((techno, i) => <CardButton key={i}>{techno}</CardButton>);

  return (
    <Card
      className="relative max-w-[580px] bg-gray-100 overflow-hidden"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      renderImage={() => <img srcSet={project.image} className="border-b-2" />}
    >
      <p className="absolute top-1.5 left-4 flex gap-2">
        {project.links?.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/65 rounded px-2 text-white text-sm hover:bg-black/70"
          >
            {link.name}
          </a>
        ))}
      </p>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{project.content}</p>
      <p>{buttons}</p>
    </Card>
  );
}
