import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const linkClass = 'app-nav__link'
const linkClassActive = 'app-nav__link--active'

const Navbar = () => {
  return (
    <nav className="app-nav">
      <NavLink
        to="/profile"
        className={linkClass}
        activeClassName={linkClassActive}
      >
        Profile{' '}
      </NavLink>
      <NavLink
        to="/dialogs"
        className={linkClass}
        activeClassName={linkClassActive}
      >
        Messages
      </NavLink>
      <NavLink
        to="/users"
        className={linkClass}
        activeClassName={linkClassActive}
      >
        Users
      </NavLink>
      {/* <NavLink
        to="/news"
        className={linkClass}
        activeClassName={linkClassActive}
      >
        News
      </NavLink>
      <NavLink
        to="/music"
        className={linkClass}
        activeClassName={linkClassActive}
      >
        Music
      </NavLink>
      <NavLink
        to="/settings"
        className={linkClass}
        activeClassName={linkClassActive}
      >
        Settings
      </NavLink> */}
    </nav>
  )
}

export default Navbar
