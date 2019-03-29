import React, { Component } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard'

const config = {
  apiKey: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      weatherData: ""
    }
  }

  componentDidMount() {
    //fetch("http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&cnt=5&APPID="+)
    this.setState({ 
      weatherData: "DATA"
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.weatherData}  
        <WeatherCard data={this.state.weatherData} />
      </div>
    );
  }
}

export default App;
