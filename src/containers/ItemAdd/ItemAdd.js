import React from 'react';
import './ItemAdd.css';

const ItemAdd = (props) => {
    return (
        <div className="ItemAdd row">
            <div className="col-xs-12">
                <div className="input-group input-group-lg">
                    <input type="text" className="form-control BotBorder" placeholder="New item title..."/>
                    <div className="input-group-btn">
                        <img className="ItemAdd-add" alt={""} src={process.env.PUBLIC_URL + '/image/arr-right.png'}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemAdd