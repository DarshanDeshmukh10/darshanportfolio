import React from 'react'
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skill I Have </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon' />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>Javascript</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>React</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>C</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>C++</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>JAVA</h4>
            </article>
          </div>
        </div>

        
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>MySQL</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>MongoDB</h4>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='exprience__details-icon'/>
              <h4>NodeJS</h4>
            </article>
            
            </div>
                 
          </div> 
     </div>
      
    </section>
  )
}

export default Experience
