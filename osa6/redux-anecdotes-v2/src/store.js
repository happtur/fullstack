import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
    notification: notificationReducer,
    anecdotes: anecdoteReducer
  })

const store = createStore(reducer)

export default store