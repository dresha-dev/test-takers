import * as API from '../../services/api'
import { actions as notifActions } from 'redux-notifications'

const { notifSend } = notifActions

export const SEARCH_SHOW_LOADING = '[search] SHOW_LOADING'
export const SEARCH_HIDE_LOADING = '[search] HIDE_LOADING'
export const SEARCH_SET_RESULTS = '[search] SET_RESULTS'
export const SEARCH_MORE_ITEMS_SHOW_LOADING = '[search] SEARCH_MORE_ITEMS_SHOW_LOADING'
export const SEARCH_MORE_ITEMS_HIDE_LOADING = '[search] SEARCH_MORE_ITEMS_HIDE_LOADING'
export const SEARCH_SET_HAS_NEXT_PAGE = '[search] SEARCH_SET_HAS_NEXT_PAGE'
export const SEARCH_ADD_RESULTS = '[search] SEARCH_ADD_RESULTS'

export const findUserByName = (name: string) => async (dispatch) => {
  dispatch({
    type: SEARCH_SHOW_LOADING,
    payload: {
      value: name,
    },
  })

  try {
    const items = await API.findUser({ name })

    dispatch({
      type: SEARCH_SET_RESULTS,
      payload: {
        items,
      },
    })
  } catch (error) {
    dispatch(
      notifSend({
        message: 'Server error, please try again later',
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

export const loadMore = () => async (dispatch, getState) => {
  const state = getState()
  const name = state.search.value
  const offset = state.search.items.length

  dispatch({
    type: SEARCH_MORE_ITEMS_SHOW_LOADING,
  })

  try {
    const items = await API.findUser({ name, offset })

    if (items.length === 0) {
      dispatch({
        type: SEARCH_SET_HAS_NEXT_PAGE,
        payload: {
          hasNextPage: false,
        },
      })
    }

    dispatch({
      type: SEARCH_ADD_RESULTS,
      payload: {
        items,
      },
    })
  } catch (error) {
    dispatch(
      notifSend({
        message: `Can't load more result`,
        kind: 'error',
        dismissAfter: 2000,
      }),
    )
  } finally {
    dispatch({
      type: SEARCH_MORE_ITEMS_HIDE_LOADING,
    })
  }
}
