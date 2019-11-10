import { createReducer, handlerHideLoading } from '../../utils/redux'
import {
  SEARCH_HIDE_LOADING,
  SEARCH_SHOW_LOADING,
  SEARCH_SET_RESULTS,
  SEARCH_MORE_ITEMS_SHOW_LOADING,
  SEARCH_MORE_ITEMS_HIDE_LOADING,
  SEARCH_SET_HAS_NEXT_PAGE,
  SEARCH_ADD_RESULTS,
} from '../actions/searchActions'
import { IShortUser } from '../../models'

interface ISearchState {
  value: string | null
  loading: boolean
  moreItemsLoading: boolean
  hasNextPage: boolean
  items: IShortUser[]
}

const handleShowMoreItemsLoading = (state) => {
  return { ...state, moreItemsLoading: true }
}

const handleHideMoreItemsLoading = (state) => {
  return { ...state, moreItemsLoading: true }
}

const handleSetResults = (state: ISearchState, action) => {
  const { items } = action.payload

  return { ...state, items, hasNextPage: true, moreItemsLoading: false }
}

const handldeSetHasNextPage = (state: ISearchState, action) => {
  const { hasNextPage } = action.payload

  return { ...state, hasNextPage }
}

const handleAddResults = (state: ISearchState, action) => {
  const { items } = action.payload
  const newItems = [...state.items, ...items]

  return { ...state, items: newItems }
}

const handleStartSearch = (state, action) => {
  const { value } = action.payload

  return {
    ...state,
    value,
    loading: true,
    moreItemsLoading: false,
    hasNextPage: true,
    items: [],
  }
}

const searchReducer = createReducer(
  {
    value: null,
    loading: false,
    moreItemsLoading: false,
    hasNextPage: true,
    items: [],
  },
  {
    [SEARCH_SHOW_LOADING]: handleStartSearch,
    [SEARCH_HIDE_LOADING]: handlerHideLoading,
    [SEARCH_SET_RESULTS]: handleSetResults,
    [SEARCH_MORE_ITEMS_SHOW_LOADING]: handleHideMoreItemsLoading,
    [SEARCH_MORE_ITEMS_HIDE_LOADING]: handleShowMoreItemsLoading,
    [SEARCH_SET_HAS_NEXT_PAGE]: handldeSetHasNextPage,
    [SEARCH_ADD_RESULTS]: handleAddResults,
  },
)

export default searchReducer
