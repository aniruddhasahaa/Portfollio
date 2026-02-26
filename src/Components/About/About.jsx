import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                I’m a web developer specializing in building responsive websites using 
                HTML, CSS, JavaScript, React, and Bootstrap. My portfolio includes projects
                like a webshop built with React, highlighting my skills in creating user-friendly 
                and dynamic interfaces.</p>
                <p>I develop interactive, responsive websites with React and Bootstrap, showcasing 
                    sleek user experiences and smart solutions in my portfolio.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"30%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"30%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"20%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
      <div className="about-achievement">
            <h1>6+</h1>
            <p>MONTHS OF EXPERIENCE OF WEB DEVELOPMENT</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
