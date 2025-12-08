import Image from "next/image";
import calendarImg from "../assets/calendar.png";

type EducationProps = {
  degree: string;
  university: string;
  dateStart: string;
  dateEnd: string;
  thesisTitle: string;
  summary: string;
};

export default function Education({ degree, university, dateStart, dateEnd, thesisTitle, summary }: EducationProps) {
  return (
    <>
      <div className="ml-2">
        <h3 className="mb-0 font-bold">{degree}</h3>
        <p className="m-0.5 ml-0 text-sm">{university}</p>
        <div className="flex justify-between text-sm mb-4">
          <p className="flex items-center gap-2">
            <Image src={calendarImg} alt="calendar" width={16} height={16} />
            {dateStart} – {dateEnd}
          </p>
        </div>
        <p>
          <strong>Thesis title:</strong>
          {thesisTitle}
        </p>
        <p>
          <strong>Summary:</strong>
          {summary}
        </p>
      </div>
    </>
  );
}
