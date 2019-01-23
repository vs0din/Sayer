const initialState = {
	PostsScreenIsVisible: true,
	PostAddScreenIsVisible: false,
	CommentsScreenIsVisible: false
}

const visibleScreen = (state = initialState, action) => {
  switch ( action.type ) {
		case 'CHANGE_SCREEN_VISIBILITY':
      return {
      	...state,
				PostsScreenIsVisible: action.PostsScreenIsVisible,
				PostAddScreenIsVisible: action.PostAddScreenIsVisible,
				CommentsScreenIsVisible: action.CommentsScreenIsVisible
      }
    default:
      return state
  }
}

export default visibleScreen