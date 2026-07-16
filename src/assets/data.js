import todoImg from "../assets/todo.png";
import movieImg from "../assets/movie.png";
import weatherImg from "../assets/weather.png";
import profileImg from "../assets/logo.png";


const projects = [
  {
    id: 1,
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
    id: 2,
    name: "Movie Search",
    description:
      "Search for movies and view details in real time using a movie database API.",
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
    id: 3,
    name: "Weather App",
    description:
      "A React application that displays live weather information for any city using a weather API.",
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
    id: 4,
    name: "Profile Website",
    description:
      "A responsive personal portfolio showcasing my skills, projects, and contact information.",
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