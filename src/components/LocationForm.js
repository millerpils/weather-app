import React, { Component } from 'react'

class LocationForm extends Component {
  constructor() {
    super()

    this.state = {
      query: ""
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="location-form">
        <form>
          <input 
            type="text" 
            name="query" 
            value={this.state.query} 
            onChange={this.handleChange} 
          /> 
          <br />
          <input type="submit" name="submitButton" />
        </form>
      </div>
    )
  }
}

export default LocationForm