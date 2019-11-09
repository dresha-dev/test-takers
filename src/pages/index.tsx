import React from 'react'
import SearchResults from '../components/SearchResults'
import Search from '../components/Search'
import UserPreview from '../components/UserPreview'
import { Grid } from '@material-ui/core'

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
