import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { updateQuery, searchPlaces } from '../actions/search-places'

const Container = styled.div`
  background: #eee;
  padding: 15px;
  margin: 15px 0;
`

const InputContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 80%;
`

const Input = styled.input`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  font-size: 18px;
`

const ButtonContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 20%;
`

const Button = styled.button`
  width: 100%;
  background: #06c;
  border: none;
  color: white;
  padding: 10px;
  font-size: 18px;
`

const SearchBar = ({updateQuery, searchPlaces}) => {

  // When users push the enter button, trigger the search
  const handleKeyPress = e => {
      if (e.key === 'Enter') {
        searchPlaces()
      }
    }

  // Search for places when the user clicks the button
  const handleClick = e => {
      e.preventDefault()
      searchPlaces()
  }

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Zoek naar een bedrijf..."
          onChange={ updateQuery }
          onKeyPress={ handleKeyPress }
        />
      </InputContainer>
        <ButtonContainer>
          <Button
            type="submit"
            onClick={ handleClick }>Vinden</Button>
        </ButtonContainer>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuery: e =>  {
      dispatch(updateQuery(e.target.value))
    },
    searchPlaces: () => {
      dispatch(searchPlaces())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar)
