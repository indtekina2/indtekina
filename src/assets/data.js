import todoImg from "../assets/todo.png";
import movieImg from "../assets/movie.png";
import weatherImg from "../assets/weather.png";
import profileImg from "../assets/logo.png";
import LinkUpPic from "../assets/LinkUp.png";

const projects = [
  {
    id: 6,
    name: "Study Tracker",
    slug: "study-tracker",
    description:
      "A full-stack MERN study dashboard for tracking subjects, chapters, study sessions, practice accuracy, and mock-test progress.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "TanStack Query",
      "Recharts",
    ],
    lessons: [
      "Subject and chapter progress tracking",
      "Daily study logs and practice accuracy",
      "Mock-test score analytics",
      "JWT access and refresh tokens",
      "Interactive dashboard charts",
    ],
    img: profileImg,
    link: "https://github.com/indtekina2/Study-Tracker",
    detailUrl: "/projects/study-tracker",
  },
  {
    id: 5,
    name: "LinkUp",
    slug: "linkup",
    description:
      "A full-stack chat application exploring authenticated private conversations, group messaging, and persistent message history.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "JavaScript",
    ],
    lessons: [
      "JWT authentication and protected routes",
      "Conversation data modelling",
      "MongoDB persistence",
      "REST API development with Express.js",
      "React state management",
    ],
    img: LinkUpPic,
    link: "https://link-up-indtekina.vercel.app/home",
    detailUrl: "/projects/linkup",
  },
  {
    id: 4,
    name: "Todo App",
    description:
      "A task management application with persistent local storage and an intuitive user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    lessons: [
      "DOM manipulation",
      "Event handling",
      "Working with localStorage",
    ],
    img: todoImg,
    link: "https://github.com/indtekina2/todo-app",
  },
  {
    id: 3,
    name: "Movie Search",
    description:
      "Search for movies and view details using a movie database API.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    lessons: [
      "Fetching API data",
      "Async/Await",
      "JSON parsing",
      "Handling loading and error states",
    ],
    img: movieImg,
    link: "https://github.com/indtekina2/movie-app",
  },
  {
    id: 2,
    name: "Weather App",
    description:
      "A React application that displays weather information for a city using a weather API.",
    tech: ["React", "CSS", "Weather API"],
    lessons: [
      "React Hooks",
      "Component-based architecture",
      "API integration",
      "State management",
    ],
    img: weatherImg,
    link: "https://github.com/indtekina2/weather-app",
  },
  {
    id: 1,
    name: "Profile Website",
    description:
      "A responsive personal portfolio showcasing skills, projects, and contact information.",
    tech: ["React", "React Router", "CSS"],
    lessons: [
      "Responsive design",
      "Routing",
      "Reusable components",
      "Clean UI design",
    ],
    img: profileImg,
    link: "https://github.com/indtekina2/indtekina",
  },
];

export default projects;
