import React from 'react';

function Header(props) {
  return (
    <div>
      <h2>{props.cityName}, {props.countryName}</h2>
    </div>
  )
}

export default Header