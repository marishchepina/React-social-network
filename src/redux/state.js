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
            ]
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

    dispatch(action) { //action -object with property type.
      
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(); 
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export default store;
window.store = store;