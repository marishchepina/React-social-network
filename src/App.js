import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import ProfileContainer from './components/Profile/ProfileСontainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
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
        {/* <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} /> */}
      </div>
    </div>
  )
}

export default App
