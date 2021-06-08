import React from 'react';
import MyPosts from './MyPosts/MyPosts';
//import './Profile.css'


const Profile = () => {
    return( 
        <div className = "app-content" >
            <div> 
                <img className = "app-content__ava" src = "https://i.pinimg.com/originals/39/03/5e/39035efe9fc23e1a46feb0833718892e.gif" alt = "" / > 
            </div> 
            <MyPosts />
        </div>
    );
}


export default Profile;