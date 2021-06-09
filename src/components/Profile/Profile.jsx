import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    debugger;
    return( 
        <div className = "app-content" >
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}


export default Profile;