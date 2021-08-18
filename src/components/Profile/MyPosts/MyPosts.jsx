import React from 'react'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../FormControls/FormControls'
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators'

const maxLength100 = maxLengthCreator(100)

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength100]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
)

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ))

  let newPostElement = React.createRef()

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  )
}

export default MyPosts
