import {
  backend,
  chanuka_akash,
  courtney,
  codiceTech,
  creator,
  csharp,
  css,
  dcp_mobile_apps,
  fidenz,
  fiver,
  flutter,
  git,
  html,
  javascript,
  kavindu_ravishan,
  mobile,
  mobile_notekeeper,
  mobios,
  mongodb,
  nic_decorder,
  nodejs,
  playstore,
  reactjs,
  redux,
  status_q,
  tailwind,
  threejs,
  typescript,
  wallart_gallery,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "csharp",
    icon: csharp,
  },
];

const experiences = [
  {
    title: "Software Engineer (Remote)",
    company_name: "CODICE",
    icon: codiceTech,
    iconBg: "#fff",
    date: "July 2024 - Present",
    points: [
      "Developing user friendly web application using React Js with TypeScript based on the client's requirements.",
      "Developing fast and secure backend web applications using .Net and Node Js based on Micro Services Architecture.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer (Remote)",
    company_name: "Courtney Lanka (Private) Limited",
    icon: courtney,
    iconBg: "#000000",
    date: "May 2024 - July 2024",
    points: [
      "Developing web applications from arcitectural design to complete web applications.",
      "Developing web applications using React Js, Next Js, TypeScript and Tailwind CSS.",
    ],
  },
  {
    title: "Contract Trainee Software Engineer",
    company_name: "Fidenz Technologies",
    icon: fidenz,
    iconBg: "#ffffff",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Develop mobile application using Flutter.",
      "Developing backend Three Tiar Architectured web applications using .Net Core (MVC) framework",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Fiveer | Upwork | Truelancer",
    icon: fiver,
    iconBg: "#383E56",
    date: "Oct 2018 - Present",
    points: [
      "Developing web applications using React.js, TypeScript, authentication and authorization with Auth0",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Node.js and SpringBoot backend application development with REST API implementations.",
      "Developing mobile applications using React Native.",
    ],
  },
  {
    title: "Mobile App Developer and Publisher",
    company_name: "Play Store",
    icon: playstore,
    iconBg: "#E6DEDD",
    date: "Aprill 2021 - Present",
    points: [
      "Developing and maintaining native mobile applications using Java, Android and other related technologies.",
      "Developing and maintaining cross-platform mobile applications using Flutter and React Native.",
      "Mobile Game Development using Unity.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "mobiOs Private Limited",
    icon: mobios,
    iconBg: "#383E56",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Web application frontend development using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dinindu and the team did a great job on one of my Flutter development projects. They delivered on time and on budget. I will definitely like to work with them again.",
    name: "Kavindu Ravishan",
    designation: "Founder",
    company: "Buccie",
    image: kavindu_ravishan,
  },
  {
    testimonial:
      "A mentor as well as a friend who helped me and encouraged my academic success in IT. Thank you for your expertise and support.",
    name: "Chanuka Akash",
    designation: "Undergraduate",
    company: "UoK",
    image: chanuka_akash,
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "StatusQ",
    description:
      "Web-based platform that allows users to run social media advertisement campaigns and earn money by participationg others advertisement campaigns.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: status_q,
    source_code_link: "https://github.com/DininduChamikara/StatusQ-FE-latest",
  },
  {
    name: "Mobile NoteKeeper App",
    description:
      "A mobile application that can manage all your notes with the capabilities of basic CRUD for notes as well.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    image: mobile_notekeeper,
    source_code_link: "https://github.com/DininduChamikara/NoteKeeper-App",
  },
  {
    name: "DCP mobile Apps website",
    description:
      "Static website for DCP mobile Apps with the capability of getting user responses through emails.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dcp_mobile_apps,
    source_code_link:
      "https://github.com/DininduChamikara/dcp-mobile-apps-official",
  },
  {
    name: "Sri Lanka NIC Decoder",
    description:
      "A mobile application that can find hidden NIC information using NIC number.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    image: nic_decorder,
    source_code_link:
      "https://github.com/DininduChamikara/Sri-Lanka-Nic-Decorder",
  },
  {
    name: "WallArt Gallery",
    description:
      "A mobile application which is providing you various kinds of attractive wallpapers for your mobile screen.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
    ],
    image: wallart_gallery,
    source_code_link: "https://github.com/DininduChamikara/WallArtGallery",
  },
];

export { experiences, projects, services, technologies, testimonials };
