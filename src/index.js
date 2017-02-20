import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose  } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import App from './App'

import { fetchSelection } from './actions/fetch-selection'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(ReduxThunk)
))


store.dispatch(fetchSelection())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
