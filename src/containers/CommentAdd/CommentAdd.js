import React from 'react';
import './CommentAdd.css';

const CommentAdd = (props) => {
    return (
        <div className="CommentAdd">
            <div className="col-xs-12">
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control" placeholder="New comment goes here..."/>
                    <div className="input-group-btn">
                        <button id="btnNew" data-text="Add new" type="button" className="btn CommentAdd-add" style={{background: 'url('+process.env.PUBLIC_URL + '/image/arr-right.png'+') 3px 5px no-repeat'}}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentAdd