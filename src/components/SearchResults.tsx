import { useState } from 'react'
import * as API from '../services/api'
import { useSelector } from 'react-redux'
import { IShortUser } from '../models'
import { IAppState } from '../store/index'
import UserItem from './UserItem'

const SearchResults = (props) => {
  const users = useSelector((state: IAppState) => state.search.results)

  return (
    <div>
      {users.map((user) => {
        return <UserItem key={user.userId} user={user} />
      })}
    </div>
  )
}

export default SearchResults
