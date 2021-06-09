import React from 'react';
//import './MyPosts.css';
import Post from './Post/Post'


const MyPosts = (props) => {

    let myPostsElements= props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    return( 
        <div >
            <hr/>
        <textarea>Content</textarea>
        <button>Add post</button>
        <button>Remove post</button>
        {myPostsElements}
        </div>
    );
}


export default MyPosts;