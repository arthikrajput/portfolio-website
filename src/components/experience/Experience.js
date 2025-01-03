import React, { useEffect } from 'react';
import './experience.css';
import { color, motion, useAnimation } from 'framer-motion';

const experiences = [
    {
        company: 'Sparks To Ideas',
        role: 'ReactJs Intern',
        location: 'Ahmedabad',
        timeLine: 'Jun 2023 - Aug 2023',
    },
    {
        company: 'The Agnirva Space ',
        role: 'Data Analytics',
        location: 'Remote',
        timeLine: 'sept 2024 - oct 2024',
    }
];

const Experience = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <motion.div className="heading-experience" {...fadeIn}>
                <h1>Here's My Experience</h1>
                <p>Here's the experience of my web development journey.</p>
            </motion.div>
            <motion.div className="experience-container" {...fadeIn}>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.company}</h3>
                        <p><strong>Role:</strong> {exp.role}</p>
                        <p><strong>TimeLine:</strong> {exp.timeLine}</p>
                        <p><strong>Location:</strong> {exp.location}</p>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Experience;