import React from 'react'

const SearchForm = (props) => {

  let handleChange = function(e) {
    props.handleChange(e)
  }

  let handleClick = function(e) {
    e.preventDefault()
    props.setQuery(e.target.attributes.query.value)
  }

  return (
    <div>
      <form className="search-form">
        <input 
          type="text" 
          id="queryString"
          name="queryString" 
          value={props.queryString}
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