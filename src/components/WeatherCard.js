import React from 'react'
import DateTime from './DateTime'

function WeatherCard(props) {
  return (
    <div className='card'>
      <DateTime dt={props.weatherList.dt} />
    </div>
  )

}

export default WeatherCard