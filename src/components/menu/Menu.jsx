import React from 'react'
import "./menu.scss";

const menuItems = [
    {
        name: 'intro',
        title: 'Intro',
        link: '#intro'
    },
    {
        name: 'services',
        title: 'My Skills',
        link: '#services'
    },
    {
        name: 'about',
        title: 'Technology',
        link: '#about'
    }
]
export default function Menu({ menuOpen, setMenuOpen }) {

    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                {menuItems.map((item, i) => (
                    <li key={i} onClick={() => setMenuOpen(false)}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}

           
            </ul>
        </div>
    )
}
