import React from 'react'
import './PlusButton.css'

const PlusButton = (props) => {
    return (
        <div className={'PlusButton-img__place'}>
            <img className={'PlusButton-img_icon'}
                 src={props.image}
                 alt="" width="40" height="40"/>
        </div>
    )
}

export default PlusButton