const initialState = {
	currPostId: -1,
	currPostTitle: ''
}

const settings = (state = initialState, action) => {
	switch ( action.type ) {
		case 'CHANGE_CURR_POST_ID':
			return {
				...state,
				currPostId: action.currPostId
			}
		case 'CHANGE_CURR_POST_TITLE':
			return{
				...state,
				currPostTitle: action.currPostTitle
			}
		default:
			return state
	}
}

export default settings