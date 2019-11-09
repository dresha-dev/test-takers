import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const middlewares = [thunk]
const composeEnhancers = composeWithDevTools({})

export const initStore = (initialState) =>
  createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))

export type IAppState = ReturnType<typeof rootReducer>
