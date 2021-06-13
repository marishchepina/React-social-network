import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

    return( 
        <div className = "app-content" >
            <ProfileInfo />
            <MyPostsContainer
                store = {props.store}
                dispatch = {props.dispatch} 
                //posts={props.profilePage.posts} 
                //newPostText={props.profilePage.newPostText}
                //dispatch = {props.dispatch}
                />
        </div>
    );
}


export default Profile;