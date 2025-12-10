export interface ExperienceProps {
  jobTitle: string;
  employer: string;
  dateStart: string;
  dateEnd: string;
  place: string;
  text?: string;
  responsibilities: string[];
  showSeparator?: boolean;
}

export const experiences: ExperienceProps[] = [
  {
    jobTitle: "Software Test Developer",
    employer: "Forcom Sp. z o.o.",
    dateStart: "Dec 2023",
    dateEnd: "Current",
    place: "Remote(Poznań), Poland",
    text: "I contribute to the development and automation of cross-platform systems running on Windows, Android, and Linux. My work combines scripting, backend development, debugging, and close collaboration with software engineers.",
    responsibilities: [
      "Develop and extend test automation frameworks by implementing backend and automation scripts in JavaScript, Python, and TypeScript.",
      "Design and maintain backend test utilities and validation tools using Express.js and Flask.",
      "Build, execute, and maintain automated tests using Cypress, Appium, and TestComplete.",
      "Configure and maintain automated test environments for Point of Sale (POS), Self-Checkout (SCO), back-office, and front-office systems.",
      "Integrate and validate REST APIs used for cross-platform system communication.",
      "Validate SQL queries and ensure data integrity in PostgreSQL and Oracle databases.",
      "Analyze failed test executions, identify root causes, and collaborate with developers to resolve defects.",
      "Create test plans and test scenarios based on technical documentation and system requirements.",
    ],
  },
  {
    jobTitle: "Junior Software Developer - Internship",
    employer: "WIKA",
    dateStart: "July 2023",
    dateEnd: "Aug 2023",
    place: "Włocławek, Poland",
    text: "During internship, I contributed to the development of prototype embedded systems and strengthened my foundations in software engineering.",
    responsibilities: [
      "Designed an environmental data collection prototype using STM32L476x.",
      "Programmed communication stacks in C and Python using UART.",
      "Prepared architecture documentation and technical specifications for engineering review.",
    ],
    showSeparator: false,
  },
];
