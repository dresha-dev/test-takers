import { useSelector } from 'react-redux'
import { IShortUser } from '../models'
import { IAppState } from '../store/index'
import UserItem from './UserItem'
import { List } from '@material-ui/core'

const SearchResults: React.FC = () => {
  const users: IShortUser[] = useSelector((state: IAppState) => state.search.results)

  return (
    <List component="nav" aria-label="main mailbox folders">
      {users.map((user) => {
        return <UserItem key={user.userId} user={user} />
      })}
    </List>
  )
}

export default SearchResults
