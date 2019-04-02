import React from 'react'
import DateTime from './DateTime'

/** props = weatherList **/

function WeatherCard(props) {
  let classList = 'card ' + props.weatherList.weather[0].main.toLowerCase()

  return (
    <div className={classList}>
      <DateTime datetime={props.weatherList.dt} />
      <p>
        {props.weatherList.main.temp_max}&deg;c / {props.weatherList.main.temp_min}&deg;c
      </p>
      <p>
        {props.weatherList.weather[0].description}
      </p>
    </div>
  )

}

export default WeatherCard