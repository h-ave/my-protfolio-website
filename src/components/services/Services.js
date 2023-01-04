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

        <div className='images-list-auto-scroll' data-options="speed: 2400; autoplay: 1000; items: 4;">
          <img src="assets/logos/MongoDB_Logo.png" />
          <img src="assets/logos/React-icon.png" />
          <img src="assets/logos/Microsoft_SQL_server_logo.png" />
          <img src="assets/logos/NET_Core_Logo.png" />
          <img src="assets/logos/nodejs-logo.png" />
          <img src="assets/logos/postgreSQL.svg" />
        </div>
      </section>
    </>
  )
}

export default Services