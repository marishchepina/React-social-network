const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
}

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      debugger
      return {
        ...state,
        ...action.data, //userId, email, login
        isAuth: true,
      }
    default:
      return state
  }
}

export const setAuthUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
}) //об'єкт action, що буде задіспачений в редюсер

export default authReducer
