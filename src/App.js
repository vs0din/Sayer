import React, {Component} from 'react';
import './App.css';
import PostsScreen from './components/Screens/PostsScreen'
import CommentsScreen from './components/Screens/CommentsScreen'
import PostAddScreen from './components/Screens/PostAddScreen'
import {connect} from 'react-redux'

class App extends Component {

  render() {

    console.log("\n%cTo clean the Store please use the Console: \n%clocalStorage.removeItem('state')\n",
        "color: #0f861f; font-size:18px; font-weight: 800; font-variant: small-caps",
        "background-color: #000; color: #53f802; font-size:24px; font-variant: small-caps",
      )
    ;
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
