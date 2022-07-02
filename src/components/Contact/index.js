import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogleDrive, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';
import SuccessImg from '../../assets/images/success.png';
import ErrorImg from '../../assets/images/error.png';



const Contact = () => {
    const [letterClass] = useState('text-animate2');
    const [isOpenSuccess, setIsOpenSuccess] = useState(false);
    const [isOpenFail, setIsOpenFail] = useState(false);
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
                setIsOpenSuccess(true);
            },
            (error) => {
                setIsOpenFail(true);
            }
        )
    }

    return (
        <>
        {!isOpenFail && !isOpenSuccess && 
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
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1UHGp5iwoxbSHZfguCDUZV41DYDDI7hIV/view?usp=sharing" className="resume-link">
                                <FontAwesomeIcon icon={faGoogleDrive}></FontAwesomeIcon>
                            </a>
                            <input type="submit" className="flat-button" value="SEND"></input>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        }
        {isOpenSuccess && 
            <SuccessModal
            setIsOpen={setIsOpenSuccess}
            image={SuccessImg}></SuccessModal>
        }
        {isOpenFail && 
            <ErrorModal
            setIsOpen={setIsOpenFail}
            image={ErrorImg}></ErrorModal>
        }
        </>
    )
}

export default Contact;