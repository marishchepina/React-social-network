import React from 'react'
import './ProfileInfo.css'

const ProfileInfo = () => {
  return (
    <div className="profile">
      <img
        className="profile__img"
        src="https://i.pinimg.com/originals/39/03/5e/39035efe9fc23e1a46feb0833718892e.gif"
        alt=""
      />
      <div>
        <div>Tolik Sheptman</div>
        <span>Student</span>
        <div>Age: 22</div>
      </div>
    </div>
  )
}

export default ProfileInfo
