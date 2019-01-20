import React from 'react'
import './Header.css';

const Header = (props) => {
  return (

      <div className={'Header'}>
        <div className={'Header-img__place'}>
          <img className={'Header-img_icon'}
               src={props.image}
               alt="" width="40" height="40"/>
        </div>

        <div className="Header-top__title">
          <h2> {props.title} </h2>
          <div>
            <span>{props.subTitle}</span>
          </div>
        </div>
      </div>

  );
};

export default Header;

