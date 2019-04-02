import React, { Component } from 'react'
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

class DateTime extends Component {

  constructor(props) {
    super(props)
    this.state = {
      months: months,
      dateInMilliseconds: props.datetime * 1000
    }
    
    this.getDate = this.getDate.bind(this)
  }

  getDate() {
    return new Date(this.state.dateInMilliseconds)
  }
  
  getDay() {
    let date = this.getDate()
    let day = date.getDay()
    return days[day]
  }
  
  getMonth() {
    let date = this.getDate()
    let month = date.getMonth()
    return months[month]
  }

  getYear() {
    let date = this.getDate()
    return date.getFullYear()
  }

  render() {
    let dateString = this.getDay()+', ' + this.getMonth() + ', ' + this.getYear()
    return (
      <div>
        <h3>{dateString}</h3>
      </div>
    )
  }
}

export default DateTime