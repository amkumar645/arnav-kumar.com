import { faGithub, faGoogleDrive, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import './index.scss';
import Logo from "./Logo";

const Home = () => {
    const [letterClass] = useState('text-animate');
    const nameArray = ['A', 'r', 'n', 'a', 'v', ' ' ,' ', 'K', 'u', 'm', 'a', 'r'];


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _1`}>i,&nbsp;</span>
                    <span className={`${letterClass} _2`}>I'</span>
                    <span className={`${letterClass} _3`}>m</span>
                    <br></br>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}></AnimatedLetters>
                </h1>
                <h2>
                    Welcome to my portfolio website! <br />
                    See more of my work or contact me below:
                </h2>
                <a target="_blank" rel="noreferrer" href="https://github.com/amkumar645" className="github-link">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arnav-kumar-9816601bb/" className="linkedin-link">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1UHGp5iwoxbSHZfguCDUZV41DYDDI7hIV/view?usp=sharing" className="resume-link">
                    <FontAwesomeIcon icon={faGoogleDrive}></FontAwesomeIcon>
                </a>
                <Link to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} className="email-link"></FontAwesomeIcon>
                </Link>
            </div>
            <Logo></Logo>
        </div>
    );
}

export default Home;