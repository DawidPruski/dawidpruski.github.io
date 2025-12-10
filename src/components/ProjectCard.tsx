import { IoFolderOpenOutline } from "react-icons/io5";
import { LuMousePointerClick } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { ProjectProps } from "./content/projects";

export default function ProjectCard({ projectName, description, linkPreview, linkRepo, tags }: ProjectProps) {
  return (
    <>
      <div className="border p-2 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <IoFolderOpenOutline className="mt-1" />
            <h3 className="font-bold">{projectName}</h3>
          </div>
          <div className="flex gap-2">
            {linkPreview && (
              <a href={linkPreview}>
                <LuMousePointerClick />
              </a>
            )}
            <a href={linkRepo}>
              <FaGithub />
            </a>
          </div>
        </div>
        <p className="ml-2 flex-1">{description}</p>
        <div className="flex gap-2 flex-wrap mt-2">
          {tags.map((tag) => (
            <span key={tag} className="p-2 bg-[#f9e8de] text-[#815854]">
              <p className="text-xs">{tag}</p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
