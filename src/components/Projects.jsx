import { useRef } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -360 : 360;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const projects = [
        {
            title: "Jack Campus",
            subtitle: "College Management & Campus Platform",
            description: "A full-stack campus management platform for managing students, announcements, and administrative operations. Implemented secure authentication, role-based access control, and responsive UI with scalable backend architecture.",
            tech: ["React.js", "Java", "Spring Boot", "MySQL", "HTML/CSS"],
            link: "https://github.com/diwakar-raj-ramasamy",
            buttonText: "Github"
        },
        {
            title: "Visitor Management System",
            subtitle: "Digital Visitor Tracking",
            description: "Digitizes visitor registration, check-in/check-out, and record management. Developed responsive interfaces, REST backend APIs, and database integration to improve visitor tracking, security, and administrative efficiency.",
            tech: ["React.js", "Python (Flask)", "MySQL", "JavaScript"],
            link: "https://visitor-management-system-gules.vercel.app/",
            github: "https://github.com/diwakar-raj-ramasamy/Visitor-Management-System"
        },
        {
            title: "Intellexa AI",
            subtitle: "Intelligent AI Assistant",
            description: "An AI-driven application focused on building intelligent, interactive solutions using modern machine learning and web technologies. Combines frontend interfaces with backend logic and AI workflows.",
            tech: ["React.js", "Python", "Machine Learning", "AI Integrations"],
            link: "https://github.com/diwakar-raj-ramasamy",
            buttonText: "Github"
        },
        {
            title: "Study Hub",
            subtitle: "AI-Powered Collaborative Learning Platform",
            description: "An educational platform designed to enhance collaborative learning through integrated discussion, resource sharing, and intelligent assistance with personalized learning support.",
            tech: ["Python", "Flask", "React", "Supabase", "APIs"],
            link: "https://github.com/diwakar-raj-ramasamy/StudyHub",
            buttonText: "Github"
        },
        {
            title: "Mathsol",
            subtitle: "Mathematical Formula Calculator",
            description: "Web-based mathematical formula calculator providing step-by-step solutions for user inputs, designed with an intuitive UI to simplify complex calculations.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/diwakar-raj-ramasamy/Mathsol-Website",
            buttonText: "Github"
        },
        {
            title: "Portfolio Website",
            subtitle: "Personal Portfolio",
            description: "Personal portfolio website showcasing projects, skills, internship experience, and certifications.",
            tech: ["React", "JavaScript", "CSS", "Vite"],
            link: "https://diwakar-raj-ramasamy.github.io",
            github: "https://github.com/diwakar-raj-ramasamy/diwakar-raj-ramasamy.github.io"
        },
        {
            title: "Chess",
            subtitle: "Web Chess Application",
            description: "A comprehensive Chess application featuring AI opponents and multiplayer capabilities.",
            tech: ["React", "JavaScript", "Vite"],
            link: "https://diwakar-raj-ramasamy.github.io/chess",
            github: "https://github.com/diwakar-raj-ramasamy/chess"
        },
        {
            title: "Real-Time Communication App",
            subtitle: "CodeAlpha Internship Project",
            description: "Real-time chat and communication application built during CodeAlpha Internship.",
            tech: ["React", "Node.js", "Socket.io"],
            link: "https://github.com/diwakar-raj-ramasamy/CodeAlpha_Real-Time-Communication-App",
            buttonText: "Github"
        },
        {
            title: "SmartCart",
            subtitle: "E-Commerce Web App",
            description: "An e-commerce site featuring product browsing and cart functionality, built during CodeAlpha Internship.",
            tech: ["React", "CSS", "JavaScript"],
            link: "https://github.com/diwakar-raj-ramasamy/CodeAlpha_SimpleE-CommerceSite",
            buttonText: "Github"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="projects-header animate-on-scroll">
                    <h2>Featured Projects</h2>
                    <div className="scroll-controls">
                        <button className="scroll-arrow" onClick={() => scroll('left')} aria-label="Scroll left">
                            <FaChevronLeft />
                        </button>
                        <button className="scroll-arrow" onClick={() => scroll('right')} aria-label="Scroll right">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className="projects-scroll-wrapper">
                    <div className="projects-grid horizontal-scroll" ref={scrollRef}>
                        {projects.map((project, index) => (
                            <div key={index} className="project-card animate-on-scroll delay-100">
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    {project.subtitle && (
                                        <p className="project-subtitle">{project.subtitle}</p>
                                    )}
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-tag">{t}</span>
                                        ))}
                                    </div>
                                    <div className="project-buttons">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                                            {project.buttonText === "Github" && <FaGithub style={{ marginRight: '8px' }} />}
                                            {project.buttonText || "View Project"}
                                        </a>
                                        {project.github && (
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
            </div>
        </section>
    );
};

export default Projects;
