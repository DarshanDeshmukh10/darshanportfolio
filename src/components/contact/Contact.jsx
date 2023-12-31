import React, { useRef } from 'react'
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from "react-icons/bs"
import {BsWhatsapp} from 'react-icons/bs';
//import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jqkmdim', 'template_n8t79zf', form.current, 'mTXcIZ54S29Ozbpfn')
     e.target.reset();  
      };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>deshmukhdarshan447@gmail.com</h5>
            <a href="mailto:deshmukhdarshan447@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Darshan Deshmukh</h5>
            <a href="https://m.me/darshan.deshmukh.792740" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9146414418</h5>
            <a href="https://api.whatsapp.com/send?phone=9146414418" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Enter your Name' required />
            <input type="email" name="email" placeholder='Enter your Mail' required/>
            <textarea name="message" rows="7" placeholder='Your Message'></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
