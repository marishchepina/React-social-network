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
        case UPDATE_NEW_MESSAGE_TEXT:{
            return {
                ...state,
                newMessageText: action.newText
            }; 
        }

        case ADD_MESSAGE:{
            let newMessageText = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages,  {id: 5,  message: newMessageText}]
            }; 
        }
          
        default: return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (newMessageText) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: newMessageText
    }
)

export default dialogsReducer;