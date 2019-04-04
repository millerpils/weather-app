import React from 'react'
import DateTime from './DateTime'

/** props = weatherList **/

const WeatherCard = (props) => {
  let classList = 'weather-cards__card weather-cards__card--' + props.weatherList.weather[0].main.toLowerCase()

  const getWeatherIcon = (weatherString, timeOfDay) => {
    let classList

    switch(weatherString) {
      case "rain":
        classList = "fas fa-cloud-rain " + timeOfDay
        break
      case "clouds":
        classList = "fas fa-cloud " + timeOfDay
        break
      case "clear":
        classList = "fas fa-sun " + timeOfDay
        break
      case "snow":
        classList = "fas fa-snowflake " + timeOfDay
        break
      default:
        break
    }
    return classList
  }

  const getTimeofDay = (dateTime) => {
    let dateInMilliseconds = dateTime * 1000
    let date = new Date(dateInMilliseconds)
    let hours = date.getHours()

    if (hours < 6 || hours > 21) {
      return 'night'
    } else {
      return 'day'
    }
  }

  const getIcon = (dateTime) => {
    const timeOfDay = getTimeofDay(dateTime)
    const weatherString = props.weatherList.weather[0].main.toLowerCase()

    return (
      <i className={getWeatherIcon(weatherString, timeOfDay)}></i>
    )
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
      {getIcon(props.weatherList.dt)}
    </div>
  )
}

export default WeatherCard