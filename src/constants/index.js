import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    starbucks,
    tesla,
    shopify,
    gdsc,
    carrent,
    jobit,
    tripguide,
    password,
    portfolio,
    gym,
    management,
    ecommerce
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About Me",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Connect",
    },
  ];
  
  export const services = [
    {
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DSA / Logic Building",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      id: 1,
      name: "HTML 5",
      icon: html,
    },
    {
      id: 2,
      name: "CSS 3",
      icon: css,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: javascript,
    },
    {
      id: 4,
      name: "React JS",
      icon: reactjs,
    },
    {
      id: 5,
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      id: 6,
      name: "Material UI",
      icon: tailwind,
    },
    {
      id: 7,
      name: "Node JS",
      icon: nodejs,
    },
    {
      id: 8,
      name: "MongoDB",
      icon: mongodb,
    },
    {
      id: 9,
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Web Development Mentor",
      company_name: "GDSC SBJIT",
      icon: gdsc,
      iconBg: "#383E56",
      date: "20 Aug 2023 - Present",
    },
    {
      title: "Full Stack Developer",
      company_name: "Tech Vegan",
      icon: shopify,
      iconBg: "#383E56",
      date: "1 July 2023 - 1 August 2023",
    },
    {
      title: "Full Stack Web Developer",
      company_name: "Bharat Intern",
      icon: starbucks,
      iconBg: "#383E56",
      date: "10 July 2023 - 10 August 2023",
    },
  ];
  
  const projects = [
    // 1
    {
      name: "Ecommerce Website",
      description:
        "This is 'Integrated Ecommerce and Warehouse Management System' in this end-end working like real world ecommerce website which contain cart, deleted items, adding items, ordering,etc. ",
      tags: [
        {
          name: "Full-Stack Application",
          color: "color",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/harshalhonde21/EcommerceSpectastyle",
      demo_link:"https://spectastyle.vercel.app",
    },
    {
      name: "Blog Website",
      description:
        "In this Web Application your can manually add blogs, delete it see all over world peoples blogs you can add your blogs to see to the other. This is My Mern Stack Project to show my backend Skills",
      tags: [
        {
          name: "Full-Stack Application",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/harshalhonde21/Blog_Website",
      demo_link:"https://blogminds.netlify.app",
    },
    // 2
    {
      name: "Credit Based Management System",
      description:
        "This Application is generally made for real world problem for the local shop venders who face the problems from those people who take borrow and not gives back by this project shopkeeper saves all records of the buyers.",
      tags: [
        {
          name: "Full Stack Application",
          color: "aqua",
        },
      ],
      image: management,
      source_code_link: "https://github.com/harshalhonde21/apnidukan",
      demo_link:"https://apniiidukan.netlify.app",
    },
    //3
    {
      name: "Video Conferencing Application",
      description:
        "This is Application where you can make video calls with other person freely available you can use it. All the features are included which are there in Apps",
      tags: [
        {
          name: "Full Stack Application",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/harshalhonde21/video_conference",
      demo_link:"https://videore.netlify.app",
    },
    // 4
    {
      name: "ToDo Application",
      description:
        "In Todo Application you can store your Important notes you can delete or edit it any time and your information will stores in your localStorage so it is very secure.<br>you can check it in github and live also ",
      tags: [
        {
          name: "Front-End Application",
          color: "color",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/harshalhonde21/NotePad.github.io",
      demo_link:"https://harshalhonde.netlify.app/notepad.html",
    },
    // 5
    {
      name: "Password Generator Application",
      description:
        "In Password Generator Application you can generate your password which is very stronger and powerfull It is made by plane HTMl, CSS, JAVASCRIPT",
      tags: [
        {
          name: "Front-End Application",
          color: "aqua",
        },
        
      ],
      image: password,
      source_code_link: "https://github.com/harshalhonde21/passwordgenrator",
      demo_link:"https://harshalhonde.netlify.app/password.html",
    },
    // 6
    {
      name: "My Past PortFolio",
      description:
        "This is My past Portfolio which I was maked in starting of my first year In this Portfolio I have metioned my whole details and after learning advanced React and Backend I Developed this.",
      tags: [
        {
          name: "Front-End Application",
          color: "violet",
        },
        
      ],
      image: portfolio,
      source_code_link: "https://github.com/harshalhonde21/PortFolio",
      demo_link:"https://harshalhonde.netlify.app",
    },
  ];
  
  export {technologies, experiences, projects };