import registerServiceWorker from './registerServiceWorker';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
//import  {Provider} from './StoreContext'


    ReactDOM.render(
        <BrowserRouter>
        <Provider store = {store}>
            <App />
        </Provider>
        </BrowserRouter>, 
        document.getElementById('root'));
      


 
// store.subscribe(() => { // connect in dialogsContainer makes subscribe automatically
//     let state = store.getState();
//     rerenderEntireTree(state); 
// });