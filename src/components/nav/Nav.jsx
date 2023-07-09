import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {BiSolidUser} from 'react-icons/bi'
import {BiSolidBookAlt} from 'react-icons/bi';
import {RiServiceFill} from 'react-icons/ri';
import {AiFillMessage} from 'react-icons/ai';
import './nav.css'; 
import { useState } from 'react';
const Nav = () => {
  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')}className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}className={activeNav==='#about'?'active':''}><BiSolidUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')}className={activeNav==='#experience'?'active':''}><BiSolidBookAlt/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')}className={activeNav==='#portfolio'?'active':''}><RiServiceFill/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}className={activeNav==='#contact'?'active':''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav
