import React from 'react'
import { Grid } from '@material-ui/core'
import SearchResults from '../components/SearchResults'
import Search from '../components/Search'
import UserPreview from '../components/UserPreview'
import styled from 'styled-components'

const Side = styled(Grid)`
  padding: 0 ${({ theme }) => theme.spacing(2)}px;
`

const HomePage = () => (
  <Grid container justify="center">
    <Grid item xs={12} md={8}>
      <Search />
      <Grid container>
        <Side item xs={6}>
          <SearchResults />
        </Side>
        <Side item xs={6}>
          <UserPreview />
        </Side>
      </Grid>
    </Grid>
  </Grid>
)

export default HomePage
