import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Field placeholder={'Login'} component={'input'} name={'login'} />
        <br />
        <br />
        <Field placeholder={'Password'} component={'input'} name={'password'} />
        <br />
        <br />
        <Field type={'checkbox'} component={'input'} name={'rememberMe'} />
        <label>Remember me</label>
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) //'login' unic name for my form
//store.getState().form

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmitx} />
    </div>
  )
}

export default Login
