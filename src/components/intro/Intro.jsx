import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import {
  portfolio
} from "../../data";
import SocialLinks from '../about/SocialLinks';

export default function Intro() {
  const { name, skills, role } = portfolio;
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: skills,
    })
  }, [skills]);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
      <h3> Contact Me</h3> 
      <SocialLinks />
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2> Hey There. I'm</h2>
          <h1>{name}</h1>
          <h3>Freelance {role} </h3>
          <h3> <span ref={textRef}></span></h3>
         
        </div>
        <a href="#portfolio">
          <img className="arrow-down" src="assets/imgs/arrow.png" alt="" />
        </a>
      </div>

    </div>
  )
}
