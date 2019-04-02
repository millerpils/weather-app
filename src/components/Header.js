import React from 'react';

const Header = (props) => {
  if ( props.status !== '200' ) { 
    return (
      <header>
        <p className="error">{props.error}</p>
      </header>
    )
  } else {
    return (
      <header>
        <h2>{props.cityName}, {props.countryName}</h2>
      </header>
    )
  }
}

export default Header