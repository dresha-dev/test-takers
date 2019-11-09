import { createReducer, handlerHideLoading, handlerShowLoading } from '../../utils/redux'
import { USER_DETAILS_SHOW_LOADING, USER_DETAILS_HIDE_LOADING, USER_DETAILS_SET_RESULTS } from '../actions/userActions'
import { IUser } from '../../models'

interface IUserState {
  loading: boolean
  details: IUser | null
}

const handleSetDetails = (state: IUserState, action) => {
  const { details } = action.payload

  return { ...state, details }
}

const userReducer = createReducer(
  {
    loading: false,
    details: null,
  },
  {
    [USER_DETAILS_SHOW_LOADING]: handlerShowLoading,
    [USER_DETAILS_HIDE_LOADING]: handlerHideLoading,
    [USER_DETAILS_SET_RESULTS]: handleSetDetails,
  },
)

export default userReducer
