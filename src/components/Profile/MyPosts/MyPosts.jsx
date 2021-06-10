import React from 'react';
//import './MyPosts.css';
import Post from './Post/Post'


const MyPosts = (props) => {

    let myPostsElements= props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let addPost =()=>{
        let text = newPostElement.current.value;
        props.addPost(text);
    };

    let onPostChange = () =>{
        let text= newPostElement.current.value;
        props.updateNewPostText(text);
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