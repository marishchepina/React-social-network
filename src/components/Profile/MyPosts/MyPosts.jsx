import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import Post from './Post/Post'

const MyPosts = (props) => {
    let myPostsElements= props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let addPost = () =>{
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () =>{
        let text= newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return( 
        <div >
            <hr/>
        <textarea ref={newPostElement} 
            onChange={onPostChange} 
            value={props.newPostText} />
        <button onClick={addPost}>Add post</button>
        <button>Remove post</button>
        {myPostsElements}
        </div>
    );
}


export default MyPosts;