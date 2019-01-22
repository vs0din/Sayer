import React, {Component} from 'react';
import './CommentAdd.css';
import {connect} from 'react-redux'
import {addComment} from '../../actions'

class CommentAdd extends Component {
  render() {
    let input;
    return (
        <div className="CommentAdd row">
          <div className="col-xs-12">
            <div className="input-group input-group-lg">
              <input ref={node => {
                input = node
              }} type="text" className="form-control" placeholder="New comment goes here..."/>
              <div className="input-group-btn">
                <img onClick={() => this.props.add(input, this.props.settings.currPostId.currPostId)} className="CommentAdd-add" alt={""}
                     src={process.env.PUBLIC_URL + '/image/arr-right.png'}/>
                {/*<img onClick={ () => dispatch(addComment(input.value)) } className="CommentAdd-add" alt={""} src={process.env.PUBLIC_URL + '/image/arr-right.png'}></img>*/}
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
			let cl = document.querySelector('.CommentsList')
			cl.scrollTop = cl.scrollHeight;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd)