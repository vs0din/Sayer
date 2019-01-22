const initialState = {
	PostsScreenIsVisible: true,
	ItemsAddScreenIsVisible: false,
	CommentsScreenIsVisible: false
}

const visibleScreen = (state = initialState, action) => {
  switch ( action.type ) {
		case 'CHANGE_SCREEN_VISIBILITY':
      return {
      	...state,
				PostsScreenIsVisible: action.PostsScreenIsVisible,
				ItemsAddScreenIsVisible: action.ItemsAddScreenIsVisible,
				CommentsScreenIsVisible: action.CommentsScreenIsVisible
      }
    default:
      return state
  }
}

export default visibleScreen