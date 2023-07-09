import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.webp';
import IMG2 from '../../assets/portfolio2.jpg';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Notes" />
          </div>
          <h3>E-Notes</h3>
          <a href="https://github.com/DarshanDeshmukh10/Enotes" target='_blank'className='btn'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="E-commerce" />
          </div>
          <h3>E-commerce website</h3>
          <a href="https://github.com" target='_blank'className='btn'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="E-commerce" />
          </div>
          <h3>TextUtiles</h3>
          <a href="https://github.com" target='_blank'className='btn'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
