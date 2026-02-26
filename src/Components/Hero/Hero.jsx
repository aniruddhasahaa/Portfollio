import React from 'react'
import './Hero.css'
import me2 from '../../assets/me2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={me2} alt="" />
      <h1><span>I'm Aniruddha Saha,</span> Web developer based in Bangladesh.</h1>
      <p>I am a web developer from Bangladesh, studied at Ruet 
        on  Department of Electrical and Computer Engineering. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
