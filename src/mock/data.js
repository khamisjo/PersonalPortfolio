import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jonathan Khamis', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'A Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Jonathan Khamis',
  subtitle: 'I am a software engineering student',
  cta: 'Get to know me ?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hey!',
  paragraphTwo:
    "I'm Jonathan, a Computer Science student graduating UCLA this March. I have worked with " +
    'several languages and platforms so far including: C, C++, Python, HTML, CSS, JavaScript, TypeScript, Node.js, MongoDB, React, ReactNative, GraphQL, Firebase and MATLAB.' +
    'I am mainly interested in building Web Apps; however, I like learning other aspects of computer science such as Computer Security and Machine Learning' +
    ' to incorperate new technologies into my apps. ',
  paragraphThree:
    '' +
    'To tell you a bit about my non-technical side, I am 25 years old ,and I moved to the US when I was 18. Although I spent longer than average time in college because of my circumstances, I believe I have learned valuable skills other than my school education.I like reading psychology and history books; psychology because I believe in the power of human mind and how important to learn how to leverage such a powerful tool, history because learning about the past helps us to understand the present and improve the accuray of our future predictions. I also like to workout, play the guitar, cook and learn new food recipes, and spend time with family and friends.',
  resume: 'https://www.dropbox.com/s/5pd6npfa7wcre59/Resume%20-Jonathan%20Khamis.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'eventify.png',
    title: 'Eventify (mobile)',
    info:
      'Eventify is an iOS app that lets users post events and parties and check for upcoming ones based on their preferences.' +
      'It uses a third party API called PosterMyWall to provide users with flyers to facilitate creating one for their event or party. ' +
      'This app aims to connect students more to the student organizations and Greek Life in UCLA',
    info2: 'Built In: ReactNative',
    url: 'https://github.com/khamisjo/Eventify.git',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'eventify.png',
    title: 'Eventify (web)',
    info:
      'This is the web version of Eventify, and it is built for a class project to explore different scalability techniques.' +
      'In this project, I was exposed to topics such as concurrency, caching, load balancing, and obserbility',
    info2: 'Built In: React, TypeScript, GraphQL, MySQL, Docker',
    url: 'https://github.com/scalableinternetservices/pdjd',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'chicken-tinder.png',
    title: 'Chicken Tinder',
    info:
      'Chicken Tinder is an interactive web app that helps friends who cannot decide on a restaurant to finally find a match everybody agrees on. Inspired by Tinder’s design to find date matches, Chicken Tinder also lets users swipe left and right on restaurants instead of potential dates until they find a matched restaurant.',
    info2: 'Built In: React, Node.js, Firebase, Yelp API  ',
    url: 'https://github.com/sdulaney/UCLA-CS-130-Group4',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spaceinvaders.png',
    title: 'Space Invaders',
    info:
      'This is a classic 2D Space Invaders game that I built with a team of 3 other students to learn and practice object oriented programming  ',
    info2: 'Built In: C++',
    url: 'https://github.com/khamisjo/SpaceInvaders.git',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'comingsoon.jpg',
    title: 'Trojan Hunter',
    info:
      'A Google Chrome extension that scans websites for vulnarabilies such as SQL Injections, XSS, and Security Misconfiguration',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please reach out !',
  btn: 'Email',
  email: 'jonathan.khamis95@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jonathan-khamis/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/khamisjo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, //set to false to disable the GitHub stars/fork buttons
};
