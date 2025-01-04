import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "QA stress tester and js Developer",
    company_name: "Galil software",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2011 - April 2013",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "php and codeigniter developer",
    company_name: "ahlannet",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2013 - Feb 2014",
    points: [
      "Developing and maintaining web applications using php and codeigniter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#b7e4c7",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
  // {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Background remover",
    description:
      "Developed a web application that remove background image or color form any image you upload using AI API called bgremover API.",
    link: "https://github.com/samertaha/maraton-april",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      "I developed this app in 1 full day, i encountered some difficulties like variable scopes and sunch things also i solved many bugs and learned a lot while doing it. this app is a COVID 19 statistics app that show you all covid stats in each continent of the world also give you detailed view of specific country you can chose after chosing the continent first.",
    link: "https://github.com/samertaha/covid19-tracker-app",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Promptia",
    description:
      "Designed and built a social app for sharing usefull propts good for use in AI chat services like chatgpt...",
    link: "https://github.com/samertaha/promptopia",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Real Time chat app",
    description:
      "a full stack realtime chat app built with NextJS used Upstash Redis as a database, React for the user interface, and code in TypeScript.a super-performant realtime chat app deployed to the web, ready to be used by actual users.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "socketio realtime chat app for practicing realtime messaging",
    description:
      "Developed a web application for real time chat and messaging, i studied very well using socket.io library for implementing web socket features.",
    link: "https://socket-io-chat-app-ifds.onrender.com/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "created virual portfolio mern stack based app",
    description:
      "App that leverages mern stack features on the backend and frontend.",
    link: "https://portfolio-zmt5.onrender.com/",
  },
];
