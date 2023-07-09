import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg';
import {GiCobweb} from 'react-icons/gi'
import {FaReact} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
const About = () => {
  return (
    <section id='about'>
       <h5>Get to Know</h5>
       <h2>About Me</h2>
       <div className="container about__container">
         <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
         </div>
         <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiCobweb className='about-icon'/>
              <h5>Web Developer</h5>
            </article>
            <article className='about__card'>
              <FaReact className='about-icon'/>
              <h5>React Developer</h5>
            </article>
            <article className='about__card'>
              <DiMongodb className='about-icon'/>
              <h5>Backend Developer</h5>
            </article>
          
          </div>
          <p>As a web developer, I am creating and maintaining websites using programming languages, framework and tools. As a React developer, I am specialized in building web applications using react library.As a backend developer, I am specialized in building server side web applications.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>
       </div>
    </section>
  )
}

export default About
