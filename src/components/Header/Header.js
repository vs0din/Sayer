import React, {Component} from 'react'
import './Header.css';
import {connect} from 'react-redux'
import {screenVisibility} from "../../actions";

class Header extends Component {
  render() {


  return (
      <div className={'Header'}>
        <div className={'Header-img__place ' +
          (this.props.visibleScreen.PostsScreenIsVisible ? 'hidden' : '')
        }>
          <img className={'Header-img_icon'}

               src={this.props.image}
               alt="" width="40" height="40"
               onClick={() => this.props.changeScreenVisibility()}
          />
        </div>

        <div className={'Header-top__title'}>
          <h2 className={this.props.visibleScreen.PostsScreenIsVisible ? 'bigger' : ''}> {this.props.title} </h2>
          <div>
            <span className={this.props.visibleScreen.PostsScreenIsVisible ? 'bigger' : ''}>{this.props.subTitle}</span>
          </div>
        </div>
      </div>

  );
               }
};

function mapStateToProps(state) {
  return {
    visibleScreen: state.visibleScreen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeScreenVisibility: () => {
      dispatch(screenVisibility({
        PostsScreenIsVisible: true,
        ItemsAddScreenIsVisible: false,
        CommentsScreenIsVisible: false
      }));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

