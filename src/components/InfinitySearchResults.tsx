import React from 'react'
import ListComponent from './ListComponent'
import { useSelector, useDispatch } from 'react-redux'
import { IShortUser } from '../models'
import { IAppState } from '../store'
import * as searchActions from '../store/actions/searchActions'

const InfinitySearchResults = () => {
  const dispatch = useDispatch()
  const items: IShortUser[] = useSelector((state: IAppState) => state.search.items)
  const moreItemsLoading = useSelector((state: IAppState) => state.search.moreItemsLoading)
  const hasNextPage = useSelector((state: IAppState) => state.search.hasNextPage)

  const loadMore = () => {
    dispatch(searchActions.loadMore())
  }

  return (
    <ListComponent items={items} moreItemsLoading={moreItemsLoading} loadMore={loadMore} hasNextPage={hasNextPage} />
  )
}

export default InfinitySearchResults
