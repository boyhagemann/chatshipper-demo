import React from 'react'
import { connect } from 'react-redux'
import { savePlace } from '../actions/save-place'

const SearchResults = ({status, results = [], saveResult}) => {

  const showStatus = status => {
    if(status === 'searching') return <div>Bezig met zoeken...</div>
  }


  const row = result => (
    <article key={ result.id }>
      <h1>{ result.name }</h1>
      <div>{ result.formatted_address }</div>
      <button
        onClick={e => {
          e.preventDefault()
          saveResult(result)
        }}>Opslaan</button>
    </article>
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
