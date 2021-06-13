import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
    return ( 
        // <BrowserRouter>
        <div className = "app-wrapper" >
            <Header />
            <Navbar />
            <div className="app-content">
                <Route path="/profile" render={()=><Profile store = {props.store} dispatch={props.dispatch} />} />
                <Route path="/dialogs" render={()=><DialogsContainer store = {props.store} dispatch={props.dispatch} />} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
        // </BrowserRouter>
    )
}

export default App;