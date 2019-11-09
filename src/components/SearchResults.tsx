import { useSelector } from 'react-redux'
import { IAppState } from '../store/index'
import Spinner from './Spinner'
import InfinitySearchResults from './InfinitySearchResults'

const SearchResults: React.FC = () => {
  const loading = useSelector((state: IAppState) => state.search.loading)
  const value = useSelector((state: IAppState) => state.search.value)

  if(!value){
    return null
  }

  if (loading) {
    return <Spinner />
  }

  return <InfinitySearchResults />
}

export default SearchResults
