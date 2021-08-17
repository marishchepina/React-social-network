import React, { Component } from 'react'
import './ProfileInfo.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activeEditMode() {
    this.setState({ editMode: true })
    // this.props.updateStatus(this.state.status)
    //setState works asynchronously. It will change only when the method finish it's work
  }

  deactivateEditMode() {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    })
  }

  render() {
    return this.state.editMode ? (
      <input
        className="profile__status"
        autoFocus={true}
        value={this.state.status}
        onBlur={this.deactivateEditMode.bind(this)}
        onChange={this.onStatusChange}
      />
    ) : (
      <span
        className="profile__status"
        onDoubleClick={this.activeEditMode.bind(this)}
      >
        {this.props.status || '-------'}
      </span>
    )
  }
}

export default ProfileStatus
