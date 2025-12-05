import React from 'react';
import './Certificates.css';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates: React.FC = () => {
    const certificates = [
        {
            title: "Google Cloud Skills Profile",
            issuer: "Google Cloud",
            date: "",
            link: "https://www.skills.google/public_profiles/c10f762d-9a78-4061-8b96-6bd9743cf8d5"
        },
        {
            title: "Google Cloud Skills Profile (2)",
            issuer: "Google Cloud",
            date: "",
            link: "https://www.skills.google/public_profiles/a3789534-b84b-4b4f-836d-825ccd707b41"
        },
        {
            title: "GenAI Study Jam",
            issuer: "Google Cloud Platform",
            date: "",
            link: "https://drive.google.com/file/d/1U8O743vqc7hG2YVhmAfVmwixStQSaqOi/view?usp=drivesdk"
        },
        {
            title: "DataBase Management System",
            issuer: "NPTEL",
            date: "",
            link: "https://drive.google.com/file/d/1Eyrz5Wz43No-18QRH1-LEurGL7PZT6RR/view?usp=drivesdk"
        },
        {
            title: "Mobile Virtual Reality and Artificial Intelligence",
            issuer: "NPTEL",
            date: "",
            link: "https://drive.google.com/file/d/1Vv2CCz77u2hbweH8omKLA6GfuS8YqbPr/view?usp=drivesdk"
        },
        {
            title: "UI / UX For Beginners",
            issuer: "Great Learning",
            date: "",
            link: "https://www.mygreatlearning.com/certificate/LLFCTZMO?referrer_code=GLCTZMUQ8ASSY"
        },
        {
            title: "Intro to Graphic Design with Photoshop",
            issuer: "Great Learning",
            date: "",
            link: "https://www.mygreatlearning.com/certificate/MXMQKQTS?referrer_code=GLCTZMUQ8ASSY"
        }
    ];

    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <h2 className="animate-on-scroll">Certificates</h2>
                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div key={index} className="certificate-card animate-on-scroll delay-100">
                            <div className="cert-icon">
                                <FaAward />
                            </div>
                            <div className="cert-content">
                                <h3>{cert.title}</h3>
                                <p className="issuer">{cert.issuer}</p>
                                <span className="date">{cert.date}</span>
                                <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                                    View Certificate <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
