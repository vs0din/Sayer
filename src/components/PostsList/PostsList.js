import React from 'react'
import './PostsList.css';
import {connect} from 'react-redux'
import Post from '../Post/Post'

const PostsList = (props) => {
	let targetrDiv;
	{console.log(props.posts)}
	return (
		<div ref={node => {
			targetrDiv = node
		}} className="PostList row">
			{props.posts.map(post =>
				<Post
					key={post.id}
					title={post.title}
					commentsCount={post.commentsCount}
				/>
			)}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		posts: state.posts
	}
}

export default connect(mapStateToProps)(PostsList);