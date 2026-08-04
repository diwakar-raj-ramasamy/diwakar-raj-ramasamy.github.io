import './Certificates.css';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
    const certificates = [
        {
            title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
            issuer: "Oracle Cloud",
            date: "2025"
        },
        {
            title: "AWS Cloud Practitioner Essentials",
            issuer: "Amazon Web Services",
            date: "05/04/2026",
            link: "https://drive.google.com/file/d/1EZ6EOZX3_lCfyRpm8455q6jJ9eKzMk6t/view?usp=sharing"
        },
        {
            title: "Google Analytics Certification",
            issuer: "Google",
            date: "Dec 20, 2025 - Dec 20, 2026",
            link: "https://skillshop.credential.net/7cd65398-54d4-461b-9f35-61e2435b101e#acc.sxnwAhRI"
        },
        {
            title: "Introduction to Generative AI: Art of the Possible",
            issuer: "Amazon Web Service",
            date: "05/04/2026",
            link: "https://drive.google.com/file/d/1q4vpp9RrzIODwOiUayr7vpWuxJxxJK3k/view?usp=sharing"
        },
        {
            title: "Industry-Supported Course on Generative AI",
            issuer: "Generative AI",
            date: "2025-2026",
            link: "https://drive.google.com/file/d/1hgllKYICCZ8USgOyWsxWDOoOrsITN1bG/view?usp=sharing"
        },
        {
            title: "Introducing SAP Business Data Cloud",
            issuer: "SAP",
            date: "02/04/2026",
            link: "https://drive.google.com/file/d/1dyZ6Kk47O4_NynKr6hliGkg6GmOglFqr/view?usp=sharing"
        },
        {
            title: "GenAI Study Jam",
            issuer: "Google Cloud Platform",
            date: "2024-25",
            link: "https://drive.google.com/file/d/1U8O743vqc7hG2YVhmAfVmwixStQSaqOi/view?usp=drivesdk"
        },
        {
            title: "DataBase Management System",
            issuer: "NPTEL",
            date: "01-03/2025",
            link: "https://drive.google.com/file/d/1Eyrz5Wz43No-18QRH1-LEurGL7PZT6RR/view?usp=drivesdk"
        },
        {
            title: "Mobile Virtual Reality and Artificial Intelligence",
            issuer: "NPTEL",
            date: "08-09/2025",
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
        },
        {
            title: "Google Cloud Skills Profile",
            issuer: "Google Cloud",
            date: "",
            link: "https://www.skills.google/public_profiles/c10f762d-9a78-4061-8b96-6bd9743cf8d5"
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
                                {cert.date && <span className="date">{cert.date}</span>}
                                {cert.link && (
                                    <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                                        View Certificate <FaExternalLinkAlt />
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

export default Certificates;
