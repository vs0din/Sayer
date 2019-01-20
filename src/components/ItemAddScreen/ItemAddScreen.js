import React from 'react';
import Header from '../../components/Header/Header'
import ItemAdd from '../../containers/ItemAdd/ItemAdd'

const ItemAddScreen = () => {
    return (
        <>
            <Header
                title={'Create new item'}
                image={process.env.PUBLIC_URL + '/image/arr-left.png'}
            />
            <ItemAdd/>
        </>
    )
}

export default ItemAddScreen