import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer'
import Dialogs  from './Dialogs'

const DialogsContainer = (props) => {
    console.log(props);
 

    let state = props.store.getState();
    console.log(state);
    console.log(state.dialogsPage);
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (newMessageText) => {
        let action = updateNewMessageTextActionCreator(newMessageText)
        props.dispatch(action);
    }
    
    return <Dialogs 
        dispatch = {props.dispatch}
        updateNewMessageText = {onMessageChange} 
        addMessage = {addMessage}
        messages = {state.dialogsPage.messages}
        interlocutors = {state.dialogsPage.interlocutors}
        newMessageText = {state.dialogsPage.newMessageText} 
         />
}

export default DialogsContainer;