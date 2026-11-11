import studyTracker from "../assets/StudyTracker.png";
import profileImg from "../assets/logo.png";
import LinkUpPic from "../assets/LinkUp.png";
import salonImg from "../assets/AandB.png";

const projects = [
  {
    id: 8,
    name: "A&B Salon and Academy",
    type: "Real-world Client Project",
    description:
      "A full-stack salon management system developed for a real-world client. Includes billing, invoices, customer management, memberships, inventory, staff management, services, and business analytics.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Tailwind CSS",
      "JavaScript",
    ],
    lessons: [
      "Building software for real-world business requirements",
      "Developing billing and invoice management systems",
      "Database design and business data modeling",
      "Authentication and role-based access",
      "Inventory and membership management",
      "Deploying full-stack applications",
      "Working with real clients and translating requirements into features",
    ],
    img: salonImg,
    link: "https://aand-b-salon-and-academy.vercel.app/",
  },
  {
    id: 7,
    name: "Study Tracker",
    description:
      "A full-stack study and productivity tracking application designed to help users organize tasks, monitor progress, and manage their study activities.",
    tech: [
      "React 19",
      "Node.js",
      "Express.js 5",
      "MongoDB",
      "JWT",
      "TanStack Query",
      "Axios",
      "Tailwind CSS 4",
      "Recharts",
    ],
    lessons: [
      "Building full-stack applications with modern React",
      "JWT authentication using HTTP-only cookies",
      "Server-state management with TanStack Query",
      "REST API architecture",
      "Data visualization with Recharts",
      "Frontend-backend integration",
      "Building maintainable application architecture",
    ],
    img: studyTracker,
    link: "https://github.com/indtekina2/Study-Tracker",
  },
  {
    id: 6,
    name: "LinkUp",
    description:
      "A full-stack real-time messaging application with secure authentication, instant messaging, and group conversations.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    lessons: [
      "JWT authentication and protected routes",
      "Real-time communication with Socket.IO",
      "MongoDB schema design and data modeling",
      "REST API development with Express.js",
      "State management in React",
      "Building scalable full-stack applications",
    ],
    img: LinkUpPic,
    link: "https://link-up-indtekina.vercel.app/home",
  },
  {
    id: 5,
    name: "Portfolio Website",
    description:
      "A personal developer portfolio showcasing my projects, technical skills, experience, and development journey.",
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "React Router",
    ],
    lessons: [
      "Responsive web design",
      "Reusable React components",
      "Frontend architecture",
      "Deployment with Vercel",
      "Building a professional developer presence",
    ],
    img: profileImg,
    link: "https://indtekina.vercel.app",
  },
];

export default projects;
