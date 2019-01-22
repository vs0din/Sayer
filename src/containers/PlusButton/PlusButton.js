import React, {Component} from 'react'
import './PlusButton.css'
import {connect} from 'react-redux'
import {screenVisibility} from "../../actions";

class PlusButton extends Component {
  render() {
    return (
        <div className={'PlusButton-img__place'}>
          <img onClick={() => this.props.changeScreenVisibility()}
               className={'PlusButton-img_icon'}
               src={this.props.image}
               alt="" width="40" height="40"/>
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeScreenVisibility: () => {
      dispatch(screenVisibility({
        PostsScreenIsVisible: false,
        ItemsAddScreenIsVisible: true,
        CommentsScreenIsVisible: false
      }));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlusButton)