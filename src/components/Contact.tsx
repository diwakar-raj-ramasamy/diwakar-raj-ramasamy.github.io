import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="animate-on-scroll">Get In Touch</h2>
                <div className="contact-content animate-on-scroll delay-100">
                    <p>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                    <a href="mailto:diwakarraj385@gmail.com" className="btn btn-primary btn-lg">Say Hello</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
