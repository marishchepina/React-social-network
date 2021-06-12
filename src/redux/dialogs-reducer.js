const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    interlocutors : [
        {id:1, name: 'Dima'}, 
        {id:2, name: 'Lera'},
        {id:3, name: 'Anton'},
        {id:4, name: 'Ira'},
        {id:5, name: 'Max'},
    ],    
    messages: [
        {id:1, message: 'Hi'}, 
        {id:2, message: 'Hello'},
        {id:3, message: 'How are you'},
        {id:4, message: 'Fine, thank\'s'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default: 
        return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
)

export default dialogsReducer;