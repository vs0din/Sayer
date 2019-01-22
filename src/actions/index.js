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


export const screenVisibility = (choice) => ({
  type: 'CHANGE_SCREEN_VISIBILITY',
  PostsScreenIsVisible: choice.PostsScreenIsVisible,
  ItemsAddScreenIsVisible: choice.ItemsAddScreenIsVisible,
  CommentsScreenIsVisible: choice.CommentsScreenIsVisible
});
