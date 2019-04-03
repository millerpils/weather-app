import React from 'react'

const SearchForm = (props) => {

  let handleChange = function(e) {
    props.handleChange(e)
  }

  let handleClick = function(e) {
    e.preventDefault()
  
    props.setQueryType(e.target.attributes.query.value)

    if (e.target.attributes.query.value === 'id') { 
      props.setQueryID()
      props.getWeatherData()
    } 
    
    const el = document.getElementById('query')

    if ( el.value !== '' ) {
      props.getWeatherData()
    }
  }

  return (
    <div>
      <form className="search-form">
        <input 
          type="text" 
          id="query"
          name="query" 
          value={props.query}
          placeholder="Enter a location..."
          onChange={handleChange} 
        /> 
        <button 
          type="submit" 
          query="q" 
          onClick={handleClick}
        >
          Submit
        </button>
        <button 
          type="submit" 
          query="id" 
          onClick={handleClick}
        >
          I'm feeling lucky...
        </button>
      </form>
    </div>
  )
}

export default SearchForm