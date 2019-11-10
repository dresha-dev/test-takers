import { useSelector } from 'react-redux'
import { IAppState } from '../store/index'
import Spinner from './Spinner'
import InfinitySearchResults from './InfinitySearchResults'
import { Paper } from '@material-ui/core'

const SearchResults: React.FC = () => {
  const loading = useSelector((state: IAppState) => state.search.loading)
  const value = useSelector((state: IAppState) => state.search.value)

  if (value === null) {
    return null
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <Paper>
      <InfinitySearchResults />
    </Paper>
  )
}

export default SearchResults
