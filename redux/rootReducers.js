import { combineReducers } from 'redux'
import { todoReducer } from './todo'

export const rootReducers = {
  todo: todoReducer,
}

export default combineReducers(rootReducers)