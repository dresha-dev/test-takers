import { useSelector } from 'react-redux'
import { IShortUser } from '../models'
import { IAppState } from '../store/index'
import UserItem from './UserItem'
import { List } from '@material-ui/core'
import Spinner from './Spinner'

const SearchResults: React.FC = () => {
  const users: IShortUser[] = useSelector((state: IAppState) => state.search.results)
  const loading = useSelector((state: IAppState) => state.search.loading)

  if (loading) {
    return <Spinner />
  }

  return (
    <List component="nav" aria-label="main mailbox folders">
      {users.map((user) => {
        return <UserItem key={user.userId} user={user} />
      })}
    </List>
  )
}

export default SearchResults
