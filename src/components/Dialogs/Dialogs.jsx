import React from 'react';
import { NavLink } from 'react-router-dom';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'
import './Dialogs.css'

const Dialogs = (props) => {

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

    let interlocutorElements = props.dialogsPage.interlocutors.map(i => 
        <Interlocutor name={i.name} id={i.id} />
    );
    let messageElements = props.dialogsPage.messages.map(m => 
        <Message message={m.message} id={m.id} />
    );



    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(addMessageActionCreator(text));
    };

    let onMessageChange = () => {
        let text= newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
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
                onClick = {addMessage}
            >
                    Add message
            </button>
        </div>
        );
}


export default Dialogs;