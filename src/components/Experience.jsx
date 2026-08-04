import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Aara Tech Pvt Ltd (Thozhil)",
            role: "Software Developer Intern",
            date: "06/2026 – 07/2026",
            description: "Developed a web-based Visitor Management System during Software Development Internship to digitize visitor registration, check-in/check-out, and secure record management. Built responsive frontend interfaces, integrated REST APIs with database operations, and improved visitor tracking and administrative efficiency.",
            link: "https://drive.google.com/file/d/1tUuzWNyQxshKU5E_kXlx4CCebIsqOt1q/view?usp=sharing"
        },
        {
            company: "CodeAlpha",
            role: "Full Stack Development Intern",
            date: "01/2026 – 01/2026",
            description: "Completed a 1-month Full Stack Development Internship at CodeAlpha, where I developed real-world web applications, including a Real-Time Communication App and an E-Commerce Website, enhancing my full-stack development skills.",
            link: "https://drive.google.com/file/d/15xEjCNX1dTF3kGSWXk20aOrZcbgfuMiL/view?usp=drive_link"
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="animate-on-scroll">Internship Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-on-scroll delay-100`}>
                            <div className="timeline-content">
                                <h3>{exp.role}</h3>
                                <div className="company">{exp.company}</div>
                                <span className="date">{exp.date}</span>
                                <p>{exp.description}</p>
                                {exp.link && (
                                    <a href={exp.link} className="cert-link" target="_blank" rel="noopener noreferrer" style={{ marginTop: '10px', display: 'inline-block' }}>
                                        View Internship Letter
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

export default Experience;
