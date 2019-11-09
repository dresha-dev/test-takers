import * as API from '../../services/api'
import { actions as notifActions } from 'redux-notifications'

const { notifSend } = notifActions

export const USER_DETAILS_SHOW_LOADING = '[user_details] SHOW_LOADING'
export const USER_DETAILS_HIDE_LOADING = '[user_details] HIDE_LOADING'
export const USER_DETAILS_SET_RESULTS = '[user_details] SET_RESULTS'

export const fetchUserDetails = (userId) => async (dispatch) => {
  dispatch({
    type: USER_DETAILS_SHOW_LOADING,
  })

  try {
    const userDetails = await API.getUserDetails(userId)

    dispatch({
      type: USER_DETAILS_SET_RESULTS,
      payload: {
        details: userDetails,
      },
    })
  } catch (error) {
    // TODO: show error
    dispatch(
      notifSend({
        message: 'Server error',
        kind: 'error',
        dismissAfter: 2000,
      }),
    )
  } finally {
    dispatch({
      type: USER_DETAILS_HIDE_LOADING,
    })
  }
}
