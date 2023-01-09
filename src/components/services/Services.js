import React from 'react'
import { services } from "../../data/dummydata"
import "./services.scss";


const Services = () => {


  return (
    <>
      <section className='services' id='services'>
        <div className='container'>
          <h1 className='title'>My Skills</h1>
          <div className='content grid3'>
            {services.map((item, i) => (
              <div key={i} className='box' data-aos='flip-left'  >
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        
      </section>
    </>
  )
}

export default Services