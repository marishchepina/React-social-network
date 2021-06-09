import React from 'react';
//import './MyPosts.css';
import Post from './Post/Post'


const MyPosts = (props) => {

    let myPostSElements= props.posts.map(p=> <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    return( 
        <div >
            <hr/>
        <textarea>Contenr</textarea>
        <button>Add post</button>
        <button>Remove post</button>
        {myPostSElements}
        </div>
    );
}


export default MyPosts;