import { createReducer } from '../../utils/redux'
import { USER_DETAILS_SHOW_LOADING, USER_DETAILS_HIDE_LOADING, USER_DETAILS_SET_RESULTS } from '../actions/userActions'

const showLoading = (state) => {
  return { ...state, loading: true }
}

const hideLoading = (state) => {
  return { ...state, loading: true }
}

const handleSetDetails = (state, action) => {
  const { details } = action.payload

  return { ...state, details }
}

const userReducer = createReducer(
  {
    loading: false,
    details: null,
  },
  {
    [USER_DETAILS_SHOW_LOADING]: showLoading,
    [USER_DETAILS_HIDE_LOADING]: hideLoading,
    [USER_DETAILS_SET_RESULTS]: handleSetDetails,
  },
)

export default userReducer
