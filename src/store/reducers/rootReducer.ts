import { combineReducers } from 'redux'
import { reducer as notifReducer } from 'redux-notifications'
import search from './searchReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  search,
  user,
  notifs: notifReducer,
})

export default rootReducer
