import './HeroimgStyls.css';

import React from 'react'
import introImg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom';
const heroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className="into-img"
            src={introImg} alt="introImg"/>
        </div>
        <div className='content'>
          <p>HI, I'M A FREELANCER.</p>
          <h1>Full Stack Developer.</h1>
          <div>
            <Link to='/project'
            className='btn'>Projects</Link>
            <Link to='/contact'
            className='btn btn-light'>Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default heroImg