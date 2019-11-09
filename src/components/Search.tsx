import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as SearchActions from '../store/actions/searchActions'

const Search = (props) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(SearchActions.findUserByName(value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} name="user_search" onChange={handleChange} />
    </form>
  )
}

export default Search
