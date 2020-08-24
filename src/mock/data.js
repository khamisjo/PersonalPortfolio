import {nanoid} from 'nanoid';

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
  paragraphTwo: "I'm Jonathan, a Computer Science student graduating UCLA this June. I have worked with "+
  'several languages and platforms so far including: C, C++, Python, HTML, CSS, JavaScript, Node.js, MongoDB, React, ReactNative, and MATLAB.'+
  'I am mainly interested in building Web Apps; however, I like learning about all aspects of computer software'+
  ' to incorperate new technologies into my apps. Recently, I have started learning about Computer Security and I am planning to '+
  'build a Google Chrome extension to discover websites vulnerabilities, so developpers can better secure their websites. Also, I am exploring '+
  'new Artificial Intelligence technologies such as Machine Learning and Deep Learning to incorporate a feature into my Eventify app that '+
  "suggests events based on the user's preferences"
  ,
  paragraphThree: ''+
  'Aside from programming, I like reading, playing the guitar, taking walks, working out, cooking, and trying new restaurants.'
  ,
  resume: 'https://www.dropbox.com/s/hbh7ujzel3unxni/Resume%20-.pdf?dl=0', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  
  
  
  {
    id: nanoid(),
    img: 'eventify.png',
    title: 'Eventify',
    info: 'Eventify is an iOS app that lets users post events and parties and check for upcoming ones based on their preferences.'
    +'It uses PosterMyWall API to provide users with flyers to facilitate creating one for their event or party. '+
    "There will a new feature that recommends events and parties based on each user's preferences. "+
    'This app aims to connect students more to the student organizations and Greek Life in UCLA'
    ,
    info2: 'Built In: ReactNative',
    url: 'https://github.com/khamisjo/Eventify.git',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'spaceinvaders.png',
    title: 'Space Invaders',
    info: 'This is a classic 2D Space Invaders game that I built with a team of 3 other students to learn and practice object oriented programming  ',
    info2: 'Built In: C++',
    url: 'https://github.com/khamisjo/SpaceInvaders.git',
    repo: '', // if no repo, the button will not show up
  },
  
  {
    id: nanoid(),
    img: 'comingsoon.jpg',
    title: 'Trojan Hunter',
    info: 'A Google Chrome extension that scans websites for vulnarabilies such as SQL Injections, XSS, and Security Misconfiguration',
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
