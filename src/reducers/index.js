import { combineReducers } from 'redux'
import comments from './comments'
import visibleScreen from './visibleScreen'
import posts from './posts'
import settings from './settings'

const sayer = combineReducers({
  comments,
  visibleScreen,
  posts,
	settings
})

export default sayer
