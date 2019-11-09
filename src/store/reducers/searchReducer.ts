import { createReducer, handlerHideLoading, handlerShowLoading } from '../../utils/redux'
import { SEARCH_HIDE_LOADING, SEARCH_SHOW_LOADING, SEARCH_SET_RESULTS } from '../actions/searchActions'
import { IShortUser } from '../../models'

interface ISearchState {
  loading: boolean
  hasMore: boolean
  details: IShortUser[]
}

const handleSetResults = (state: ISearchState, action) => {
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
    [SEARCH_SHOW_LOADING]: handlerShowLoading,
    [SEARCH_HIDE_LOADING]: handlerHideLoading,
    [SEARCH_SET_RESULTS]: handleSetResults,
  },
)

export default searchReducer
