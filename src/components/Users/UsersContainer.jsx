import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  getUsersThunkCreator,
} from '../../redux/users-reducer'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import { usersAPI } from '../../api/api'
import withAuthRedirect from '../hoc/withAuthRedirect'
import { compose } from 'redux'

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize)
  }, [])

  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    props.toggleIsFetching(true)

    usersAPI.getUsers(pageNumber, props.pageSize).then((data) => {
      props.toggleIsFetching(false)
      props.setUsers(data.items)
    })
  }

  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={onPageChanged}
        users={props.users}
        follow={props.follow}
        unfollow={props.unfollow}
        followingInProgress={props.followingInProgress}
      />
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    getUsers: getUsersThunkCreator,
  })
)(UsersContainer)

//toggleFollowingProgress -AC we changed it by thunks (getUsers: getUsersThunkCreator), connect create callback from it. Callback will dispatch AC incide.
