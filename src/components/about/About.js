import React from 'react'
import Services from '../services/Services';
import './about.scss';
import { ProgrammingLanguages } from './about_data';



const About = () => {

    return (
        <div className='about' id='about'>
            {/* <Services /> */}

            {/* <div className='about-header'>
                <p>Hello :) my name is </p>
                <h1>{'< Hila Aveksis />'}</h1>
                <p>Freelance </p>
                <h3> Full-Stack Software developer</h3>
            </div> */}



            <div className='skills'>
                <div>
                    <h3><i className="bi bi-braces-asterisk"></i>Programming Language:</h3>
                    <div className='list-box'>
                        <ul>
                            {
                                ProgrammingLanguages.map((lang, i) => (
                                    <li key={i}>{lang}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <h3><i className="bi bi-gear-wide-connected"></i>frameworks:</h3>
                    <div className='list-box'>
                        <ul>
                            <li>.NET CORE</li>
                            <li>Node.js</li>
                            <li>Angular 2+</li>
                            <li>React.js</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3><i className="bi bi-cone-striped"></i>Infrastructure:</h3>
                    <div className='list-box'>
                        <ul>
                            <li>Azure Devops</li>
                            <li>AWS</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3><i className="bi bi-database"></i> DB:</h3>
                    <div className='list-box'>
                        <ul>
                            <li>MSSQL Server</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About