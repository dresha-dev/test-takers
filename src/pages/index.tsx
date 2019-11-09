import React from 'react'
import SearchResults from '../components/SearchResults'
import Search from '../components/Search'
import UserPreview from '../components/UserPreview'

const HomePage = () => (
  <div>
    <Search />
    <SearchResults />
    <UserPreview />
  </div>
)

export default HomePage
