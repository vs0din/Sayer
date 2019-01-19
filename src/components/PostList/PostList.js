import React from 'react'
import './PostList.css';
import PostListItem from '../PostListItem/PostListItem'

const EmployeeList = (props) => {
    return (
        <div className="container PostList">
            <PostListItem title={<h3>First Item</h3>} commentsCount={3}/>
            <PostListItem title={<h3>Second Item</h3>} commentsCount={5}/>
        </div>
    );
};

export default EmployeeList;