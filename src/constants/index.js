import project1 from "../assets/projects/bridalscreenshot.png";
import project2 from "../assets/projects/wedding.png";
import project3 from "../assets/projects/elearn.png";
import project4 from "../assets/projects/user1.png";
import project5 from "../assets/projects/ecom.png";
import project6 from "../assets/projects/pixalive1.png";
import project7 from "../assets/projects/pixalive2.png";
import project8 from "../assets/projects/pixalive3.png";
import project9 from "../assets/projects/portfolio.png";

export const HERO1_CONTENT = `I am a Web Developer, Designer and Content Creator. I have rich experience in Frontend and Backend Development.`;

export const HERO_CONTENT = `As a front-end developer with nearly 2.6 years of experience, I specialize in creating dynamic user interfaces using React.js. I 
have extensive experience integrating front-end components with back-end services through RESTful operations (GET, POST, 
UPDATE, DELETE). I am adept at crafting seamless, responsive, and user-friendly web applications, with a strong focus on 
problem-solving and delivering high-quality, maintainable code. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With nearly 2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

const status = [
  { label: "1+ Year's", description: "Experience" },
  { label: "2 Projects +", description: "Completed" },
  { label: "AWS, React-Native", description: "Learning" }
];

export const EXPERIENCES = [
  {
    year: "July2024 - Present",
    role: "ReactJS Developer",
    company: "Pixalive Technology Service Private limited at Bangalore",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React.js", "Tailwind", "Bootstrap", "ReduxToolKit", "Axios"]
  },
  {
    year: "Feb 2023 - July 2024",
    role: "Frontend Developer",
    company: "TripAlive.me Technology private limited Bangalore",
    description: `Designed and developed user interfaces for web applications using  React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Tailwind", "Bootstrap", "ReduxToolKit", "Axios"]
  }
];

export const EDUCATION = [
  {
    year: "2019 - 2021",
    Graduate: "Post-Graduate - MBA",
    University: "Director of Distance Education Pondicherry University "
  },
  {
    year: "2014 - 2018",
    Graduate: "Under-Graduate - BTECH",
    University: "Manakula vinayagar insitute of Technology "
  },
  {
    year: "2013 - 2014",
    Graduate: "High Secondary School ",
    University: "Alpha Matric Higher sec school "
  },
  {
    year: "2011 - 2012",
    Graduate: "SSLC ",
    University: "Sri Sanakar Vidyalaya Matriculation Higher Sec school"
  }
];

export const PROJECTS = [
  {
    title: "Bridal Studio UniSex Saloon & Spa",
    image: project1,
   
    technologies: ["HTML", "CSS", "ReactJS", "Tailwindcss"],
    link: "https://www.lafusionbridal.com/"
  },
  {
    title: "Wedding PhotoShop Studio",
    image: project2,
   
    technologies: ["HTML", "CSS", "Reactjs", "TailwindCss"],
    link: "https://wedding-photography-chennai.netlify.app/"
  },
  {
    title: "Personal Portfolio",
    image: project9,
   
    technologies: ["ReactJS", "TailwindCss"],
    link: "https://sudhagarportfolio.vercel.app/"
  },
  {
    title: "Pixalive Tech Offical Website",
    image: project6,
    description:
      "Pixalive is pioneering live streaming and digital innovation for the future of business.",
    technologies: ["ReactJS", "TailwindCss", "Nodejs", "ExpressJs", "MongoDB"],
    link: "https://app.pixalivetech.com/"
  },
  {
    title: "Pixalive -CoWorks",
    image: project7,
    description:
      "Whether you're a freelancer, a startup, or a remote team, we've built the perfect workspace around you. Modern desks, fast internet, and ready-to-use laptops.",
    technologies: ["ReactJS", "TailwindCss", "Nodejs", "ExpressJs", "MongoDB"],
    link: "https://www.co-works.pixalivetech.com/"
  },
  {
    title: "Pixalive Gold Network",
    image: project8,
    description: "Secure Your Future with India’s First Social Gold Network.",
    technologies: ["ReactJS", "TailwindCss", "Nodejs", "ExpressJs", "MongoDB"],
    link: "https://gold.pixalivenetwork.com/"
  },
  {
    title: "Ecommerce App Platform",
    image: project5,
   
    technologies: [
      "ReactJS",
      "TailwindCss",
      "ContextApi",
      "Nodejs",
      "ExpressJs",
      "MongoDB"
    ],
    link: "https://ecom2project.netlify.app/"
  },
  {
    title: "E-learning Website Static",
    image: project3,
    
    technologies: ["HTML", "CSS", "React", "TailwindCss"],
    link: "https://sudhagar-elearning-platform.netlify.app/"
  },
  {
    title: "User Management - CRUD",
    image: project4,
   
    technologies: ["ReactJS", "TailwindCss", "ReduxToolkit", "JsonServer"],
    link: "https://reduxtoolkit-series.vercel.app/"
  }
];

export const CONTACT = {
  Location: "Bangalore, ElectroniCity Phase2",
  phoneNo: "9943863916 ",
  email: "sudhagarmsr712@gmail.com"
};
