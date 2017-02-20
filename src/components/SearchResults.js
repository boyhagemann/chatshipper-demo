import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { savePlace } from '../actions/save-place'

const Result = styled.article`
  margin: 5px 0;
  padding: 15px;
  background: white;
`

const Heading = styled.h1`
  margin: 0;
  font-family: Arial;
  font-size: 16px;
`
const Description = styled.p`
  margin: 5px 0;
  font-size: 12px;
  font-family: Arial;
`

const Button = styled.button`
  background: #06c;
  border: none;
  color: white;
  font-family: Arial;
  padding: 7px 10px;
`
const StatusMessage = styled.div`
  margin: 15px;
  font-family: Arial;
`

const SearchResults = ({status, results = [], saveResult}) => {

  // Show a status update when searching
  const showStatus = status => {
    if(status === 'searching') return <StatusMessage>Bezig met zoeken...</StatusMessage>
  }

  // Save the place when the user clicks the button
  const handleClick = (e, result) =>  {
    e.preventDefault()
    saveResult(result)
  }

  // Render one result row
  const row = result => (
    <Result key={ result.id }>
      <Heading>{ result.name }</Heading>
      <Description>{ result.formatted_address }</Description>
      <Button
        onClick={ e => handleClick(e, result) }>Opslaan</Button>
    </Result>
  )

  return (
    <section>
      { showStatus(status) }
      { results.map( result => row(result) ) }
    </section>
  )
}

const mapStateToProps = state => state.places

const mapDispatchToProps = (dispatch) => {
  return {
    saveResult: result => {
      dispatch(savePlace(result))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
