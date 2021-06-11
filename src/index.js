import registerServiceWorker from './registerServiceWorker';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';

let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App 
                state={store._state} 
                dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, 
        document.getElementById('root'));
    registerServiceWorker();    
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);