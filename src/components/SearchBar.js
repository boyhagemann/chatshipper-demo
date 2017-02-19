import React from 'react'
import { connect } from 'react-redux'
import { updateQuery, searchPlaces } from '../actions/search-places'

const SearchBar = ({updateQuery, searchPlaces}) => {

  const handleKeyPress = e => {
      if (e.key === 'Enter') {
        searchPlaces()
      }
    }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Zoek naar een bedrijf..."
          onChange={e => { updateQuery(e.target.value) }}
          onKeyPress={e => handleKeyPress(e) }
        />
      </div>
        <div>
          <button
            type="submit"
            onClick={e => {
               e.preventDefault()
              searchPlaces()
           }}>Vinden</button>
        </div>
    </div>
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
