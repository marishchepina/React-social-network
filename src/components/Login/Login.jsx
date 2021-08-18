import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { Input } from '../FormControls/FormControls'

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field
          placeholder={'Login'}
          component={Input}
          name={'login'}
          validate={required}
        />
        <br />
        <br />
        <Field
          placeholder={'Password'}
          validate={required}
          component={Input}
          name={'password'}
        />
        <br />
        <br />
        <Field
          type={'checkbox'}
          component={Input}
          name={'rememberMe'}
          validate={required}
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
  const onSubmit = (formData) => {}

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
