import React, {Component} from 'react';
import './PostAdd.css';
import {connect} from 'react-redux'
import {addPost} from '../../actions'
import {screenVisibility} from "../../actions";

class PostAdd extends Component {
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.props.add(this.newPost);
    }
  };

  render() {
    let input;

    return (
        <div className="PostAdd row">
          <div className="col-xs-12">
            <div className="input-group input-group-lg">
              <input autoFocus
                     ref={node => { this.newPost = node }}
                     onKeyPress={ this.handleKeyPress }
                     type="text"
                     className="form-control PostAdd-input"
                     placeholder="New item title..."/>
              <div className="input-group-btn">
                <img onClick={() => this.props.add(this.newPost)} className="PostAdd-add" alt={""}
                     src={process.env.PUBLIC_URL + '/image/arr-right.png'}/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    add: (el) => {
      dispatch(addPost(el.value));
      el.value = '';
      // Aaaa111!!! - have to refactor
      dispatch(screenVisibility({
        PostsScreenIsVisible: true,
        PostAddScreenIsVisible: false,
        CommentsScreenIsVisible: false
      }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd)