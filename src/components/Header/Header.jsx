import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
  return (
    <header className="app-header">
      <img
        src="https://i.pinimg.com/originals/7e/40/9f/7e409f4d996cb2f3e1830ba24852673c.gif"
        alt=""
      />
      <div className="loginBlock">
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header
