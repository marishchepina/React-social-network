import React from 'react'
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

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    let userId = this.props.match.params.userId
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
}) // if arrow function return object - round brackets

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  //withAuthRedirect
)(ProfileContainer)
