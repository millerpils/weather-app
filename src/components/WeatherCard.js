import React from 'react'


function WeatherCard(props) {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  let dateInMilliseconds = props.weatherList.dt * 1000

  function getDate() {
    return new Date(dateInMilliseconds)
  }

  function getYear() {
    let date = getDate()
    return date.getFullYear()
  }

  function getDay() {
    let date = getDate()
    let day = date.getDay()
    return day
  }

  function getMonth() {
    let date = getDate()
    let month = date.getMonth()
    return months[month]
  }

  return (
    <div className='card'>
      { getDay() }, { getMonth() }, { getYear() }
    </div>
  )

}

export default WeatherCard