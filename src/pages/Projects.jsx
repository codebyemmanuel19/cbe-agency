import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import project1 from "../assets/project-1.jpeg";
import project2 from "../assets/project-2.jpeg";
import project3 from "../assets/project-3.jpeg";
import project4 from "../assets/project-4.jpeg";
import project5 from "../assets/project-5.jpeg";
import project6 from "../assets/project-6.jpeg";

import "./Projects.css";

const projects = [
  { image: project1, title: "Techno Landing Page", category: "Web Development" },
  { image: project2, title: "Modern Dashboard UI", category: "UI/UX Design" },
  { image: project3, title: "Brand Identity Design", category: "Branding" },
  { image: project4, title: "E-Commerce Website", category: "Web Development" },
  { image: project5, title: "Marketing Website", category: "Web Development" },
  { image: project6, title: "Mobile App UI", category: "UI/UX Design" },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <section className="projects">
      <div className="projects-header" data-aos="fade-up">
        <div className="projects-header-left">
          <h1>Our Projects</h1>
          <div className="projects-divider" />
        </div>
        <p>Here are some of our recent work that we are proud of.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.title}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;