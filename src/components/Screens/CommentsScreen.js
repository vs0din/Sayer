import React from 'react';
import './CommentsScreen.css'
import Header from '../../components/Header/Header'
import CommentsList from '../../components/CommentsList/CommentsList'
import CommentAdd from '../../containers/CommentAdd/CommentAdd'
import {connect} from 'react-redux'

const CommentsScreen = (props) => {
	return (
		<div className={'screen gray'}>
			<Header
				title={props.settings.currPostTitle}
				subTitle={'Lorem ipsum dolor sit amet'}
				image={process.env.PUBLIC_URL + '/image/arr-left.png'}
			/>
			<CommentsList/>
			<CommentAdd/>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		settings: state.settings,
	}
}


export default connect(mapStateToProps)(CommentsScreen)