import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IShortUser } from '../models'
import * as userDetailsActions from '../store/actions/userActions'
import { ListItem, ListItemText } from '@material-ui/core'
import { IAppState } from '../store'

interface IProps {
  user: IShortUser
}

const UserItem: React.FC<IProps> = (props) => {
  const { user } = props
  const { firstName, lastName, userId } = user
  const dispatch = useDispatch()
  const activeUserId = useSelector((state: IAppState) => state.user.details && parseInt(state.user.details.userId))

  const handleClickUserItem = useCallback(() => {
    dispatch(userDetailsActions.fetchUserDetails(userId))
  }, [userId])

  return (
    <ListItem selected={activeUserId === userId} onClick={handleClickUserItem} button component="a">
      <ListItemText primary={`${firstName} ${lastName}`} />
    </ListItem>
  )
}

export default UserItem
