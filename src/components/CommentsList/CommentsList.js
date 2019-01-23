import React, {Component} from 'react';
import './CommentsList.css';
import {connect} from 'react-redux'
import Comment from '../Comment/Comment'

class CommentsList extends Component {
  componentDidUpdate() {
    this.listEl.scrollTop = this.listEl.scrollHeight;
  }

  render() {
    return (
        <div className={'list row'}
             ref={(el) => { this.listEl = el; }}>
          {this.props.comments.filter((c) => (
              c.postId === this.props.settings.currPostId
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
}

function mapStateToProps(state) {
	return {
		comments: state.comments,
		settings: state.settings
	}
}

export default connect(mapStateToProps)(CommentsList)