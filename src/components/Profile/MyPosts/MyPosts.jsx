import React from 'react';
import Post from './Post/Post'

const MyPosts = (props) => {

    let myPostsElements= props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text= newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return( 
        <div>
            <hr/>
            <textarea 
                ref={newPostElement} 
                onChange={onPostChange} 
                value={props.newPostText} />
            <button onClick={onAddPost}>Add post</button>
            <button>Remove post</button>
            {myPostsElements}
        </div>
    );
}


export default MyPosts;