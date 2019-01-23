import React, {Component} from 'react';
import './CommentAdd.css';
import {connect} from 'react-redux'
import {addComment} from '../../actions'

class CommentAdd extends Component {
  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.props.add(this.newComment, this.props.settings.currPostId);
    }
  };

  render() {
    return (
        <div className="CommentAdd row">
          <div className="col-xs-12">
            <div className="input-group input-group-lg">
              <input autoFocus
                     ref={(el) => { this.newComment = el; }}
                     onKeyPress={ this.handleKeyPress }
                     type="text"
                     className="form-control"
                     placeholder="New comment goes here..."/>
              <div className="input-group-btn">
                <img onClick={() => this.props.add(this.newComment, this.props.settings.currPostId)}
                     className="CommentAdd-add" alt={""}
                     src={process.env.PUBLIC_URL + '/image/arr-right.png'}/>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
		settings: state.settings
	}
}

function mapDispatchToProps(dispatch) {
  return {
    add: (el, currPostId) => {
      dispatch(addComment(el.value, currPostId));
      el.value = '';
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd)