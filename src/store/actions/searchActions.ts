import * as API from '../../services/api'
import { actions as notifActions } from 'redux-notifications'

const { notifSend } = notifActions

export const SEARCH_SHOW_LOADING = '[search] SHOW_LOADING'
export const SEARCH_HIDE_LOADING = '[search] HIDE_LOADING'
export const SEARCH_SET_RESULTS = '[search] SET_RESULTS'

export const findUserByName = (name) => async (dispatch) => {
  dispatch({
    type: SEARCH_SHOW_LOADING,
  })

  try {
    const users = await API.findUser({ name })

    if (users.length === 0) {
      // TODO: show no results
    }

    dispatch({
      type: SEARCH_SET_RESULTS,
      payload: {
        results: users,
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
      type: SEARCH_HIDE_LOADING,
    })
  }
}
