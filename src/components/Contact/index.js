import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogleDrive, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [letterClass] = useState('text-animate');
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_1tlssns',
            'contact_form',
            refForm.current,
            't6C9M7BtT9TClATVV'
        ).then(
            () => {
                alert('Message successfully sent!');
                window.location.reload(false);
            },
            (error) => {
                alert('Failed to send message! Please try again!');
            }
        )
    }

    return (
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', ' ', 'm', 'e', '!']}
                    index={15}
                    letterClass={letterClass}
                    >
                    </AnimatedLetters>
                </h1>
                <p>
                    If you have questions or comments, feel free to fill out 
                    the form below to email me, or connect with me at any of my
                    socials below!
                </p>
            </div>
            <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input className="text" type="text" name="name" placeholder="Name" required></input>
                                <span className="border"></span>
                            </li>
                            <li className="half">
                                <input className="text" type="email" name="email" placeholder="Email" required></input>
                                <span className="border"></span>
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required></textarea>
                                <span className="border"></span>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href="https://github.com/amkumar645" className="github-link">
                                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/arnav-kumar-9816601bb/" className="linkedin-link">
                                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Jq41dp9-UmAwbKTsR0h_n0P0fYtSyU5t/view?usp=sharing" className="resume-link">
                                    <FontAwesomeIcon icon={faGoogleDrive}></FontAwesomeIcon>
                                </a>
                               <input type="submit" className="flat-button" value="SEND"></input>
                            </li>
                        </ul>
                    </form>
                </div>
        </div>
    )
}

export default Contact;