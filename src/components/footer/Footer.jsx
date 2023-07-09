import React from 'react'
import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Darshan</a>
      <ul className='peramlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/darshan.deshmukh.792740"><BsFacebook/></a>
        <a href="https://www.instagram.com/darshandeshmukh9/"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/darshan-deshmukh-b12bb122b/"><AiFillLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Darshan Deshmukh. All right reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
