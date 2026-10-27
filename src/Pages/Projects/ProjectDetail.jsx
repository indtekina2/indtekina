import { Link, useParams } from "react-router-dom";
import SEO from "../../Components/SEO";
import "./ProjectDetail.css";

const projectDetails = {
  linkup: {
    name: "LinkUp",
    title: "LinkUp — Full-Stack Chat Application by indtekina",
    description: "LinkUp is a full-stack chat application built by indtekina with React, Node.js, Express, and MongoDB. It includes authenticated private conversations, group messaging, and persistent message history.",
    summary: "A full-stack messaging application focused on authentication, conversation data modelling, and reliable message persistence. The current public README describes version 1 as REST-based; real-time Socket.IO delivery is listed as a planned version 2 feature.",
    features: [
      "Private one-to-one conversations",
      "Group conversations and message history",
      "JWT-based authentication and protected routes",
      "MongoDB persistence with Express API endpoints",
      "A documented roadmap for real-time messaging and presence",
    ],
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Socket.IO (planned)"],
    github: "https://github.com/indtekina2/LinkUp",
    demo: "https://link-up-indtekina.vercel.app/home",
    schemaType: "SoftwareApplication",
  },
  "study-tracker": {
    name: "Study Tracker",
    title: "Study Tracker — Student Progress Dashboard by indtekina",
    description: "Study Tracker is a full-stack MERN student progress dashboard by indtekina for recording study sessions, organizing subjects and chapters, tracking practice accuracy, and analyzing mock-test scores.",
    summary: "A study analytics dashboard that turns study logs and mock-test results into a clearer view of progress and weak areas.",
    features: [
      "Subject, chapter, and subtopic progress tracking",
      "Daily study logs with time, questions, and accuracy",
      "Mock-test score trends and analytics",
      "Charts for study time and subject distribution",
      "JWT access and refresh tokens using httpOnly cookies",
      "Responsive dashboard with dark and light themes",
    ],
    technologies: ["React 19", "Vite 6", "Tailwind CSS v4", "Node.js", "Express 5", "MongoDB", "Mongoose", "TanStack Query", "Axios", "Recharts"],
    github: "https://github.com/indtekina2/Study-Tracker",
    schemaType: "SoftwareApplication",
  },
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectDetails[slug];

  if (!project) {
    return (
      <section className="project-detail">
        <h1>Project not found</h1>
        <p>This project page does not exist.</p>
        <Link to="/projects">Browse all projects</Link>
      </section>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": project.schemaType,
    name: project.name,
    description: project.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "indtekina",
      url: "https://indtekina.vercel.app/",
      sameAs: ["https://github.com/indtekina2"],
    },
    codeRepository: project.github,
    url: `https://indtekina.vercel.app/projects/${slug}`,
  };

  return (
    <article className="project-detail">
      <SEO
        title={project.title}
        description={project.description}
        path={`/projects/${slug}`}
        type="article"
        schema={schema}
      />
      <p className="project-eyebrow">Built by indtekina</p>
      <h1>{project.name}</h1>
      <p className="project-summary">{project.summary}</p>

      <section>
        <h2>What it does</h2>
        <ul>
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>

      <section>
        <h2>Technology stack</h2>
        <ul className="technology-list">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </section>

      <div className="project-actions">
        <a href={project.github} target="_blank" rel="noreferrer">View source on GitHub</a>
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Open live demo</a>}
        <Link to="/projects">All projects</Link>
      </div>
    </article>
  );
}

export default ProjectDetail;
