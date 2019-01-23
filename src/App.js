import React, {Component} from 'react';
import './App.css';
import PostsScreen from './components/Screens/PostsScreen'
import CommentsScreen from './components/Screens/CommentsScreen'
import PostAddScreen from './components/Screens/PostAddScreen'
import {connect} from 'react-redux'

class App extends Component {

  render() {

    console.log("\n%c To clean the Store please click on the User Icon ", "background-color: #000; color: #53f802; font-size:24px; font-variant: small-caps")

    return <div className="container">


      {this.props.visibleScreen.PostsScreenIsVisible
          ? <div className={'Screen-Posts'}>
               <PostsScreen />
            </div>
          : null
      }

      {this.props.visibleScreen.PostAddScreenIsVisible
          ? <div className={'Screen-AddPost'}>
              <PostAddScreen />
            </div>
          : null
      }

      {this.props.visibleScreen.CommentsScreenIsVisible
          ? <div className={'Screen-AddComment'}>
              <CommentsScreen />
          </div>
          : null
      }

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
