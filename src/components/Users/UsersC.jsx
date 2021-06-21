import React from 'react'
import * as axios from 'axios'
import './Users.css'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    let paginator = pages.map((p) => {
      return (
        <span
          className={
            this.props.currentPage === p && `paginator__page--selected`
          }
          onClick={(e) => {
            this.onPageChanged(p)
          }}
        >
          {p}
        </span>
      )
    })
    return (
      <div>
        <div className="paginator">{paginator}</div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <img style={{ width: 90 + 'px' }} src={userPhoto} alt="" />
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id)
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id)
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
}

export default Users
