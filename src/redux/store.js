import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Work', likesCount: 12 },
        { id: 2, message: 'Hobby', likesCount: 7 },
        { id: 3, message: 'Pets', likesCount: 100 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      interlocutors: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Lera' },
        { id: 3, name: 'Anton' },
        { id: 4, name: 'Ira' },
        { id: 5, name: 'Max' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you' },
        { id: 4, message: "Fine, thank's" },
      ],
      newMessageText: '',
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  },
}

export default store
window.store = store
