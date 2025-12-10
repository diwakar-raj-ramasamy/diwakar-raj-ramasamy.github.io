import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const titles = ["Full Stack Developer", "3D Modeller", "UI/UX Designer"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % titles.length;
            const fullText = titles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, titles]);

    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Diwakar Raj R</h1>
                    <h2 className="title">{text}<span className="typing-cursor">|</span></h2>
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
