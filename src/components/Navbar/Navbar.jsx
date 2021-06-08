import React from 'react';
import  './Navbar.css';


const linkClass = "app-nav__link";
const linkClassActive = "app-nav__link--active"


const Navbar = () => {
    return( 
        <nav className = "app-nav">
        <div><a href = "#" className={linkClass}>Profile </a></div>
        <div><a href = "#" className={`${linkClass} ${linkClassActive}`}>Messages</a></div>
        <div><a href = "#" className={linkClass}>News</a></div>
        <div><a href = "#" className={linkClass}>Music</a></div>
        <div><a href = "#" className={linkClass}>Settings</a></div>
    </nav>
    );
}


export default Navbar;