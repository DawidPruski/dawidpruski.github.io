import Image from "next/image";
import calendarImg from "../assets/calendar.png";
import placeImg from "../assets/place.png";

type ExperienceProps = {
  jobTitle: string;
  employer: string;
  dateStart: string;
  dateEnd: string;
  place: string;
  text?: string;
  responsibilities: string[];
};

export default function Experience({
  jobTitle,
  employer,
  dateStart,
  dateEnd,
  place,
  responsibilities,
}: ExperienceProps) {
  return (
    <>
      <div className="ml-2">
        <h3 className="mb-0 font-bold">{jobTitle}</h3>
        <p className="m-0.5 ml-0 text-sm">{employer}</p>
        <div className="flex justify-between text-sm mb-4">
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
          {responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
