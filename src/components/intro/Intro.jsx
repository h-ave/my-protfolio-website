import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import {
  portfolio
} from "../../data";
import SocialLinks from '../about/SocialLinks';
import MetaComponent from "../MetaComponent";


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
    <>
      <div className='intro' id='intro'>
        <div className='left' style={{ direction: 'rtl' }}>
          <h2>על עצמי</h2>
          <p> שמי הילה ואני מפתחת תוכנה לאתרים ואפליקציות משלב האיפיון עד לשלב ההוצאה לאור, תוך דגש על
            ,חווית משתמש, עיצוב ריספונסיבי המותאם לכל סוגי המסכים,
            כתיבת קוד תוכנה נכון ,יעיל ומהיר
            העלאה מאובטחת של האתר תוך ויצירת טסטים.
            <br />
            <br />אז אם אתם בעלי עסק / חברות / יזמים שצרכים
            <br />
            בניית אתר או אפליקצייה מותאמת אישית
            <br />
            המרה של עיצוב מוצר מFigma לReact & HTML & CSS
            <br />
            בניית שרתים, services, API עם Node.js / C# .net
            <br />
            {/* מוזמנים ליצור קשר */}
          </p>
          <h3>  דברו איתי ️</h3>
          <SocialLinks />
        </div>
        <div className='right'>
          <div className="wrapper">
            <h2> Hey There. I'm</h2>
            <h1>{name}👩🏻‍💻</h1>
            <h3>Freelance {role} </h3>
            <h3> <span ref={textRef}></span></h3>

          </div>
          <a href="#portfolio">
            <img className="arrow-down" src="assets/imgs/arrow.png" alt="" />
          </a>
        </div>

      </div>
    </>

  )
}
