import Image from "next/image";
import mugshot from "@/assets/mugshot.jpg";

export default function About() {
  return (
    <>
      <h1 id="about">About me</h1>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 ml-2 items-center">
        <Image src={mugshot} className="w-52 h-52 rounded-full object-cover" alt="mugshot" />
        <ul className="space-y-4">
          <li className="font-bold">Hi, I'm Dawid!</li>
          <li>
            Dynamic and adaptable developer with a strong interest in scripting, learning new technologies, and applying
            them to solve practical problems.
          </li>
          <li>
            My background in Mechatronics gives me a strong analytical foundation, while my current role strengthens my
            practical software engineering skills across backend, scripting, and cross-platform systems.
          </li>
          <li>
            In my work, I strive to utilize my skill set and tech stack to its full potential, sharing my expertise and
            knowledge to deliver innovative solutions. Now, I’m seeking opportunities for further career growth.
          </li>
        </ul>
      </div>
    </>
  );
}
