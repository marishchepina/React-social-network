import React from 'react'
import { NavLink } from 'react-router-dom'
import userPhoto from '../../assets/images/user.png'
import axios from 'axios'
import './Users.css'

let Users = (props) => {
  console.log(props)
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  let paginator = pages.map((p) => {
    return (
      <span
        className={props.currentPage === p && `paginator__page--selected`}
        onClick={(e) => {
          props.onPageChanged(p)
        }}
      >
        {p}
      </span>
    )
  })
  return (
    <div>
      <div className="paginator">{paginator}</div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={`/profile/${u.id}`}>
              <img style={{ width: 90 + 'px' }} src={userPhoto} alt="" />
            </NavLink>
            {u.followed ? (
              <button
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      { withCredentials: true }
                    )
                    .then((response) => {
                      if (response.data.resultCode == 0) {
                        props.follow(u.id)
                      }
                    })
                  props.unfollow(u.id)
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      { withCredentials: true }
                    )
                    .then((response) => {
                      if (response.data.resultCode == 0) {
                        props.follow(u.id)
                      }
                    })
                  props.follow(u.id)
                }}
              >
                UnFollow
              </button>
            )}
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
