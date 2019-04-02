import React, { Component } from 'react';
import './css/App.css';
import WeatherCard from './components/WeatherCard'
import Header from './components/Header'
import LocationForm from './components/LocationForm'



const config = {
  API: "http://api.openweathermap.org/data/2.5/forecast",
  API_KEY: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      error: "",
      status: "",
      query: "london,gb",
      weatherdata: {},
      isLoaded: false
    }

    this.getWeatherData()
  }

  getWeatherData = () => {
    let URL = config.API + '?q=' + this.state.query + '&units=metric&APPID=' + config.API_KEY

    fetch(URL)
      .then( result => result.json() )
      .then ( 
        (result) => {
          if ( result.cod === '200') {
            this.setState({ 
              status: result.cod,
              weatherdata: result,
              isLoaded: true
            })
          } else {
            this.setState({
              status: result.cod,
              error: result.message,
              isLoaded: false
            })
          }
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error: error
        })
      }
    )
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  getWeatherCards = () => {
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

  getlocationForm = () => {
    return(
      <LocationForm
        query={this.state.query} 
        handleChange={this.handleChange}
        getWeatherData={this.getWeatherData}
      />
    )
  }

  render = () => {
    if (this.state.status !== '200') {
      return (
        <div className="App">
          <Header 
            status={this.state.status}
            error={this.state.error}
          />
          {this.getlocationForm()}
        </div>
      )
    } else {
      return (
        <div className="App">
        {
            this.state.isLoaded && (
              <Header 
                cityName={this.state.weatherdata.city.name} 
                countryName={this.state.weatherdata.city.country} 
                status={this.state.status}
                error={this.state.error}
              />
            )
          }
          {this.getlocationForm()}
          {
            this.state.isLoaded && (
              <div className="weather-cards">
                {this.getWeatherCards()}
              </div>
            )
          }
        </div>
      )
    }
  }
}

export default App;
