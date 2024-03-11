import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Jayabharanivelu V M",
  title: "Hi all, I'm JayaBharanivelu",
  description:
    "I'm a passionate Java developer with expertise in Java development, backend development, and machine learning. I have a strong foundation in Full Stack web development and hands-on experience with Java technologies. My skills include building robust and scalable web applications using Java, as well as proficiency in backend development. Additionally, I possess a decent amount of knowledge in basic frontend development, working with HTML, CSS, and utilizing Figma for designing.",
  resumeLink: "https://amaranth-sabrina-53.tiiny.site",
};

export const openSource = {
  githubUserName: "Bharani2509",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "bharanivelu.offl@gmail.com",
  linkedin: "https://linkedin.com/in/jayabharanivelu",
  github: "https://github.com/Bharani2509",
  instagram: "https://www.instagram.com/bharani_vel",
  // leetode: "https://leetcode.com/user7561cr/",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY JAVA DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Java Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive logical codes at the backend"),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "HTML",
          iconifyTag: "logos:html-5",
        },
        {
          skillName: "CSS",
          iconifyTag: "logos:css-3", 
        },
        {
          skillName: "Figma",
          iconifyTag: "logos:figma",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql", // Update this line with the correct Iconify tag for MySQL
        },
        // {
        //   skillName: "Microsoft Power Apps",
        //   iconifyTag: "simple-icons:microsoftpowerapps", 
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Java", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend/Database Connectivity/Database/Request",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
  {
    Stack: "FrontEnd", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Rajalakshmi Engineering College",
    subHeader: "Bachelor of Education in Computer Science",
    duration: "July 2020 - Present",
    desc: "",
    CGPA: "8.34",
    Marks: ""
    // descBullets: [], // Array of Strings
  },
  {
    schoolName: "Prince Matriculation Higher Secondary School",
    subHeader: "HSC Computer Science",
    duration: "June 2019 - March 2020",
    desc: "",
    CGPA:"",
    Marks: "78.82%",
    // grade: "Grade A",
    // descBullets: [], // Array of Strings
  },
  {
    schoolName: "Prince Matriculation Higher Secondary School",
    subHeader: "SSLC",
    duration: "June 2017 - March 2018",
    desc: "",
    CGPA:"",
    Marks: "92.2%",
    // grade: "Grade A",
    // descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Frontend Developer",
    company: "Ardens Buisness Solution",
    companyLogo: "/img/icons/common/ABS.jpeg",
    date: "Dec 2021 - Jan 20222",
    desc: "As a Frontend Developer at Ardens Business Solutions, a Human Resource Management Software (HRMS) company, I gained valuable insights into the intricacies of designing and developing HRMS software solutions. My focus was on crafting robust and user-friendly frontend applications using various JavaScript frameworks, including React and Angular. \n During my tenure, I actively participated in the development of a website hosted locally, showcasing my proficiency in frontend technologies. One notable achievement was the creation of a dynamic feature within the website. This feature allowed users to input a student's name and designation, triggering the automatic generation of an internship letter.",
  },
  {
    role: "Data Analyst",
    company: "Zigma  Infotech Pvt Ltd.",
    companyLogo: "/img/icons/common/Zigma.avif",
    date: "June 2021 - July 2021",
    desc: "As a Data Analyst Intern at Zigma, I played a pivotal role in extracting meaningful insights from complex datasets, contributing to data-driven decision-making processes. I gained hands-on experience in analyzing and interpreting data, employing statistical methods, and utilizing tools such as Google Collab and Anaconda Virtual Enviroinment. During my internship, I collaborated with cross-functional teams to identify key trends, patterns, and areas for improvement, providing valuable insights for business strategies. I actively participated in data cleaning, preprocessing, and visualization, ensuring data integrity and clarity in reporting",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/Bharani2509/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Used Car Price Predictor using  Machine Learning",
    desc: "In the Used Car Price Predictor project, I developed a machine learning model to predict the prices of used cars based on various features. The goal was to provide users with an accurate estimate of a car's market value, leveraging historical data to make informed predictions. The dataset used for training and testing the model was sourced from Quikr, a popular online marketplace for buying and selling used goods, including automobiles.",
    github: "https://github.com/Bharani2509/developer-portfolio",
    // link: "https://gibeo.io/",
  },
  {
    name: "Gas Leakage and monitoring system using IoT",
    desc: "The Gas Leakage and Monitoring System is an innovative application of Internet of Things (IoT) technology designed to enhance safety and prevent potential hazards associated with gas leaks. This system integrates smart sensors, communication devices, and a centralized monitoring platform to enable real-time detection and response to gas leaks in various environments.",
    github: "https://github.com/Bharani2509/developer-portfolio",
    // link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "REC Telegram Bot",
    desc: "The Telegram Bot designed for our college is a user-friendly and secure solution that simplifies the process of accessing academic information. By seamlessly integrating with Telegram, students can effortlessly retrieve their marks and attendance reports by entering their roll numbers. The bot employs robust user authentication to ensure data security, and its backend fetches real-time data from the college's academic database, presenting information in a clear and comprehensible format. With an interactive interface, the bot not only provides timely notifications for important announcements but also allows students to offer feedback, contributing to continuous improvement. This streamlined approach enhances accessibility, transparency, and overall user experience within the college community.",
    // link: "https://hooliganculture.com/",
  },
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Jayabharanivelu V M",
  description: greetings.description,
  author: "Jayabharanivelu V M",
  image: "",
  url: "",
  keywords: [
    "Bharani",
    "Jayabharanivelu",
    "@bharani_vel",
    "Bharani2509",
    "Portfolio",
    "Bharani Portfolio ",
    "Bharanivel Portfolio",
  ],
};
