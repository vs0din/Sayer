import { combineReducers } from 'redux'
import comments from './comments'
import visibleScreen from './visibleScreen'
import posts from './posts'

const sayer = combineReducers({
  comments,
	visibleScreen,
  posts
})

export default sayer
