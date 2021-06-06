import React from 'react';


const Navbar = () => {
    return( 
        <nav className = "app-nav">
        <div><a href = "#" className="app-nav__link">Profile </a></div>
        <div><a href = "#" className="app-nav__link">Messages</a></div>
        <div><a href = "#" className="app-nav__link">News</a></div>
        <div><a href = "#" className="app-nav__link">Music</a></div>
        <div><a href = "#" className="app-nav__link">Settings</a></div>
    </nav>
    );
}


export default Navbar;