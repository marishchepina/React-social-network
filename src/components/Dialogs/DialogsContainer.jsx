import React from 'react'
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withAuthRedirect from '../hoc/withAuthRedirect'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateNewMessageText: (newMessageText) => {
      dispatch(updateNewMessageTextActionCreator(newMessageText))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
