import { Link, NavLink } from 'react-router-dom'
import './index.scss'
// import LogoS from '../../assets/images/logo-s.png';
import LogoAK from '../../assets/images/logo_ak.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
// import AKSubtitle from '../../assets/images/ak_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoAK} alt="logo"></img>
            {/* <img className="sub-logo" src={AKSubtitle} alt = "slobodan"></img> */}
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        {/* <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arnav-kumar-9816601bb/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/amkumar645">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/amkumar645">
                    <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul> */}
    </div>
)

export default Navbar