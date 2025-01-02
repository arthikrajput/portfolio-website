import React, { useEffect } from 'react';
import './about.css';
import { color, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const techStack = {
    languages: [
        { src: require('../../assets/icons/c-.png'), name: 'C++' },
        { src: require('../../assets/icons/java.png'), name: 'Java' },
        { src: require('../../assets/icons/python.png'), name: 'Python' },
        { src: require('../../assets/icons/php.png'), name: 'PHP' },
    ],
    frameworks: [
        { src: require('../../assets/icons/html-5.png'), name: 'HTML' },
        { src: require('../../assets/icons/css-3.png'), name: 'CSS' },
        { src: require('../../assets/icons/js.png'), name: 'JavaScript' },
        { src: require('../../assets/icons/react.png'), name: 'React' },
        { src: require('../../assets/icons/nodejs.png'), name: 'NodeJs' },
        { src: require('../../assets/icons/mongodb.png'), name: 'MongoDB' },
    ],
    tools: [
        { src: require('../../assets/icons/firebase.png'), name: 'Firebase' },
        { src: require('../../assets/icons/git.png'), name: 'Git' },
        { src: require('../../assets/icons/github.png'), name: 'GitHub' },
        { src: require('../../assets/icons/sql.png'), name: 'SQL' },
        { src: require('../../assets/icons/visual-studio.png'), name: 'Visual Studio' },
    ],
};


const profileLinks = [
   
];


const About = () => {

    const fadeIn = {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='about-container'>
            <motion.div className="heading-about" {...fadeIn}>
                <h1>Here's About Me</h1>
                <p>Here's the information of my background, passion, techStack, etc..</p>
            </motion.div>
            <motion.div className="about-content" {...fadeIn}>
                <div className="text">
                    <h4>About Me</h4>
                    <h2>Aarthik Kandoliya</h2>
                    <p>
                    I have completed a Bachelor's degree in Computer Applications from Sahajanand College of IT and Management, affiliated with Saurashtra University, and I am currently pursuing a Master's degree in Computer Applications at Nirma University. I am deeply passionate about leveraging emerging technologies to solve real-world challenges. My academic journey has equipped me with strong proficiency in programming languages such as C, C++, HTML, CSS, JavaScript, and a focused expertise in web development.                    </p>
                    <p>
                    My experience with ReactJS has given me a strong command of this versatile framework, enabling me to create efficient, dynamic, and user-friendly web applications. Furthermore, I have hands-on experience working with MySQL databases and utilizing WordPress to develop and manage web development projects effectively.                    </p>
                    <p>
                        I am always eager to expand my knowledge and stay at the forefront of technological advancements, continuously seeking opportunities to collaborate on innovative projects and contribute to impactful solutions.
                    </p>
                   
                    <a
                        href="https://drive.google.com/file/d/1Y5VbC_tf-1NM3bNlnIk2ZCYHnG9n1_uP/view?usp=sharing"
                        className="codepen-button" target='_blank'
                    >
                        <span>Download CV</span>
                    </a>
                </div>
            </motion.div>
            <motion.div className="work" {...fadeIn}>
                <div className="work-item">
                    <h2>5</h2>
                    <p>Project</p>
                </div>
                <div className="work-item">
                    <h2>1</h2>
                    <p>React Project</p>
                </div>
                <div className="work-item">
                    <h2>2+</h2>
                    <p>Month of Company experience</p>
                </div>
                {/* <div className="work-item">
                    <h2>250+</h2>
                    <p>DSA Questions Solved</p>
                </div> */}
            </motion.div>

            <div className="languages">
                <h4>Tech Stack</h4>
                <div>
                    <h2>1. Languages</h2>
                    <ul>
                        {techStack.languages.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>2. Framework and Libraries</h2>
                    <ul>
                        {techStack.frameworks.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>3. Other Tools & Technologies</h2>
                    <ul>
                        {techStack.tools.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <img src={item.src} alt={item.name} />
                                <p>{item.name}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
           
        </div>
    );
};

export default About;