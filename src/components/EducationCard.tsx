import { EducationProps } from "@/components/content/education";
import Image from "next/image";
import calendarImg from "@/assets/calendar.png";

export default function EducationCard({
  degree,
  university,
  dateStart,
  dateEnd,
  thesisTitle,
  summary,
  showSeparator = true,
}: EducationProps & { showSeparator?: boolean }) {
  return (
    <>
      <div className="ml-2">
        <h3 className="mb-0 font-bold">{degree}</h3>
        <p className="m-0.5 ml-0 text-sm">{university}</p>
        <div className="flex justify-between text-sm mb-2">
          <p className="flex items-center gap-2">
            <Image src={calendarImg} alt="calendar" width={16} height={16} />
            {dateStart} – {dateEnd}
          </p>
        </div>
        <div className="pl-4">
          <p className="pb-1">
            <strong>Thesis title: </strong>
            {thesisTitle}
          </p>
          <p>
            <strong>Summary: </strong>
            {summary}
          </p>
        </div>
      </div>
      {showSeparator && <div className="separator"></div>}
    </>
  );
}
