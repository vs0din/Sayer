import { v4 } from 'node-uuid'

export const addComment = (text, currPostId) => ({
	type: 'ADD_COMMENT',
	id: v4(),
	text,
	currPostId
});

export const addPost = (title) => ({
	type: 'ADD_POST',
	id: v4(),
	title
});


export const screenVisibility = (choice) => ({
  type: 'CHANGE_SCREEN_VISIBILITY',
  PostsScreenIsVisible: choice.PostsScreenIsVisible,
  PostAddScreenIsVisible: choice.PostAddScreenIsVisible,
  CommentsScreenIsVisible: choice.CommentsScreenIsVisible
});

export const changeCurrPostId = (choice) => ({
	type: 'CHANGE_CURR_POST_ID',
	currPostId: choice,
});

export const changeCurrPostTitle = (choice) => ({
  type: 'CHANGE_CURR_POST_TITLE',
  currPostTitle: choice,
});

export const deletePost = (id) => ({
  type: 'DELETE_POST',
  id
});

export const deleteCommentsByPostId = (postId) => ({
  type: 'DELETE_COMMENTS_BY_POSTID',
  postId
});
