import React from 'react'
import { SocialLinksItems } from './about_data';


const SocialLinks = () => (
    <div className='social-links' >
        {SocialLinksItems?.map((item) => (
            <div key={item.name} className='item' data-aos="zoom-in">
                <a href={item.link} disabled>
                    <div className={`icon ${item.name}`}>
                        {item.icon}
                    </div>
                    <span>{item.title}</span>
                </a>
            </div>
        ))}
    </div>
)
export default SocialLinks