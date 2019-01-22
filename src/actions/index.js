import { v4 } from 'node-uuid'

export const addComment = (text) => ({
	type: 'ADD_COMMENT',
	id: v4(),
	text
});

export const addPost = (title) => ({
	type: 'ADD_POST',
	id: v4(),
	title
});