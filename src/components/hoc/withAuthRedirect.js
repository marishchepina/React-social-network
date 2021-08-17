import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
})

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    return props.isAuth ? <Component {...props} /> : <Redirect to="/login" />
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

export default withAuthRedirect
