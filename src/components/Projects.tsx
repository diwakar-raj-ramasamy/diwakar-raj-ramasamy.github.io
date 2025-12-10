import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
    const projects = [

        {
            title: "Portfolio Website",
            description: "My personal portfolio website built with React and TypeScript.",
            tech: ["TypeScript", "React", "CSS"],
            link: "https://diwakar-raj-ramasamy.github.io",
            github: "https://github.com/diwakar-raj-ramasamy/diwakar-raj-ramasamy.github.io"
        },
        {
            title: "Mathsol-Website",
            description: "A website for mathematics solutions.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/diwakar-raj-ramasamy/Mathsol-Website",
            buttonText: "Github"
        },
        {
            title: "Resume",
            description: "My professional resume source code.",
            tech: ["TeX", "LaTeX"],
            link: "https://github.com/diwakar-raj-ramasamy/resume",
            buttonText: "Github"
        },
        {
            title: "StudyHub",
            description: "A central repository for collaborative learning and resource sharing.",
            tech: ["JavaScript", "HTML", "CSS", "TypeScript", "Supabase"],
            link: "https://github.com/diwakar-raj-ramasamy/StudyHub",
            buttonText: "Github"
        },
        {
            title: "Chess",
            description: "A comprehensive Chess application featuring AI opponents and multiplayer capabilities.",
            tech: ["React", "TypeScript", "Vite"],
            link: "https://diwakar-raj-ramasamy.github.io/chess",
            github: "https://github.com/diwakar-raj-ramasamy/chess"
        },
        {
            title: "Simple Calculator",
            description: "A simple calculator application built with Python.",
            tech: ["Python"],
            link: "https://github.com/diwakar-raj-ramasamy/Simple-Calculator",
            buttonText: "Github"
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
                                <div className="project-buttons">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                        {/* @ts-ignore */}
                                        {project.buttonText === "Github" && <FaGithub style={{ marginRight: '8px' }} />}
                                        {/* @ts-ignore */}
                                        {project.buttonText || "View Project"}
                                    </a>
                                    {/* @ts-ignore */}
                                    {project.github && (
                                        // @ts-ignore
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
