"use client";

export default function Navigation() {
  const scrollToId = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="flex flex-wrap justify-center gap-14 whitespace-nowrap font-semibold">
        <a
          href="#about"
          onClick={() => {
            scrollToId("about");
          }}
        >
          {"> About"}
        </a>
        <a
          href="#experience"
          onClick={() => {
            scrollToId("experience");
          }}
        >
          {"> Experience"}
        </a>
        <a
          href="#projects"
          onClick={() => {
            scrollToId("projects");
          }}
        >
          {"> Projects"}
        </a>
        <a
          href="#education"
          onClick={() => {
            scrollToId("education");
          }}
        >
          {"> Education"}
        </a>
        <a
          href="#contact"
          onClick={() => {
            scrollToId("contact");
          }}
        >
          {"> Contact"}
        </a>
      </nav>
    </>
  );
}
