import React, {Component} from 'react';
import './App.css';
import PostsScreen from './components/Screens/PostsScreen'
import CommentsScreen from './components/Screens/CommentsScreen'
import ItemsAddScreen from './components/Screens/ItemsAddScreen'
import {connect} from 'react-redux'

class App extends Component {

  render() {

    console.log("%cTo reload app - use localStorage.removeItem('state')", "color: #0f861f; font-size:18px;font-variant: small-caps");
    return <div className="container">

      <div className={!this.props.visibleScreen.PostsScreenIsVisible ? 'hidden' : ''}>
        <PostsScreen />
      </div>
      <div className={!this.props.visibleScreen.ItemsAddScreenIsVisible ? 'hidden' : ''}>
        <ItemsAddScreen/>
      </div>
      <div className={!this.props.visibleScreen.CommentsScreenIsVisible ? 'hidden' : ''}>
        <CommentsScreen/>
      </div>

    </div>;
  }
}

function mapStateToProps(state) {
  return {
    visibleScreen: state.visibleScreen
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
