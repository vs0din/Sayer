import React from 'react'
import './header.css';

const Header = (props) => {
    return (
        <div className={'container Header'}>
            <div className={'pull-left'}><img src={props.image} className={'HeaderImg'} /></div>
            <div className={'pull-left'}>{props.title}</div>
        </div>
    );
};

export default Header;