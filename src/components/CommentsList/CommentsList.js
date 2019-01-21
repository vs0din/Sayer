import React from 'react';
import './CommentsList.css';
import { connect } from 'react-redux'
import Comment from '../Comment/Comment'

const CommentsList = ( props ) => {
  let targetrDiv;
  return (
    <div ref={node => {targetrDiv = node}} className={'CommentsList row'}>
     { props.comments.map(comment =>
        <Comment
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
    comments: state.comments
  }
}

export default connect(mapStateToProps)(CommentsList)