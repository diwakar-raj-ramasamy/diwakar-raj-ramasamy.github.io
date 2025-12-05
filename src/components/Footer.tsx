import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} Diwakar Raj R. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/diwakar-raj-ramasamy" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/diwakar-raj-ramasamy/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="tel:+919551331855">+91 95513 31855</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
