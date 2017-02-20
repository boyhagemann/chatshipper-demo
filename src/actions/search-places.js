import fetch from 'isomorphic-fetch'

export const PLACES_QUERY = 'places.query'
export const PLACES_SEARCH = 'places.search'
export const PLACES_RESULT = 'places.result'
export const PLACES_ERROR = 'places.error'
export const PLACES_CLEAR = 'places.clear'

export const updateQuery = query => {
  return {
    type: PLACES_QUERY,
    payload: query
  }
}

export const searchPlacesStart = () => {
  return {
    type: PLACES_SEARCH,
    payload: {}
  }
}

export const searchPlacesResult = results => {
  return {
    type: PLACES_RESULT,
    payload: results
  }
}

export const searchPlacesFailed = error => {

  return {
    type: PLACES_ERROR,
    payload: error
  }
}

export const clearPlaces = query => {
  return {
    type: PLACES_CLEAR,
    payload: {}
  }
}

export const searchPlaces = query => (dispatch, getState) => {

  dispatch(searchPlacesStart())

  fetch('http://localhost:3001/search/' + getState().places.query)
    .then( response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server")
        }
        return response.json()
    })
    .then(
      response => dispatch(searchPlacesResult(response.results)),
      error => dispatch(searchPlacesFailed(error))
    )
}
