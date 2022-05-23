import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AboutImage from '../../assets/images/about_img5.jpg';
import Skills from './Skills';

const About = () => {
    const [letterClass] = useState('text-animate');

   return (
       <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray={['W', 'h', 'o', ' ', ' ', 'a', 'm', ' ',' ', 'I', ' ', '?']}
                        index={15}
                        letterClass={letterClass}>
                    </AnimatedLetters>
                </h1>
                <p>
                    I'm a current undergraduate at <Link to="/experience">Princeton University</Link> majoring in Computer Science and 
                    pursuing minors in Statistics and Machine Learning, Finance, and Engineering and Management Systems.
                </p>
                <p>
                    My main interests include software development, data science,
                    and machine learning. I most recently worked as a Software Engineering
                    Intern at <Link to="/experience">MITRE Corporation</Link>. 
                </p>
                <p>
                    In my free time, I'm either following along my favorite sports teams,
                    petting my cat, or watching sitcoms. If any of this sounds interesting
                    to you, feel free to <Link to="/contact">contact me!</Link>
                </p>
                <p>
                    Check out some of my skills below!
                </p>
            </div>

            <div className='about-img'>
                <img src={AboutImage} alt="Programmer"></img>
            </div>
            <div className="skills-page">
                <Skills id="skills"></Skills>
            </div>
        </div>
        {/* <Loader type="pacman"></Loader> */}
        </>
    )
}

export default About;