import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-6">
        <pre className="text-xs">
          {`
██████╗  █████╗ ██╗    ██╗██╗██████╗ 
██╔══██╗██╔══██╗██║    ██║██║██╔══██╗
██║  ██║███████║██║ █╗ ██║██║██║  ██║
██║  ██║██╔══██║██║███╗██║██║██║  ██║
██████╔╝██║  ██║╚███╔███╔╝██║██████╔╝
╚═════╝ ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═════╝ 
                                     `}
        </pre>
        <pre className="text-xs">
          {`
██████╗ ██████╗ ██╗   ██╗███████╗██╗  ██╗██╗
██╔══██╗██╔══██╗██║   ██║██╔════╝██║ ██╔╝██║
██████╔╝██████╔╝██║   ██║███████╗█████╔╝ ██║
██╔═══╝ ██╔══██╗██║   ██║╚════██║██╔═██╗ ██║
██║     ██║  ██║╚██████╔╝███████║██║  ██╗██║
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝
                                            `}
        </pre>
      </div>
      <Navigation />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
