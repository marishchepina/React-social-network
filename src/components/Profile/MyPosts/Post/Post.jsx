import React from 'react';
import './Post.css'

const Post = (props) => {
  debugger;
    return( 
    <div className="post">
        <hr/>
        {props.message} 
        <span className="post__likes">{props.likesCount}</span>
    </div>
       
    );
}


export default Post;