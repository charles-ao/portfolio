import React from "react";
import anaconda from "../../assets/stack/anaconda.svg";
import azure from "../../assets/stack/azure.svg";
import bootstrap from "../../assets/stack/bootstrap.svg";
import html from "../../assets/stack/html-x.svg";
import css from "../../assets/stack/css-x.svg";
import d3 from "../../assets/stack/d3.svg";
import figma from "../../assets/stack/figma.svg";
import git from "../../assets/stack/git.svg";
import spark from "../../assets/stack/spark.svg";
import js from "../../assets/stack/js.svg";
import powerbi from "../../assets/stack/powerbi.svg";
import python from "../../assets/stack/python.svg";
import r from "../../assets/stack/r.svg";
import react from "../../assets/stack/react.svg";
import sas from "../../assets/stack/sas.svg";
import sass from "../../assets/stack/sass.svg";
import sql from "../../assets/stack/sql.svg";
import tableau from "../../assets/stack/tableau.svg";
import tensorflow from "../../assets/stack/tensorflow.svg";
import wordpress from "../../assets/stack/wordpress.svg";


const About = () => {
  return (
        <div className="about" id="about">
            <div className="about-head">
                <div className="about-head-name">
                    <h5>About</h5>
                </div>
                <div className="about-head-quote">
                    <h5>“and the geek shall inherit the earth”</h5>
                </div>
            </div>
            <div className="about-body">
                <div className="tech">
                    <h5>Tech Stack</h5>
                    <div className="tech-stack">
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={python} alt='ico'/>
                            </div>
                            <span className="tech-name">Python</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={powerbi} alt='ico'/>
                            </div>
                            <span className="tech-name">Power BI</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={js} alt='ico'/>
                            </div>
                            <span className="tech-name">JavaScript</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={anaconda} alt='ico'/>
                            </div>
                            <span className="tech-name">Anaconda</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={tensorflow} alt='ico'/>
                            </div>
                            <span className="tech-name">TensorFlow</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={r} alt='ico'/>
                            </div>
                            <span className="tech-name">R Language</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={tableau} alt='ico'/>
                            </div>
                            <span className="tech-name">Tableau</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={html} alt='ico'/>
                            </div>
                            <span className="tech-name">HTML</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={react} alt='ico'/>
                            </div>
                            <span className="tech-name">React JS</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={bootstrap} alt='ico'/>
                            </div>
                            <span className="tech-name">Bootstrap</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={css} alt='ico'/>
                            </div>
                            <span className="tech-name">CSS</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={git} alt='ico'/>
                            </div>
                            <span className="tech-name">Git</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={figma} alt='ico'/>
                            </div>
                            <span className="tech-name">Figma</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={sas} alt='ico'/>
                            </div>
                            <span className="tech-name">SAS</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={azure} alt='ico'/>
                            </div>
                            <span className="tech-name">Azure</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={d3} alt='ico'/>
                            </div>
                            <span className="tech-name">D3.js</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={spark} alt='ico'/>
                            </div>
                            <span className="tech-name">Spark</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={sql} alt='ico'/>
                            </div>
                            <span className="tech-name">SQL</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={wordpress} alt='ico'/>
                            </div>
                            <span className="tech-name">Wordpress</span>
                        </div>
                        <div></div>
                        <div className="tech-stack-item">
                            <div className="tech-stack-cont">
                                <img src={sass} alt='ico'/>
                            </div>
                            <span className="tech-name">Sass</span>
                        </div>
                    </div>
                </div>
                <div  className="profile">
                    <h5>Profile</h5>
                    <h3>Hello! I’m Adedunmola Charles Adeiye.</h3>
                    <div className="profile-skills">
                        <div className="profile-skills-item">DATA SCIENCE</div>
                        <div className="profile-skills-item">FRONTEND DEVELOPMENT </div>
                    </div>
                    <p>A self-motivated Tech enthusiast with a strong commitment to collaborations and solutions-oriented problem-solving. I have a strong analytical background, which I continually leverage while working with data to extract hidden insights. My yearning for knowledge is huge, and I am keen on continuously improving my technical skills and constantly contribute positively to the goals of an organization using my analytical and problem-solving skills to improve and add value to the industry and my community at large.</p>
                </div>
            </div>
            
        </div>
  )
};

export default About