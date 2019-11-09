import { createReducer } from '../../utils/redux'
import { SEARCH_HIDE_LOADING, SEARCH_SHOW_LOADING, SEARCH_SET_RESULTS } from '../actions/searchActions'

const showLoading = (state) => {
  return { ...state, loading: true }
}

const hideLoading = (state) => {
  return { ...state, loading: true }
}

const handleSetResults = (state, action) => {
  const { results } = action.payload

  return { ...state, results }
}

const searchReducer = createReducer(
  {
    loading: false,
    hasMore: false,
    results: [],
  },
  {
    [SEARCH_SHOW_LOADING]: showLoading,
    [SEARCH_HIDE_LOADING]: hideLoading,
    [SEARCH_SET_RESULTS]: handleSetResults,
  },
)

export default searchReducer
