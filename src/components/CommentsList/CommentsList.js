import React from 'react';
import './CommentsList.css';
import {connect} from 'react-redux'
import Comment from '../Comment/Comment'

const CommentsList = (props) => {
	return (
		<div className={'CommentsList row'}>
			{props.comments.filter((c) => (
				c.postId === props.settings.currPostId.currPostId
			)).map(comment =>
				<Comment
					postId={comment.postId}
					key={comment.id}
					commentIconPath={comment.userPic}
					commentText={comment.text}
				/>
			)}
		</div>
	)
}

function mapStateToProps(state) {
	return {
		comments: state.comments,
		settings: state.settings
	}
}

export default connect(mapStateToProps)(CommentsList)