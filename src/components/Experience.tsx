import { experiences } from "@/components/content/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <>
      <h1 id="experience">Experience</h1>
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          jobTitle={exp.jobTitle}
          employer={exp.employer}
          dateStart={exp.dateStart}
          dateEnd={exp.dateEnd}
          place={exp.place}
          text={exp.text}
          responsibilities={exp.responsibilities}
          showSeparator={exp.showSeparator}
        />
      ))}
    </>
  );
}
