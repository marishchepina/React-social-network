import registerServiceWorker from './registerServiceWorker';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import  {Provider} from './StoreContext.js'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
        <Provider store = {store}>
            <App />
        </Provider>
        </BrowserRouter>, 
        document.getElementById('root'));
    registerServiceWorker();    
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state); 
});