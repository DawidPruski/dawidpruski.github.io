import Image from "next/image";
import mugshot from "../assets/mugshot.jpg";

export default function About() {
  return (
    <>
      <h1 id="about" className="pt-4 text-2xl font-bold">
        About me
      </h1>
      <div className="grid grid-cols-[200px_1fr] gap-10">
        <Image className="size-52" style={{ borderRadius: "50%" }} src={mugshot} alt="Mugshot of Dawid" />
        <div className="item-2">
          <ul className="space-y-4">
            <p className="font-bold">Hi, I&apos;m Dawid</p>
            <li>
              I am a motivated and hardworking person who takes responsibilities seriously and is always on time. I am
              focused on growing both professionally and personally.
            </li>
            <li>
              With a good background in programming and practical experience from different projects, I’ve built strong
              technical skills that help me work on useful and creative solutions.
            </li>
            <li>
              I enjoy working with others and believe that good teamwork leads to better results. I’m confident that my
              education and hands-on experience prepare me well for solving difficult problems and making a positive
              impact at work.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
