import React from 'react'
import DateTime from './DateTime'

/** props = weatherList **/

const WeatherCard = (props) => {
  let classList = 'weather-cards__card weather-cards__card--' + props.weatherList.weather[0].main.toLowerCase()

  const getWeatherIcon = (description) => {
    let classList

    switch(description) {
      case "rain":
        classList = "fas fa-cloud-rain"
        break
      case "clouds":
        classList = "fas fa-cloud"
        break
      case "clear":
        classList = "fas fa-sun"
        break
      case "snow":
        classList = "fas fa-snowflake"
        break
      default:
        break
    }
    return classList
  }

  return (
    <div className={classList}>
      <DateTime datetime={props.weatherList.dt} />
      <ul>
        <li>
          {props.weatherList.main.temp_max}&deg;c / 
          {props.weatherList.main.temp_min}&deg;c
        </li>
        <li>
          {props.weatherList.weather[0].description}
        </li>
      </ul>
      <i 
        className={getWeatherIcon(props.weatherList.weather[0].main.toLowerCase())}
      >
      </i>
    </div>
  )
}

export default WeatherCard