import React from 'react';
//import './Post.css'


const Post = (props) => {
    return( 
        <div>
        {props.message} 
        <div>{props.likeCount} </div>
        </div>
    );
}


export default Post;