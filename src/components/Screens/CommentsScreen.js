import React from 'react';
import Header from '../../components/Header/Header'
import CommentsList from '../../components/CommentsList/CommentsList'
import CommentAdd from '../../containers/CommentAdd/CommentAdd'
import {connect} from 'react-redux'

const CommentsScreen = (props) => {
	return (
		<>
			<Header
				title={props.settings.currPostTitle.currPostTitle}
				subTitle={'Lorem ipsum dolor sit amet'}
				image={process.env.PUBLIC_URL + '/image/arr-left.png'}
			/>
			<CommentsList/>
			<CommentAdd/>
		</>
	)
}

function mapStateToProps(state) {
	return {
		settings: state.settings,
	}
}


export default connect(mapStateToProps)(CommentsScreen)