import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import PostsList from "./components/PostsList/PostsList";
import PlusButton from './containers/PlusButton/PlusButton'
import CommentsList from './components/CommentsList/CommentsList'
import CommentAdd from './containers/CommentAdd/CommentAdd'
import ItemAdd from './containers/ItemAdd/ItemAdd'

import {createStore} from 'redux'
import {Provider} from 'react-redux'


class App extends Component {
    render() {
      return <div className="container">
        {/*<Header*/}
            {/*title={'Sayer'}*/}
            {/*subTitle={'World\'s most used time waster'}*/}
            {/*image={process.env.PUBLIC_URL + '/image/arr-left.png'}*/}
        {/*/>*/}
        {/*<PostsList/>*/}
        {/*<PlusButton*/}
            {/*image={process.env.PUBLIC_URL + '/image/plus.png'}*/}
        {/*/>*/}

        {/*<Header*/}
            {/*title={'First Item with cudsaf dfasd fasdf asdfasdstomized long title'}*/}
            {/*subTitle={'dsafdsf dsakjflkjsahkjf hakjsdlkdj'}*/}
            {/*image={process.env.PUBLIC_URL + '/image/arr-left.png'}*/}
        {/*/>*/}
        {/*<CommentsList/>*/}
        {/*<CommentAdd/>*/}

          <Header
              title={'Create new item'}
              image={process.env.PUBLIC_URL + '/image/arr-left.png'}
          />
          <ItemAdd/>
      </div>;
    }
}

export default App;
