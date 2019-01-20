import React, {Component} from 'react';
import './App.css';
import MainScreen from './components/MainScreen/MainScreen'
import CommentsScreen from './components/CommentsScreen/CommentsScreen'
import ItemAddScreen from './components/ItemAddScreen/ItemAddScreen'

import {createStore} from 'redux'
import {Provider} from 'react-redux'


class App extends Component {
    render() {
      return <div className="container">
          <MainScreen/>

          {/*<CommentsScreen/>*/}

          {/*<ItemAddScreen/>*/}
      </div>;
    }
}

export default App;
