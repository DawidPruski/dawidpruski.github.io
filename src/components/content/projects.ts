export interface ProjectProps {
  projectName: string;
  description: string;
  linkPreview?: string;
  linkRepo: string;
  tags: string[];
}

export const projects: ProjectProps[] = [
  {
    projectName: "Postman Lite",
    description:
      "Postman Lite is a lightweight HTTP request tool with both a React frontend and a Spring Boot backend. The frontend composes and sends requests; the backend proxies those requests, stores history, and provides authentication.",
    linkPreview: "https://postman-lite-eu7b.onrender.com",
    linkRepo: "https://github.com/DawidPruski/Postman_lite",
    tags: ["Java", "Spring Boot", "JWT", "React", "TypeScript", "MongoDB"],
  },
  {
    projectName: "Ad watcher",
    description:
      "The project utilizes Python for scripting and automating the process of watching ads for you. It uses Appium for Android automation, leveraging XPATH for navigation through ads and the app menu.",
    linkRepo: "https://github.com/DawidPruski/Backpack_Brawl_AD_Watcher",
    tags: ["Python", "Appium", "WebDriver", "Android Studio"],
  },
  {
    projectName: "Twitch video scraper",
    description:
      "Script allows scraping top 20 clips in selected category on Twitch website. Storing clips metadata - origin url, title, channel name in csv format.",
    linkRepo: "https://github.com/DawidPruski/Twitch-video-scraper",
    tags: ["Python", "Selenium WebDriver"],
  },
];
