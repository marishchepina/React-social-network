import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileСontainer'
import UsersContainer from './components/Users/UsersContainer'
import LoginPage from './components/Login/Login'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <LoginPage />} />
      </div>
    </div>
  )
}

export default App
