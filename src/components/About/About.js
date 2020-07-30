import React from 'react';
import { FaMeteor, FaNodeJs, FaCarrot, FaLeaf, FaDatabase, FaSass, FaMobileAlt } from 'react-icons/fa';
import './About.css'; 

import avatar from '../../images/test.jpg';
import imgCodeCademy from '../../images/codecademy.png';
import imgSololearn from '../../images/sololearn.png';
import imgCodewar from '../../images/codewar.png';

const About = (props) => {
    //console.log('Gallery', props);

    return (
        <div className="container">
            <div className="about" id="js-about" style={{ backgroundImage: `url(${avatar})` }}>
                <div className="content-name">
                    <h1>Jonathan de BOISVILLIERS</h1>
                    <h3>Développeur JS Junior • Paris</h3>
                </div>
                <div className="about-des">
                    <p>Amateur de <span className="tag-js">JavaScript</span> à la vanille sauce ES6 en [ <span className="load">chargement</span> ] pour devenir développeur web. </p>
                </div>
            </div>
            <div className="p-ipssi">
                <p>Actuellement en poste comme développeur web en alternance avec l'<a target="_blank" rel="noopener noreferrer" href="https://www.ecole-multimedia.com/" className="ipssi">École Multimédia</a></p>
            </div>
            <div className="skill">
                <div className="skill-lang">
                    <div className="flex-container">
                        <div className="flex-item">
                            <p className="tag-html">HTML</p>
                            <div className="prog-html"><progress min="0" max="100" value="90"></progress></div>
                        </div>
                        <div className="flex-item">
                            <p className="tag-css">CSS</p>
                            <div className="prog-css"><progress min="0" max="100" value="80"></progress></div>
                        </div>
                        <div className="flex-item">
                            <p className="tag-js">JS</p>
                            <div className="prog-js"><progress min="0" max="100" value="70"></progress></div>
                        </div>
                        <div className="flex-item">
                            <p className="tag-php">PHP</p>
                            <div className="prog-php"><progress min="0" max="100" value="20"></progress></div>
                        </div>
                    </div>
                </div>
                <div className="skill-learn">
                    <ul className="learn-ul">
                        <li>
                            <div className="learn-icon codecademy-icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.codecademy.com/fr/TheDump"><img src={imgCodeCademy} alt="icon CodeCademy" /></a>
                            </div>
                        </li>
                        <li>
                            <div className="learn-icon sololearn-icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.sololearn.com/Profile/7780500"><img src={imgSololearn} alt="icon Sololearn" /></a>
                            </div>
                        </li>
                        <li>
                            <div className="learn-icon codewars-icon">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/users/Dumpinator"><img src={imgCodewar} alt="icon Codewar" /></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="skill-lib">
                    <ul className="flex-container-2">
                        <li className="flex-item">
                            <div className="about_tag position_tag tag-bootstrap">
                                <FaMobileAlt />
                                <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com/" className="tag-bootstrap">Bootstrap</a>
                            </div>
                        </li>
                        <li className="flex-item">
                            <div className="about_tag position_tag tag-sass">
                                <FaSass />
                                <a target="_blank" rel="noopener noreferrer" href="https://sass-lang.com/" className="tag-sass">Sass</a>
                            </div>
                        </li>
                        <li className="flex-item">
                            <div className="about_tag position_tag tag-mysql">
                                <FaDatabase />
                                <a target="_blank" rel="noopener noreferrer" href="https://www.mysql.com/" className="tag-mysql">MySQL</a>
                            </div>
                        </li>
                        <li className="flex-item">
                            <div className="about_tag position_tag tag-mongodb">
                                <FaLeaf />
                                <a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/" className="tag-mongodb">MongoDB</a>
                            </div>
                        </li>
                        <li className="flex-item">
                            <div className="about_tag position_tag tag-vanilla">
                                <FaCarrot />
                                <a target="_blank" rel="noopener noreferrer" href="http://vanilla-js.com/" className="tag-vanilla">VanillaJS</a>
                            </div>
                        </li>
                        <li className="flex-item">
                            <div className="about_tag position_tag tag-meteor">
                                <FaMeteor />
                                <a target="_blank" rel="noopener noreferrer" href="https://www.meteor.com/" className="tag-meteor">MeteorJS</a>
                            </div>
                        </li>
                        <li className="flex-item">
                            <div className="about_tag position_tag tag-mongodb">
                                <FaNodeJs />
                                <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/" className="tag-mongodb">NodeJS</a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default About;