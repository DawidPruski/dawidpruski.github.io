import { education } from "@/components/content/education";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <>
      <h1 id="education">Education</h1>
      {education.map((edu, index) => (
        <EducationCard
          key={index}
          degree={edu.degree}
          university={edu.university}
          dateStart={edu.dateStart}
          dateEnd={edu.dateEnd}
          thesisTitle={edu.thesisTitle}
          summary={edu.summary}
          showSeparator={edu.showSeparator}
        />
      ))}
    </>
  );
}
