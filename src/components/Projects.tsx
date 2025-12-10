import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/components/content/projects";

export default function Projects() {
  return (
    <>
      <h1 id="projects">Projects</h1>
      <div className="grid gap-4 ml-2 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            description={project.description}
            linkPreview={project.linkPreview}
            linkRepo={project.linkRepo}
            tags={project.tags}
          />
        ))}
      </div>
    </>
  );
}
