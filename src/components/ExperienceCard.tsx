import Image from "next/image";
import calendarImg from "@/assets/calendar.png";
import placeImg from "@/assets/place.png";
import { ExperienceProps } from "@/components/content/experience";

export default function ExperienceCard({
  jobTitle,
  employer,
  dateStart,
  dateEnd,
  place,
  text,
  responsibilities,
  showSeparator = true,
}: ExperienceProps & { showSeparator?: boolean }) {
  return (
    <div className="ml-2">
      <h3 className="font-bold">{jobTitle}</h3>
      <p className="m-0.5 ml-0 text-sm">{employer}</p>
      <div className="flex justify-between text-sm mb-2">
        <p className="flex items-center gap-2">
          <Image src={calendarImg} alt="calendar" width={16} height={16} />
          {dateStart} – {dateEnd}
        </p>
        <p className="flex items-center gap-2">
          <Image src={placeImg} alt="place" width={16} height={16} />
          {place}
        </p>
      </div>
      <ul className="list-disc list-inside pl-4">
        <p>{text}</p>
        {responsibilities.map((r, i) => (
          <li key={i} className="pl-4">
            {r}
          </li>
        ))}
      </ul>
      {showSeparator && <div className="separator"></div>}
    </div>
  );
}
