import {combineReducers} from 'redux'
import catsReducer from './cats_reducer'
import dogsReducer from './dogs_reducer'

const rootReducer = combineReducers({
	// state now has a property called cats!
	cats: catsReducer,
	dogs: dogsReducer
})

export default rootReducer
