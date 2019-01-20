import React from 'react';
import Header from '../../components/Header/Header'
import CommentsList from '../../components/CommentsList/CommentsList'
import CommentAdd from '../../containers/CommentAdd/CommentAdd'

const CommentsScreen = () => {
    return (
        <>
            <Header
                title={'First Item with cudsaf dfasd fasdf asdfasdstomized long title'}
                subTitle={'dsafdsf dsakjflkjsahkjf hakjsdlkdj'}
                image={process.env.PUBLIC_URL + '/image/arr-left.png'}
            />
            <CommentsList/>
            <CommentAdd/>
        </>
    )
}

export default CommentsScreen