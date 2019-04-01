import React from 'react';

function WeatherCard(props) {
  return (
    <div>
      {props.weatherList.dt}
    </div>
  )

}

export default WeatherCard