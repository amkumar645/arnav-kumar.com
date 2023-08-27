import { useState } from 'react';
import './index.scss';
import MITREImg from '../../../assets/images/work/mitre.png';
import RIAImg from '../../../assets/images/work/ria.png';
import AWSImg from '../../../assets/images/work/aws.png';



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
                        <img className="job-img" src={AWSImg} alt="AWS Logo"></img>
                        <br></br>
                        <br></br>     
                        <a className="job-name" href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/what-is-mhub-refactor-spaces.html" target="_blank" rel="noreferrer">Amazon Web Services</a>    
                        <p className="job-title">Software Development Engineer Intern</p>
                        <p className="job-date">June 2023 - August 2023</p>
                        <div className="job-description">
                            At AWS, I worked on the AWS Migration Hub Refactor Spaces team, where I designed, implemented, and demoed
                            an end-to-end feature for the service.
                            <br></br>
                            <br></br>
                            I used Java to provise AWS infrastructure as code, used AWS Lambda packages to 
                            develop the feature logic, and used React and Redux Saga to display my changes on the console. I then 
                            demoed my work to the Migration Hub team. 
                        </div>
                    </li>
                    <li>
                        <img className="job-img" src={MITREImg} alt="MITRE Logo"></img>
                        <br></br>
                        <br></br>     
                        <a className="job-name" href="https://www.mitre.org/" target="_blank" rel="noreferrer">MITRE</a>    
                        <p className="job-title">Software Engineer Intern</p>
                        <p className="job-date">June 2022 - August 2022</p>
                        <div className="job-description">
                            Here, I worked as part of the data analytics team, creating a machine learning project in R
                            and helping test/develop the company data analytics portal, container platform, and 
                            virtual desktops.
                            <br></br>
                            <br></br>
                            As part of my work, I had to learn how to run applications in R with 
                            OpenShift and Kubernetes, went to weekly meetings with the team to discuss
                            work and interactions between our tasks, and presented my work to company
                            employees and leaders at the end of the internship.
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