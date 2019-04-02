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
    <div>
      <form className="location-form">
        <input 
          type="text" 
          name="query" 
          value={props.query} 
          placeholder="Enter a location..."
          onChange={handleChange} 
        /> 
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default LocationForm