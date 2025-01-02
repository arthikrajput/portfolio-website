import React, { useEffect } from 'react';
import './education.css';
import { color, motion, useAnimation } from 'framer-motion';

const Education = () => {

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
            <motion.div className="heading-edu" {...fadeIn}>
                <h1>Here's My Education</h1>
                <p>Here's the information about my educational background...</p>
            </motion.div>
            <motion.div className='container' {...fadeIn}>
                <div className='timeline'>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2018</h2>
                            <h3>SSC</h3>
                            <p>B.A.P.S Swaminarayan Gurukul,Gondal</p>
                            <p className='highlight'>Percentage: 84.83%</p>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2020</h2>
                            <h3>HSC</h3>
                            <p>Gangotri School,Gondal</p>
                            <p className='highlight'>Percentage: 88%</p>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year 2020-2023</h2>
                            <h3>Bachelor of Computer Application (BCA)</h3>
                            <p>Sahajanand College of IT And Management</p>
                            <p className='highlight'>CGPA: 7.92</p>
                        </div>
                    </div>
                    <div className='timeline-item'>
                        <div className='timeline-content'>
                            <h2>Year2023-2025</h2>
                            <h3>Master of Computer Application (MCA)</h3>
                            <p>Institute of Technology Nirma University, Ahmedabad.</p>
                            <p className='highlight'>CGPA: 8.70</p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    );
};

export default Education;