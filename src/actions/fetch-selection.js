import fetch from 'isomorphic-fetch'

export const FETCH_SELECTION_START = 'fetch.selection.start'
export const FETCH_SELECTION_SUCCESS = 'fetch.selection.success'
export const FETCH_SELECTION_ERROR = 'fetch.selection.error'


export const fetchSelectionStart = () => {
  return {
    type: FETCH_SELECTION_START,
    payload: {}
  }
}

export const fetchSelectionSuccess = response => {
  return {
    type: FETCH_SELECTION_SUCCESS,
    payload: response
  }
}

export const fetchSelectionError = error => {

  return {
    type: FETCH_SELECTION_ERROR,
    payload: error
  }
}

export const fetchSelection = () => dispatch => {

  dispatch(fetchSelectionStart())

  fetch('http://localhost:3001/selection')
    .then( response => {
        if (response.status >= 400) {
            throw new Error("Bad response from server")
        }
        return response.json()
    })
    .then(
      response => {

        // Convert the object to an array
        const items = response
          ? Object.keys(response).map( key => response[key])
          : []

        dispatch(fetchSelectionSuccess(items))
      },
      error => dispatch(fetchSelectionError(error))
    )
}
