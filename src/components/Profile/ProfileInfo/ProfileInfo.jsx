import React from 'react'
import Preloader from '../../Preloader/Preloader'
import './ProfileInfo.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className="profile">
      <img
        className="profile__img"
        src="https://i.pinimg.com/originals/39/03/5e/39035efe9fc23e1a46feb0833718892e.gif"
        alt=""
      />
      <div>
        <div>{props.profile ? props.profile.fullName : `Tolik Sheptman`} </div>
        <span>Student</span>
        <div>Age: 22</div>
      </div>
    </div>
  )
}

export default ProfileInfo
