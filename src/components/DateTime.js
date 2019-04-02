import React, { Component } from 'react'
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']

class DateTime extends Component {

  constructor(props) {
    super(props)
    this.state = {
      months: months,
      dateInMilliseconds: props.datetime * 1000
    }
  }


  getTheHours(date) {
    let hours = date.getHours()

    if ( hours < 13) {
      hours += ':00 am'
    } else {
      hours += ':00 pm'
    }
    return hours
  }
  
  getTheDay(date) {
    let day = date.getDay()
    return days[day]
  }
  
  getTheMonth(date) {
    let month = date.getMonth()
    return months[month]
  }

  getTheYear(date) {
    return date.getFullYear()
  }

  render() {
    let date = new Date(this.state.dateInMilliseconds)
    let dateString = this.getTheDay(date) + ' ' + this.getTheMonth(date) + ' ' + date.getDay() + ', ' + this.getTheYear(date)

    return (
      <div>
        <h3>{dateString}</h3>
        <p>{this.getTheHours(date)}</p>
      </div>
    )
  }
}

export default DateTime