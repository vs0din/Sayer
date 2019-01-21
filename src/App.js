import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import PostsScreen from './components/Screens/PostsScreen'
import CommentsScreen from './components/Screens/CommentsScreen'
import ItemsAddScreen from './components/Screens/ItemsAddScreen'


class App extends Component {
    render() {
      return <div className="container">
				<PostsScreen/>

				{/*<CommentsScreen/>*/}

				{/*<ItemsAddScreen/>*/}
      </div>;
    }
}

export default App;
