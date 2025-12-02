import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with cart, checkout, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Task Management App",
            description: "A productivity tool for teams to organize and track tasks efficiently.",
            tech: ["TypeScript", "Firebase", "Tailwind"],
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio site to showcase skills and projects (like this one!).",
            tech: ["React", "Vanilla CSS"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="btn btn-outline btn-sm">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
