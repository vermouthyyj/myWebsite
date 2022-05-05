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
  name: "Yujun (Rachel) Yan",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Solid academy background of algorithms and internet technology. \
    Great passion for programming and problem-solving. Fast learner and \
    open to exploring new technologies. Self-motivated, experimenting, and innovating developer. \
    Have test-driven development experience in an Agile Team.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    faClass: "fab fa-java",
  },
  {
    name: "Database",
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
];
// Edit your education experience
const section6Title = "Education";
const education = 
  {
    name1: "University of Melbourne",
    degree1: "Master of Software Engineering (with Distinctions)",
    name2: "University of Melbourne",
    degree2: "Bachelor of Science (Computing and Software Systems)",
}

// Edit your mcourses
const mcourses = [
  { course: "Masters Software Engineering Project" },
  { course: "Modelling Complex Software Systems" },
  { course: "High Integrity Systems Engineering" },
  { course: "Masters Advanced Software Project" },
  { course: "Advanced Database Systems"},
  { course: "Security & Software Testing"},
  { course: "Cryptography and Security" },
  { course: "Software Design and Architecture" },
  { course: "Introduction to Machine Learning" },
  { course: "AI Planning for Autonomy"}
]

// Edit your bcourses
const bcourses = [
  { course: "IT Project" },
  { course: "Models of Computation" },
  { course: "Computer Systems" },
  { course: "Artificial Intelligence" },
  { course: "Software Modelling and Design"},
  { course: "Object Oriented Software Development" },
  { course: "Algorithms and Data Structure" },
  { course: "Real Analysis" },
  { course: "Probability for Statistics"}
]

// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Family Artefact",
    skills: ["Vue.js, Node.js, Agile"],
    url: "https://github.com/wangz9/COMP30022-2019-PythoneProject",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Genyus Roundtable",
    skills: ["React.js, Firebase.js"],
    url: "https://github.com/chen-dudu/Genyus-Roundtable",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Snow360",
    skills: ["C#"],
    url: "https://www.youtube.com/watch?v=Fx_K3T4FdcU",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Industry Experience";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Front-end Developer",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Software Testing Engineer",
    // url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc3",
    name: "Student Ambassador",
    // url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Life could be better, but it's good",
  copyright: "Rachel Yan",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/yujun-rachel-yan-4b7010195/",
  instagram: "https://www.instagram.com/vermouthyyj/",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
  section6Title,
  education,
  mcourses,
  bcourses,
};
