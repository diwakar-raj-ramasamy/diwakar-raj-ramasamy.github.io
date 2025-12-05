import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Diwakar Raj R</h1>
                    <h2 className="title">Full stack Developer</h2>
                    <p className="description">
                        I build exceptional digital experiences that are fast, accessible, and visually stunning.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">View Resume</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="profile-image-container">
                        <div className="blob-border"></div>
                        <img src="/me_3d_v2.png" alt="Diwakar Raj R" className="profile-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
