import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {

    return ( 
        <BrowserRouter>
        <div className = "app-wrapper" >
            <Header />
            <Navbar />
            <div className="app-content">
                <Route path="/profile" render={()=><Profile posts={props.posts} />} />
                <Route path="/dialogs" render={()=><Dialogs interlocutors={props.interlocutors} messages={props.messages}/>} />
                <Route path="/news" component={News} />
                <Route path="/music" component={Music} />
                <Route path="/settings" component={Settings} />
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;