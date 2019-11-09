import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IShortUser } from '../models'
import * as userDetailsActions from '../store/actions/userActions'
import { ListItem, ListItemText } from '@material-ui/core'
import { IAppState } from '../store'
import styled from 'styled-components'
interface IProps {
  user: IShortUser
  style: React.CSSProperties
}

const ItemText = styled(ListItemText)`
  padding: ${({ theme }) => theme.spacing(2)}px;
`

const UserItem: React.FC<IProps> = (props) => {
  const { user, style } = props
  const { firstName, lastName, userId } = user
  const dispatch = useDispatch()
  const activeUserId = useSelector((state: IAppState) => state.user.details && parseInt(state.user.details.userId))
  const fullName = `${firstName} ${lastName}`

  const handleClickUserItem = useCallback(() => {
    dispatch(userDetailsActions.fetchUserDetails(userId))
  }, [userId])

  return (
    <ListItem
      divider
      style={style}
      selected={activeUserId === userId}
      onClick={handleClickUserItem}
      button
      component="a"
    >
      <ItemText primary={fullName} />
    </ListItem>
  )
}

export default UserItem
