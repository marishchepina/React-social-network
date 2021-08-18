import React, { useEffect } from 'react'
import Profile from './Profile'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import withAuthRedirect from '../hoc/withAuthRedirect'

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match.params.userId
    props.getUserProfile(userId)
    props.getStatus(userId)
  }, [])

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  )
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
}) // if arrow function return object - round brackets

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
