import React from 'react'
import './PostsList.css';
import Post from '../Post/Post'

const  PostsList= (props) => {
    return (
        <div className="container PostList">
            <Post title={<h3>First Item</h3>} commentsCount={3}/>
            <Post title={<h3>Second Item</h3>} commentsCount={5}/>
        </div>
    );
};

export default PostsList;