import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs  from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    
    return (
    <StoreContext.Consumer>
        {(store) => {
                let state = store.getState().dialogsPage;
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
            
                let onMessageChange = (newMessageText) => {
                    let action = updateNewMessageTextActionCreator(newMessageText)
                    store.dispatch(action);
                }
            return <Dialogs 
            //dispatch = {props.dispatch}
            updateNewMessageText = {onMessageChange} 
            addMessage = {addMessage}
            dialogsPage = {state}
           // messages = {store.getState().dialogsPage.messages}
            //interlocutors = {store.getState().dialogsPage.interlocutors}
            //newMessageText = {state.dialogsPage.newMessageText} 
            />
        }}
    </StoreContext.Consumer>)
}

export default DialogsContainer;