import React from 'react'

function LocationForm(props) {

  let handleChange = function(event) {
    props.handleChange(event)
  }

  let handleClick = function(event) {
    event.preventDefault()
    props.getWeatherData()
  }

  return (
    <div className="location-form">
      <form>
        <input 
          type="text" 
          name="query" 
          value={props.query} 
          placeholder="Enter a location..."
          onChange={handleChange} 
        /> 
        <br />
        <input 
          type="submit" 
          onClick={handleClick}
        />
      </form>
    </div>
  )
}

export default LocationForm