import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <About />
      <h1 id="experience">Experience</h1>
      <Experience
        jobTitle="Software Test Developer"
        employer="Forcom Sp. z o.o."
        dateStart="Dec 2023"
        dateEnd="Current"
        place="Remote(Poznań), Poland"
        text="I contribute to the development and automation of cross-platform systems running on Windows, Android, and Linux. My work combines scripting, backend development, debugging, and close collaboration with software engineers."
        responsibilities={[
          "Develop and extend test automation frameworks by implementing backend and automation scripts in JavaScript, Python, and TypeScript.",
          "Design and maintain backend test utilities and validation tools using Express.js and Flask.",
          "Build, execute, and maintain automated tests using Cypress, Appium, and TestComplete.",
          "Configure and maintain automated test environments for Point of Sale (POS), Self-Checkout (SCO), back-office, and front-office systems.",
          "Integrate and validate REST APIs used for cross-platform system communication.",
          "Validate SQL queries and ensure data integrity in PostgreSQL and Oracle databases.",
          "Analyze failed test executions, identify root causes, and collaborate with developers to resolve defects.",
          "Create test plans and test scenarios based on technical documentation and system requirements.",
        ]}
      />
      <div className="separator"></div>
      <Experience
        jobTitle="Junior Software Developer - Internship"
        employer="WIKA"
        dateStart="July 2023"
        dateEnd="Aug 2023"
        place="Włocławek, Poland"
        text="During internship, I contributed to the development of prototype embedded systems and strengthened my foundations in software engineering."
        responsibilities={[
          "Designed an environmental data collection prototype using STM32L476x.",
          "Programmed communication stacks in C and Python using UART.",
          "Prepared architecture documentation and technical specifications for engineering review.",
        ]}
      />
      <h1 id="education">Education</h1>
      <Education
        degree="Master of Science - Mechatronics"
        university="Bydgoszcz University of Science and Technology"
        dateStart="Feb 2022"
        dateEnd="July 2023"
        thesisTitle="“Project of a winch module for kinetic lighting”"
        summary="Developed and simulated a kinetic lighting winch system using MATLAB and
              Simulink, focusing on the mechanical behavior of a winch module. The work explored system stability, phase
              margins, and mechanical parameter optimization. It also covered synchronization methods and network
              topologies for multi-device coordination, concluding with analysis using Bode diagrams to validate system
              performance."
      />
      <div className="separator"></div>
      <Education
        degree="Bachelor of Science - Mechatronics"
        university="Bydgoszcz University of Science and Technology"
        dateStart="Sept 2018"
        dateEnd="Feb 2022"
        thesisTitle="“Building a LightPaint type show drone”"
        summary="Designed and built a prototype LightPaint drone capable of performing aerial
              light-painting missions. The project involved selecting components, integrating electrical, mechanical,
              and software systems, and implementing wireless lamp control via LoRa modules. Covered both theoretical
              analysis and practical development, including system design, construction, and testing."
      />
      <Contact />
    </>
  );
}
