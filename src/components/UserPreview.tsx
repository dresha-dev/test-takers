import { useSelector } from 'react-redux'
import { IAppState } from '../store/index'
import UserCard from './UserCard'
import Spinner from './Spinner'

const UserPreview: React.FC = () => {
  const details = useSelector((state: IAppState) => state.user.details)
  const loading = useSelector((state: IAppState) => state.user.loading)

  if (loading) {
    return <Spinner />
  }

  if (details === null) {
    return null
  }

  return <UserCard details={details} />
}

export default UserPreview
