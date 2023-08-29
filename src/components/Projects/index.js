import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import TigerJobs_Logo from '../../assets/images/projects/tigerjobs_1.png';
import Princetemon_Logo from '../../assets/images/projects/princetemon_1.png';
import BallAR_Logo from '../../assets/images/projects/ballar_1.png';
import EyeCheck_Logo from '../../assets/images/projects/eyecheck_1.png';
import Website_Logo from '../../assets/images/projects/website_1.png';
import Piel_Logo from '../../assets/images/projects/piel_1.png';
import Covid_Logo from '../../assets/images/projects/covid_1.png';

import TigerJobs_Desc from '../../assets/images/projects/tigerjobs_2.png';
import Princetemon_Desc from '../../assets/images/projects/princetemon_2.png';
import BallAR_Desc from '../../assets/images/projects/ballar_desc.png';
import EyeCheck_Desc from '../../assets/images/projects/eyecheck_desc.png';
import Website_Desc from '../../assets/images/projects/website_3.png';
import Piel_Desc from '../../assets/images/projects/piel_2.png';
import Covid_Desc from '../../assets/images/projects/covid_desc.png';

import TigerJobs_2 from '../../assets/images/projects/tigerjobs_3.png';
import Princetemon_2 from '../../assets/images/projects/princetemon_3.png';
import BallAR_2 from '../../assets/images/projects/ballar_2.png';
import Website_2 from '../../assets/images/projects/website_4.png';
import Piel_2 from '../../assets/images/projects/piel_3.png';
import Covid_2 from '../../assets/images/projects/covid_2.png';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import JS from '../../assets/skill-icons/js.png';
import REACT_img from '../../assets/skill-icons/react.png';
import Flask_img from '../../assets/skill-icons/flask.png';
import LensStudio from '../../assets/skill-icons/lensstudio.png';
import HTML5 from '../../assets/skill-icons/html5.png';
import CSS3 from '../../assets/skill-icons/css3.png';
import SCSS from '../../assets/skill-icons/scss.png';
import Python from '../../assets/skill-icons/python.png';
import R from '../../assets/skill-icons/r.png';
import PostgreSQL from '../../assets/skill-icons/postgresql.png';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import Modal from './Modal';


