import React, {Component} from 'react';
import './PostAdd.css';
import {connect} from 'react-redux'
import {addPost} from '../../actions'

class PostAdd extends Component {
	render() {
		let input;

		return (
			<div className="ItemAdd row">
				<div className="col-xs-12">
					<div className="input-group input-group-lg">
						<input ref={node => {
							input = node
						}} type="text" className="form-control BotBorder" placeholder="New item title..."/>
						<div className="input-group-btn">
							<img onClick={() => this.props.add(input)} className="ItemAdd-add" alt={""}
									 src={process.env.PUBLIC_URL + '/image/arr-right.png'}/></div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return {
		add: (el) => {
			dispatch(addPost(el.value));
			el.value = '';
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd)