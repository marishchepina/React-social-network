const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage:{ 
            posts: [
            {id: 1,  message:"Work", likesCount:12},
            {id: 2,  message:"Hobby", likesCount:7},
            {id: 3,  message:"Pets", likesCount:100},
        ],
        newPostText:'...'
    },
        dialogsPage:{
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
            newMessageText :'...'
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(); 
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(); 
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
)
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }
)

export default store;
window.store = store;