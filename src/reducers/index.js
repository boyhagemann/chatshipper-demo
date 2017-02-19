import { combineReducers } from 'redux'
import { PLACES_QUERY, PLACES_SEARCH, PLACES_RESULT, PLACES_ERROR } from '../actions/search-places'
import { SAVE_PLACE_START, SAVE_PLACE_SUCCESS, SAVE_PLACE_ERROR} from '../actions/save-place'

const places = (state = {}, action) => {

  switch (action.type) {

    case PLACES_QUERY:
      return {...state, query: action.payload}

    case PLACES_SEARCH:
      return {...state, status: 'searching'}

    case PLACES_RESULT:
      return {...state, status: 'success', results: action.payload}

    case PLACES_ERROR:
      return {...state, status: 'error'}

    default:
      return state
  }

}


const savePlaces = (state = {}, action) => {

  switch (action.type) {

    case SAVE_PLACE_START:
      return {...state, status: 'searching'}

    case SAVE_PLACE_SUCCESS:
      return {...state, status: 'success', results: action.payload}

    case SAVE_PLACE_ERROR:
      return {...state, status: 'error'}

    default:
      return state
  }

}
export default combineReducers({
  places,
  savePlaces
})
