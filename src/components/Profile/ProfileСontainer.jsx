import React from 'react'
import Profile from './Profile'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'
import withAuthRedirect from '../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.getUserProfile(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
}) // if arrow function return object - round brackets

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)
