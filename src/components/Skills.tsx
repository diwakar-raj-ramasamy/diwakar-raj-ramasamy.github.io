import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaComments, FaLightbulb, FaUsers, FaClock, FaSyncAlt, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills: React.FC = () => {
    const technicalSkills = [
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Git", icon: <FaGitAlt /> }
    ];

    const nonTechnicalSkills = [
        { name: "Communication", icon: <FaComments /> },
        { name: "Problem Solving", icon: <FaLightbulb /> },
        { name: "Teamwork", icon: <FaUsers /> },
        { name: "Time Management", icon: <FaClock /> },
        { name: "Adaptability", icon: <FaSyncAlt /> },
        { name: "Critical Thinking", icon: <FaBrain /> }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills</h2>

                <div className="skills-category">
                    <h3>Technical Skills</h3>
                    <div className="skills-grid">
                        {technicalSkills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Non-Technical Skills</h3>
                    <div className="skills-grid">
                        {nonTechnicalSkills.map((skill, index) => (
                            <div key={index} className="skill-card non-tech">
                                <div className="skill-icon">{skill.icon}</div>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
