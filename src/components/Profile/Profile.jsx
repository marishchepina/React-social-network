import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className="app-content">
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
