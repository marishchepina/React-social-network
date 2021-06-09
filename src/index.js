import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let postsData=[
    {id: 1,  message:"Work", likesCount:12},
    {id: 1,  message:"Hobby", likesCount:7},
    {id: 1,  message:"Pets", likesCount:100}
];

let interlocutorsData = [
    {id:1, name: 'Dima'}, 
    {id:2, name: 'Lera'},
    {id:3, name: 'Anton'},
    {id:4, name: 'Ira'},
    {id:5, name: 'Max'},
]

let messagesData = [
    {id:1, message: 'Hi'}, 
    {id:2, message: 'Hello'},
    {id:3, message: 'How are you'},
    {id:4, message: 'Fine, thank\'s'},
]

ReactDOM.render(<App posts={postsData} interlocutors={interlocutorsData} messages={messagesData} />, document.getElementById('root'));
registerServiceWorker();
