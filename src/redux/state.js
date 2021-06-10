import { rerenderEntireTree } from "../render";

const state ={
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state); 
}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;