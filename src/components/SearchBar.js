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
  padding: 13px 10px 12px;
`

const SearchBar = ({updateQuery, searchPlaces}) => {

  const handleKeyPress = e => {
      if (e.key === 'Enter') {
        searchPlaces()
      }
    }

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="Zoek naar een bedrijf..."
          onChange={e => { updateQuery(e.target.value) }}
          onKeyPress={e => handleKeyPress(e) }
        />
      </InputContainer>
        <ButtonContainer>
          <Button
            type="submit"
            onClick={e => {
               e.preventDefault()
              searchPlaces()
           }}>Vinden</Button>
        </ButtonContainer>
    </Container>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuery: (query) =>  {
      dispatch(updateQuery(query))
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
