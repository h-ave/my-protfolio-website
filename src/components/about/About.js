import React from 'react'
import Services from '../services/Services';
import './about.scss';
import { technolegy } from './about_data';
import MetaComponent from "../MetaComponent";

const tags = [
    " freelancer ",
    " freelance ", "פרילנסר", " פיתוח תוכנה", " אפיקציות ", " דאטה אנליסט"
]
const About = () => {

    return (
        <>
            <MetaComponent
                title={"Hila"}
                description=
                {
                    tags.toString() + " " +
                    technolegy.ProgrammingLanguages.toString() + " " +
                    technolegy.Infrastructure.toString() + " " +
                    technolegy.frameworks.toString() + " " +
                    technolegy.databases.toString()
                }

            />

            <div className='about' id='about'>
                <div className='skills'>
                    <h1 className='title'>Technology</h1>
                    <div>
                        <h3><i className="bi bi-braces-asterisk"></i>Programming Language:</h3>
                        <div className='list-box'>
                            <ul>
                                {
                                    technolegy.ProgrammingLanguages.map((lang, i) => (
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
                                {
                                    technolegy.frameworks.map((lang, i) => (
                                        <li key={i}>{lang}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3><i className="bi bi-cone-striped"></i>Infrastructure:</h3>
                        <div className='list-box'>
                            <ul>
                                {
                                    technolegy.Infrastructure.map((lang, i) => (
                                        <li key={i}>{lang}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3><i className="bi bi-database"></i> DB:</h3>
                        <div className='list-box'>
                            <ul>
                                {
                                    technolegy.databases.map((lang, i) => (
                                        <li key={i}>{lang}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='images-list-auto-scroll' data-options="speed: 2400; autoplay: 1000; items: 4;">
                    <img src="assets/logos/MongoDB_Logo.png" />
                    <img src="assets/logos/React-icon.png" />
                    <img src="assets/logos/Microsoft_SQL_server_logo.png" />
                    <img src="assets/logos/NET_Core_Logo.png" />
                    <img src="assets/logos/nodejs-logo.png" />
                    <img src="assets/logos/postgreSQL.svg" />
                </div>
            </div>
        </>

    )
}

export default About