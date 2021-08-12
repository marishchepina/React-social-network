import React from 'react'
import Profile from './Profile'
import { usersAPI } from '../../api/api'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    console.log(this.props)
    usersAPI.getProfile(userId).then((data) => {
      debugger
      this.props.setUserProfile(data)
    })
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
}) // if arrow function return object - round brackets

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
) //returns new component from ProfileContainer with store data and url info // WithUrlDataContainerComponent
