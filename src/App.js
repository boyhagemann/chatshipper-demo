import React, { Component } from 'react'
import styled from 'styled-components'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import SelectionList from './components/SelectionList'

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  background: #f6f7f8;
  padding: 15px;
`

class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
        <SearchResults />
        <SelectionList />
      </Container>
    )
  }
}

export default App
