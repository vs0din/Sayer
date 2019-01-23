import React from 'react'
import './Post.css';
import {connect} from 'react-redux'
import {deleteCommentsByPostId,deletePost, changeCurrPostId, changeCurrPostTitle, screenVisibility} from '../../actions';

const Post = (props) => {

  let elPostDelPlace;
  let commentsCount = props.comments.filter((c) => (
      c.postId === props.id
  )).length;

  const mouseOut = () => {
    elPostDelPlace.classList.add('invisible');
  };

  const mouseOver = () => {
    elPostDelPlace.classList.remove('invisible');
  };

  return (
      <div className='Post'>
        <div className='row-mod'
             onMouseOut={() => mouseOut()}
             onMouseOver={() => mouseOver()}>

          <div className='input-group col-xs-12'>
            <div className='Post__title col-xs-8'
                 onClick={() => mouseOver()}
            >{props.title}
            </div>

            <div ref={node => {
              return (elPostDelPlace = node);
            }}
                 className='Post-del__place col-xs-2 invisible'
                 onClick={() => props.delPost(props.id)}>
              <span className='Post__title Post-del__btn'>
                Delete
              </span>
            </div>

            <div className='Post-counter__place col-xs-1'>

              <div className='input-group Post__commentsCount noselect'
                   onClick={() => props.changeCurrPostId(props.id, props.title)}
              >{commentsCount}</div>

            </div>

          </div>

        </div>
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
      dispatch(changeCurrPostId(currPostId));
      dispatch(changeCurrPostTitle(currPostTitle));
      dispatch(screenVisibility({
        PostsScreenIsVisible: false,
        PostAddScreenIsVisible: false,
        CommentsScreenIsVisible: true,
      }));
    },
    delPost: (id) =>{
      dispatch(deletePost(id));
      dispatch(deleteCommentsByPostId(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);