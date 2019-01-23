import React from 'react';
import Header from '../../components/Header/Header'
import PostAdd from '../../containers/PostAdd/PostAdd'

const PostAddScreen = (props) => {
  return (
      <div className={'screen'}>
        <Header
            title={'Create new item'}
            image={process.env.PUBLIC_URL + '/image/arr-left.png'}
        />
        <PostAdd/>
      </div>
  )
}

export default PostAddScreen