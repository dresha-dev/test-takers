import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { IShortUser } from '../models'
import UserPreview from './UserPreview'
import * as userDetailsActions from '../store/actions/userActions'

interface IProps {
  user: IShortUser
}

const UserItem: React.FC<IProps> = (props) => {
  const { user } = props
  const { firstName, lastName, userId } = user
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const handleClickUserItem = useCallback(() => {
    dispatch(userDetailsActions.fetchUserDetails(userId))
  }, [userId])

  return (
    <section onClick={handleClickUserItem}>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </section>
  )
}

export default UserItem
