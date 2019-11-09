import React from 'react'
import { Grid } from '@material-ui/core'
import SearchResults from '../components/SearchResults'
import Search from '../components/Search'
import UserPreview from '../components/UserPreview'

const HomePage = () => (
  <Grid container>
    <Grid item xs={6}>
      <Search />
      <SearchResults />
    </Grid>
    <Grid item xs={6}>
      <UserPreview />
    </Grid>
  </Grid>
)

export default HomePage
