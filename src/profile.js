import resumesrc from './assets/CV_of_Yujun_Yan.pdf'
// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Rachel Yan",
};
const background = {
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am self-motivated, experimenting, and innovating. I have a great passion for programming and problem-solving. As a faster learner, I am open to exploring new technologies such as algorithms, internet technology, and software development. Meanwhile, I am a snowboarding and longboarding lover! ",
};

const languageBar = [
  { type: "React", level: 85  },
  { type: "Javascript", level: 75 },
  { type: "HTML", level: 65 },
  { type: "CSS", level: 65 },
  { type: "Webpack", level: 50 },
  { type: "MySQL", level: 30}
]
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Education Design",
    skills: ["React, Node.js, Firebase"],
    url: "https://thinkplus.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Genyus Roundtable",
    skills: ["React, Node.js, Firebase"],
    url: "https://bitbucket.cis.unimelb.edu.au:8445/users/yujuny/repos/swen90014-2020-ws-echidna/browse",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Vaccine Booking System",
    skills: ["React, Java, MySQL"],
    url: "https://github.com/SWEN900072021/pythrone",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Family Artifacts Register",
    skills: ["Vue, Node.js, MySQL"],
    url: "https://www.youtube.com/watch?v=-Kv6vHubhAQ",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "AZUL Game",
    skills: ["Monte Carlo Tree Search, Minimax, BFS"],
    url: "https://www.youtube.com/watch?v=5LjkuBAmJrw",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Snow 360",
    skills: ["Unity, C#"],
    url: "https://m.youtube.com/watch?v=Fx_K3T4FdcU",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Experience";
const education = [
  {
    uni: "The University of Melbourne",
    time: "2020.03-2022.01",
    major: "Master of Software Engineering (with Distinction)",
  },
  {
    uni: "The University of Melbourne",
    time: "2018.02-2019.12",
    major: "Bachelor of Science",
  }
];
const industry = [
  {
    company: "Boshantech",
    time: "Melbourne | 2020.12-2021.03",
    position: "Front-end Developer Intern"
  },
  {
    company: "Xiaomi",
    time: "Beijing | 2018.12-2019.03",
    position: "Software Testing Engineer Intern"
  }
]
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Life could be better, but it's good",
  copyright: "Yujun Yan",
  contactUrl: "https://formspree.io/f/xyyolnwj",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/vermouthyyj",
  // facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  // instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/yujun-rachel-yan-4b7010195/",
  resume: resumesrc,
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  education,
  industry,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  languageBar,
};
