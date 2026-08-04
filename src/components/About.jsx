import './About.css';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="animate-on-scroll">About Me</h2>
                <div className="about-content">
                    <div className="about-text animate-on-scroll delay-100">
                        <p>
                            Full Stack Developer and Computer Science undergraduate at Prathyusha Engineering College with strong problem-solving skills and hands-on experience in building scalable web applications. Proficient in frontend technologies like React.js and experienced in developing UI-driven projects and functional web solutions.
                        </p>
                        <p>
                            Actively practices Data Structures and Algorithms to write efficient, optimised code. Experienced in conducting technical workshops, demonstrating strong communication and technical expertise. Continuously upskilling in AI, Machine Learning, and modern development tools to build intelligent, user-centric applications.
                        </p>
                    </div>
                </div>

                <div className="education-section animate-on-scroll delay-200">
                    <h3 className="education-title">Education</h3>
                    <div className="education-grid">
                        <div className="education-card">
                            <div className="edu-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="edu-content">
                                <h4>B.E - Computer Science and Engineering</h4>
                                <p className="institution">Prathyusha Engineering College | Tiruvallur, Tamilnadu</p>
                                <span className="edu-date">09/2023 – 06/2027</span>
                                <span className="edu-score">CGPA: 8.25 (Till 6th Semester)</span>
                            </div>
                        </div>

                        <div className="education-card">
                            <div className="edu-icon">
                                <FaGraduationCap />
                            </div>
                            <div className="edu-content">
                                <h4>Higher Secondary (HSC)</h4>
                                <p className="institution">Bharathi Dasan Matric.Hr.Sec School | Tiruvallur, Tamilnadu</p>
                                <span className="edu-date">06/2021 – 05/2023</span>
                                <span className="edu-score">Percentage: 75.5%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