const Projects = () => {
    const [letterClass] = useState('text-animate5');
    const [isOpenTigerJobs, setIsOpenTigerJobs] = useState(false);
    const [isOpenPrincetemon, setIsOpenPrincetemon] = useState(false);
    const [isOpenBallAR, setIsOpenBallAR] = useState(false);
    const [isOpenEyeCheck, setIsOpenEyeCheck] = useState(false);
    const [isOpenWebsite, setIsOpenWebsite] = useState(false);
    const [isOpenPiel, setIsOpenPiel] = useState(false);
    const [isOpenCovid, setIsOpenCovid] = useState(false);

    return (
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    strArray={['W', 'h', 'a', 't', ' ', ' ', 'h', 'a', 'v', 'e', ' ', ' ', 'I', ' ', ' ', 'd', 'o', 'n', 'e', '?']}
                    index={15}
                    letterClass={letterClass}
                    >
                    </AnimatedLetters>
                </h1>
                <p>
                    Check out some of my projects below! Click on them for more information.
                </p>
                <div className="grid-container">
                <div className="grid-item">
                        <img src={TigerJobs_Logo} alt="TigerTasks" onClick={() => setIsOpenTigerJobs(true)}></img>
                        <div>TigerJobs</div>
                        <span className="grid-logos">
                            <img className="grid-logo" src={Flask_img} alt="Flask"></img>
                            <img className="grid-logo" src={HTML5} alt="HTML5"></img>
                            <img className="grid-logo" src={CSS3} alt="CSS3"></img>
                            <img className="grid-logo" src={JS} alt="JS"></img>
                            <img className="grid-logo" src={PostgreSQL} alt="PostgreSQL"></img>
                        </span>
                </div>
                <Modal open={isOpenTigerJobs} 
                    onClose={() => setIsOpenTigerJobs(false)} 
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                        <h1 className="heading">TigerJobs</h1>
                        <img src={TigerJobs_Desc} alt="Project"></img>
                        <br></br>
                        <div>
                           TigerJobs is a platform for Princeton students to leave reviews and 
                           find what they need to land their next internship, job, or career. The
                           website has four main pages: Jobs, Interviews, Companies, and Profile.
                           The Jobs (shown above) and Interviews pages allow users to browse through different
                           job/interview reviews and filter by factors such class year, major, 
                           location, and much more. The Companies page (shown below) shows all companies 
                           with reviews and their ratings. Users can see companies that are the most 
                           popular for certain majors in order to find the best options for themselves.
                           Lastly, on the Profile page, users can do their part and leave their own reviews
                           to help out others. Other features include the ability to report inappropriate
                           reviews and save reviews by upvoting them.
                        </div>
                        <br></br>
                        <img src={TigerJobs_2} alt="Project Alternate"></img>
                        <br></br>
                        <div>
                            I created this website with a fellow Princeton student.
                            To do so, we used HTML/CSS/JS for the frontend and used jQuery
                            and AJAX to update information asynchronously. The backend is
                            set up with Flask and SQLAlchemy, which set up the functionality
                            of the site and connects to the PostgreSQL database. Some 
                            challenges with making the site were designing the schema
                            so that all information about reviews and companies was stored
                            efficiently, filtering reviews by features that 
                            were stored as arrays, and creating fail-safes in case some database
                            updates failed.
                        </div>
                        <br></br>
                        <div>
                            We published the website with Render, so you can visit it
                            using the link below! Note that this website only works for 
                            Princeton students, but you can still see the home and about page.
                            The Github README.md has a link showing all the pages and a quick
                            tutorial as well.
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>Flask, HTML, CSS, JS/jQuery/AJAX, PostgreSQL
                        <div className="actionsContainer">
                            <a href="https://tiger-jobs.onrender.com/" target="_blank" rel="noreferrer">
                                <button className="demoBtn">
                                    Live Demo &nbsp;
                                    <FontAwesomeIcon icon={faUpRightFromSquare} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <a href="https://github.com/ambrim/TigerJobs" target="_blank" rel="noreferrer">
                                <button className="codeBtn">
                                    Code &nbsp;
                                    <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpenTigerJobs(false)}
                            >
                                Close
                            </button>
                        </div>
                    </Modal>

                    <div className="grid-item">
                        <img src={Princetemon_Logo} alt="Princetemon" onClick={() => setIsOpenPrincetemon(true)}></img>
                        <div>Princetemon</div>
                        <span className="grid-logos">
                            <img className="grid-logo" src={JS} alt="JS"></img>
                        </span>
                    </div>
                    <Modal open={isOpenPrincetemon} 
                    onClose={() => setIsOpenPrincetemon(false)} 
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                        <h1 className="heading">Princetemon</h1>
                        <img src={Princetemon_Desc} alt="Project"></img>
                        <br></br>
                        <div>
                            Princetémon is a Princeton-themed top-down role-playing video game (RPG)
                            that I created with two other Princeton students for our COS426: Computer Graphics class.
                            Inspired by the plot-driven and interactive nature of Pokémon, as well as 
                            some well-known landmarks of Princeton’s campus, Princetémon is an interactive game where
                            the user controls a Princeton student. The user must navigate through several scenes and 
                            complete minigames in order to beat the game. Other features of the game include
                            a map, camera movement, a rewards page, and hilarious dialogue.
                        </div>
                        <br></br>
                        <img src={Princetemon_2} alt="Project Alternate"></img>
                        <br></br>
                        <div>
                            The game was created using only JavaScript, mainly through a library known as ThreeJS.
                            In order to create the game, we had to create and obtain tilesets (using Piskel), create tile maps 
                            for the different scenes (using 2D arrays, HashSets, and ThreeJS Textures), create and code the player movement
                            (using the ThreeJS Sprite), design minigames (using setInterval a lot), implement dialogue 
                            (using ThreeJS BoxGeometry and instance variable updating), and much more.
                        </div>
                        <br></br>
                        <div>
                            It was elected to the Final Project Hall of Fame for the class and received 3 awards: 
                            Best Overall (Student Voted), Best Gameplay (Student Voted), and Meme Award (Instructor Voted).
                            The game is available to play online and is, in my unbiased opinion, better than any 
                            other game in the world, so give it a play and make sure to have fun!
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>JS
                        <div className="actionsContainer">
                            <a href="https://amkumar645.github.io/princetemon/" target="_blank" rel="noreferrer">
                                <button className="demoBtn">
                                    Live Demo &nbsp;
                                    <FontAwesomeIcon icon={faUpRightFromSquare} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                        <a href="https://github.com/amkumar645/princetemon" target="_blank" rel="noreferrer">
                            <button className="codeBtn">
                                Code &nbsp;
                                <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
                            </button>
                        </a>
                        <button
                            className="cancelBtn"
                            onClick={() => setIsOpenPrincetemon(false)}
                        >
                            Close
                        </button>
                        </div>
                    </Modal>
                    <div className="grid-item">
                        <img src={BallAR_Logo} alt="Ball-AR" onClick={() => setIsOpenBallAR(true)}></img>
                        <div>Ball-AR</div>
                        <span className="grid-logos">
                            <img className="grid-logo" src={LensStudio} alt="Lens Studio"></img>
                            <img className="grid-logo" src={JS} alt="JS"></img>
                        </span>
                    </div>
                    <Modal open={isOpenBallAR} 
                        onClose={() => setIsOpenBallAR(false)} 
                        center
                        classNames={{
                            overlay: 'customOverlay',
                            modal: 'customModal',
                        }}>
                        <h1 className="heading">Ball-AR</h1>
                        <img src={BallAR_Desc} alt="Project"></img>
                        <br></br>
                        <div>
                           Ball-AR is an augmented reality (AR) game where two players in the same physical 
                           space attempt to hit each other with virtual dodgeballs overlaid on the 
                           physical world. Players begin by first scanning the surfaces in the shared physical 
                           space. This entails walking around the room and pointing their mobile device at 
                           all physical surfaces, which are then captured by the lens. 
                           From this point on, each user now can throw their augmented ball at their 
                           opponent by tapping the screen. The ball can bounce off of any of the 
                           surfaces before hitting the opponent. If the ball hits three surfaces without 
                           hitting the opponent, the player must collect the ball to throw it again. Players
                           get more points if they ricochet off surfaces before hitting their opponent.
                        </div>
                        <br></br>
                        <img src={BallAR_2} alt="Project Alternate"></img>
                        <br></br>
                        <div>
                            I created this game in order to study the interactions between augmented reality,
                            physical activity, and the surrounding physical environment. Thus, the features
                            of the game (completely designed in
                            Lens Studio) are designed to encourage movement and analysis of the real world.
                            I tested my game with 10 participants.
                        </div>
                        <br></br>
                        <div>
                            The game has almost 1500 plays on Snapchat and is available at the link below.
                            In addition, you can read the paper I wrote at the Github link below.
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>Lens Studio, JavaScript
                        <div className="actionsContainer">
                            <a href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=6d741994c22f405a99808e7b69d6ddf5&metadata=01" target="_blank" rel="noreferrer">
                                <button className="demoBtn">
                                    Live Demo &nbsp;
                                    <FontAwesomeIcon icon={faUpRightFromSquare} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <a href="https://github.com/amkumar645/Ball-AR" target="_blank" rel="noreferrer">
                                <button className="codeBtn">
                                    Code &nbsp;
                                    <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpenBallAR(false)}
                            >
                                Close
                            </button>
                        </div>
                    </Modal>
                    <div className="grid-item">
                        <img src={EyeCheck_Logo} alt="Ball-AR" onClick={() => setIsOpenEyeCheck(true)}></img>
                        <div>Eye-Check</div>
                        <span className="grid-logos">
                            <img className="grid-logo" src={REACT_img} alt="React Native"></img>
                        </span>
                    </div>
                    <Modal open={isOpenEyeCheck} 
                        onClose={() => setIsOpenEyeCheck(false)} 
                        center
                        classNames={{
                            overlay: 'customOverlay',
                            modal: 'customModal',
                        }}>
                        <h1 className="heading">Eye-Check</h1>
                        <img src={EyeCheck_Desc} alt="Project"></img>
                        <br></br>
                        <div>
                           EyeCheck is an app that guides medical students through the Ophthalmology intake process. 
                           It is specifically optimized to aid in low-resource Spanish-speaking clinics.
                           There are 4 app sections based on clinically-validated guidelines: 
                           History, Exam, Pharmacy, Glossary. The history section covers
                           basic questions to ask to patients. The exam section includes instructions
                           for how to conduct an eye exam. The pharmacy section includes the different
                           types of eye drops and when to use each. Lastly, the glossary shows some
                           common terms and their Spanish translations. 
                        </div>
                        <br></br>
                        <div>
                            I created this app for my brother, a medical school student at Brown.
                            He realized this app could aid Spanish-speaking clinics in lower income
                            communities by providing resources and instructions. He sent me the mockup,
                            and I used React Native and Expo to create the app for both iOS and Android.
                            Some challenges were getting access to the flashlight using Expo, nesting
                            tab navigation and stack navigation, and making sure the UI
                            worked for both iOS and Android. 
                        </div>
                        <br></br>
                        <div>
                            The app is currently available on the iOS store at the link below and will
                            be added to the Google Play store soon. In addition, we are in the process
                            of publishing
                            to the Canadian Medical Education Journal and
                            the Journal of American Ophthalmology.
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>React Native, Expo
                        <div className="actionsContainer">
                            <a href="https://apps.apple.com/us/app/eye-check/id1643416389" target="_blank" rel="noreferrer">
                                <button className="demoBtn">
                                    Live Demo &nbsp;
                                    <FontAwesomeIcon icon={faUpRightFromSquare} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <a href="https://github.com/amkumar645/EyeCheck" target="_blank" rel="noreferrer">
                                <button className="codeBtn">
                                    Code &nbsp;
                                    <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpenEyeCheck(false)}
                            >
                                Close
                            </button>
                        </div>
                    </Modal>
                    <div className="grid-item">
                        <img src={Website_Logo} alt="Personal Website" onClick={() => setIsOpenWebsite(true)}></img>
                        <div>Personal Website</div>
                        <span className="grid-logos">
                            <img className="grid-logo" src={REACT_img} alt="React"></img>
                            <img className="grid-logo" src={HTML5} alt="HTML5"></img>
                            <img className="grid-logo" src={SCSS} alt="SCSS"></img>
                            <img className="grid-logo" src={JS} alt="JS"></img>
                        </span>
                    </div>
                    <Modal open={isOpenWebsite} 
                    onClose={() => setIsOpenWebsite(false)} 
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                        <h1 className="heading">Personal Website</h1>
                        <img src={Website_Desc} alt="Project"></img>
                        <br></br>
                        <div>
                            Yes, it is confusing to see pictures of this website on this website.
                            But I did decide against putting pictures of this website's pictures 
                            of this website on this website, so you're welcome. Anyways, this
                            is my new and improved personal portfolio site. My old one was
                            created using Angular, but after half a year, I decided it was time
                            for some improvements, using React.
                        </div>
                        <br></br>
                        <img src={Website_2} alt="Project Alternate"></img>
                        <br></br>
                        <div>
                            The entire website was created in React using HTML, SCSS, and Javascript.
                            In order to create it, I coded the changing color logo using animate.css, 
                            created modal components, and did a lot of styling to make it responsive.
                        </div>
                        <br></br>
                        <div>
                            There's quite a lot of information about me on here, so if you 
                            have any questions, head over to the contact page and fill out the form!
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>React, HTML/SCSS/JS
                        <div className="actionsContainer">
                            <a href="https://github.com/amkumar645/arnav-kumar.com" target="_blank" rel="noreferrer">
                                <button className="codeBtn">
                                    Code &nbsp;
                                    <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpenWebsite(false)}
                            >
                                Close
                            </button>
                        </div>
                    </Modal>
                    <div className="grid-item">
                        <img src={Piel_Logo} alt="Piel" onClick={() => setIsOpenPiel(true)}></img>
                        <div>Piel</div>
                        <span className="grid-logos">
                            <img className="grid-logo" src={Python} alt="Python"></img>
                        </span>
                    </div>
                    <Modal open={isOpenPiel} 
                    onClose={() => setIsOpenPiel(false)} 
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                        <h1 className="heading">Piel</h1>
                        <img src={Piel_Desc} alt="Project"></img>
                        <br></br>
                        <div>
                            Even though AI has the potential to save thousands of lives in healthcare, 
                            it frequently underperforms on minority patients due to a lack of proper 
                            representation in datasets. Skin cancer is no exception. Out of 21 
                            open-access datasets with a over 100,000 skin cancer images, only 10 images 
                            were self-identified as having brown skin.
                        </div>
                        <br></br>
                        <img src={Piel_2} alt="Project Alternate"></img>
                        <br></br>
                        <div>
                            For the Biomedical Entrepreneur Network Hackathon (BENHACKS) run by MLH, my brother 
                            and I decided to remedy this issue by creating an iPhone app that detects 
                            skin cancer in patients across all skin tones. To do this, we collected images 
                            across each of the different skin tones to create a more balanced training set. 
                            Then, we created a VGG-based Convolutional Neural Network to predict a skin cancer 
                            risk score based on a given image. Lastly, we used XCode to integrate the model 
                            into an iPhone app which allowed the user to input a photo, which the model 
                            then predicted a skin cancer risk probability for. In the images above, you can see
                            the look of the app and the results we were able to achieve with the CNN.
                        </div>
                        <br></br>
                        <div>
                            This project went on to win first place at the BEN Hacks competition. You can 
                            download the app and try it for yourself at the link below.
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>Python, Swift
                        <div className="actionsContainer">
                            <a href="https://sites.google.com/brown.edu/piel/home" target="_blank" rel="noreferrer">
                                <button className="demoBtn">
                                    Website &nbsp;
                                    <FontAwesomeIcon icon={faUpRightFromSquare} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpenPiel(false)}
                            >
                                Close
                            </button>
                        </div>
                    </Modal>
                    <div className="grid-item">
                        <img src={Covid_Logo} alt="COVID-19 Prediction" onClick={() => setIsOpenCovid(true)}></img>
                        <div>COVID-19 Prediction</div>
                        <span className="grid-logos">
                            <img className="grid-logo" src={R} alt="R"></img>
                        </span>
                    </div>
                    <Modal open={isOpenCovid} 
                    onClose={() => setIsOpenCovid(false)} 
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                        <h1 className="heading">COVID-19 Prediction</h1>
                        <img src={Covid_Desc} alt="Project"></img>
                        <br></br>
                        <div>
                            This project uses R in Google Colaboratory to predict COVID-19 
                            susceptibility to cases and deaths on the county level in 2022.
                            To predict, a SuperLearner model was used with 110 variables relating
                            to factors such as disease, mask usage, political affiliations,
                            economic status, travel, demographics, and many more. 
                            I predicted four outcomes: total cases, total deaths,
                            cases per 100 people, deaths per 100 people. I found that many of the 
                            places with the highest predicted total cases and total deaths were 
                            the most populated cities in the US, while the highest predicted
                            cases and deaths per capita tended to fall in the midwest. The most important variables
                            for prediction ended up being vaccination and mask usage data, demographics,
                            and political affiliations of counties. 
                        </div>
                        <br></br>
                        <img src={Covid_2} alt="Project Alternate"></img>
                        <br></br>
                        <div>
                            Around 1 GB of data and 110 variables were cleaned and used in a SuperLearner model to 
                            predict the outcomes for 2830 out of 3007 counties in the United States.
                            Over 200 correlation graphs and regressions were created in order to properly explore
                            the data, with some examples shown in the plot above. The RMSE for COVID cases per 100
                            was 5.2 per 100, while the RMSE for COVID deaths per 100 was 0.19 per 100. Thus, on average,
                            the model was off by 5.2 cases and 0.19 deaths per 100 people in every county. 
                        </div>
                        <br></br>
                        <div>
                            This project was conducted during my internship at MITRE and 
                            was demoed to the company. 
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>R
                        <div className="actionsContainer">
                            <a href="https://github.com/amkumar645/COVID-Prediction" target="_blank" rel="noreferrer">
                                <button className="codeBtn">
                                    Code &nbsp;
                                    <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpenCovid(false)}
                            >
                                Close
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Projects;