import {useState} from 'react';
import { Link } from 'react-router-dom';
import portfolio from './images/ronn.jpg';
import code from './images/code.jpg';
import project1 from './images/project1.jpg';
import project3 from './images/project3.jpg';
import project4 from './images/project4.jpg';
function Home() {


    const [showNavbar, setShowNavbar] = useState('false');
  return (
    <div className="portfolio-container">
        <div className='top-head'>
            <h2>My Portfolio</h2>
            <div className="icon-menu">
                <span className='material-icons-sharp'
                      onClick={() =>setShowNavbar(!showNavbar)}>menu</span>
            </div>
        </div>
        <section className='home-container' id='home'>
            <div className={`navbar ${showNavbar ? 'show': ''}`}>
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#services'>Services</a>
                <a href='#projects'>Project</a>
                <a href='#'>Contact</a>
            </div>
            <div className="introduction">
                <div className="intro-details">
                    <h3>Hello, I'm a Front-end Developer</h3>
                    <h4>Web Designer & UI/UX Designer</h4>
                    <p>I'm passionate about crafting seamless digital experiences through<br/>
                    FrontEnd development, Web design & UI/UX design.I specialize in<br/>
                    building responsive,user-centered interfaces using tools like<br/>
                    React, HTML5, CSS3, Javascript, Tailwind css and Figma<br/>
                    My work blends creativity with functionality to deliver <br/>
                    impactful solutions across Modern Web platforms</p>
                    <div className="connect">
                        <button id='get-btn'>Get in Touch</button>
                        <div className="socials">
                            <a href="https://github.com/Ronn-code" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/naomi-ronn" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin"></i></a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ronnthecoder@gmail.com" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-envelope"></i></a>
                            <a href="https://www.tiktok.com/@ronn.tech" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
                <div className="intro-image">
                    <img src={portfolio}></img>
                </div>
            </div>
        </section>
        <section className='about-container'id='about'>
            <h3>ABOUT ME</h3>
            <div className="about-info">
                <div className="about-image">
                    <img src={code}></img>
                </div>
                <div className="about-details">
                    <p>I'm a passionate Frontend Developer, Web Designer and UI Designer<br></br>
                    to crafting visually stunning and highly functional digital experiences<br/>
                    With strong foundation  in HTML, CSS, Javascript & React, i bring<br/>
                    ideas to life thro Clean, responsive & interactive interfaces.<br/><br/>
                    I'm committed to continuous learning and staying updated with the latest<br/>
                    web development and design trends.My focus is on creating <br/>
                    high-performing websites that enhance user experience & lasting impact.</p>
                </div>
            </div>
            <h4>Skills</h4>
            <div className="skills">
                <div className="progress-bar">
                    <svg>
                        <circle cx='38' cy='38' r='34'></circle>
                    </svg>
                    <div className="language">
                        <p>Html</p>
                    </div>
                </div>
                 <div className="progress-bar">
                    <svg>
                        <circle cx='38' cy='38' r='34'></circle>
                    </svg>
                    <div className="language">
                        <p>Css</p>
                    </div>
                </div>
                 <div className="progress-bar">
                    <svg>
                        <circle cx='38' cy='38' r='34'></circle>
                    </svg>
                    <div className="language">
                        <p>JS</p>
                    </div>
                </div>
                 <div className="progress-bar">
                    <svg>
                        <circle cx='38' cy='38' r='34'></circle>
                    </svg>
                    <div className="language">
                        <p>React</p>
                    </div>
                </div>
                 <div className="progress-bar">
                    <svg>
                        <circle cx='38' cy='38' r='34'></circle>
                    </svg>
                    <div className="language">
                        <p>Figma</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='services-container'id='services'>
            <h3>My Services</h3>
            <div className="services">
                <div className="service-card">
                    <h2>01</h2>
                    <h3>Development</h3>
                    <p>I build fast, responsive &<br/>
                    accessible websites using modern<br/>
                    technologies like React, Javascript,<br/>
                    Html & Css. my focus is on clean code<br/>
                    and smooth user experiences</p>
                    <a href='#'>Learn More</a>
                </div>
                 <div className="service-card">
                    <h2>02</h2>
                    <h3>Mobile/Web Design</h3>
                    <p>I create sleek app designs<br/>
                    for web and mobile platforms<br/>
                    using Figma and design systems<br/>
                    to maintain consistency,usability<br/>
                    and aesthetic appeal across devices</p>
                    <a href='#'>Learn More</a>
                </div>
                 <div className="service-card">
                    <h2>03</h2>
                    <h3>UI/UX Design</h3>
                    <p>I design intuitive interfaces<br/>
                    with user-centered thinking. From<br/>
                    wireframes to high-fidelity designs,<br/>
                    I ensure every screen is functional,<br/>
                    beautiful and easy to use</p>
                    <a href='#'>Learn More</a>
                </div>
            </div>
        </section>
        <section className='projects'id='projects'>
            <h3>Projects Done</h3>
            <div className="my-projects">
                <div className="project-one">
                    <img src={project3}></img>
                    <h4>System Development</h4>
                    <Link to='https://github.com/Ronn-code/eclectics-project'>
                    <h6>Live Demo</h6></Link>
                    <h6>Github</h6>
                </div>
                <div className="project-one">
                    <img src={project4}></img>
                    <h4>Online Car-Wash Website</h4>
                    <Link to='https://online-carwash-system.vercel.app/'>
                    <h6>Live Demo</h6></Link>
                    <Link to='https://github.com/Ronn-code'>
                    <h6>Github</h6></Link>
                </div>
                <div className="project-one">
                    <img src={project1}></img>
                    <h4>E-Commerce Website</h4>
                    <Link to='https://e-commerce-nu-snowy-48.vercel.app/'>
                    <h6>Live Demo</h6></Link>
                    <Link to='https://github.com/Ronn-code'>
                    <h6>Github</h6></Link>
                </div>
            </div>
        </section>
        <section className='footer'>
            <h6>
                <a href="https://github.com/Ronn-code" target="_blank" rel="noopener noreferrer">&copy;  Copyright 2025 | <strong>Personol Portfolio</strong> | developed by Ronn-code</a>.
            </h6>
        </section>
    </div>
  )
}

export default Home
