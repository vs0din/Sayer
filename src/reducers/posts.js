
const initialPosts =
	[
		{
			"id": 1,
			"postId": 1,
			"title": "First item with customize",
			"commentsCount": 3
		},
		{
			"id": 2,
			"postId": 2,
			"title": "Second Item",
			"commentsCount": 0
		},
		{
			"id": 3,
			"postId": 3,
			"title": "Third Item(short one)",
			"commentsCount": 0
		}
	];

const post = (state, action) => {
	switch (action.type) {
		case 'ADD_POST':
			return {
				id: action.id,
				title: action.title,
				commentsCount: 0,
				postId: action.postId
			}
		default:
			return state
	}
}

const posts = (state = initialPosts, action) => {
	switch (action.type) {
		case 'ADD_POST':
			return [
				...state,
				post(undefined, action)
			]
		default:
			return state
	}
}

export default posts