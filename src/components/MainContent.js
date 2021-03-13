import React, { Component } from 'react'
import WeatherConditionText from './WeatherConditionText'
import WeatherDataPrimary from './WeatherDataPrimary'
import Interval from './Interval'

class MainContent extends Component {
    render() {
        const current = this.props.data.current
        const weather = this.props.data.weather
        const city_display = this.props.data.city_display
        const humidity = this.props.data.humidity
        
        const degree = this.props.data.windDeg
        const dir = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]
        let wind = {speed : this.props.data.windSpd,
                    deg :   dir[Math.round((parseInt(degree) % 360)/22.5)+1]}
        
        const daily = this.props.data.daily
        const hourly = this.props.data.hourly
        
        const uvi = this.props.data.uvi
        return (
            <div>
                <WeatherConditionText weather = {weather} city={city_display}/>
                <WeatherDataPrimary weather = {weather} wind = {wind} humidity = {humidity} uvi = {uvi} current = {current}/>
                <Interval daily = {daily} hourly = {hourly}/>
            </div>
        )
    }
}

export default MainContent
