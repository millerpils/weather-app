import React, { Component } from 'react';
import './css/App.css';
import WeatherCard from './components/WeatherCard'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import cityData from './json/city.list'

const config = {
  API: 'https://api.openweathermap.org/data/2.5/forecast',
  API_KEY: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
}

class App extends Component {

  constructor() {
    super()
    this.state = {
      error: '',
      status: '',
      queryString: 'Prague',
      queryID: '',
      queryType: 'q',
      cityData: cityData, 
      weatherData: {},
      isLoaded: false
    }
  }

  componentDidMount() {
    this.getWeatherData()
  }

  getWeatherData = () => {
    let URL
    URL = config.API + '?' + this.state.queryType + '='
    URL += this.state.queryType === 'q' ? this.state.queryString : this.state.queryID
    URL += '&units=metric&APPID=' + config.API_KEY

    fetch(URL)
      .then( result => result.json() )
      .then ( 
        (result) => {
          if ( result.cod === '200' ) {
            this.setState({ 
              weatherData: result,
              queryString: result.city.name,
              isLoaded: true,
              status: result.cod
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

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  getWeatherCards = () => {
    let cards = []
    for (let i = 0; i < this.state.weatherData.cnt; i++) {
      cards.push(
        <WeatherCard 
          key={i} 
          weatherList={this.state.weatherData.list[i]} 
        />
      )
    }
    return cards
  }

  setQuery = (queryVal) => {
    let randomCityID = ""

    if (queryVal === 'id') { 
      let randomID = Math.floor(Math.random() * this.state.cityData.length)
      randomCityID = this.state.cityData[randomID].id
    } 

    this.setState({
        queryType: queryVal,
        queryID: randomCityID
      }, () => this.getWeatherData()
    )
  }

  getlocationForm = () => {
    return(
      <SearchForm
        queryString={this.state.queryString}
        handleChange={this.handleChange}
        setQuery={this.setQuery}
      />
    )
  }

  render = () => {
    if (this.state.status !== '200') {
      return (
        <div className='App'>
          <Header 
            status={this.state.status}
            error={this.state.error}
          />
          {this.getlocationForm()}
        </div>
      )
    } else {
      return (
        <div className='App'>
          {
            this.state.isLoaded && (
              <Header 
                cityName={this.state.weatherData.city.name} 
                countryName={this.state.weatherData.city.country} 
                status={this.state.status}
                error={this.state.error}
              />
            )
          }
          {this.getlocationForm()}
          {
            this.state.isLoaded && (
              <div className='weather-cards'>
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
