import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/header'
import PostList from "./components/PostList/PostList";
import CommentsList from './components/CommentsList/CommentsList'


class App extends Component {
    render() {
        return (
            <div className="container">
                {/*<Header title={<><h1>Sayer</h1> <h3>World's most used time waster</h3></>}/>*/}
                {/*<PostList/>*/}
                <Header title={<><h2>First Item with cusomized long title</h2></>} image={process.env.PUBLIC_URL + '/image/arr-left.png'}/>
                <CommentsList/>
            </div>


        );
    }
}

export default App;
