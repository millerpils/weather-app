import React from 'react';

function Header(props) {
  return (
    <header>
      <h2>{props.cityName}, {props.countryName}</h2>
    </header>
  )
}

export default Header