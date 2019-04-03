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
      queryString: 'london',
      queryID: '',
      queryType: 'q',
      cityData: cityData, 
      weatherData: {},
      isLoaded: false
    }

    this.setQueryType = this.setQueryType.bind(this)
    this.setQueryID = this.setQueryID.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.getWeatherData()
  }

  getWeatherData = () => {
    let URL
    URL = config.API + '?' + this.state.queryType + '='
    URL += this.state.queryType === 'q' ? this.state.queryString : this.state.queryID
    URL += '&units=metric&APPID=' + config.API_KEY

    console.log(URL)

    fetch(URL)
      .then( result => result.json() )
      .then ( 
        (result) => {
          console.log(result)
          if ( result.cod === '200') {
            this.setState({ 
              weatherData: result,
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

  setQueryType = (queryType) => {
    this.setState({
      queryType: queryType
    })
  }

  setQueryID = () => {
    let randomID = Math.floor(Math.random() * this.state.cityData.length)
    let randomCityID = this.state.cityData[randomID].id

    this.setState({
      queryID: randomCityID
    })
  }

  getlocationForm = () => {
    return(
      <SearchForm
        queryString={this.state.queryString}
        handleChange={this.handleChange}
        setQueryType={this.setQueryType}
        setQueryID={this.setQueryID}
        getWeatherData={this.getWeatherData}
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
