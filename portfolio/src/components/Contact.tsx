import Image from "next/image";
import linkedin from "@/assets/linkedin_w.png";
import github from "@/assets/github_w.png";
import email from "@/assets/email_w.png";

export default function Contact() {
  return (
    <>
      <h1 id="contact">Contact</h1>
      <div className="flex justify-center gap-14">
        <a href="https://www.linkedin.com/in/dawid-pruski/">
          <Image src={linkedin} alt="linkedIn" width={50} height={50} />
        </a>
        <a href="https://github.com/DawidPruski">
          <Image src={github} alt="github" width={50} height={50} />
        </a>
        <a href="dpruski0@gmail.com">
          <Image src={email} alt="email" width={50} height={50} />
        </a>
      </div>
    </>
  );
}
