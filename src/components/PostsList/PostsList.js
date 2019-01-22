import React, {Component} from 'react'
import './PostsList.css';
import {connect} from 'react-redux'
import Post from '../Post/Post'
import {changeCurrPostId, changeCurrPostTitle} from "../../actions";

class PostsList extends Component {
	componentDidMount() {
		this.props.changeCurrPostId(this.props.posts[0].id)
		this.props.changeCurrPostTitle(this.props.posts[0].title)
	}

	render() {
		return (
			<div className="PostList row">
				{
					this.props.posts.map(post =>
						<Post
							key={post.id}
							postId={post.postId}
							title={post.title}
							commentsCount={post.commentsCount}
						/>
					)
				}
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		posts: state.posts,
		visibleScreen: state.visibleScreen,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeCurrPostId: (currPostId) => {
			dispatch(changeCurrPostId({
				currPostId: currPostId
			}));
		},
		changeCurrPostTitle: (currPostTitle) => {
			dispatch(changeCurrPostTitle({
				currPostTitle: currPostTitle
			}));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);