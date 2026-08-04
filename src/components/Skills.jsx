import { FaReact, FaGitAlt, FaComments, FaLightbulb, FaUsers, FaClock, FaSyncAlt, FaBrain, FaJava, FaPython, FaGithub, FaUnity, FaFigma, FaCube, FaPencilRuler, FaFileExcel, FaTerminal, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiDart, SiBlender, SiC, SiFirebase, SiGooglecloud, SiSupabase, SiTypescript, SiFlutter, SiMongodb, SiExpress, SiGoogleanalytics, SiMysql, SiSpringboot } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const technicalSkills = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS (Vanilla, Tailwind)", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python (Flask)", icon: <FaPython /> },
        { name: "Java & Spring Boot", icon: <SiSpringboot /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Google Cloud & Analytics", icon: <SiGooglecloud /> },
        { name: "C", icon: <SiC /> },
        { name: "Flutter & Dart", icon: <SiFlutter /> },
        { name: "UI/UX Design (Figma)", icon: <FaFigma /> },
        { name: "3D Modeling (Blender)", icon: <SiBlender /> },
        { name: "Unity", icon: <FaUnity /> },
        { name: "Git & GitHub", icon: <FaGithub /> },
        { name: "Command Line", icon: <FaTerminal /> },
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
