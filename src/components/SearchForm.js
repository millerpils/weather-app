import React from 'react'

const SearchForm = (props) => {

  let handleChange = function(e) {
    props.handleChange(e)
  }

  let handleClick = function(e) {
    e.preventDefault()

    if (e.target.attributes.query.value === 'id') {
      props.setQueryType(e.target.attributes.query.value)
      props.setQueryID()
    }
    
    props.getWeatherData()
  }

  return (
    <div>
      <form className="search-form">
        <input 
          type="text" 
          name="query" 
          value={props.queryLabel}
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