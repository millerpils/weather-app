import React from 'react';

function Header(props) {

  let error;

  if ( props.status !== '200' ) {
    error = <p className="error">{props.error}</p>
  } else {
    error = ""
  }

  return (
    <header>
      <h2>{props.cityName}, {props.countryName}</h2>
      {error}
    </header>
  )
}

export default Header