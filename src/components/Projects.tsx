import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "My personal portfolio website built with React and TypeScript.",
            tech: ["TypeScript", "React", "CSS"],
            link: "https://github.com/diwakar-raj-ramasamy/diwakar-raj-ramasamy.github.io"
        },
        {
            title: "Mathsol-Website",
            description: "A website for mathematics solutions.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/diwakar-raj-ramasamy/Mathsol-Website"
        },
        {
            title: "Resume",
            description: "My professional resume source code.",
            tech: ["TeX", "LaTeX"],
            link: "https://github.com/diwakar-raj-ramasamy/resume"
        },
        {
            title: "Simple Calculator",
            description: "A simple calculator application built with Python.",
            tech: ["Python"],
            link: "https://github.com/diwakar-raj-ramasamy/Simple-Calculator"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="animate-on-scroll">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card animate-on-scroll delay-100">
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
