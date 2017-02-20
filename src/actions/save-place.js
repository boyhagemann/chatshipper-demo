import fetch from 'isomorphic-fetch'
import { fetchSelection } from './fetch-selection'
import { clearPlaces } from './search-places'

export const SAVE_PLACE_START = 'save.place.start'
export const SAVE_PLACE_SUCCESS = 'save.place.success'
export const SAVE_PLACE_ERROR = 'save.place.error'


export const savePlaceStart = () => {
  return {
    type: SAVE_PLACE_START,
    payload: {}
  }
}

export const savePlaceSuccess = results => {
  return {
    type: SAVE_PLACE_SUCCESS,
    payload: results
  }
}

export const savePlaceFailed = error => {

  return {
    type: SAVE_PLACE_ERROR,
    payload: error
  }
}

export const savePlace = result => dispatch => {

  dispatch(savePlaceStart())

  fetch('http://localhost:3001/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result)
  })
    .then( response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server")
        }
        return response.json()
    })
    .then(
      response => {
        dispatch(savePlaceSuccess(response.results))
        dispatch(clearPlaces())
        dispatch(fetchSelection())
      },
      error => dispatch(savePlaceFailed(error))
    )
}
