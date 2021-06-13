import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = () => {

    return( 
        <div className = "app-content" >
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    );
}


export default Profile;