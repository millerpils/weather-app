import React from 'react'
import DateTime from './DateTime'

/** props = weatherList **/

function WeatherCard(props) {
  return (
    <div className='card'>
      <DateTime datetime={props.weatherList.dt} />
      <p>
      {props.weatherList.main.temp_max}&deg;c / {props.weatherList.main.temp_min}&deg;c
      </p>
    </div>
  )

}

export default WeatherCard