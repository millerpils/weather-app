import React, { Component } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard'

const config = {
  API: "http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&cnt=5&APPID=",
  API_KEY: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      error: null,
      weatherdata: "",
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch(config.API + config.API_KEY)
      .then( result => result.json() )
      .then ( 
        (result) => {
          this.setState({ 
            weatherdata: result,
            isLoaded: true
          })
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error: error
        })
      }
    )
  }

  render() {
    return (
      <div className="App">
        <WeatherCard data={this.state.weatherdata} />
      </div>
    );
  }
}

export default App;
