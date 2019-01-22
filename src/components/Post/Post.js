import React from 'react'
import './Post.css';
import {connect} from 'react-redux'
import {changeCurrPostId, changeCurrPostTitle, screenVisibility} from '../../actions';

const Post = (props) => {

	let commentsCount = props.comments.filter((c) => (
		c.postId === props.postId
	)).length
	return (
		<div className="Post">
			<div className="row">
				<div className="col-xs-12">
					<div className="input-group input-group-lg">
						<span className="Post__title"
									onClick={() => props.changeCurrPostId(props.postId, props.title)}>{props.title}</span>
						<div className="input-group-btn">
							<span className="input-group Post__commentsCount noselect">{commentsCount}</span>
							{/*<button data-text="Add new" type="button" className="btn Post__delete">Delete</button>*/}
						</div>
					</div>
				</div>
			</div>
			<hr/>
		</div>

	);
};

const mapStateToProps = (state) => {
	return {
		posts: state.posts,
		visibleScreen: state.visibleScreen,
		settings: state.settings,
		comments: state.comments
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeCurrPostId: (currPostId, currPostTitle) => {
			dispatch(changeCurrPostId({
				currPostId: currPostId
			}));
			dispatch(changeCurrPostTitle({
				currPostTitle: currPostTitle
			}));
			dispatch(screenVisibility({
				PostsScreenIsVisible: false,
				ItemsAddScreenIsVisible: false,
				CommentsScreenIsVisible: true,
			}));
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);