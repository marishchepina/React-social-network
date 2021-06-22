import React from 'react'
import userPhoto from '../../assets/images/user.png'
import './Users.css'

let Users = (props) => {
  console.log(props)
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  console.log(pagesCount)
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
            <img style={{ width: 90 + 'px' }} src={userPhoto} alt="" />
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id)
                }}
              >
                Follow
              </button>
            ) : (
              <button
                onClick={() => {
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
