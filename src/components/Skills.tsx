import React from 'react';
import { FaReact, FaGitAlt, FaComments, FaLightbulb, FaUsers, FaClock, FaSyncAlt, FaBrain, FaJava, FaPython, FaGithub, FaUnity, FaFigma, FaCube, FaLayerGroup, FaPencilRuler, FaFileExcel, FaTerminal, FaNodeJs } from 'react-icons/fa';
import { SiDart, SiBlender, SiC, SiFirebase, SiGooglecloud, SiSupabase, SiTypescript, SiFlutter } from 'react-icons/si';
import './Skills.css';

const Skills: React.FC = () => {
    const technicalSkills = [
        { name: "Full Stack Development", icon: <FaLayerGroup /> },
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Dart", icon: <SiDart /> },
        { name: "C", icon: <SiC /> },
        { name: "Java", icon: <FaJava /> },
        { name: "UI/UX Design", icon: <FaPencilRuler /> },
        { name: "Python", icon: <FaPython /> },
        { name: "3D Model", icon: <FaCube /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Blender", icon: <SiBlender /> },
        { name: "Unity", icon: <FaUnity /> },
        { name: "Excel", icon: <FaFileExcel /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "Command Line", icon: <FaTerminal /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Google Cloud", icon: <SiGooglecloud /> },
        { name: "Supabase", icon: <SiSupabase /> }
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
                <h2 className="animate-on-scroll">Skills</h2>

                <div className="skills-category animate-on-scroll delay-100">
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

                <div className="skills-category animate-on-scroll delay-200">
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
