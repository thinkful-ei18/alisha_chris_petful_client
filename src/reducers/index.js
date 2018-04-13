import { combineReducers } from 'redux'

import * as catReducer from './cat'
import * as dogReducer from './dog'


const rootReducer = combineReducers({
  cat: catReducer,
  dog: dogReducer
})

export default rootReducer;