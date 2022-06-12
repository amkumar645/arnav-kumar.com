import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Princetemon_Logo from '../../assets/images/projects/princetemon_1.png';
import Website_Logo from '../../assets/images/projects/website_1.png';
import Piel_Logo from '../../assets/images/projects/piel_1.png';
import NBA_Logo from '../../assets/images/projects/nba_comparer_1.png';

import Princetemon_Desc from '../../assets/images/projects/princetemon_2.png';
import Website_Desc from '../../assets/images/projects/website_3.png';
import Piel_Desc from '../../assets/images/projects/piel_2.png';
import NBA_Desc from '../../assets/images/projects/nba_comparer_2.png';

import Princetemon_2 from '../../assets/images/projects/princetemon_3.png';
import Website_2 from '../../assets/images/projects/website_4.png';
import Piel_2 from '../../assets/images/projects/piel_3.png';
import NBA_2 from '../../assets/images/projects/nba_comparer_3.png';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import JS from '../../assets/skill-icons/js.png';
import REACT_img from '../../assets/skill-icons/react.png';
import HTML5 from '../../assets/skill-icons/html5.png';
// import CSS3 from '../../assets/skill-icons/css3.png';
import SCSS from '../../assets/skill-icons/scss.png';
import Python from '../../assets/skill-icons/python.png';
import Angular from '../../assets/skill-icons/angular.png';
import Bootstrap from '../../assets/skill-icons/bootstrap.png';

import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import Modal from './Modal';


const Projects = () => {
    const [letterClass] = useState('text-animate5');
    const [isOpenPrincetemon, setIsOpenPrincetemon] = useState(false);
    const [isOpenWebsite, setIsOpenWebsite] = useState(false);
    const [isOpenPiel, setIsOpenPiel] = useState(false);
    const [isOpenNBA, setIsOpenNBA] = useState(false);

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
                            Best Overall (Student Voted) Best Gameplay (Student Voted) Meme Award (Instructor Voted).
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
                            This project went on to win first place at the BEN Hacks competition.
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>Python
                        <div className="actionsContainer">
                            <a href="https://sites.google.com/brown.edu/piel/home" target="_blank" rel="noreferrer">
                                <button className="demoBtn">
                                    Live Demo &nbsp;
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
                        <img src={NBA_Logo} alt="NBA Comparer" onClick={() => setIsOpenNBA(true)}></img>
                        <div>NBA Comparer</div>
                        <span className="grid-logos">
                            <img className="grid-logo" src={Angular} alt="Angular"></img>
                            <img className="grid-logo" src={Bootstrap} alt="Bootstrap"></img>
                            <img className="grid-logo" src={Python} alt="Python"></img>
                        </span>
                    </div>
                    <Modal open={isOpenNBA} 
                    onClose={() => setIsOpenNBA(false)} 
                    center
                    classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                        <h1 className="heading">NBA Comparer</h1>
                        <img src={NBA_Desc} alt="Project"></img>
                        <br></br>
                        <div>
                            As a big fan of basketball, I love comparing NBA players statistics 
                            in order to judge who's having a good season and who isn't. One day, 
                            when I was first learning Angular, I decided a great way to practice 
                            was to create a website dedicated to comparing NBA players' statistics 
                            against each other, so I did. As my first ever website, it has some issues, 
                            but the functionality is there.
                        </div>
                        <br></br>
                        <img src={NBA_2} alt="Project Alternate"></img>
                        <br></br>
                        <div>
                            This website, while quite simple, has a lot of underlying processes. 
                            All the data came from merging preexisting datasets in Python, and 
                            all the images were scraped from basketball-reference.com. 
                            The data covers years 1950-2021, allowing the user to compare 
                            any two individual seasons for any two individual players in this range. 
                            In addition, there is a section where the user can view the data 
                            season-by-season, and sort it according to different statistics. 
                            Lastly, due to the changing nature of the NBA, there is a way to compare 
                            adjusted statistics, which standardizes based on season.
                        </div>
                        <br></br>
                        <div>
                            The website and functionality were all done in Angular, and the 
                            data collection and cleaning was done in Python.
                            Check it out using the link below!
                        </div>
                        <br></br>
                        <b>Languages Used:&nbsp;</b>Angular, Bootstrap, HTML/CSS/TS, Python
                        <div className="actionsContainer">
                            <a href="https://nba-comparer.herokuapp.com" target="_blank" rel="noreferrer">
                                <button className="demoBtn">
                                    Live Demo &nbsp;
                                    <FontAwesomeIcon icon={faUpRightFromSquare} color="white"></FontAwesomeIcon>
                                </button>
                            </a>
                        <a href="https://github.com/amkumar645/NBA-Comparer" target="_blank" rel="noreferrer">
                            <button className="codeBtn">
                                Code &nbsp;
                                <FontAwesomeIcon icon={faGithub} color="white"></FontAwesomeIcon>
                            </button>
                        </a>
                        <button
                            className="cancelBtn"
                            onClick={() => setIsOpenNBA(false)}
                        >
                            Close
                        </button>
                        </div>
                    </Modal>
                </div>
            </div>
            {/* 

            {isOpenNBA && <Modal
            setIsOpen={setIsOpenNBA} 
            title="NBA Comparer"
            content="As a big fan of basketball, I love comparing NBA players statistics 
                    in order to judge who's having a good season and who isn't. One day, 
                    when I was first learning Angular, I decided a great way to practice 
                    was to create a website dedicated to comparing NBA players' statistics 
                    against each other, so I did. As my first ever website, it has some issues, 
                    but the functionality is there."
            content2="This website, while quite simple, has a lot of underlying processes. 
                    All the data came from merging preexisting datasets in Python, and 
                    all the images were scraped from basketball-reference.com. 
                    The data covers years 1950-2021, allowing the user to compare 
                    any two individual seasons for any two individual players in this range. 
                    In addition, there is a section where the user can view the data 
                    season-by-season, and sort it according to different statistics. 
                    Lastly, due to the changing nature of the NBA, there is a way to compare 
                    adjusted statistics, which standardizes based on season."
            content3="The website and functionality were all done in Angular, and the 
                    data collection and cleaning was done in Python.
                    Check it out using the link below!"
            image={NBA_Desc}
            image2={NBA_2}
            languages="Angular, Bootstrap, HTML/CSS/TS, Python"
            liveSite="https://nba-comparer.herokuapp.com"
            code="https://github.com/amkumar645/NBA-Comparer">
            </Modal>} */}
        </div>
    );
}

export default Projects;