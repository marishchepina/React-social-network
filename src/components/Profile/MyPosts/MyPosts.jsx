import React from 'react';
//import './MyPosts.css';
import Post from './Post/Post'


const MyPosts = () => {
    return( 
        <div >
            <hr/>
        <textarea>Contenr</textarea>
        <button>Add post</button>
        <button>Remove post</button>
        <Post message="Work" likeCount="15" />
        <Post message="Hobby"  likeCount="17" />
        <Post message="Pets"/>
        </div>
    );
}


export default MyPosts;