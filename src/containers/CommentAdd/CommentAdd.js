import React from 'react';
import './CommentAdd.css';

const CommentAdd = (props) => {
    return (
        <div className="CommentAdd row">
            <div className="col-xs-12">
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" placeholder="New comment goes here..."/>
                    <div className="input-group-btn">
                        <img className="CommentAdd-add" alt={""} src={process.env.PUBLIC_URL + '/image/arr-right.png'}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentAdd