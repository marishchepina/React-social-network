import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css'


const  Interlocutor= (props) => {
    let path =`/dialogs/${props.id}`
    return(
        <div className="interlocutor">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const  Message = (props) => {
    let path =`/dialogs/${props.id}`
    return(
        <div className="message">
            {props.message}
        </div>
    )
};

const Dialogs = () => {
    return( 
    <div className="dialogs-wrap">
        <div className="interlocutor-wrap">
            <Interlocutor name="Dima" id="1" />
            <Interlocutor name="Lera" id="2" />
            <Interlocutor name="Anya" id="3" />
            <Interlocutor name="Max" id="4" />
            <Interlocutor name="Yarik" id="5" />
        </div> 
        <div className="messages-wrap">
            <Message message="Hi"/>
            <Message message="Hello"/>
            <Message message="How are you?"/>
        </div>
    </div>
    );
}


export default Dialogs;