import React, { Component } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard'
import Header from './components/Header'
import LocationForm from './components/LocationForm'

const config = {
  API: "http://api.openweathermap.org/data/2.5/forecast?",
  API_KEY: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      error: null,
      query: "london,gb",
      weatherdata: {},
      isLoaded: false
    }
  }

  componentDidMount() {

    let URL = config.API + 'q=' + this.state.query + '&units=metric&APPID=' + config.API_KEY

    fetch(URL)
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
        <LocationForm />
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
