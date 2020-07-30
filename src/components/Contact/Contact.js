import React from 'react';
import { FaGithub, FaAddressCard, FaAt, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

import cv from '../../images/MonCV.pdf';

const Contact = (props) => {
    //console.log('Contact', props);

    return (
        <div className="container">
            <div className="contact">
                <div className="contact-p">
                    <p>jdeboisvilliers<FaAt />gmail.com</p>
                </div>
                <ul>
                    <li>
                        <div className="contact-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Dumpinator"><FaGithub className="github-icon" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="contact-icon">
                            <a target="_blank" rel="noopener noreferrer" href={cv}>
                                <FaAddressCard className="cv-icon" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="contact-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jdeboisvilliers/">
                                <FaLinkedin className="linkedin-icon"/>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;