import { useState } from "react";
import AnimatedLetters from "../../AnimatedLetters";
import './index.scss';
import HTML5 from '../../../assets/skill-icons/html5.png';
import CSS3 from '../../../assets/skill-icons/css3.png';
import SCSS from '../../../assets/skill-icons/scss.png';
import JS from '../../../assets/skill-icons/js.png';
import REACT_img from '../../../assets/skill-icons/react.png';
import Angular from '../../../assets/skill-icons/angular.png';
import Bootstrap from '../../../assets/skill-icons/bootstrap.png';
import Golang from '../../../assets/skill-icons/golang.png';
import MongoDB from '../../../assets/skill-icons/mongodb.png';
import Java from '../../../assets/skill-icons/java.png';
import Python from '../../../assets/skill-icons/python.png';
import C from '../../../assets/skill-icons/c.png';
import R from '../../../assets/skill-icons/r.png';




const Skills = () => {
    const [letterClass] = useState('text-animate');
    return (
        <div className='skill-container'>
             <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray={['W', 'h', 'a', 't', ' ', 'c', 'a', 'n', ' ', 'I', ' ' , 'd', 'o', '?']}
                        index={15}
                        letterClass={letterClass}>
                    </AnimatedLetters>
                </h1>
                <div className="grid-container">
                    <div className="grid-item">
                        <img src={HTML5} alt="HTML5"></img>
                        <div>HTML5</div>
                        <div className="button4 frontend">Frontend</div>
                    </div>
                    <div className="grid-item">
                        <img src={CSS3} alt="CSS3"></img>
                        <div>CSS3</div>
                        <div className="button4 frontend">Frontend</div>
                    </div>
                    <div className="grid-item">
                        <img src={SCSS} alt="SCSS"></img>
                        <div>SCSS</div>
                        <div className="button4 frontend">Frontend</div>
                    </div>
                    <div className="grid-item">
                        <img src={JS} alt="JS"></img>
                        <div>JS</div>
                        <div className="button4 frontend">Frontend</div>
                    </div>
                    <div className="grid-item">
                        <img src={REACT_img} alt="React"></img>
                        <div>React</div>
                        <div className="button4 frontend">Frontend</div>
                    </div>
                    <div className="grid-item">
                        <img src={Angular} alt="Angular"></img>
                        <div>Angular</div>
                        <div className="button4 frontend">Frontend</div>
                    </div>
                    <div className="grid-item">
                        <img src={Bootstrap} alt="Bootstrap"></img>
                        <div>Bootstrap</div>
                        <div className="button4 frontend">Frontend</div>
                    </div>
                    <div className="grid-item">
                        <img src={Golang} alt="Go/Golang"></img>
                        <div>Go/Golang</div>
                        <div className="button4 backend">Backend</div>
                    </div>
                    <div className="grid-item">
                        <img src={MongoDB} alt="MongoDB"></img>
                        <div>MongoDB</div>
                        <div className="button4 backend">Backend</div>
                    </div>
                    <div className="grid-item">
                        <img src={Java} alt="Java"></img>
                        <div>Java</div>
                        <div className="button4 general">General</div>
                    </div>
                    <div className="grid-item">
                        <img src={C} alt="C"></img>
                        <div>C</div>
                        <div className="button4 general">General</div>
                    </div>
                    <div className="grid-item">
                        <img src={Python} alt="Python"></img>
                        <div>Python</div>
                        <div className="button4 data">Data Science</div>
                    </div>
                    <div className="grid-item">
                        <img src={R} alt="R"></img>
                        <div>R</div>
                        <div className="button4 data">Data Science</div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Skills;