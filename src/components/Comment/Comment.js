import React from 'react';
import './Comment.css';

const Comment = (props) => {
	return (

		<div className="Comments">
			<div className="media-left">
				<img src={props.commentIconPath} className="Comments__icon media-object avatar" alt="not loaded"
						 title={props.titleText || "< stranger >"}/>
			</div>
			<div className="media-body">
				<h6 className="Comments__text">{props.commentText}</h6>
			</div>
			<hr className="divider"/>
		</div>
	)
}

export default Comment