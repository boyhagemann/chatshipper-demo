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
  font-size: 16px;
`

const Button = styled.button`
  background: #06c;
  border: none;
  color: white;
  padding: 7px 10px;
`


const SearchResults = ({status, results = [], saveResult}) => {

  const showStatus = status => {
    if(status === 'searching') return <div>Bezig met zoeken...</div>
  }

  // Save the place when the user clicks the button
  const handleClick = (e, result) =>  {
    e.preventDefault()
    saveResult(result)
  }

  const row = result => (
    <Result key={ result.id }>
      <Heading>{ result.name }</Heading>
      <div>{ result.formatted_address }</div>
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

const mapStateToProps = (state) => {
  return state.places
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveResult: result => {
      dispatch(savePlace(result))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
