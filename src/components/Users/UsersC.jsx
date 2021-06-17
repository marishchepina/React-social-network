import React from 'react'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <div>
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
