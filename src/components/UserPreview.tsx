import { useSelector } from 'react-redux'
import { IAppState } from '../store/index'
import UserDetails from './UserDetails'

const UserPreview: React.FC = () => {
  const details = useSelector((state: IAppState) => state.user.details)

  if (details === null) {
    return null
  }

  return <UserDetails details={details} />
}

export default UserPreview
