import React from 'react';
//import './MyPosts.css';
import Post from './Post/Post'


const MyPosts = (props) => {

    let myPostsElements= props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let addPost =()=>{
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    return( 
        <div >
            <hr/>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
        <button>Remove post</button>
        {myPostsElements}
        </div>
    );
}


export default MyPosts;