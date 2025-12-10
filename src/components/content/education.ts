export interface EducationProps {
  degree: string;
  university: string;
  dateStart: string;
  dateEnd: string;
  thesisTitle: string;
  summary: string;
  showSeparator?: boolean;
}

export const education = [
  {
    degree: "Master of Science - Mechatronics",
    university: "Bydgoszcz University of Science and Technology",
    dateStart: "Feb 2022",
    dateEnd: "July 2023",
    thesisTitle: "“Project of a winch module for kinetic lighting”",
    summary:
      "Developed and simulated a kinetic lighting winch system using MATLAB and Simulink, focusing on the mechanical behavior of a winch module. The work explored system stability, phase margins, and mechanical parameter optimization. It also covered synchronization methods and network topologies for multi-device coordination, concluding with analysis using Bode diagrams to validate system performance.",
  },
  {
    degree: "Bachelor of Science - Mechatronics",
    university: "Bydgoszcz University of Science and Technology",
    dateStart: "Sept 2018",
    dateEnd: "Feb 2022",
    thesisTitle: "“Building a LightPaint type show drone”",
    summary:
      "Designed and built a prototype LightPaint drone capable of performing aerial light-painting missions. The project involved selecting components, integrating electrical, mechanical, and software systems, and implementing wireless lamp control via LoRa modules. Covered both theoretical analysis and practical development, including system design, construction, and testing.",
    showSeparator: false,
  },
];
