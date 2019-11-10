import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as SearchActions from '../store/actions/searchActions'
import styled from 'styled-components'
import { TextField, Button, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const SearchWrapper = styled.div(
  ({ theme }) => `
  flex: 1;
  margin-right: ${theme.spacing(2)}px;
  position: relative;
  border-radius: ${theme.shape.borderRadius},
  background-color: fade(${theme.palette.common.white}, 0.15);
  
  :hover {
    background-color: fade(${theme.palette.common.white}, 0.25),
  }  
`,
)

const SearchIconWrapper = styled.div(
  ({ theme }) => `
  width: ${theme.spacing(7)}px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`,
)

const SearchInput = styled(TextField)(
  ({ theme }) => `
  color: inherit;

  .MuiInputBase-input{
    padding: ${theme.spacing(1, 1, 1, 7)};
    transition: ${theme.transitions.create('width')};
    width: 100%;
  }
`,
)

const SearchContainer = styled(Grid)`
  padding: ${({ theme }) => theme.spacing(2)}px;
`

const Search: React.FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSearch = () => {
    dispatch(SearchActions.findUserByName(value))
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSearch()
    }
  }

  return (
    <SearchContainer container>
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInput
          fullWidth
          variant="outlined"
          value={value}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
      </SearchWrapper>
      <Grid item>
        <Button onClick={handleSearch} variant="contained" color="primary">
          Search
        </Button>
      </Grid>
    </SearchContainer>
  )
}

export default Search
