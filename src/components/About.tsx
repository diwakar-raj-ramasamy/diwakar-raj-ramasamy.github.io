import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="animate-on-scroll">About Me</h2>
                <div className="about-content">
                    <div className="about-text animate-on-scroll delay-100">
                        <p>
                            I am a passionate Full stack Developer with a knack for creating elegant, efficient, and user-friendly web applications.
                            With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life through code.
                        </p>
                        <p>
                            My journey in web development started with a curiosity for how things work on the internet, which quickly turned into a career.
                            I am constantly learning new technologies and best practices to stay ahead in this fast-paced industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
