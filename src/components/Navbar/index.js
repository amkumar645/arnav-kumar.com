import React, { useState } from "react"
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoAK from '../../assets/images/logo_ak.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBriefcase, faEnvelope, faHome, faLaptopCode, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    };
    const closeMenu = () => {
        setNavbarOpen(false)
    };
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoAK} alt="logo"></img>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/" onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience" onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
                </NavLink>
                <button onClick={handleToggle}>
                    {navbarOpen ? (
                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    ) : (
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    )}
                </button>                
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li><NavLink exact="true" activeclassname="active" to="/" onClick={() => closeMenu()}>HOME</NavLink></li>
                    <li><NavLink exact="true" activeclassname="active" to="/about" onClick={() => closeMenu()}>ABOUT</NavLink></li>
                    <li><NavLink exact="true" activeclassname="active" to="/experience" onClick={() => closeMenu()}>EXPERIENCE</NavLink></li>
                    <li><NavLink exact="true" activeclassname="active" to="/projects" onClick={() => closeMenu()}>PROJECTS</NavLink></li>
                    <li><NavLink exact="true" activeclassname="active" to="/contact" onClick={() => closeMenu()}>CONTACT</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar