import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import Education from './Education';
import Work from './Work';


const Experience = () => {
    const [letterClass] = useState('text-animate3');

    return (
        <div className="container experience-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    strArray={['W', 'h', 'e', 'r', 'e', ' ', 'h', 'a', 'v', 'e', ' ', 'I', ' ', 'b', 'e', 'e', 'n', '?']}
                    index={15}
                    letterClass={letterClass}
                    >
                    </AnimatedLetters>
                </h1>
                <div className="row">
                    <div className="column">
                        <Work></Work>
                    </div>
                    <div className="column">
                        <Education></Education>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;