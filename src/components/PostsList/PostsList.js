import React, {Component} from 'react'
import './PostsList.css';
import {connect} from 'react-redux'
import Post from '../Post/Post'
import {screenVisibility} from "../../actions";

class PostsList extends Component {
  render() {

    return (
        <div className="PostList row"
             onClick={() => this.props.changeScreenVisibility()}
				>
          {
          	this.props.posts.map(post =>
              <Post

                  key={post.id}
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
    visibleScreen: state.visibleScreen
	}
}

function mapDispatchToProps(dispatch) {
  return {
    changeScreenVisibility: () => {
      dispatch(screenVisibility({
        PostsScreenIsVisible: false,
        ItemsAddScreenIsVisible: false,
        CommentsScreenIsVisible: true
      }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);