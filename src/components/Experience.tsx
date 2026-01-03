import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
    const experiences = [
        {
            company: "Woject",
            role: "Web Developer Intern",
            date: "2025 Dec 10 - 2026 Mar 10",
            description: "Contributed to the development of responsive web applications, optimizing performance and ensuring cross-browser compatibility. Assisted in building reusable components and integrating APIs to enhance user experience.",
            link: "https://drive.google.com/file/d/1tJTSreSO5L6D1HoUifs8wgfk73zVfebv/view?usp=drive_link"
        },
        {
            company: "CodeAlpha",
            role: "Full Stack Developer",
            date: "2026 Jan 01 - 2026 Jan 31",
            description: "Developed and maintained full-stack web applications using modern technologies like React and Node.js. Collaborated with the team to design and implement scalable user interfaces and robust backend APIs, ensuring high performance and responsiveness.",
            link: "https://drive.google.com/file/d/15xEjCNX1dTF3kGSWXk20aOrZcbgfuMiL/view?usp=drive_link"
        },
        {
            company: "CodSoft",
            role: "Android App Developer",
            date: "2026 Jan 01 - 2026 Jan 31",
            description: "Designed and developed user-friendly Android applications using Java and Flutter. Implemented responsive UI components, integrated RESTful APIs for data synchronization, and optimized app performance across various devices.",
            link: "https://drive.google.com/file/d/1FVhFNwsfOGZwOhLk7dAkz99AfsGUiZBf/view?usp=drive_link"
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="animate-on-scroll">Internship Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-on-scroll delay-100`}>
                            <div className="timeline-content">
                                <h3>{exp.role}</h3>
                                <div className="company">{exp.company}</div>
                                <span className="date">{exp.date}</span>
                                <p>{exp.description}</p>
                                {exp.link && (
                                    <a href={exp.link} className="cert-link" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px', display: 'inline-block' }}>
                                        View Internship Letter
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
