import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../FormControls/FormControls'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          placeholder={'Login'}
          component={Input}
          name={'email'}
          validate={required}
        />
        <br />
        <br />
        <Field
          placeholder={'Password'}
          validate={required}
          component={Input}
          name={'password'}
          type={'password'}
        />
        <br />
        <br />
        <Field
          type={'checkbox'}
          component={Input}
          name={'rememberMe'}
          validate={required}
          name={'remembermMe'}
        />
        <label>Remember me</label>
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'posts' })(LoginForm) //'login' unic name for my form
//store.getState().form

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.remembermMe)
  }

  return props.isAuth ? (
    <Redirect to="/profile" />
  ) : (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  isAuth: state.auth.isAuth
}

export default connect(mapStateToProps, { login })(Login)
