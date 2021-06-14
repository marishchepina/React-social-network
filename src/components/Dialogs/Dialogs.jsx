import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let newMessageElement = React.createRef();
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

    let interlocutorElements = state.interlocutors.map(i => 
        <Interlocutor name={i.name} id={i.id} key={i.id} />
    );
    let messageElements = state.messages.map(m => 
        <Message message={m.message} id={m.id} key={m.id} />
    );

    let sendMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let newMessageText = newMessageElement.current.value;
        props.updateNewMessageText(newMessageText);
    }


    return( 
        <div className="dialogs-wrap">
            <div className="interlocutor-wrap">
                {interlocutorElements }
            </div> 
            <div className="messages-wrap">
                {messageElements}
            </div>
            <input 
                type="text" 
                ref = {newMessageElement}
                onChange = {onMessageChange}
                value = {props.newMessageText}
            />
            <button 
                className="btn"
                onClick = {sendMessage}
            >
                    Add message
            </button>
        </div>
        );
}


export default Dialogs;