import { useState } from 'react';
import './index.scss';
import PrincetonImg from '../../../assets/images/education/princeton.png';
import AHSImg from '../../../assets/images/education/ahs.png';



const Education = () => {
    const [letterClass] = useState('text-animate');

    return (
        <div className="education-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>E</span>
                    <span className={letterClass}>d</span>
                    <span className={letterClass}>u</span>
                    <span className={letterClass}>c</span>
                    <span className={letterClass}>a</span>
                    <span className={letterClass}>t</span>
                    <span className={letterClass}>i</span>
                    <span className={letterClass}>o</span>
                    <span className={letterClass}>n</span>
                </h1>
                <ul className="job">
                    <li>
                        <img className="job-img" src={PrincetonImg} alt="Princeton Logo"></img>
                        <br></br>
                        <br></br>   
                        <a className="job-name" href="https://www.princeton.edu/" target="_blank" rel="noreferrer">Princeton University</a>
                        <p className="job-title">BSE in Computer Science</p>
                        <p className="job-date">August 2020 - May 2024</p>
                        <div className="job-description">
                            <div className="awards">
                                Potential Certificates: 
                                <ul>
                                    <li>Statistics and Machine Learning</li>
                                    <li>Optimization and Quantitative Decision Science</li>
                                    <li>Finance</li>
                                </ul>
                                Relevant Courses:
                                <ul>
                                    <li>COS226 - Algorithms and Data Structures</li>
                                    <li>COS217 - Introduction to Programming Systems</li>
                                    <li>ORF309 - Probability and Stochastic Systems</li>
                                    <li>ORF307 - Optimization</li>
                                </ul>
                                Awards and Achievements:
                                <ul>
                                    <li><a href="https://benhacks.org" target="_blank" rel="noreferrer">BENHACKS:</a> First Place</li>
                                    <li><a href="https://www.cs.princeton.edu/courses/archive/spring22/cos426/links#spring-2022-selection" target="_blank" rel="noreferrer">COS426:</a> Best Overall Final Project (Student Voted)</li>

                                </ul>
                                Clubs and Organizations:
                                <ul>
                                    <li><a href="https://club.hoagie.io/" target="_blank" rel="noreferrer">Hoagie Club:</a> Software Developer</li>
                                    <li>Princeton Data Science</li>
                                </ul>
                            </div>
                        </div>                    </li>
                    <li>
                        <img className="job-img" src={AHSImg} alt="AHS Logo"></img>
                        <br></br>
                        <br></br>   
                        <a className="job-name" href="https://www.princeton.edu/" target="_blank" rel="noreferrer">American Heritage</a>
                        <p className="job-title">High School Degree</p>
                        <p className="job-date">August 2016 - June 2020</p>
                        <div className="job-description">
                            <div className="awards">
                                Awards and Achievements:
                                <ul>
                                    <li>Valedictorian - 6.18 GPA</li>
                                    <li>National Merit Scholar</li>
                                    <li>Presidential Scholar Candidate</li>
                                    <li>National AP Scholar</li>
                                </ul>
                                Clubs and Organizations:
                                <ul>
                                    <li>Mu Alpha Theta (Competitive Math) - Vice President</li>
                                    <li>Linguistics - President</li>
                                    <li>Physics Bowl Team Member</li>
                                    <li>Science Bowl</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Education;
