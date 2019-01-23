
const initialPosts =
	[
		{
			"id": "aaaa",
			"title": "First item with customize",
			"commentsCount": 3
		},
		{
			"id": "bbbb",
			"title": "Second Item",
			"commentsCount": 0
		},
		{
			"id": "cccc",
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
				commentsCount: 0
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
		case 'DELETE_POST':
			return state.filter(c => c.id !== action.id);
		default:
			return state
	}
}

export default posts