import React, {Component} from 'react'
import './Header.css';
import {connect} from 'react-redux'
import {screenVisibility} from "../../actions";

class Header extends Component {
  _refreshPage() {
    localStorage.removeItem('state');
    window.location.reload();
  }

  render() {
    let curScreen;
    switch (true) {
      case (this.props.visibleScreen.PostsScreenIsVisible):
        curScreen = "postList";
        break;
      case (this.props.visibleScreen.CommentsScreenIsVisible):
        curScreen = "commentsList";
        break;
      case (this.props.visibleScreen.PostAddScreenIsVisible):
        curScreen = "postAdd";
        break;
      default:
        curScreen = "postList";
    }

    return (
        <div className={'Header'}>
          <div className={'row col-xs-12'} style={{'display': 'contents'}}>

            <div className={'row col-xs-10'} style={{'display': 'contents'}}>
              <div className={'Header-img__place ' + curScreen}>
                {/*(this.props.visibleScreen.PostsScreenIsVisible ? 'hidden' : '')*/}

                <img className={'Header-img_icon'}

                     src={this.props.image}
                     alt="" width="40" height="40"
                     onClick={() => this.props.changeScreenVisibility()}
                />
              </div>

              <div className={'Header-top__title'}>
                <h2 className={curScreen}> {this.props.title} </h2>
                {/*{this.props.visibleScreen.PostsScreenIsVisible ? 'bigger' : ''}*/}
                <div>
              <span
                  className={curScreen}>{this.props.subTitle}</span>
                  {/*{this.props.visibleScreen.PostsScreenIsVisible ? 'bigger' : ''}>*/}
                </div>
              </div>
            </div>

            <div className={'row col-xs-2'}
                 onClick= {this._refreshPage}>
              <div className="Avatar Avatar--success">
                <img style={{'height':'auto','width':'80px'}} src="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png" alt=""/>
              </div>
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
        PostAddScreenIsVisible: false,
        CommentsScreenIsVisible: false
      }));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);

