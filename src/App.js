import React, { Component } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard'
import Header from './components/Header'

const config = {
  API: "http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&cnt=5&APPID=",
  API_KEY: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      error: null,
      weatherdata: {},
      isLoaded: false
    }

    this.getWeatherCards = this.getWeatherCards.bind(this)
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

  getWeatherCards() {
    let cards = []
    
    for (let i = 0; i < this.state.weatherdata.cnt; i++) {
      cards.push(
        <WeatherCard 
          key={i} 
          weatherList={this.state.weatherdata.list[i]} 
        />
      )
    }
    
    return cards
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isLoaded && (
            <Header 
              cityName={this.state.weatherdata.city.name} 
              countryName={this.state.weatherdata.city.country} 
            />
          )
        }
        <div className="weather-cards">
          {this.state.isLoaded && this.getWeatherCards()}
        </div>
      </div>
    )
  }
}

export default App;
