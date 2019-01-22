import React from 'react';
import Header from '../../components/Header/Header'
import PostsList from "../../components/PostsList/PostsList";
import PlusButton from '../../containers/PlusButton/PlusButton'

const PostsScreen = (props) => {
	return (
		<>
			<Header
				title={'Sayer'}
				subTitle={'World\'s most used time waster'}
				image={process.env.PUBLIC_URL + '/image/arr-left.png'}
			/>

			<PlusButton
				image={process.env.PUBLIC_URL + '/image/plus.png'}
			/>
      <PostsList/>
		</>
	)
}

export default PostsScreen