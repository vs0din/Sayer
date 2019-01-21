import React from 'react'
import './Post.css';

const Post = (props) => {

    // if (props.commentsCount) {
    //
    // }

    return (
        <div className="Post">
            <div className="row">
                <div className="col-xs-12">
                    <div className="input-group input-group-lg">
                        <span className="Post__title">{props.title}</span>
                        <div className="input-group-btn">
                            <span className="input-group Post__commentsCount noselect">{props.commentsCount}</span>
                            {/*<button data-text="Add new" type="button" className="btn Post__delete">Delete</button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>

    );
};

export default Post;