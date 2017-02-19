import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Chatshipper Demo</h1>
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

export default App
