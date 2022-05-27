import { useState } from 'react';
import './index.scss';
import MITREImg from '../../../assets/images/work/mitre.png';
import ORFEImg from '../../../assets/images/work/orfe.png';
import RIAImg from '../../../assets/images/work/ria.png';



const Work = () => {
    const [letterClass] = useState('text-animate');

    return (
        <div className="work-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>W</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>k&nbsp;</span>
                    <span className={letterClass}>E</span>
                    <span className={letterClass}>x</span>
                    <span className={letterClass}>p</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>r</span>
                    <span className={letterClass}>i</span>
                    <span className={letterClass}>e</span>
                    <span className={letterClass}>n</span>
                    <span className={letterClass}>c</span>
                    <span className={letterClass}>e</span>
                </h1>
                <ul className="job">
                    <li>
                        <img className="job-img" src={MITREImg} alt="MITRE Logo"></img>
                        <br></br>
                        <br></br>     
                        <a className="job-name" href="https://www.mitre.org/" target="_blank" rel="noreferrer">MITRE</a>    
                        <p className="job-title">Software Engineer Intern</p>
                        <p className="job-date">June 2022 - August 2022</p>
                        <div className="job-description">Here is the description</div>
                    </li>
                    <li>
                        <img className="job-img" src={ORFEImg} alt="ORFE Logo"></img>
                        <br></br>
                        <br></br>     
                        <a className="job-name" href="https://orfe.princeton.edu/" target="_blank" rel="noreferrer">ORFE Department</a>    
                        <p className="job-title">ORF245: Undergraduate Course Assistant</p>
                        <p className="job-date">September 2021 - May 2022</p>
                        <div className="job-description">
                            From September 2021 - December 2021, I graded problem sets and gave input on the details of the class for ORF245: Fundamentals of Statistics
                            <br></br>
                            <br></br>
                            From January 2022 - May 2022, I held office hours once a week and helped review problems before the midterm and the final
                        </div>
                    </li>
                    <li>
                        <img className="job-img" src={RIAImg} alt="RIA Logo"></img>
                        <br></br>
                        <br></br>     
                        <a className="job-name" href="https://riaadvisory.com/" target="_blank" rel="noreferrer">RIA Advisory</a>    
                        <p className="job-title">Full-Stack Consultant</p>
                        <p className="job-date">June 2021 - January 2022</p>
                        <div className="job-description">
                            From June 2021 - August 2021, I worked as a Full-Stack Intern. Here, I learned Angular and Spring 
                            in order to make a full-stack recruitment management system by the end of the internship.
                            <br></br>
                            <br></br>
                            From September 2021 - January 2022, I was hired to work part-time as a Full-Stack Consultant due to my accomplishments on the 
                            recruitment management system. Here, I worked with other employees around the globe and applied my skills in Angular to develop the 
                            front-end user interfaces for the validation and external systems of the company's new test automation software. 

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Work;